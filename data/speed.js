// Fragen Individual Speed – Grundlage: Allgemeine Regeln (AR), Anhang B, Wettkampfbestimmungen (WB)
(function () {
  const D = "speed";
  const add = (q) => window.QUESTIONS.push(Object.assign({ d: D }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "S01", k: [0, 0, 0], q: "Wann gilt ein Speed-Versuch als gestartet?",
    o: ["Mit dem Startsignal oder wenn die Kraft auf das Start-Pad unter den Schwellenwert fällt, je nachdem, was zuerst eintritt", "Erst wenn der Wettkämpfer nach dem Startsignal den ersten Griff loslässt und sich nach oben bewegt", "Mit dem Kommando „Ready“, weil ab dann jede Bewegung als Start gewertet wird", "Mit dem Kommando „At your marks“, sobald beide Hände an den Startgriffen sind"],
    a: [0], e: "Der Versuch startet mit dem Startsignal oder mit dem Entlasten des Start-Pads unter den Schwellenwert, je nachdem, was zuerst passiert.", r: "AR §7.2" });

  add({ id: "S02", k: [0, 0, 0], q: "Ab welcher Reaktionszeit ist ein Start ein Fehlstart?",
    o: ["Bei weniger als 0,100 Sekunden", "Bei weniger als 0,150 Sekunden", "Bei 0,100 Sekunden oder weniger", "Bei weniger als 0,050 Sekunden"],
    a: [0], e: "Ein Start ist ungültig, wenn die gemessene Reaktionszeit unter 0,100 Sekunden liegt. Genau 0,100 Sekunden ist also noch gültig.", r: "AR §7.3" });

  add({ id: "S03", k: [0, 1, 0], c: true, q: "Welche der folgenden Reaktionszeiten ergibt einen Fehlstart?",
    o: ["0,099 Sekunden", "0,100 Sekunden", "0,101 Sekunden", "0,130 Sekunden"],
    a: [0], e: "Nur Reaktionszeiten unter 0,100 Sekunden sind Fehlstarts. 0,100 Sekunden ist gültig.", r: "AR §7.3" });

  add({ id: "S04", k: [0, 0, 0], q: "Wann ist ein Speed-Versuch erfolgreich?",
    o: ["Wenn der Wettkämpfer die Zeitmessung durch Anschlagen mit der Hand auf das Ziel-Pad anhält", "Wenn der Wettkämpfer den obersten Griff berührt", "Wenn der Wettkämpfer mit einem beliebigen Körperteil das Ziel-Pad berührt", "Wenn der Wettkämpfer die Wand-Oberkante erreicht"],
    a: [0], e: "Erfolgreich ist der Versuch, wenn der Wettkämpfer die Zeitmessung mit einem Handschlag auf das Ziel-Pad stoppt.", r: "AR §8.4" });

  add({ id: "S05", k: [1, 1, 0], c: true, q: "Ein Athlet rutscht im Mittelteil mit einem Fuß ab, verliert aber nicht mit beiden Händen den Kontakt und klettert sofort weiter. Wie ist das zu werten?",
    o: ["Kein Sturz: Wer nach einem Rutscher die Kontrolle zurückgewinnt, darf weiterklettern", "Sturz: Jedes Abrutschen eines Fußes beendet den Versuch", "Kein Sturz, aber der Versuch wird automatisch wiederholt", "Kein Sturz, aber er bekommt eine Zeitstrafe auf seine Zeit"],
    a: [0], e: "Ein Sturz liegt vor, wenn beide Hände den Kontakt verlieren und der Wettkämpfer sich ohne Autobelay nicht abfangen kann, oder wenn er das Ziel-Pad anschlägt, ohne die Zeit zu stoppen. Wer nach einem Rutscher wieder Kontrolle hat, darf weiterklettern.", r: "AR §8.1 (Anmerkung zu B)" });

  add({ id: "S06", k: [2, 1, 1], c: true, q: "Eine Athletin schlägt oben auf das Ziel-Pad, die Zeitmessung stoppt aber nicht (anerkanntes Zeitmesssystem). Wie wird gewertet?",
    o: ["Als Sturz; ein Einspruch ist nicht möglich, nur ein Antrag auf einen Technical Incident", "Als gültige Zeit, die per Video ermittelt wird; ein Einspruch ist möglich", "Es gibt automatisch einen Re-Run, ohne dass ein Antrag nötig ist", "Als Fehlstart; ein Einspruch ist innerhalb von 5 Minuten möglich"],
    a: [0], e: "Wer am Ziel-Pad anschlägt, ohne die Zeitmessung zu stoppen, hat einen Sturz. Bei einem vom DAV anerkannten Zeitmesssystem ist dagegen kein Einspruch möglich. Beschwerden über das System laufen nur als Antrag auf einen Technical Incident.", r: "AR §8.1 (Anmerkung); Anhang B §10.1" });

  add({ id: "S07", k: [0, 0, 0], q: "Wie viele Runden hat ein Individual-Speed-Wettkampf?",
    o: ["2 Runden: Qualifikation und Finalrunde (K.-o.-System)", "3 Runden: Qualifikation, Halbfinale, Finale", "1 Runde", "4 Runden"],
    a: [0], e: "Individual Speed wird in 2 Runden ausgetragen: Qualifikation und Finalrunde im Wettkampfbaum.", r: "Anhang B §2.1" });

  add({ id: "S08", k: [0, 1, 0], c: true, q: "In der Speed-Qualifikation haben 15 Wettkämpfer ein gültiges Ergebnis. Wie groß ist die Finalquote?",
    o: ["8", "16", "4", "15"],
    a: [0], e: "4–7 Wettkämpfer ergeben eine Quote von 4, 8–15 eine Quote von 8, ab 16 eine Quote von 16 (nur bei Speed 4 ab 32 eine Quote von 32).", r: "Anhang B §2.3" });

  add({ id: "S09", k: [1, 2, 1], c: true, q: "17 Athleten starten in der Speed-2-Qualifikation. Einer ist DNS, einer wird disqualifiziert (DSQ). Wie groß ist die Finalquote?",
    o: ["8", "16", "4", "17"],
    a: [0], e: "Mitgezählt werden nur Wettkämpfer mit gültigem Ergebnis. Wer eine Invalid Result Mark (DNS, DSQ, DQB) hat, zählt nicht. 15 Wettkämpfer ergeben die Quote 8.", r: "Anhang B §2.3 mit Anmerkung" });

  add({ id: "S10", k: [0, 1, 2], c: true, q: "Bei einem Speed-4-Wettkampf haben 35 Wettkämpfer ein gültiges Qualifikationsergebnis. Wie groß ist die Finalquote?",
    o: ["32", "16", "35", "8"],
    a: [0], e: "Nur bei Speed 4 gilt: Ab 32 Wettkämpfern beträgt die Quote 32.", r: "Anhang B §2.3(D)" });

  add({ id: "S11", k: [0, 0, 0], q: "Wie viele Versuche hat ein Wettkämpfer in der Speed-Qualifikation?",
    o: ["Je 1 Versuch auf jeder Lane", "Nur 1 Versuch insgesamt", "3 Versuche, der beste zählt", "Unbegrenzt innerhalb von 5 Minuten"],
    a: [0], e: "In der Qualifikation hat jeder Wettkämpfer je 1 Versuch auf jeder Lane, in zufällig-versetzter Reihenfolge.", r: "Anhang B §2.2" });

  add({ id: "S12", k: [1, 1, 0], c: true, q: "Speed-2-Qualifikation mit 16 Startern: Die Reihenfolge auf Bahn A ist ausgelost. Wer startet auf Bahn B als Erster?",
    o: ["Der Wettkämpfer, der auf Bahn A als 9. startet", "Der Wettkämpfer, der auf Bahn A als 8. startet", "Der Wettkämpfer, der auf Bahn A als 16. startet", "Der Wettkämpfer, der auf Bahn A als 2. startet"],
    a: [0], e: "Auf Bahn B wird um die halbe Starterzahl (abgerundet) versetzt. Bei 16 oder 17 Startern liegt der Versatz nach dem 8., also startet der 9. von Bahn A auf Bahn B als Erster.", r: "Anhang B §2.2 (Anmerkung Speed 2)" });

  add({ id: "S13", k: [1, 2, 2], c: true, q: "Speed-4-Qualifikation mit 16 Startern: Ein Athlet startet auf Bahn A als Erster. Auf welcher Position startet er auf den Bahnen B, C und D?",
    o: ["5. auf B, 9. auf C, 13. auf D", "2. auf B, 3. auf C, 4. auf D", "9. auf B, 1. auf C, 9. auf D", "4. auf B, 8. auf C, 12. auf D"],
    a: [0], e: "Bei Speed 4 wird jeweils um ein Viertel der Starterzahl versetzt (abgerundet), bei 16 Startern also um 4 Positionen: 5., 9., 13.", r: "Anhang B §2.2 (Anmerkung Speed 4)" });

  add({ id: "S14", k: [1, 0, 1], q: "Nach der Qualifikation überschreiten Gleichplatzierte die Finalquote. Was passiert?",
    o: ["Ein oder mehrere zusätzliche Races entscheiden; sie zählen nicht als Wertungsversuche, Rekorde sind nicht möglich", "Alle Gleichplatzierten kommen ins Finale; die Quote wird entsprechend erhöht", "Unter den Gleichplatzierten wird gelost; die Quote bleibt unverändert", "Die beste Reaktionszeit aus der Qualifikation entscheidet; die Quote bleibt unverändert"],
    a: [0], e: "Gleichstände an der Quotengrenze werden durch zusätzliche Races aufgelöst. Diese gelten nicht als Wertungsversuche, die Zeiten fließen nicht in die Official Results ein, und Rekorde sind nicht möglich.", r: "Anhang B §2.4 mit Anmerkungen" });

  add({ id: "S15", k: [1, 1, 2], c: true, q: "5 Athleten liegen bei einem Speed-2-Wettkampf an der Grenze zur Finalquote gleichauf. Wie wird entschieden?",
    o: ["Jeder klettert 1 Lauf auf Bahn A, die Besten rücken ins Finale nach", "Sie klettern Kopf-an-Kopf-Rennen jeweils zu zweit, die Sieger rücken nach", "Unter den Gleichplatzierten wird gelost, wer ins Finale nachrückt", "Die beste Reaktionszeit aus der Qualifikation entscheidet, wer nachrückt"],
    a: [0], e: "Bei 2 Gleichplatzierten (Speed 2) gibt es ein Kopf-an-Kopf-Rennen mit ausgelosten Bahnen. Bei mehr Gleichplatzierten klettert jeder 1 Lauf auf Bahn A (bei Speed 4 auf Bahn C).", r: "Anhang B §2.4 (Anmerkung)" });

  add({ id: "S16", k: [0, 0, 0], q: "Wie geht es im Speed-2-Finale nach der Halbfinal-Phase weiter?",
    o: ["Die Verlierer der Halbfinals klettern um Platz 3 und 4, die Sieger um Platz 1 und 2", "Die Verlierer der Halbfinals werden beide Dritte, die Sieger klettern um Platz 1 und 2", "Alle 4 Halbfinalisten klettern ein gemeinsames Finale um die Plätze 1 bis 4", "Die Sieger klettern um Platz 1 und 2, über Platz 3 entscheidet die Qualifikationszeit"],
    a: [0], e: "Nach der Halbfinal-Phase gibt es ein kleines Finale (Plätze 3/4) und ein großes Finale (Plätze 1/2).", r: "Anhang B §2.5" });

  add({ id: "S17", k: [0, 0, 1], q: "Wer kommt bei Speed 4 in einem Ausscheidungsrace weiter?",
    o: ["Die beiden Wettkämpfer mit den niedrigsten (oder einzigen) Kletterzeiten", "Nur der Wettkämpfer mit der niedrigsten (oder einzigen) Kletterzeit", "Die 3 Wettkämpfer mit den niedrigsten (oder einzigen) Kletterzeiten", "Die beiden Wettkämpfer mit den besten Reaktionszeiten"],
    a: [0], e: "Speed 4 ist ein modifizierter K.-o.-Modus: In jedem Race kommen die beiden Besten weiter.", r: "Anhang B §2.6, §6.4" });

  add({ id: "S18", k: [1, 0, 0], q: "Was passiert bei einem Fehlstart in der Speed-Qualifikation?",
    o: ["Das Race läuft ohne Abbruchsignal weiter und wird gewertet; der Fehlstart wird nur visuell angezeigt", "Das Race wird abgebrochen und mit beiden Athleten wiederholt; der Fehlstart wird nur visuell angezeigt", "Das Race läuft weiter, der Athlet mit Fehlstart wird aber disqualifiziert; angezeigt wird visuell und akustisch", "Das Race wird abgebrochen; der Fehlstart wird visuell und akustisch angezeigt"],
    a: [0], e: "In der Qualifikation läuft das Race weiter, der Fehlstart wird nur visuell angezeigt, ohne akustisches Signal.", r: "Anhang B §5.1(A) mit Anmerkung" });

  add({ id: "S19", k: [1, 0, 0], q: "Was passiert bei einem Fehlstart in der Speed-Finalrunde?",
    o: ["Der Starter bricht das Race ab; der Fehlstart wird visuell und akustisch angezeigt", "Das Race läuft weiter; der Fehlstart wird nur visuell angezeigt", "Der Starter bricht das Race ab; beide Athleten bekommen eine Verwarnung (Gelbe Karte)", "Das Race läuft weiter; der Athlet mit Fehlstart bekommt eine Zeitstrafe"],
    a: [0], e: "In der Finalrunde bricht der Starter das Race ab. Der Fehlstart wird optisch und akustisch angezeigt.", r: "Anhang B §5.1(B) mit Anmerkung" });

  add({ id: "S20", k: [1, 1, 2], c: true, q: "In der Qualifikation lässt die Zeitmessanlage ein Weiterlaufen nach einem Fehlstart technisch nicht zu, deshalb wird das Race abgebrochen. Was gilt für den Gegner ohne Fehlstart?",
    o: ["Er darf den abgebrochenen Versuch sofort wiederholen, vor dem nächsten planmäßigen Race", "Er bekommt ohne Wiederholung seine schnellste Zeit aus dem Training gewertet", "Er muss den Versuch am Ende der Runde nach allen planmäßigen Races wiederholen", "Er bekommt ebenfalls einen Fehlstart, weil das Race abgebrochen wurde"],
    a: [0], e: "Muss in der Qualifikation aus technischen Gründen abgebrochen werden, darf der Wettkämpfer ohne Fehlstart sofort wiederholen, vor dem nächsten planmäßigen Race.", r: "Anhang B §5.1 (Anmerkung zu A)" });

  add({ id: "S21", k: [0, 0, 0], q: "Wie kann das Ergebnis eines gewerteten Speed-Versuchs lauten?",
    o: ["Tatsächliche Kletterzeit", "Fehlstart", "Sturz", "Höchster erreichter Griff"],
    a: [0, 1, 2], e: "Mögliche Ergebnisse sind die Kletterzeit (bei Erfolg), ein Fehlstart oder ein Sturz (jedes andere Scheitern).", r: "Anhang B §6.1" });

  add({ id: "S22", k: [0, 1, 0], c: true, q: "Im Speed-2-Finale macht Athlet A einen Fehlstart, Athlet B stürzt im Race. Wer gewinnt?",
    o: ["Athlet B", "Athlet A", "Niemand, es gibt einen Re-Run", "Wer in der Qualifikation besser war"],
    a: [0], e: "Begeht ein Wettkämpfer einen Fehlstart (oder startet nicht), gewinnt der andere.", r: "Anhang B §6.2(A)" });

  add({ id: "S23", k: [0, 1, 1], c: true, q: "In einem Speed-2-Ausscheidungsrace stürzen beide Athleten. Was gilt?",
    o: ["Sofortiger Re-Run; ist auch der unentschieden, entscheiden die besten Ergebnisse nach §8.2", "Kein Re-Run; wer höher gekommen ist, gewinnt das Race", "Kein Re-Run; die bessere Qualifikationszeit entscheidet direkt", "Kein Re-Run; beide scheiden aus und es gibt keinen Sieger"],
    a: [0], e: "Bei Fehlstart beider, Sturz beider oder gleicher Zeit gibt es einen sofortigen Re-Run. Bleibt es unentschieden, wird nach den besten Ergebnissen gemäß §8.2 entschieden.", r: "Anhang B §6.3" });

  add({ id: "S24", k: [1, 1, 2], c: true, q: "Keiner der beiden Athleten eines Speed-2-Ausscheidungsrace tritt an. Wer kommt weiter?",
    o: ["Niemand, es gibt in diesem Race keinen Sieger", "Der in der Qualifikation besser Platzierte", "Wer weiterkommt, wird ausgelost", "Beide kommen in die nächste Phase"],
    a: [0], e: "Startet keiner der beiden, gibt es in diesem Race keinen Sieger.", r: "Anhang B §6.2 (Anmerkung)" });

  add({ id: "S25", k: [0, 0, 0], q: "Wie genau werden Speed-Zeiten gemessen, und wie werden die offiziellen Zeiten angegeben?",
    o: ["Gemessen auf 1/1000 Sekunde, offiziell auf 1/100 Sekunde abgerundet", "Gemessen und offiziell auf 1/1000 Sekunde", "Gemessen auf 1/100 Sekunde, offiziell auf 1/10 Sekunde gerundet", "Gemessen auf 1/1000 Sekunde, offiziell auf 1/100 Sekunde kaufmännisch gerundet"],
    a: [0], e: "Alle Zeiten werden auf 1/1000 Sekunde gemessen. Offizielle Zeiten, auch Rekorde, werden auf 1/100 Sekunde abgerundet. Die Tausendstel dürfen einen Gleichstand anzeigen, ersetzen aber nicht die offizielle Zeit.", r: "Anhang B §7.1–7.3" });

  add({ id: "S26", k: [0, 1, 0], c: true, q: "Gemessen werden 5,238 Sekunden. Wie lautet die offizielle Zeit?",
    o: ["5,23 Sekunden", "5,24 Sekunden", "5,238 Sekunden", "5,2 Sekunden"],
    a: [0], e: "Offizielle Zeiten werden auf die Hundertstel abgerundet: 5,238 Sekunden werden zu 5,23 Sekunden.", r: "Anhang B §7.2" });

  add({ id: "S27", k: [1, 2, 2], c: true, q: "Der Deutsche Rekord steht bei 4,79 Sekunden (gemessen 4,798 Sekunden). Eine Athletin klettert gemessene 4,795 Sekunden. Was gilt?",
    o: ["Sie stellt den Rekord ein, bricht ihn aber nicht", "Sie bricht den Rekord, weil 4,795 kleiner als 4,798 ist", "Sie bricht den Rekord mit offiziell 4,80 Sekunden", "Die Zeit zählt nicht, weil Rekorde nicht eingestellt werden können"],
    a: [0], e: "4,795 Sekunden ergibt abgerundet 4,79 Sekunden und entspricht damit dem Rekord. Brechen würde ihn erst eine Zeit von 4,789 Sekunden oder besser.", r: "Anhang B §7.3 (Anmerkung)" });

  add({ id: "S28", k: [0, 0, 0], q: "Nach welcher Hierarchie werden Ergebnisse im Speed-Ranking verglichen?",
    o: ["Gültige Zeit (aufsteigend), Sturz, Fehlstart, Nicht gestartet", "Gültige Zeit, Fehlstart, Sturz, Nicht gestartet", "Sturz, gültige Zeit, Fehlstart, Nicht gestartet", "Gültige Zeit, Nicht gestartet, Sturz, Fehlstart"],
    a: [0], e: "Die Reihenfolge ist: gültige Zeit (aufsteigend), dann Sturz, dann Fehlstart, dann Nicht gestartet.", r: "Anhang B §8.2" });

  add({ id: "S29", k: [0, 2, 0], c: true, q: "Qualifikation: Athlet A hat 6,12 Sekunden und einen Sturz, Athlet B hat 6,12 Sekunden und 7,01 Sekunden. Wer ist besser platziert?",
    o: ["Athlet B, weil beim nächstbesten Ergebnis eine gültige Zeit vor einem Sturz liegt", "Athlet A, weil ein Sturz beim nächstbesten Ergebnis nicht gewertet wird", "Beide sind gleichplatziert, weil nur das beste Ergebnis zählt", "Wer die bessere Reaktionszeit hatte, weil die Zeiten gleich sind"],
    a: [0], e: "Bei gleichem Bestergebnis entscheidet das nächstbeste. 7,01 Sekunden ist eine gültige Zeit und damit besser als ein Sturz.", r: "Anhang B §8.2(A)" });

  add({ id: "S30", k: [0, 2, 1], c: true, q: "Qualifikation: Athletin C hat zweimal Sturz, Athletin D einmal Sturz und einmal Fehlstart. Wer ist besser platziert?",
    o: ["Athletin C, weil ein Sturz besser ist als ein Fehlstart", "Athletin D, weil ein Fehlstart besser ist als ein Sturz", "Beide sind gleichplatziert, weil keine eine gültige Zeit hat", "Beide werden nicht gewertet, weil keine eine gültige Zeit hat"],
    a: [0], e: "Beide haben keine gültige Zeit. Bestes Ergebnis ist bei beiden ein Sturz, beim nächstbesten Ergebnis liegt Sturz vor Fehlstart.", r: "Anhang B §8.2(B)" });

  add({ id: "S31", k: [0, 0, 1], q: "Wie werden Wettkämpfer in der Speed-Finalrunde platziert?",
    o: ["Nach der zuletzt erreichten Phase: erst die Sieger, dann die Verlierer, jeweils verglichen über alle Races", "Nach der zuletzt erreichten Phase: alle Verlierer einer Phase werden gleichplatziert", "Nach der Qualifikation: die Qualifikationsplatzierung entscheidet über alle Finalplätze", "Nach der schnellsten Finalzeit, unabhängig davon, welche Phase erreicht wurde"],
    a: [0], e: "Gerankt wird nach der zuletzt erreichten Phase. Innerhalb der Phase kommen erst die Sieger, dann die Verlierer, verglichen über ihre besten Ergebnisse aus allen gestarteten Races.", r: "Anhang B §8.3" });

  add({ id: "S32", k: [1, 1, 1], c: true, q: "Ein Athlet tritt zu seinem ersten Finalrace nicht an. Was gilt für ihn und für seinen Gegner?",
    o: ["Er wird nicht gerankt (DNS); das Race entfällt, der Gegner erhält eine Wildcard für die nächste Phase", "Er wird Letzter des Finales; der Gegner klettert das Race allein und braucht eine gültige Zeit", "Er darf am Ende der Phase nachstarten; der Gegner wartet so lange", "Er wird durch den nächstplatzierten Athleten der Qualifikation ersetzt"],
    a: [0], e: "Wer zu seinem ersten Race nicht antritt, ist DNS und wird nicht gerankt. Im K.-o.-System entfällt das Race und der Gegner kommt per Wildcard weiter.", r: "Anhang B §8.3; §4.6 (Anmerkung)" });

  add({ id: "S33", k: [0, 0, 0], q: "Welche Mindestpause steht einem Wettkämpfer zwischen 2 Races zu?",
    o: ["5 Minuten, außer bei einem wiederholten Race", "2 Minuten, außer bei einem wiederholten Race", "10 Minuten, auch bei einem wiederholten Race", "Keine, die Startliste bestimmt den Ablauf"],
    a: [0], e: "Zwischen dem Ende eines Race und dem Start des nächsten liegen mindestens 5 Minuten. Bei einem Re-Run gilt das nicht.", r: "Anhang B §4.2(C)" });

  add({ id: "S34", k: [0, 0, 0], q: "Was macht der Wettkämpfer auf das Kommando „At your marks“?",
    o: ["Er nimmt sofort die Startposition ein: beide Hände und ein Fuß an den Startgriffen, der andere Fuß auf dem Start-Pad", "Er stellt sich mit dem Rücken zur Wand in die Einhängeposition und wartet auf „Ready“", "Er stellt das Start-Pad ein und lässt sich vom Sicherer in das Autobelay einhängen", "Er hebt eine Hand, um dem Starter seine Bereitschaft zu zeigen"],
    a: [0], e: "Bei „At your marks“ geht man unverzüglich in die Startposition: beide Hände und ein Fuß an den gewählten Startgriffen, der andere Fuß auf dem Start-Pad.", r: "Anhang B §4.9" });

  add({ id: "S35", k: [0, 0, 1], q: "Wann schickt der Starter beide Wettkämpfer zurück in die Einhängeposition?",
    o: ["Wenn er zwischen „At your marks“ und „Ready“ nicht überzeugt ist, dass das Race beginnen kann", "Wenn ein Wettkämpfer zwischen „At your marks“ und „Ready“ durch Heben einer Hand zeigt, dass er nicht bereit ist", "Wenn ein Wettkämpfer nach dem Startsignal auffällig langsam reagiert und es ein Fehlstart sein könnte", "Wenn nach dem Kommando „Ready“ ein Zuschauer laut ruft und die Wettkämpfer ablenkt"],
    a: [0, 1], e: "Zwischen „At your marks“ und „Ready“ schickt der Starter beide zurück, wenn er nicht überzeugt ist oder wenn ein Wettkämpfer per Handzeichen meldet, dass er nicht bereit ist.", r: "Anhang B §4.9" });

  add({ id: "S36", k: [1, 1, 1], c: true, q: "Ein Wettkämpfer verzögert den Start immer wieder durch umständliches Chalken und stört so seinen Gegner. Was passiert?",
    o: ["Der Starter schickt beide zurück in die Einhängeposition, der störende Wettkämpfer wird sanktioniert", "Der Starter schickt beide zurück in die Einhängeposition, der gestörte Gegner wird disqualifiziert", "Der Starter startet das Race ohne den störenden Wettkämpfer, der dann als DNS gilt", "Nichts, jeder Wettkämpfer darf sich so lange vorbereiten, wie er möchte"],
    a: [0], e: "Bei unangemessener Verzögerung oder Störung schickt der Starter beide zurück, und der störende Wettkämpfer wird sanktioniert.", r: "Anhang B §4.9 (Anmerkung)" });

  add({ id: "S37", k: [1, 0, 1], q: "Wie weit darf die Einhängeposition höchstens von der Wand entfernt sein?",
    o: ["2 m", "1 m", "3 m", "5 m"],
    a: [0], e: "Die Einhängeposition, in der die Wettkämpfer mit dem Rücken zur Wand stehen, darf höchstens 2 m von der Wand entfernt sein.", r: "Anhang B §4.7 (Anmerkung)" });

  add({ id: "S38", k: [0, 0, 1], q: "Bis wann kann im Speed ein Technical Incident reklamiert werden?",
    o: ["Bis im nächsten planmäßigen Race das Kommando „At your marks“ gegeben wurde", "Bis zur Veröffentlichung der offiziellen Ergebnisse der Runde", "Bis 5 Minuten nach dem Ende des betroffenen Race", "Bis zum Ende der jeweiligen Runde"],
    a: [0], e: "Sobald im nächsten planmäßigen Race „At your marks“ gegeben wurde, ist keine TI-Reklamation mehr möglich.", r: "Anhang B §9.1" });

  add({ id: "S39", k: [0, 0, 1], q: "Unter welcher Voraussetzung kann ein TI zum Autobelay- oder Zeitmesssystem geltend gemacht werden, und für wen gibt es dann einen Re-Run?",
    o: ["Nur bei einem eindeutigen oder systematischen Fehler; Re-Run nur für die direkt betroffenen Wettkämpfer", "Bei jedem begründeten Verdacht; Re-Run für beide bzw. alle Wettkämpfer des Race", "Nie; Autobelay- und Zeitmesssysteme sind von Technical Incidents ausgenommen", "Nur mit Zustimmung des Event Delegate; Re-Run für alle Wettkämpfer der Runde"],
    a: [0], e: "Ein TI zu Autobelay oder Zeitmessung setzt einen eindeutigen oder systematischen Fehler voraus. Der Re-Run gilt nur für die direkt Betroffenen. Der DAV-Schiedsrichter kann dazu Videos prüfen oder einen Systemtest anordnen.", r: "Anhang B §9.1–9.3" });

  add({ id: "S40", k: [0, 0, 1], q: "Bis wann muss ein Einspruch gegen die Wertung eines Versuchs in einem Speed-Race angemeldet werden?",
    o: ["Vor Beginn des nächsten Race; mündlich anmelden, schriftlich innerhalb von bis zu 5 Minuten", "Innerhalb von 5 Minuten nach den offiziellen Ergebnissen; nur schriftlich", "Bis zum Ende der Runde; mündlich anmelden, schriftlich innerhalb von 10 Minuten", "Innerhalb von 2 Minuten nach dem Race; nur schriftlich"],
    a: [0], e: "Der Einspruch muss vor dem nächsten Race angemeldet werden, mündlich genügt. Für die schriftliche Fassung bleiben bis zu 5 Minuten.", r: "Anhang B §10.2" });

  add({ id: "S41", k: [1, 0, 1], q: "Was gilt für das Speed-Training vor der Qualifikation?",
    o: ["Es muss mindestens ein Training geben", "Jedes Training muss eine Demonstration des Fehlstartsignals enthalten", "Die Trainingszeiten haben keine Relevanz für Wettkampf oder Wertung", "Wird im Training ein Griff getauscht, wird das Training wiederholt"],
    a: [0, 1, 2], e: "Vor der Qualifikation gibt es mindestens ein Training mit Demonstration des Fehlstartsignals, möglichst mit der Wettkampf-Zeitmessung. Trainingszeiten zählen nicht. Ein Training wird nicht wiederholt, wenn Ausrüstung getauscht oder die Route angepasst wird.", r: "Anhang B §4.1 mit Anmerkungen" });

  add({ id: "S42", k: [1, 0, 2], q: "Wird bei Speed 4 das Training im Qualifikationsformat durchgeführt?",
    o: ["Nein, um eine übermäßige körperliche Belastung der Athleten zu vermeiden", "Ja, immer, damit die Bedingungen der Qualifikation geprobt werden", "Nur bei mehr als 32 Startern, weil dann mehr Zeit zur Verfügung steht", "Nur wenn der Event Delegate es vor dem Wettkampf ausdrücklich anordnet"],
    a: [0], e: "Bei Speed 4 wird für Trainings bewusst nicht das Qualifikationsformat verwendet. Bei Speed 2 ist das dagegen der Regelfall.", r: "Anhang B §4.1 (Anmerkung)" });

  add({ id: "S43", k: [1, 1, 2], c: true, q: "Speed-4-Ausscheidungsrace (kein Medal-Race): Nur auf Lane A gibt es einen Fehlstart. Was passiert?",
    o: ["Re-Run der Lanes B, C und D", "Kein Re-Run, die 2 Schnellsten von B, C, D kommen weiter", "Re-Run aller 4 Lanes", "Lane A wird disqualifiziert, B, C, D kommen weiter"],
    a: [0], e: "Laut Protokoll: Fehlstart nur auf A heißt Re-Run der Lanes B/C/D.", r: "Anhang B §6.5 (Anmerkung, Tabelle Fehlstart)" });

  add({ id: "S44", k: [1, 1, 2], c: true, q: "Speed-4-Ausscheidungsrace (kein Medal-Race): Fehlstart auf Lane A und Lane B. Was passiert?",
    o: ["Die Wettkämpfer ohne Fehlstart (C und D) sind weiter, kein Re-Run", "Re-Run aller 4 Lanes, weil 2 Fehlstarts vorliegen", "Re-Run der Lanes C und D, um die Reihenfolge festzulegen", "Re-Run der Lanes A und B, um einen der beiden weiterkommen zu lassen"],
    a: [0], e: "Haben genau 2 Wettkämpfer einen Fehlstart, kommen die beiden anderen ohne Re-Run weiter.", r: "Anhang B §6.5 (Anmerkung, Tabelle Fehlstart)" });

  add({ id: "S45", k: [1, 2, 2], c: true, q: "Speed-4-Ausscheidungsrace: A 5,031 Sekunden, B 4,99 Sekunden, C 5,05 Sekunden, D 5,031 Sekunden. Was passiert?",
    o: ["Re-Run der Lanes A und D", "A und D kommen beide weiter", "B und C kommen weiter", "Re-Run aller 4 Lanes"],
    a: [0], e: "B kommt als Schnellster sicher weiter. Um den zweiten Platz liegen A und D zeitgleich, also gibt es einen Re-Run nur für A und D.", r: "Anhang B §6.5 (Anmerkung, Tabelle Sturz/Zeit)" });

  add({ id: "S46", k: [1, 2, 2], c: true, q: "Speed-4-Ausscheidungsrace: A 5,061 Sekunden, B 5,061 Sekunden, C 5,07 Sekunden, D Sturz. Was passiert?",
    o: ["A und B sind weiter, kein Re-Run", "Re-Run der Lanes A und B", "Re-Run der Lanes A, B und C", "A, B und C sind weiter"],
    a: [0], e: "A und B sind gleich schnell, aber beide sind die 2 Schnellsten. Damit stehen die 2 Weiterkommenden fest, ein Re-Run ist nicht nötig.", r: "Anhang B §6.4, §6.5 (Tabelle)" });

  add({ id: "S47", k: [1, 2, 2], c: true, q: "Speed-4-Medal-Race: A 4,99 Sekunden, B 5,01 Sekunden, C 5,01 Sekunden, D Sturz. Was passiert?",
    o: ["Kein Re-Run: A ist Erster, die Plätze 2 und 3 entscheidet der Countback", "Re-Run von B und C, um die Plätze 2 und 3 zu entscheiden", "Re-Run aller 4, weil mehrere Wettkämpfer gleichauf sind", "Kein Re-Run: A ist Erster, B und C werden beide Zweite"],
    a: [0], e: "Ist der erste Platz klar, werden die übrigen Podiumsplätze über die Medal-Race-Ergebnisse bzw. die besten Ergebnisse nach §8.2 (Countback) ermittelt, ohne Re-Run.", r: "Anhang B §6.6(A) mit Anmerkung" });

  add({ id: "S48", k: [1, 1, 2], c: true, q: "Speed-4-Medal-Race: A 5,02 Sekunden, B 4,97 Sekunden, C 4,97 Sekunden, D Sturz. Was passiert?",
    o: ["Re-Run nur für B und C", "B und C werden beide Erste", "Re-Run aller 4", "Der Countback entscheidet über Platz 1"],
    a: [0], e: "Sind 2 oder mehr gleichauf auf Platz 1, gibt es einen Re-Run nur für diese Wettkämpfer.", r: "Anhang B §6.6(B) mit Anmerkung" });

  add({ id: "S49", k: [1, 1, 2], c: true, q: "Speed-4-Medal-Race: Fehlstart auf den Lanes B, C und D, Lane A klettert sauber. Was passiert?",
    o: ["Lane A ist auf Rang 1, kein Re-Run", "Re-Run der Lanes B, C und D", "Re-Run aller 4", "A ist Erster, B, C und D werden gemeinsam Zweite"],
    a: [0], e: "Laut Protokoll für Medal-Races ist A auf Rang 1, ein Re-Run findet nicht statt. Die weiteren Podiumsplätze ergeben sich aus dem Vergleich nach §8.2.", r: "Anhang B §6.6 (Anmerkung, Tabelle Fehlstart)" });

  add({ id: "S50", k: [2, 0, 2], q: "Unter welchen Bedingungen kann ein Deutscher Speed-Rekord aufgestellt werden?",
    o: ["Nur in gewerteten Versuchen, nicht im Training und nicht in abgebrochenen Races", "Wand, Griffe, Zeitmessung und Autobelay sind von World Climbing oder dem DAV für Rekorde zertifiziert", "Ein Jury-Präsident mit mindestens DAV-Schiedsrichter-B-Lizenz ist nominiert", "Bei jedem Vereinswettkampf, solange die Zeit per Handstoppuhr bestätigt wird"],
    a: [0, 1, 2], e: "Rekorde zählen nur aus gewerteten Versuchen. Dazu müssen Wand und Systeme zertifiziert sein, der Wettkampf muss im Kalender stehen oder die Rekorderfassung vorab genehmigt sein, und es braucht einen JP mit mindestens B-Lizenz.", r: "WB §7.15, §7.16" });

  add({ id: "S51", k: [0, 0, 0], q: "Wie sind die Lanes bei Speed 2 bezeichnet, und wie werden die Athleten gesichert?",
    o: ["Von links nach rechts A und B; gesichert von oben mit Autobelay", "Von rechts nach links 1 und 2; Sicherung durch einen Sichernden vom Boden", "Von links nach rechts A und B; Sicherung im Vorstieg", "Rot und Blau; Sicherung von oben durch Toprope-Sicherer"],
    a: [0], e: "Die Lanes heißen von links nach rechts A und B (bei Speed 4 A–D). Gesichert wird von oben mit einem Autobelay-System, jede Lane hat einen Sicherer für den Wechsel.", r: "Anhang B §1.2, §3.1" });

  add({ id: "S52", k: [1, 1, 1], c: true, q: "Eine Athletin berührt im Speed-Race mit der Hand einen Bohrhaken, um sich abzustützen, und schlägt danach normal am Ziel-Pad an. Wie wird gewertet?",
    o: ["Als Sturz", "Als gültige Zeit", "Als Fehlstart", "Gültige Zeit mit Verwarnung (Gelbe Karte)"],
    a: [0], e: "Wird ein Speed-Versuch aus einem der Gründe in §8.1(C), (D) oder (E) nicht erfolgreich gewertet (Boden, out of bounds, Sicherungsmittel usw.), gilt er als Sturz.", r: "AR §8.1(E) mit Anmerkung" });

  add({ id: "S53", k: [0, 0, 1], q: "Wie lange muss ein Speed-Wettkämpfer im Wettkampfbereich bleiben?",
    o: ["In der Qualifikation bis zum Ende seiner planmäßigen Races, im Finale bis zu seinem Ausscheiden", "In der Qualifikation und im Finale bis zum Ende der Siegerehrung", "In der Qualifikation und im Finale nur bis zum Ende seines ersten Race", "In der Qualifikation bis zum Ende der Runde, im Finale bis zum großen Finale"],
    a: [0], e: "Qualifikation: bis die planmäßigen Races beendet sind. Finalrunde: bis zum Ausscheiden.", r: "Anhang B §4.3" });

  add({ id: "S54", k: [0, 0, 1], q: "Wann werden Speed-Routen gereinigt?",
    o: ["Nach Ermessen des Jury-Präsidenten, grundsätzlich vor Rundenbeginn; die Pausen werden im Technical Meeting bekanntgegeben", "Nach jedem Race, damit alle Wettkämpfer dieselben Bedingungen haben", "Nach jedem fünften Race; die Pausen werden im Technical Meeting bekanntgegeben", "Nur auf Antrag eines Teamoffiziellen, über den der Jury-Präsident entscheidet"],
    a: [0], e: "Speedrouten werden nach Ermessen des JP gereinigt, grundsätzlich vor Rundenbeginn. Reinigungspausen werden vor Wettkampfbeginn festgelegt und im Technical Meeting angekündigt.", r: "Anhang B §4.4" });

  add({ id: "S55", k: [1, 0, 0], q: "Was ist im Speed das Startsignal?",
    o: ["Eine Startlampe links der Route leuchtet auf, zusammen mit einem eindeutigen akustischen Signal der Zeitmessanlage", "Ein Pfiff des Starters, zusammen mit dem Aufleuchten einer Startlampe rechts der Route", "Das Kommando „Ready“ des Starters, unmittelbar gefolgt von einem akustischen Signal", "Ein rein akustisches Signal der Zeitmessanlage, ohne optische Anzeige"],
    a: [0], e: "Das Startsignal ist das Aufleuchten der Startlampe links der Route plus ein akustisches Signal des Zeitmesssystems.", r: "Glossar „Startsignal“ (A); Anhang B §4.11" });

  add({ id: "S56", k: [0, 1, 1], c: true, q: "Ein Trainer will Einspruch einlegen, weil die Reaktionszeit seines Athleten (0,098 Sekunden, Fehlstart) „unmöglich“ sei. Das Zeitmesssystem ist vom DAV anerkannt. Was gilt?",
    o: ["Gegen die Gültigkeit einer Reaktionszeit ist kein Einspruch möglich, nur ein Antrag auf einen Technical Incident", "Ein Einspruch ist innerhalb von 5 Minuten nach den offiziellen Ergebnissen möglich", "Ein Einspruch ist nur mündlich und nur vor dem nächsten Race möglich", "Der Starter kann den Fehlstart nach Rücksprache mit dem Trainer zurücknehmen"],
    a: [0], e: "Bei einem anerkannten Zeitmesssystem ist gegen die Gültigkeit einer Reaktionszeit kein Einspruch möglich. Beschwerden zur Funktion des Systems laufen nur als TI-Antrag.", r: "Anhang B §10.1 mit Anmerkung" });
})();
