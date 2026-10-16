(function () {
  "use strict";

  const QUESTIONS = window.QUESTIONS || [];
  QUESTIONS.forEach((q) => { if (!q.rb) q.rb = "dav"; });
  const BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));

  const RULEBOOKS = [
    { key: "dav", label: "Nationales Regelwerk Klettern", sub: "DAV · 2027 · Deutsch", short: "DAV", lang: "de" },
    { key: "wc", label: "World Climbing Rules", sub: "Competition Rules & Event Regulations 2026 · English", short: "World Climbing", lang: "en" },
    { key: "wce", label: "World Climbing Europe", sub: "Youth Series & Youth Championship 2026 · English", short: "WC Europe", lang: "en" },
  ];
  const RB = Object.fromEntries(RULEBOOKS.map((r) => [r.key, r]));

  const DISCIPLINES = [
    { key: "lead", label: "Lead" },
    { key: "boulder", label: "Boulder" },
    { key: "speed", label: "Speed" },
    { key: "teamspeed", label: "Team Speed" },
    { key: "allgemein", label: "Allgemeine Regeln" },
  ];
  const DLABEL = Object.fromEntries(DISCIPLINES.map((d) => [d.key, d.label]));
  const LEVELS = { 1: "Grundlagen", 2: "Fortgeschritten", 3: "Experte" };

  // Texte im Fragebildschirm folgen der Sprache des Regelwerks
  const T = {
    de: {
      disc: DLABEL, levels: LEVELS, case: "Fallbeispiel", multi: "Mehrere Antworten richtig – wähle alle zutreffenden.",
      right: "Richtig!", partly: "Nicht ganz.", wrong: "Leider falsch.", ref: "Regelverweis",
      check: "Antwort prüfen", next: "Nächste Frage", results: "Auswertung", prev: "Zurück", fwd: "Weiter", submit: "Abgeben",
      keys: (n, exam) => `Tasten 1–${n} wählen · Enter ${exam ? "weiter" : "prüfen / weiter"}`,
    },
    en: {
      disc: { lead: "Lead", boulder: "Boulder", speed: "Speed", teamspeed: "Team Speed", allgemein: "General Rules" },
      levels: { 1: "Basic", 2: "Advanced", 3: "Expert" }, case: "Case study", multi: "More than one answer is correct – select all that apply.",
      right: "Correct!", partly: "Not quite.", wrong: "Incorrect.", ref: "Rule reference",
      check: "Check answer", next: "Next question", results: "Results", prev: "Back", fwd: "Next", submit: "Submit",
      keys: (n, exam) => `Keys 1–${n} to select · Enter to ${exam ? "continue" : "check / continue"}`,
    },
  };
  const langOf = (q) => RB[q.rb].lang;

  const app = document.getElementById("app");

  // ---------- Storage (nur im eigenen Browser) ----------
  const STORE_KEY = "rwq.v1";
  const PREF_KEY = "rwq.prefs.v1";
  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* privat / gesperrt */ }
  }
  let stats = load(STORE_KEY, { q: {}, history: [] });
  if (!stats.q) stats.q = {};
  if (!stats.history) stats.history = [];
  let prefs = load(PREF_KEY, {});
  function selRbs() {
    const v = (prefs.rbs || ["dav"]).filter((k) => RB[k]);
    return v.length ? v : ["dav"];
  }
  const inSel = (q) => selRbs().includes(q.rb);

  function record(id, correct) {
    const s = stats.q[id] || { c: 0, w: 0, last: null };
    if (correct) s.c++; else s.w++;
    s.last = correct ? 1 : 0;
    stats.q[id] = s;
    save(STORE_KEY, stats);
  }
  const isWeak = (id) => stats.q[id] && stats.q[id].last === 0;
  const weakIds = () => QUESTIONS.filter((q) => inSel(q) && isWeak(q.id)).map((q) => q.id);

  // ---------- Theme ----------
  const themeBtn = document.getElementById("themeBtn");
  function applyTheme() {
    if (prefs.theme) document.documentElement.setAttribute("data-theme", prefs.theme);
    else document.documentElement.removeAttribute("data-theme");
  }
  applyTheme();
  themeBtn.addEventListener("click", () => {
    const dark = prefs.theme
      ? prefs.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    prefs.theme = dark ? "light" : "dark";
    save(PREF_KEY, prefs);
    applyTheme();
  });
  document.getElementById("homeBtn").addEventListener("click", () => {
    if (session && !session.finished && !confirm("Laufendes Quiz abbrechen?")) return;
    stopTimer();
    session = null;
    renderHome();
  });

  // ---------- Helpers ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const countIn = (d) => QUESTIONS.filter((q) => inSel(q) && q.d === d).length;
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  function fmtTime(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }
  function focusMain() { app.focus({ preventScroll: true }); window.scrollTo({ top: 0 }); }
  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  // ---------- Session ----------
  let session = null;
  let timerHandle = null;
  function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }

  function buildItems(ids) {
    return ids.map((id) => {
      const q = BY_ID[id];
      const order = shuffle(q.o.map((_, i) => i));
      return { id, order, sel: [], checked: false, correct: null };
    });
  }

  function startSession(mode, ids, opts) {
    stopTimer();
    session = Object.assign({ mode, items: buildItems(ids), idx: 0, finished: false, startedAt: Date.now() }, opts || {});
    if (session.timeLimit) {
      session.deadline = Date.now() + session.timeLimit * 60 * 1000;
      timerHandle = setInterval(tick, 1000);
    }
    renderQuestion();
  }

  function tick() {
    if (!session || !session.deadline) return;
    const left = Math.max(0, Math.round((session.deadline - Date.now()) / 1000));
    const el = document.getElementById("timer");
    if (el) {
      el.textContent = fmtTime(left);
      el.classList.toggle("low", left <= 60);
    }
    if (left <= 0) {
      stopTimer();
      toast("Zeit abgelaufen");
      finish();
    }
  }

  const isMulti = (q) => q.a.length > 1;
  function evaluate(item) {
    const q = BY_ID[item.id];
    const sel = item.sel.slice().sort();
    const ans = q.a.slice().sort();
    return sel.length === ans.length && sel.every((v, i) => v === ans[i]);
  }

  // ---------- Home ----------
  function renderHome() {
    stopTimer();
    const rbs = selRbs();
    const total = QUESTIONS.filter(inSel).length;
    const weak = weakIds().length;
    const answered = Object.keys(stats.q).filter((id) => BY_ID[id]).length;

    const rbChips = RULEBOOKS.map((r) => `
      <label class="rb-card">
        <input type="checkbox" name="rb" value="${r.key}" ${rbs.includes(r.key) ? "checked" : ""}>
        <span class="rb-check" aria-hidden="true"></span>
        <span class="rb-text"><strong>${r.label}</strong><small>${r.sub}</small></span>
        <span class="cnt">${QUESTIONS.filter((q) => q.rb === r.key).length}</span>
      </label>`).join("");

    const rows = rbs.map((rk) => `${rbs.length > 1 ? `<h3 class="rb-head">${RB[rk].label}</h3>` : ""}` + DISCIPLINES.map((d) => {
      const qs = QUESTIONS.filter((q) => q.rb === rk && q.d === d.key);
      if (!qs.length) return "";
      const ok = qs.filter((q) => stats.q[q.id] && stats.q[q.id].last === 1).length;
      const bad = qs.filter((q) => isWeak(q.id)).length;
      return `
        <div class="prog-row d-${d.key}">
          <div class="label"><span class="dot"></span>${d.label}</div>
          <div class="nums">${ok} / ${qs.length} sicher${bad ? ` · ${bad} offen` : ""}</div>
          <div class="bar" role="img" aria-label="${d.label}: ${ok} von ${qs.length} richtig, ${bad} falsch">
            <i class="ok" style="width:${(ok / qs.length) * 100}%"></i><i class="bad" style="width:${(bad / qs.length) * 100}%"></i>
          </div>
        </div>`;
    }).join("")).join("");

    const last = stats.history.slice(-5).reverse().map((h) => `
      <li>${new Date(h.t).toLocaleDateString("de-DE")} · ${h.mode === "exam" ? "Prüfung" : h.mode === "review" ? "Wiederholung" : "Lernen"} · <b>${h.score}%</b> (${h.ok}/${h.n})${h.mode === "exam" ? (h.pass ? " ✓" : " ✗") : ""}</li>`).join("");

    app.innerHTML = `
      <section class="hero">
        <h1>Wie sattelfest bist du im Regelwerk?</h1>
        <p>Fragen und Fallbeispiele zu Lead, Boulder, Speed, Team Speed und den allgemeinen Regeln. Jede Antwort mit Erklärung und Regelverweis.</p>
      </section>

      <div class="section-title" style="margin-top:8px"><h2>1. Regelwerke wählen</h2><span class="small muted" aria-live="polite">${total} Fragen ausgewählt</span></div>
      <div class="rb-list" role="group" aria-label="Regelwerke">${rbChips}</div>

      <div class="section-title"><h2>2. Modus wählen</h2></div>
      <div class="modes">
        <button class="mode" data-mode="learn" type="button">
          <span class="icon" aria-hidden="true">✎</span>
          <strong>Lernen</strong>
          <span class="desc">Sofortige Auflösung nach jeder Frage, mit Erklärung und Regelstelle.</span>
        </button>
        <button class="mode" data-mode="exam" type="button">
          <span class="icon" aria-hidden="true">⏱</span>
          <strong>Prüfung</strong>
          <span class="desc">Fragen, Bereiche, Zeitlimit und Bestehensgrenze frei wählbar. Auswertung erst am Ende.</span>
        </button>
        <button class="mode" data-mode="review" type="button" ${weak ? "" : "disabled"}>
          <span class="icon" aria-hidden="true">↻</span>
          <strong>Schwächen wiederholen</strong>
          <span class="desc">${weak ? `${weak} zuletzt falsch beantwortete Frage${weak === 1 ? "" : "n"} gezielt üben.` : "Noch keine falsch beantworteten Fragen gespeichert."}</span>
        </button>
      </div>

      <div class="section-title">
        <h2>Dein Fortschritt</h2>
        ${answered ? `<button class="linkbtn small" id="resetBtn" type="button">Zurücksetzen</button>` : ""}
      </div>
      <div class="card">
        <div class="progress-list">${rows}</div>
        <div class="legend"><span><i style="background:var(--ok)"></i>zuletzt richtig</span><span><i style="background:var(--bad);opacity:.75"></i>zuletzt falsch</span><span>Gespeichert nur in diesem Browser.</span></div>
        ${last ? `<h3 style="margin-top:18px">Letzte Durchgänge</h3><ul class="small muted" style="margin:0;padding-left:18px">${last}</ul>` : ""}
      </div>
    `;

    app.querySelectorAll('input[name="rb"]').forEach((cb) => cb.addEventListener("change", () => {
      const chosen = [...app.querySelectorAll('input[name="rb"]:checked')].map((x) => x.value);
      if (!chosen.length) { cb.checked = true; toast("Mindestens ein Regelwerk auswählen"); return; }
      prefs.rbs = chosen;
      save(PREF_KEY, prefs);
      const y = window.scrollY;
      renderHome();
      window.scrollTo({ top: y });
      const again = app.querySelector(`input[name="rb"][value="${cb.value}"]`);
      if (again) again.focus({ preventScroll: true });
    }));
    app.querySelectorAll(".mode").forEach((b) => b.addEventListener("click", () => {
      const m = b.dataset.mode;
      if (m === "review") startReview();
      else renderSetup(m);
    }));
    const rb = document.getElementById("resetBtn");
    if (rb) rb.addEventListener("click", () => {
      if (!confirm("Gesamten Lernfortschritt in diesem Browser löschen?")) return;
      stats = { q: {}, history: [] };
      save(STORE_KEY, stats);
      renderHome();
    });
    focusMain();
  }

  // ---------- Setup ----------
  function renderSetup(mode) {
    const exam = mode === "exam";
    const p = Object.assign({
      discs: DISCIPLINES.map((d) => d.key),
      learnCount: "20",
      levels: ["1", "2", "3"],
      examCount: 30,
      examTime: "0",
      examPass: 80,
    }, prefs.setup || {});

    const chips = DISCIPLINES.filter((d) => countIn(d.key)).map((d) => `
      <label class="chip d-${d.key}">
        <input type="checkbox" name="disc" value="${d.key}" ${p.discs.includes(d.key) ? "checked" : ""}>
        <span class="dot"></span>${d.label}<span class="cnt">${countIn(d.key)}</span>
      </label>`).join("");
    const lvlChips = [1, 2, 3].map((l) => `
      <label class="chip plain"><input type="checkbox" name="lvl" value="${l}" ${p.levels.includes(String(l)) ? "checked" : ""}>${"●".repeat(l)}${"○".repeat(3 - l)} ${LEVELS[l]}</label>`).join("");
    const seg = (name, values, current, fmt) => `<div class="seg" role="radiogroup">${values.map((v) =>
      `<label><input type="radio" name="${name}" value="${v}" ${String(current) === String(v) ? "checked" : ""}>${fmt(v)}</label>`).join("")}</div>`;

    app.innerHTML = `
      <div class="section-title" style="margin-top:12px"><h1 style="margin:0">${exam ? "Prüfung einstellen" : "Lernmodus"}</h1></div>
      <p class="muted small" style="margin:-4px 0 12px">Regelwerk${selRbs().length > 1 ? "e" : ""}: ${selRbs().map((k) => RB[k].label).join(", ")} · <button class="linkbtn" type="button" id="changeRb">ändern</button></p>
      <form class="card stack" id="setupForm">
        <div class="field">
          <span class="flabel">Bereiche</span>
          <div class="chips">${chips}</div>
        </div>
        <div class="field">
          <span class="flabel">Schwierigkeit</span>
          <div class="chips">${lvlChips}</div>
        </div>
        ${exam ? `
          <div class="field">
            <label for="examCount">Anzahl Fragen</label>
            <div class="range-row"><input type="range" id="examCount" min="5" max="100" step="5" value="${p.examCount}"><output id="examCountOut">${p.examCount}</output></div>
          </div>
          <div class="field">
            <span class="flabel">Zeitlimit</span>
            ${seg("examTime", ["0", "10", "20", "30", "45", "60"], p.examTime, (v) => (v === "0" ? "ohne" : v + " min"))}
          </div>
          <div class="field">
            <label for="examPass">Bestehensgrenze</label>
            <div class="range-row"><input type="range" id="examPass" min="50" max="100" step="5" value="${p.examPass}"><output id="examPassOut">${p.examPass}%</output></div>
          </div>
          <p class="hint">Bei Mehrfachauswahl zählt eine Frage nur dann als richtig, wenn genau alle richtigen Antworten gewählt sind.</p>
        ` : `
          <div class="field">
            <span class="flabel">Anzahl Fragen</span>
            ${seg("learnCount", ["10", "20", "50", "all"], p.learnCount, (v) => (v === "all" ? "alle" : v))}
          </div>
          <label class="chip plain" style="align-self:flex-start"><input type="checkbox" name="unseen" ${p.unseen ? "checked" : ""}>Bisher unbeantwortete Fragen zuerst</label>
        `}
        <p class="hint" id="poolInfo" aria-live="polite"></p>
        <div class="actions">
          <button class="btn secondary" type="button" id="backBtn">Zurück</button>
          <button class="btn" type="submit" id="goBtn">${exam ? "Prüfung starten" : "Los geht's"}</button>
        </div>
      </form>
    `;

    const form = document.getElementById("setupForm");
    const read = () => {
      const fd = new FormData(form);
      return {
        discs: fd.getAll("disc"),
        levels: fd.getAll("lvl"),
        learnCount: fd.get("learnCount") || p.learnCount,
        unseen: fd.get("unseen") === "on",
        examCount: exam ? Number(form.querySelector("#examCount").value) : p.examCount,
        examTime: fd.get("examTime") || p.examTime,
        examPass: exam ? Number(form.querySelector("#examPass").value) : p.examPass,
      };
    };
    const pool = (s) => QUESTIONS.filter((q) => inSel(q) && s.discs.includes(q.d) && s.levels.includes(String(q.lvl)));
    const update = () => {
      const s = read();
      const n = pool(s).length;
      const want = exam ? s.examCount : s.learnCount === "all" ? n : Number(s.learnCount);
      document.getElementById("poolInfo").textContent = n
        ? `${n} Fragen verfügbar${want > n ? `, es werden alle ${n} gestellt` : ""}.`
        : "Bitte mindestens einen Bereich und eine Schwierigkeit wählen.";
      document.getElementById("goBtn").disabled = !n;
      if (exam) {
        document.getElementById("examCountOut").textContent = s.examCount;
        document.getElementById("examPassOut").textContent = s.examPass + "%";
      }
    };
    form.addEventListener("input", update);
    update();
    document.getElementById("backBtn").addEventListener("click", renderHome);
    document.getElementById("changeRb").addEventListener("click", renderHome);
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const s = read();
      prefs.setup = Object.assign({}, prefs.setup, s);
      save(PREF_KEY, prefs);
      let qs = shuffle(pool(s));
      if (!exam && s.unseen) {
        qs = qs.filter((q) => !stats.q[q.id]).concat(qs.filter((q) => stats.q[q.id]));
      }
      const n = exam ? s.examCount : s.learnCount === "all" ? qs.length : Number(s.learnCount);
      const ids = qs.slice(0, n).map((q) => q.id);
      if (exam) startSession("exam", ids, { timeLimit: Number(s.examTime), pass: s.examPass });
      else startSession("learn", ids);
    });
    focusMain();
  }

  function startReview(ids) {
    const list = shuffle(ids || weakIds());
    if (!list.length) { toast("Keine Fragen zum Wiederholen"); renderHome(); return; }
    startSession("review", list);
  }

  // ---------- Question ----------
  function renderQuestion() {
    const s = session;
    const item = s.items[s.idx];
    const q = BY_ID[item.id];
    const exam = s.mode === "exam";
    const multi = isMulti(q);
    const n = s.items.length;
    const L = T[langOf(q)];
    const answeredCount = s.items.filter((it) => (exam ? it.sel.length : it.checked)).length;

    const opts = item.order.map((oi, pos) => {
      const selected = item.sel.includes(oi);
      let cls = "opt" + (multi ? " multi" : "");
      let mark = "";
      if (item.checked && !exam) {
        const right = q.a.includes(oi);
        if (right && selected) { cls += " correct"; mark = "✓"; }
        else if (!right && selected) { cls += " wrong"; mark = "✕"; }
        else if (right) { cls += " missed"; mark = "✓"; }
      }
      return `<button type="button" class="${cls}" data-oi="${oi}" role="${multi ? "checkbox" : "radio"}" aria-checked="${selected}" ${item.checked && !exam ? "disabled" : ""}>
          <span class="mark" aria-hidden="true">${mark}</span>
          <span class="txt">${esc(q.o[oi])}</span>
          <span class="key" aria-hidden="true">${pos + 1}</span>
        </button>`;
    }).join("");

    let feedback = "";
    if (item.checked && !exam) {
      feedback = `
        <div class="feedback ${item.correct ? "ok" : "bad"}" role="status">
          <div class="verdict">${item.correct ? L.right : multi ? L.partly : L.wrong}</div>
          <p>${esc(q.e)}</p>
          <span class="ref">${L.ref}: <b>${esc(q.r)}</b></span>
        </div>`;
    }

    const modeLabel = exam ? "Prüfung" : s.mode === "review" ? "Wiederholung" : "Lernen";
    const last = s.idx === n - 1;
    let actions;
    if (exam) {
      actions = `
        <button class="btn secondary" type="button" id="prevBtn" ${s.idx === 0 ? "disabled" : ""}>${L.prev}</button>
        ${last ? `<button class="btn" type="button" id="finishBtn">${L.submit}</button>` : `<button class="btn" type="button" id="nextBtn">${L.fwd}</button>`}`;
    } else if (!item.checked) {
      actions = `<button class="btn" type="button" id="checkBtn" ${item.sel.length ? "" : "disabled"}>${L.check}</button>`;
    } else {
      actions = last
        ? `<button class="btn" type="button" id="finishBtn">${L.results}</button>`
        : `<button class="btn" type="button" id="nextBtn">${L.next}</button>`;
    }

    const dots = exam ? `<nav class="navdots" aria-label="Fragenübersicht">${s.items.map((it, i) =>
      `<button type="button" data-go="${i}" class="${it.sel.length ? "answered" : ""} ${i === s.idx ? "current" : ""}" aria-label="Frage ${i + 1}${it.sel.length ? ", beantwortet" : ""}">${i + 1}</button>`).join("")}</nav>` : "";

    app.innerHTML = `
      <div class="quizbar">
        <span class="count">${modeLabel} · ${s.idx + 1}/${n}</span>
        <div class="track" aria-hidden="true"><i style="width:${((exam ? answeredCount : s.idx + (item.checked ? 1 : 0)) / n) * 100}%"></i></div>
        ${s.deadline ? `<span class="timer" id="timer" aria-live="off">--:--</span>` : ""}
        <button class="ghost small" type="button" id="quitBtn" aria-label="Quiz beenden">✕</button>
      </div>
      <article class="card">
        <div class="tags">
          <span class="tag rb-tag">${RB[q.rb].short}</span>
          <span class="tag disc d-${q.d}"><span class="dot"></span>${L.disc[q.d]}</span>
          ${q.c ? `<span class="tag case">${L.case}</span>` : ""}
          <span class="tag" title="${L.levels[q.lvl]}"><span class="lvl">${"●".repeat(q.lvl)}${"○".repeat(3 - q.lvl)}</span> ${L.levels[q.lvl]}</span>
        </div>
        <h2 class="question" id="qtext" lang="${langOf(q)}">${esc(q.q)}</h2>
        ${multi ? `<div class="multi-hint">${L.multi}</div>` : ""}
        <div class="options" role="${multi ? "group" : "radiogroup"}" aria-labelledby="qtext" lang="${langOf(q)}">${opts}</div>
        ${feedback}
        <div class="actions">${actions}</div>
        ${dots}
        <div class="kbd-hint">${L.keys(q.o.length, exam)}</div>
      </article>
    `;

    app.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => toggle(Number(b.dataset.oi))));
    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener("click", fn); };
    on("checkBtn", check);
    on("nextBtn", next);
    on("prevBtn", prev);
    on("finishBtn", () => {
      if (exam) {
        const open = s.items.filter((it) => !it.sel.length).length;
        if (open && !confirm(`${open} Frage${open === 1 ? " ist" : "n sind"} noch unbeantwortet. Trotzdem abgeben?`)) return;
      }
      finish();
    });
    on("quitBtn", () => {
      if (!confirm("Quiz beenden? Bereits beantwortete Fragen werden ausgewertet.")) return;
      finish(true);
    });
    app.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => { s.idx = Number(b.dataset.go); renderQuestion(); }));
    if (s.deadline) tick();
  }

  function toggle(oi) {
    const s = session, item = s.items[s.idx], q = BY_ID[item.id];
    if (item.checked && s.mode !== "exam") return;
    if (isMulti(q)) {
      item.sel = item.sel.includes(oi) ? item.sel.filter((x) => x !== oi) : item.sel.concat(oi);
    } else {
      item.sel = [oi];
    }
    renderQuestion();
    const btn = app.querySelector(`.opt[data-oi="${oi}"]`);
    if (btn) btn.focus({ preventScroll: true });
  }

  function check() {
    const item = session.items[session.idx];
    if (!item.sel.length || item.checked) return;
    item.checked = true;
    item.correct = evaluate(item);
    record(item.id, item.correct);
    renderQuestion();
    const fb = app.querySelector(".feedback");
    if (fb) fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    const nb = document.getElementById("nextBtn") || document.getElementById("finishBtn");
    if (nb) nb.focus({ preventScroll: true });
  }

  function next() {
    if (session.idx < session.items.length - 1) { session.idx++; renderQuestion(); focusMain(); }
  }
  function prev() {
    if (session.idx > 0) { session.idx--; renderQuestion(); focusMain(); }
  }

  // ---------- Finish / Results ----------
  function finish(aborted) {
    const s = session;
    if (!s || s.finished) return;
    stopTimer();
    s.finished = true;
    if (s.mode === "exam") {
      s.items.forEach((it) => {
        it.correct = evaluate(it);
        if (it.sel.length) record(it.id, it.correct);
      });
    }
    // Im Lern-/Wiederholmodus zählen nur geprüfte Fragen.
    const scored = s.mode === "exam" ? s.items : s.items.filter((it) => it.checked);
    const ok = scored.filter((it) => it.correct).length;
    const score = pct(ok, scored.length);
    const pass = s.mode === "exam" ? score >= s.pass : null;
    if (scored.length) {
      stats.history.push({ t: Date.now(), mode: s.mode, n: scored.length, ok, score, pass });
      stats.history = stats.history.slice(-50);
      save(STORE_KEY, stats);
    }
    renderResults(scored, ok, score, pass, aborted);
  }

  function renderResults(scored, ok, score, pass, aborted) {
    const s = session;
    if (!scored.length) { renderHome(); return; }
    const wrong = scored.filter((it) => !it.correct);
    const usedRbs = RULEBOOKS.filter((r) => scored.some((it) => BY_ID[it.id].rb === r.key));
    const byD = usedRbs.map((r) => DISCIPLINES.map((d) => {
      const its = scored.filter((it) => BY_ID[it.id].d === d.key && BY_ID[it.id].rb === r.key);
      if (!its.length) return "";
      const k = its.filter((it) => it.correct).length;
      return `
        <div class="prog-row d-${d.key}">
          <div class="label"><span class="dot"></span>${usedRbs.length > 1 ? r.short + " · " : ""}${d.label}</div>
          <div class="nums">${k}/${its.length} · ${pct(k, its.length)}%</div>
          <div class="bar"><i class="ok" style="width:${pct(k, its.length)}%"></i><i class="bad" style="width:${100 - pct(k, its.length)}%"></i></div>
        </div>`;
    }).join("")).join("");

    const reviewList = wrong.map((it) => {
      const q = BY_ID[it.id];
      const ans = q.o.map((t, i) => {
        const c = q.a.includes(i), y = it.sel.includes(i);
        return `<li class="${c ? "c" : ""} ${y ? "y" : ""}">${c ? "✓ " : ""}${esc(t)}${y ? " <span class='muted small'>(deine Wahl)</span>" : ""}</li>`;
      }).join("");
      return `
        <details>
          <summary><span class="x" aria-hidden="true">✕</span><span lang="${langOf(q)}">${esc(q.q)}</span></summary>
          <ul class="ans" lang="${langOf(q)}">${ans}</ul>
          ${it.sel.length ? "" : `<p class="small muted">Nicht beantwortet.</p>`}
          <p class="small" lang="${langOf(q)}">${esc(q.e)}</p>
          <span class="ref">${T[langOf(q)].ref}: <b>${esc(q.r)}</b></span>
        </details>`;
    }).join("");

    const ringColor = pass === false ? "var(--bad)" : score >= 80 ? "var(--ok)" : "var(--accent)";
    const msg = pass === true ? "Bestanden" : pass === false ? "Nicht bestanden" : score >= 90 ? "Hervorragend!" : score >= 75 ? "Gut gemacht!" : score >= 50 ? "Solide Basis, da geht noch was." : "Dranbleiben, Wiederholen hilft!";
    const elapsed = Math.round((Date.now() - s.startedAt) / 1000);

    app.innerHTML = `
      <div class="section-title" style="margin-top:12px"><h1 style="margin:0">Auswertung</h1></div>
      <div class="card stack">
        <div class="score">
          <div class="ring" style="--p:${score};--ring:${ringColor}"><div>${score}%</div></div>
          <div>
            ${pass !== null ? `<span class="verdict-badge ${pass ? "pass" : "fail"}">${msg}</span>` : `<h2 style="margin-bottom:4px">${msg}</h2>`}
            <p style="margin:0"><b>${ok}</b> von <b>${scored.length}</b> Fragen richtig${pass !== null ? ` · Grenze ${s.pass}%` : ""}.</p>
            <p class="small muted" style="margin:0">Dauer ${fmtTime(elapsed)}${aborted ? " · vorzeitig beendet" : ""}${s.mode === "exam" && scored.length > s.items.filter((i) => i.sel.length).length ? ` · ${scored.length - s.items.filter((i) => i.sel.length).length} unbeantwortet` : ""}</p>
          </div>
        </div>
        <div>
          <h3>Nach Bereichen</h3>
          <div class="progress-list">${byD}</div>
        </div>
        <div class="actions">
          ${wrong.length ? `<button class="btn" type="button" id="retryWrong">Falsche wiederholen (${wrong.length})</button>` : ""}
          <button class="btn secondary" type="button" id="again">Neuer Durchgang</button>
          <button class="btn secondary" type="button" id="toHome">Startseite</button>
        </div>
      </div>
      ${wrong.length ? `
        <div class="section-title"><h2>Falsch beantwortet</h2><span class="small muted">zum Aufklappen tippen</span></div>
        <div class="review">${reviewList}</div>` : `<div class="empty card" style="margin-top:16px">Alles richtig, stark!</div>`}
    `;
    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener("click", fn); };
    on("retryWrong", () => startReview(wrong.map((it) => it.id)));
    on("again", () => (s.mode === "review" ? startReview() : renderSetup(s.mode)));
    on("toHome", () => { session = null; renderHome(); });
    focusMain();
  }

  // ---------- Keyboard ----------
  document.addEventListener("keydown", (ev) => {
    if (!session || session.finished) return;
    if (ev.target.closest && ev.target.closest("input, textarea, select")) return;
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    const item = session.items[session.idx];
    const exam = session.mode === "exam";
    if (/^[1-9]$/.test(ev.key)) {
      const pos = Number(ev.key) - 1;
      if (pos < item.order.length) { ev.preventDefault(); toggle(item.order[pos]); }
    } else if (ev.key === "Enter") {
      if (ev.target.closest && ev.target.closest("button") && !ev.target.closest(".opt")) return; // Button-Klick übernimmt
      ev.preventDefault();
      if (exam) {
        if (session.idx < session.items.length - 1) next();
      } else if (!item.checked) check();
      else if (session.idx < session.items.length - 1) next();
      else finish();
    } else if (exam && ev.key === "ArrowRight") next();
    else if (exam && ev.key === "ArrowLeft") prev();
  });

  window.addEventListener("beforeunload", (ev) => {
    if (session && !session.finished && session.items.some((it) => it.sel.length)) { ev.preventDefault(); ev.returnValue = ""; }
  });

  renderHome();
})();
