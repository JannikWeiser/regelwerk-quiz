(function () {
  "use strict";

  const QUESTIONS = window.QUESTIONS || [];
  QUESTIONS.forEach((q) => { if (!q.rb) q.rb = "dav"; });
  const BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));

  // ---------- Oberflächentexte (DE/EN) – die Fragen bleiben in der Sprache ihres Regelwerks ----------
  const I18N = {
    de: {
      htmlTitle: "Regelwerk-Quiz Klettern", brand: "Regelwerk-Quiz",
      metaDesc: "Lern- und Prüfungsquiz für Schiedsrichterinnen und Schiedsrichter im Klettern: Lead, Boulder, Speed, Team Speed und Allgemeine Regeln – nach DAV- und World-Climbing-Regelwerk.",
      homeAria: "Zur Startseite", themeAria: "Farbschema wechseln",
      footerNote: "Inoffizielles Lernquiz für Schiedsrichterinnen und Schiedsrichter. Verbindlich sind allein die jeweils veröffentlichten Regelwerke (DAV bzw. World Climbing).",
      footerLinks: '<a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a>',
      footerAbbrDav: "DAV: <b>AR</b> Allgemeine Regeln · <b>WB</b> Wettkampfbestimmungen · <b>TO</b> Technical Officials · <b>Anhang A–D</b> Lead, Speed, Boulder, Team Speed",
      disc: { lead: "Lead", boulder: "Boulder", speed: "Speed", teamspeed: "Team Speed", allgemein: "Allgemeine Regeln" },
      levels: { 1: "Grundlagen", 2: "Fortgeschritten", 3: "Experte" },
      rbSub: { dav: "DAV · 2027 · Fragen auf Deutsch", wc: "Competition Rules & Event Regulations 2026 · Fragen auf Englisch", wce: "Youth Series & Youth Championship 2026 · Fragen auf Englisch" },
      heroTitle: "Wie sattelfest bist du im Regelwerk?",
      heroText: "Fragen und Fallbeispiele zu Lead, Boulder, Speed, Team Speed und den allgemeinen Regeln. Jede Antwort mit Erklärung und Regelverweis.",
      step1: "1. Regelwerke wählen", step2: "2. Modus wählen",
      selected: (n) => `${n} Fragen ausgewählt`,
      rulebooksAria: "Regelwerke", minOneRb: "Mindestens ein Regelwerk auswählen",
      modeLearn: "Lernen", modeLearnDesc: "Sofortige Auflösung nach jeder Frage, mit Erklärung und Regelstelle.",
      modeExam: "Prüfung", modeExamDesc: "Fragen, Bereiche, Zeitlimit und Bestehensgrenze frei wählbar. Auswertung erst am Ende.",
      modeReview: "Schwächen wiederholen",
      reviewDesc: (n) => (n ? `${n} zuletzt falsch beantwortete Frage${n === 1 ? "" : "n"} gezielt üben.` : "Noch keine falsch beantworteten Fragen gespeichert."),
      progress: "Dein Fortschritt", reset: "Zurücksetzen",
      progNums: (ok, n, bad) => `${ok} / ${n} sicher${bad ? ` · ${bad} offen` : ""}`,
      progAria: (l, ok, n, bad) => `${l}: ${ok} von ${n} richtig, ${bad} falsch`,
      legendOk: "zuletzt richtig", legendBad: "zuletzt falsch", legendLocal: "Gespeichert nur in diesem Browser.",
      lastRuns: "Letzte Durchgänge",
      modeName: { learn: "Lernen", exam: "Prüfung", review: "Wiederholung" },
      resetConfirm: "Gesamten Lernfortschritt in diesem Browser löschen?",
      setupExam: "Prüfung einstellen", setupLearn: "Lernmodus",
      rbLine: (n) => (n > 1 ? "Regelwerke" : "Regelwerk"), change: "ändern",
      areas: "Bereiche", difficulty: "Schwierigkeit", count: "Anzahl Fragen", timeLimit: "Zeitlimit", noLimit: "ohne",
      passMark: "Bestehensgrenze", all: "alle", unseen: "Bisher unbeantwortete Fragen zuerst",
      multiNote: "Bei Mehrfachauswahl zählt eine Frage nur dann als richtig, wenn genau alle richtigen Antworten gewählt sind.",
      pool: (n, want) => `${n} Fragen verfügbar${want > n ? `, es werden alle ${n} gestellt` : ""}.`,
      poolEmpty: "Bitte mindestens einen Bereich und eine Schwierigkeit wählen.",
      back: "Zurück", startExam: "Prüfung starten", startLearn: "Los geht's",
      noReview: "Keine Fragen zum Wiederholen",
      caseStudy: "Fallbeispiel", multi: "Mehrere Antworten richtig – wähle alle zutreffenden.",
      right: "Richtig!", partly: "Nicht ganz.", wrong: "Leider falsch.", ref: "Regelverweis",
      check: "Antwort prüfen", next: "Nächste Frage", results: "Auswertung", prev: "Zurück", fwd: "Weiter", submit: "Abgeben",
      keys: (n, exam) => `Tasten 1–${n} wählen · Enter ${exam ? "weiter" : "prüfen / weiter"}`,
      navAria: "Fragenübersicht", qAria: (i, done) => `Frage ${i}${done ? ", beantwortet" : ""}`,
      quitAria: "Quiz beenden", quitConfirm: "Quiz beenden? Bereits beantwortete Fragen werden ausgewertet.",
      abortConfirm: "Laufendes Quiz abbrechen?",
      openConfirm: (n) => `${n} Frage${n === 1 ? " ist" : "n sind"} noch unbeantwortet. Trotzdem abgeben?`,
      timeUp: "Zeit abgelaufen",
      passed: "Bestanden", failed: "Nicht bestanden",
      msg: (s) => (s >= 90 ? "Hervorragend!" : s >= 75 ? "Gut gemacht!" : s >= 50 ? "Solide Basis, da geht noch was." : "Dranbleiben, Wiederholen hilft!"),
      scoreLine: (ok, n) => `<b>${ok}</b> von <b>${n}</b> Fragen richtig`, limit: (p) => ` · Grenze ${p}%`,
      duration: "Dauer", aborted: "vorzeitig beendet", unanswered: (n) => `${n} unbeantwortet`,
      byArea: "Nach Bereichen", retryWrong: (n) => `Falsche wiederholen (${n})`, again: "Neuer Durchgang", home: "Startseite",
      wrongList: "Falsch beantwortet", tapHint: "zum Aufklappen tippen", yourChoice: "deine Wahl", notAnswered: "Nicht beantwortet.",
      allRight: "Alles richtig, stark!",
      locale: "de-DE",
    },
    en: {
      htmlTitle: "Climbing Rules Quiz", brand: "Rules Quiz",
      metaDesc: "Learning and exam quiz for climbing competition judges: lead, boulder, speed, team speed and general rules – based on the DAV and World Climbing rulebooks.",
      homeAria: "Go to start page", themeAria: "Toggle colour scheme",
      footerNote: "Unofficial learning quiz for judges. Only the officially published rulebooks (DAV or World Climbing) are binding.",
      footerLinks: '<a href="impressum.html" hreflang="de">Legal notice (German)</a> · <a href="datenschutz.html" hreflang="de">Privacy policy (German)</a>',
      footerAbbrDav: "DAV: <b>AR</b> General Rules · <b>WB</b> Competition Provisions · <b>TO</b> Technical Officials · <b>Anhang A–D</b> Lead, Speed, Boulder, Team Speed",
      disc: { lead: "Lead", boulder: "Boulder", speed: "Speed", teamspeed: "Team Speed", allgemein: "General Rules" },
      levels: { 1: "Basic", 2: "Advanced", 3: "Expert" },
      rbSub: { dav: "German Alpine Club · 2027 · questions in German", wc: "Competition Rules & Event Regulations 2026 · questions in English", wce: "Youth Series & Youth Championship 2026 · questions in English" },
      heroTitle: "How well do you know the rules?",
      heroText: "Questions and case studies on lead, boulder, speed, team speed and the general rules. Every answer comes with an explanation and a rule reference.",
      step1: "1. Choose rulebooks", step2: "2. Choose a mode",
      selected: (n) => `${n} questions selected`,
      rulebooksAria: "Rulebooks", minOneRb: "Select at least one rulebook",
      modeLearn: "Learn", modeLearnDesc: "Instant feedback after every question, with explanation and rule reference.",
      modeExam: "Exam", modeExamDesc: "Choose questions, areas, time limit and pass mark. Results at the end.",
      modeReview: "Practise weak spots",
      reviewDesc: (n) => (n ? `Practise ${n} question${n === 1 ? "" : "s"} you last answered incorrectly.` : "No incorrectly answered questions saved yet."),
      progress: "Your progress", reset: "Reset",
      progNums: (ok, n, bad) => `${ok} / ${n} mastered${bad ? ` · ${bad} open` : ""}`,
      progAria: (l, ok, n, bad) => `${l}: ${ok} of ${n} correct, ${bad} incorrect`,
      legendOk: "last answered correctly", legendBad: "last answered incorrectly", legendLocal: "Stored in this browser only.",
      lastRuns: "Recent sessions",
      modeName: { learn: "Learn", exam: "Exam", review: "Review" },
      resetConfirm: "Delete all learning progress stored in this browser?",
      setupExam: "Set up exam", setupLearn: "Learning mode",
      rbLine: (n) => (n > 1 ? "Rulebooks" : "Rulebook"), change: "change",
      areas: "Areas", difficulty: "Difficulty", count: "Number of questions", timeLimit: "Time limit", noLimit: "none",
      passMark: "Pass mark", all: "all", unseen: "Unanswered questions first",
      multiNote: "Multiple-answer questions only count as correct if exactly all correct answers are selected.",
      pool: (n, want) => `${n} questions available${want > n ? `; all ${n} will be asked` : ""}.`,
      poolEmpty: "Please select at least one area and one difficulty level.",
      back: "Back", startExam: "Start exam", startLearn: "Let's go",
      noReview: "No questions to review",
      caseStudy: "Case study", multi: "More than one answer is correct – select all that apply.",
      right: "Correct!", partly: "Not quite.", wrong: "Incorrect.", ref: "Rule reference",
      check: "Check answer", next: "Next question", results: "Results", prev: "Back", fwd: "Next", submit: "Submit",
      keys: (n, exam) => `Keys 1–${n} to select · Enter to ${exam ? "continue" : "check / continue"}`,
      navAria: "Question overview", qAria: (i, done) => `Question ${i}${done ? ", answered" : ""}`,
      quitAria: "End quiz", quitConfirm: "End the quiz? Questions answered so far will be scored.",
      abortConfirm: "Abort the current quiz?",
      openConfirm: (n) => `${n} question${n === 1 ? " is" : "s are"} still unanswered. Submit anyway?`,
      timeUp: "Time is up",
      passed: "Passed", failed: "Not passed",
      msg: (s) => (s >= 90 ? "Outstanding!" : s >= 75 ? "Well done!" : s >= 50 ? "Solid basis – room to improve." : "Keep going – practice helps!"),
      scoreLine: (ok, n) => `<b>${ok}</b> of <b>${n}</b> questions correct`, limit: (p) => ` · pass mark ${p}%`,
      duration: "Duration", aborted: "ended early", unanswered: (n) => `${n} unanswered`,
      byArea: "By area", retryWrong: (n) => `Retry incorrect (${n})`, again: "New session", home: "Start page",
      wrongList: "Answered incorrectly", tapHint: "tap to expand", yourChoice: "your choice", notAnswered: "Not answered.",
      allRight: "All correct – great job!",
      locale: "en-GB",
    },
  };

  const RULEBOOKS = [
    { key: "dav", label: "Nationales Regelwerk Klettern", short: "DAV", lang: "de" },
    { key: "wc", label: "World Climbing Rules", short: "World Climbing", lang: "en" },
    { key: "wce", label: "World Climbing Europe", short: "WC Europe", lang: "en" },
  ];
  const RB = Object.fromEntries(RULEBOOKS.map((r) => [r.key, r]));
  const DISCIPLINES = ["lead", "boulder", "speed", "teamspeed", "allgemein"];
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

  // ---------- Sprache ----------
  function browserLang() {
    const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    return /^de\b/i.test(list[0] || "") ? "de" : "en";
  }
  let lang = I18N[prefs.lang] ? prefs.lang : browserLang();
  let t = I18N[lang];
  let rerender = () => renderHome();

  function applyLang() {
    t = I18N[lang];
    document.documentElement.lang = lang;
    document.title = t.htmlTitle;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t.metaDesc);
    document.getElementById("homeBtn").setAttribute("aria-label", t.homeAria);
    document.getElementById("themeBtn").setAttribute("aria-label", t.themeAria);
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t[el.dataset.i18n]; });
    document.querySelectorAll(".lang-switch [data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }
  document.querySelectorAll(".lang-switch [data-lang]").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    prefs.lang = lang;
    save(PREF_KEY, prefs);
    applyLang();
    const y = window.scrollY;
    rerender();
    window.scrollTo({ top: y });
    b.focus({ preventScroll: true });
  }));

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
    if (session && !session.finished && !confirm(t.abortConfirm)) return;
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
    const el = document.createElement("div");
    el.className = "toast"; el.setAttribute("role", "status"); el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }
  const lvlDots = (l) => `<span class="lvl">${"●".repeat(l)}${"○".repeat(3 - l)}</span>`;

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
      toast(t.timeUp);
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
    rerender = renderHome;
    stopTimer();
    const rbs = selRbs();
    const total = QUESTIONS.filter(inSel).length;
    const weak = weakIds().length;
    const answered = Object.keys(stats.q).filter((id) => BY_ID[id]).length;

    const rbChips = RULEBOOKS.map((r) => `
      <label class="rb-card">
        <input type="checkbox" name="rb" value="${r.key}" ${rbs.includes(r.key) ? "checked" : ""}>
        <span class="rb-check" aria-hidden="true"></span>
        <span class="rb-text"><strong lang="${r.lang}">${r.label}</strong><small>${t.rbSub[r.key]}</small></span>
        <span class="cnt">${QUESTIONS.filter((q) => q.rb === r.key).length}</span>
      </label>`).join("");

    const rows = rbs.map((rk) => `${rbs.length > 1 ? `<h3 class="rb-head" lang="${RB[rk].lang}">${RB[rk].label}</h3>` : ""}` + DISCIPLINES.map((d) => {
      const qs = QUESTIONS.filter((q) => q.rb === rk && q.d === d);
      if (!qs.length) return "";
      const ok = qs.filter((q) => stats.q[q.id] && stats.q[q.id].last === 1).length;
      const bad = qs.filter((q) => isWeak(q.id)).length;
      return `
        <div class="prog-row d-${d}">
          <div class="label"><span class="dot"></span>${t.disc[d]}</div>
          <div class="nums">${t.progNums(ok, qs.length, bad)}</div>
          <div class="bar" role="img" aria-label="${t.progAria(t.disc[d], ok, qs.length, bad)}">
            <i class="ok" style="width:${(ok / qs.length) * 100}%"></i><i class="bad" style="width:${(bad / qs.length) * 100}%"></i>
          </div>
        </div>`;
    }).join("")).join("");

    const last = stats.history.slice(-5).reverse().map((h) => `
      <li>${new Date(h.t).toLocaleDateString(t.locale)} · ${t.modeName[h.mode] || h.mode} · <b>${h.score}%</b> (${h.ok}/${h.n})${h.mode === "exam" ? (h.pass ? " ✓" : " ✗") : ""}</li>`).join("");

    app.innerHTML = `
      <section class="hero">
        <h1>${t.heroTitle}</h1>
        <p>${t.heroText}</p>
      </section>

      <div class="section-title" style="margin-top:8px"><h2>${t.step1}</h2><span class="small muted" aria-live="polite">${t.selected(total)}</span></div>
      <div class="rb-list" role="group" aria-label="${t.rulebooksAria}">${rbChips}</div>

      <div class="section-title"><h2>${t.step2}</h2></div>
      <div class="modes">
        <button class="mode" data-mode="learn" type="button">
          <span class="icon" aria-hidden="true">✎</span>
          <strong>${t.modeLearn}</strong>
          <span class="desc">${t.modeLearnDesc}</span>
        </button>
        <button class="mode" data-mode="exam" type="button">
          <span class="icon" aria-hidden="true">⏱</span>
          <strong>${t.modeExam}</strong>
          <span class="desc">${t.modeExamDesc}</span>
        </button>
        <button class="mode" data-mode="review" type="button" ${weak ? "" : "disabled"}>
          <span class="icon" aria-hidden="true">↻</span>
          <strong>${t.modeReview}</strong>
          <span class="desc">${t.reviewDesc(weak)}</span>
        </button>
      </div>

      <div class="section-title">
        <h2>${t.progress}</h2>
        ${answered ? `<button class="linkbtn small" id="resetBtn" type="button">${t.reset}</button>` : ""}
      </div>
      <div class="card">
        <div class="progress-list">${rows}</div>
        <div class="legend"><span><i style="background:var(--ok)"></i>${t.legendOk}</span><span><i style="background:var(--bad);opacity:.75"></i>${t.legendBad}</span><span>${t.legendLocal}</span></div>
        ${last ? `<h3 style="margin-top:18px">${t.lastRuns}</h3><ul class="small muted" style="margin:0;padding-left:18px">${last}</ul>` : ""}
      </div>
    `;

    app.querySelectorAll('input[name="rb"]').forEach((cb) => cb.addEventListener("change", () => {
      const chosen = [...app.querySelectorAll('input[name="rb"]:checked')].map((x) => x.value);
      if (!chosen.length) { cb.checked = true; toast(t.minOneRb); return; }
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
      if (!confirm(t.resetConfirm)) return;
      stats = { q: {}, history: [] };
      save(STORE_KEY, stats);
      renderHome();
    });
    focusMain();
  }

  // ---------- Setup ----------
  function renderSetup(mode, draft) {
    const exam = mode === "exam";
    const p = Object.assign({
      discs: DISCIPLINES.slice(),
      learnCount: "20",
      levels: ["1", "2", "3"],
      examCount: 30,
      examTime: "0",
      examPass: 80,
    }, prefs.setup || {}, draft || {});

    const chips = DISCIPLINES.filter((d) => countIn(d)).map((d) => `
      <label class="chip d-${d}">
        <input type="checkbox" name="disc" value="${d}" ${p.discs.includes(d) ? "checked" : ""}>
        <span class="dot"></span>${t.disc[d]}<span class="cnt">${countIn(d)}</span>
      </label>`).join("");
    const lvlChips = [1, 2, 3].map((l) => `
      <label class="chip plain"><input type="checkbox" name="lvl" value="${l}" ${p.levels.includes(String(l)) ? "checked" : ""}>${lvlDots(l)} ${t.levels[l]}</label>`).join("");
    const seg = (name, values, current, fmt) => `<div class="seg" role="radiogroup">${values.map((v) =>
      `<label><input type="radio" name="${name}" value="${v}" ${String(current) === String(v) ? "checked" : ""}>${fmt(v)}</label>`).join("")}</div>`;
    const rbs = selRbs();

    app.innerHTML = `
      <div class="section-title" style="margin-top:12px"><h1 style="margin:0">${exam ? t.setupExam : t.setupLearn}</h1></div>
      <p class="muted small" style="margin:-4px 0 12px">${t.rbLine(rbs.length)}: ${rbs.map((k) => `<span lang="${RB[k].lang}">${RB[k].label}</span>`).join(", ")} · <button class="linkbtn" type="button" id="changeRb">${t.change}</button></p>
      <form class="card stack" id="setupForm">
        <div class="field">
          <span class="flabel">${t.areas}</span>
          <div class="chips">${chips}</div>
        </div>
        <div class="field">
          <span class="flabel">${t.difficulty}</span>
          <div class="chips">${lvlChips}</div>
        </div>
        ${exam ? `
          <div class="field">
            <label for="examCount">${t.count}</label>
            <div class="range-row"><input type="range" id="examCount" min="5" max="100" step="5" value="${p.examCount}"><output id="examCountOut">${p.examCount}</output></div>
          </div>
          <div class="field">
            <span class="flabel">${t.timeLimit}</span>
            ${seg("examTime", ["0", "10", "20", "30", "45", "60"], p.examTime, (v) => (v === "0" ? t.noLimit : v + " min"))}
          </div>
          <div class="field">
            <label for="examPass">${t.passMark}</label>
            <div class="range-row"><input type="range" id="examPass" min="50" max="100" step="5" value="${p.examPass}"><output id="examPassOut">${p.examPass}%</output></div>
          </div>
          <p class="hint">${t.multiNote}</p>
        ` : `
          <div class="field">
            <span class="flabel">${t.count}</span>
            ${seg("learnCount", ["10", "20", "50", "all"], p.learnCount, (v) => (v === "all" ? t.all : v))}
          </div>
          <label class="chip plain" style="align-self:flex-start"><input type="checkbox" name="unseen" ${p.unseen ? "checked" : ""}>${t.unseen}</label>
        `}
        <p class="hint" id="poolInfo" aria-live="polite"></p>
        <div class="actions">
          <button class="btn secondary" type="button" id="backBtn">${t.back}</button>
          <button class="btn" type="submit" id="goBtn">${exam ? t.startExam : t.startLearn}</button>
        </div>
      </form>
    `;

    const form = document.getElementById("setupForm");
    function readForm() {
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
    }
    // Beim Sprachwechsel bleiben die bisherigen Eingaben erhalten.
    rerender = () => renderSetup(mode, readForm());
    const pool = (s) => QUESTIONS.filter((q) => inSel(q) && s.discs.includes(q.d) && s.levels.includes(String(q.lvl)));
    const update = () => {
      const s = readForm();
      const n = pool(s).length;
      const want = exam ? s.examCount : s.learnCount === "all" ? n : Number(s.learnCount);
      document.getElementById("poolInfo").textContent = n ? t.pool(n, want) : t.poolEmpty;
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
      const s = readForm();
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
    if (!draft) focusMain();
  }

  function startReview(ids) {
    const list = shuffle(ids || weakIds());
    if (!list.length) { toast(t.noReview); renderHome(); return; }
    startSession("review", list);
  }

  // ---------- Question ----------
  function renderQuestion() {
    rerender = renderQuestion;
    const s = session;
    const item = s.items[s.idx];
    const q = BY_ID[item.id];
    const ql = langOf(q);
    const exam = s.mode === "exam";
    const multi = isMulti(q);
    const n = s.items.length;
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
          <span class="txt" lang="${ql}">${esc(q.o[oi])}</span>
          <span class="key" aria-hidden="true">${pos + 1}</span>
        </button>`;
    }).join("");

    let feedback = "";
    if (item.checked && !exam) {
      feedback = `
        <div class="feedback ${item.correct ? "ok" : "bad"}" role="status">
          <div class="verdict">${item.correct ? t.right : multi ? t.partly : t.wrong}</div>
          <p lang="${ql}">${esc(q.e)}</p>
          <span class="ref">${t.ref}: <b lang="${ql}">${esc(q.r)}</b></span>
        </div>`;
    }

    const last = s.idx === n - 1;
    let actions;
    if (exam) {
      actions = `
        <button class="btn secondary" type="button" id="prevBtn" ${s.idx === 0 ? "disabled" : ""}>${t.prev}</button>
        ${last ? `<button class="btn" type="button" id="finishBtn">${t.submit}</button>` : `<button class="btn" type="button" id="nextBtn">${t.fwd}</button>`}`;
    } else if (!item.checked) {
      actions = `<button class="btn" type="button" id="checkBtn" ${item.sel.length ? "" : "disabled"}>${t.check}</button>`;
    } else {
      actions = last
        ? `<button class="btn" type="button" id="finishBtn">${t.results}</button>`
        : `<button class="btn" type="button" id="nextBtn">${t.next}</button>`;
    }

    const dots = exam ? `<nav class="navdots" aria-label="${t.navAria}">${s.items.map((it, i) =>
      `<button type="button" data-go="${i}" class="${it.sel.length ? "answered" : ""} ${i === s.idx ? "current" : ""}" aria-label="${t.qAria(i + 1, it.sel.length)}">${i + 1}</button>`).join("")}</nav>` : "";

    app.innerHTML = `
      <div class="quizbar">
        <span class="count">${t.modeName[s.mode]} · ${s.idx + 1}/${n}</span>
        <div class="track" aria-hidden="true"><i style="width:${((exam ? answeredCount : s.idx + (item.checked ? 1 : 0)) / n) * 100}%"></i></div>
        ${s.deadline ? `<span class="timer" id="timer" aria-live="off">--:--</span>` : ""}
        <button class="ghost small" type="button" id="quitBtn" aria-label="${t.quitAria}">✕</button>
      </div>
      <article class="card">
        <div class="tags">
          <span class="tag rb-tag">${RB[q.rb].short}</span>
          <span class="tag disc d-${q.d}"><span class="dot"></span>${t.disc[q.d]}</span>
          ${q.c ? `<span class="tag case">${t.caseStudy}</span>` : ""}
          <span class="tag" title="${t.levels[q.lvl]}">${lvlDots(q.lvl)} ${t.levels[q.lvl]}</span>
        </div>
        <h2 class="question" id="qtext" lang="${ql}">${esc(q.q)}</h2>
        ${multi ? `<div class="multi-hint">${t.multi}</div>` : ""}
        <div class="options" role="${multi ? "group" : "radiogroup"}" aria-labelledby="qtext">${opts}</div>
        ${feedback}
        <div class="actions">${actions}</div>
        ${dots}
        <div class="kbd-hint">${t.keys(q.o.length, exam)}</div>
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
        if (open && !confirm(t.openConfirm(open))) return;
      }
      finish();
    });
    on("quitBtn", () => {
      if (!confirm(t.quitConfirm)) return;
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
    s.result = { scored, ok, score, pass, aborted, elapsed: Math.round((Date.now() - s.startedAt) / 1000) };
    renderResults();
  }

  function renderResults() {
    rerender = renderResults;
    const s = session;
    const { scored, ok, score, pass, aborted, elapsed } = s.result;
    if (!scored.length) { renderHome(); return; }
    const wrong = scored.filter((it) => !it.correct);
    const usedRbs = RULEBOOKS.filter((r) => scored.some((it) => BY_ID[it.id].rb === r.key));
    const byD = usedRbs.map((r) => DISCIPLINES.map((d) => {
      const its = scored.filter((it) => BY_ID[it.id].d === d && BY_ID[it.id].rb === r.key);
      if (!its.length) return "";
      const k = its.filter((it) => it.correct).length;
      return `
        <div class="prog-row d-${d}">
          <div class="label"><span class="dot"></span>${usedRbs.length > 1 ? r.short + " · " : ""}${t.disc[d]}</div>
          <div class="nums">${k}/${its.length} · ${pct(k, its.length)}%</div>
          <div class="bar"><i class="ok" style="width:${pct(k, its.length)}%"></i><i class="bad" style="width:${100 - pct(k, its.length)}%"></i></div>
        </div>`;
    }).join("")).join("");

    const reviewList = wrong.map((it) => {
      const q = BY_ID[it.id];
      const ql = langOf(q);
      const ans = q.o.map((txt, i) => {
        const c = q.a.includes(i), y = it.sel.includes(i);
        return `<li class="${c ? "c" : ""} ${y ? "y" : ""}">${c ? "✓ " : ""}<span lang="${ql}">${esc(txt)}</span>${y ? ` <span class='muted small'>(${t.yourChoice})</span>` : ""}</li>`;
      }).join("");
      return `
        <details>
          <summary><span class="x" aria-hidden="true">✕</span><span lang="${ql}">${esc(q.q)}</span></summary>
          <ul class="ans">${ans}</ul>
          ${it.sel.length ? "" : `<p class="small muted">${t.notAnswered}</p>`}
          <p class="small" lang="${ql}">${esc(q.e)}</p>
          <span class="ref">${t.ref}: <b lang="${ql}">${esc(q.r)}</b></span>
        </details>`;
    }).join("");

    const ringColor = pass === false ? "var(--bad)" : score >= 80 ? "var(--ok)" : "var(--accent)";
    const msg = pass === true ? t.passed : pass === false ? t.failed : t.msg(score);
    const unanswered = s.mode === "exam" ? s.items.filter((i) => !i.sel.length).length : 0;

    app.innerHTML = `
      <div class="section-title" style="margin-top:12px"><h1 style="margin:0">${t.results}</h1></div>
      <div class="card stack">
        <div class="score">
          <div class="ring" style="--p:${score};--ring:${ringColor}"><div>${score}%</div></div>
          <div>
            ${pass !== null ? `<span class="verdict-badge ${pass ? "pass" : "fail"}">${msg}</span>` : `<h2 style="margin-bottom:4px">${msg}</h2>`}
            <p style="margin:0">${t.scoreLine(ok, scored.length)}${pass !== null ? t.limit(s.pass) : ""}.</p>
            <p class="small muted" style="margin:0">${t.duration} ${fmtTime(elapsed)}${aborted ? " · " + t.aborted : ""}${unanswered ? " · " + t.unanswered(unanswered) : ""}</p>
          </div>
        </div>
        <div>
          <h3>${t.byArea}</h3>
          <div class="progress-list">${byD}</div>
        </div>
        <div class="actions">
          ${wrong.length ? `<button class="btn" type="button" id="retryWrong">${t.retryWrong(wrong.length)}</button>` : ""}
          <button class="btn secondary" type="button" id="again">${t.again}</button>
          <button class="btn secondary" type="button" id="toHome">${t.home}</button>
        </div>
      </div>
      ${wrong.length ? `
        <div class="section-title"><h2>${t.wrongList}</h2><span class="small muted">${t.tapHint}</span></div>
        <div class="review">${reviewList}</div>` : `<div class="empty card" style="margin-top:16px">${t.allRight}</div>`}
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

  applyLang();
  renderHome();
})();
