// Fragen Team Speed – Grundlage: Anhang D, Wettkampfbestimmungen (WB)
(function () {
  const D = "teamspeed";
  const add = (q) => window.QUESTIONS.push(Object.assign({ d: D }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "T01", k: [0, 0, 0], q: "Wie viele Wettkämpfer bilden ein Team im Team Speed, und auf wie vielen Lanes wird geklettert?",
    o: ["2 Wettkämpfer, 4 Lanes", "3 Wettkämpfer, 4 Lanes", "2 Wettkämpfer, 2 Lanes", "4 Wettkämpfer, 4 Lanes"],
    a: [0], e: "Ein Team besteht aus 2 Wettkämpfern. Die Wand hat 4 parallele Lanes (A–D).", r: "Anhang D §1.1, §1.2" });

  add({ id: "T02", k: [0, 0, 0], q: "Welches Team gewinnt beim Team Speed?",
    o: ["Das Team mit der niedrigsten Gesamtkletterzeit vom Startsignal des Lead-off bis zum erfolgreichen Abschluss des Anchor Leg", "Das Team mit der schnellsten Einzelzeit", "Das Team, dessen Anchor Leg zuerst oben ist, egal wie lange der Lead-off brauchte", "Das Team mit der niedrigsten Summe der Reaktionszeiten"],
    a: [0], e: "Die Gesamtkletterzeit läuft vom Startsignal des Lead-off Leg bis zum erfolgreichen Abschluss des Anchor Leg. Die niedrigste Zeit gewinnt.", r: "Anhang D §1.3, §6.1 mit Anmerkung" });

  add({ id: "T03", k: [0, 0, 0], q: "Wie viele Läufe hat ein Team in der Team-Speed-Qualifikation?",
    o: ["Je 1 Versuch auf den Bahnen A & B sowie auf C & D", "1 Versuch insgesamt", "Je einen Versuch auf jeder einzelnen Lane", "2 Versuche auf A & B"],
    a: [0], e: "In der Qualifikation hat jedes Team 1 Lauf auf A & B und 1 Lauf auf C & D, in zufällig-versetzter Reihenfolge.", r: "Anhang D §2.2" });

  add({ id: "T04", k: [1, 2, 0], c: true, q: "Team-Speed-Qualifikation mit 17 Teams: Welches Team startet auf C & D als Erstes?",
    o: ["Das Team, das auf A & B als 9. startet", "Das Team, das auf A & B als 8. startet", "Das Team, das auf A & B als 10. startet", "Das Team, das auf A & B als Letztes startet"],
    a: [0], e: "Versetzt wird um die halbe Anzahl der Teams, abgerundet. Bei 16 oder 17 Teams startet das 9. Team von A & B als erstes auf C & D.", r: "Anhang D §2.2 (Anmerkung)" });

  add({ id: "T05", k: [0, 1, 0], c: true, q: "In der Team-Speed-Qualifikation haben 20 Teams ein gültiges Ergebnis. Wie groß ist die Finalquote?",
    o: ["16", "8", "20", "32"],
    a: [0], e: "4–7 Teams ergeben eine Quote von 4, 8–15 Teams eine Quote von 8, ab 16 Teams eine Quote von 16. Eine 32er-Quote gibt es im Team Speed nicht.", r: "Anhang D §2.3" });

  add({ id: "T06", k: [0, 0, 1], q: "Wann müssen Team-Paarung und Lane-Zuweisung festgelegt werden?",
    o: ["Mit der Meldung zum Wettkampf", "Erst in der Call Zone vor jedem Race", "Nach der Qualifikation", "Im Technical Meeting"],
    a: [0], e: "Jede Mannschaft legt Team-Paarung und Lane-Zuweisung mit der Meldung zum Wettkampf fest.", r: "Anhang D §4.1" });

  add({ id: "T07", k: [0, 0, 0], q: "Auf welchen Lanes starten die Lead-off-Wettkämpfer?",
    o: ["Auf den Lanes A und C", "Auf den Lanes A und B", "Auf den Lanes B und D", "Frei wählbar"],
    a: [0], e: "Die Lead-off-Wettkämpfer starten auf A und C, jeweils mit einem deutlich hörbaren Startsignal.", r: "Anhang D §4.12" });

  add({ id: "T08", k: [0, 0, 0], q: "Welches Startsignal bekommt der Anchor-Leg-Wettkämpfer?",
    o: ["Eine rein visuelle Anzeige, sobald der Lead-off seine Strecke erfolgreich beendet hat", "Ein akustisches Signal wie der Lead-off", "Ein Handzeichen des Starters", "Gar keins, er startet nach eigenem Ermessen"],
    a: [0], e: "Für den Anchor Leg gibt das Zeitmesssystem ein rein visuelles Signal, sobald der Lead-off erfolgreich angeschlagen hat.", r: "Anhang D §4.12" });

  add({ id: "T09", k: [1, 0, 1], q: "Was bedeutet „kletterfertig“ für den Anchor-Leg-Wettkämpfer, bevor der Starter „Ready“ meldet?",
    o: ["Er steht höchstens einen Schritt vom Start-Pad entfernt und hat alle Vorbereitungen, z. B. Chalken, abgeschlossen", "Er hängt bereits in der Startposition an der Wand", "Er steht in der Einhängeposition 2 m von der Wand entfernt", "Er hat den Lead-off abgeklatscht"],
    a: [0], e: "Kletterfertig heißt: höchstens ein Schritt vom Start-Pad entfernt und alle Vorbereitungen erledigt. Vor dem visuellen Startsignal muss er die reguläre Startposition einnehmen.", r: "Anhang D §4.11 mit Anmerkung" });

  add({ id: "T10", k: [1, 1, 1], c: true, q: "Der Anchor-Leg-Wettkämpfer hat beim Aufleuchten seines Startsignals noch einen Fuß auf dem Boden statt auf dem Start-Pad. Gegen welche Vorgabe verstößt er?",
    o: ["Vor dem Startsignal muss er die reguläre Startposition einnehmen: beide Hände und ein Fuß an den Startgriffen, der andere Fuß auf dem Start-Pad", "Gegen keine, der Anchor Leg darf aus dem Stand starten", "Gegen die 2-m-Regel der Einhängeposition", "Gegen die Pflicht, den Lead-off abzuklatschen"],
    a: [0], e: "Bevor das visuelle Startsignal für den Anchor Leg aufleuchtet, muss er die reguläre Startposition eingenommen haben.", r: "Anhang D §4.11 (Anmerkung)" });

  add({ id: "T11", k: [0, 0, 0], q: "Was passiert, wenn ein Lead-off-Wettkämpfer in der Qualifikation einen Fehlstart macht?",
    o: ["Das Race läuft ohne Abbruchsignal weiter und das Ergebnis wird gewertet. Angezeigt wird nur visuell", "Das Race wird abgebrochen", "Das Team wird disqualifiziert", "Der Anchor Leg darf nicht starten"],
    a: [0], e: "In der Qualifikation läuft das Race nach einem Lead-off-Fehlstart weiter und wird gewertet, mit rein visueller Anzeige. In der Finalrunde bricht der Starter ab.", r: "Anhang D §5.1(A) mit Anmerkung" });

  add({ id: "T12", k: [0, 0, 0], q: "Was passiert, wenn ein Anchor-Leg-Wettkämpfer einen Fehlstart macht?",
    o: ["Das Race wird fortgesetzt und das Ergebnis gewertet, in der Qualifikation wie im Finale", "Das Race wird abgebrochen und wiederholt", "Nur im Finale wird abgebrochen", "Der Anchor Leg muss zurück und neu starten"],
    a: [0], e: "Bei einem Fehlstart im Anchor Leg wird das Race immer fortgesetzt und das Ergebnis gewertet.", r: "Anhang D §5.2" });

  add({ id: "T13", k: [0, 0, 0], q: "Wie lautet das Race-Ergebnis eines Teams?",
    o: ["Gültige Zeit (Gesamtkletterzeit), wenn beide Legs erfolgreich sind", "Fehlstart oder Sturz, wenn das in einem der Legs passiert ist", "Die bessere der beiden Einzelzeiten", "Die Summe der beiden Einzelzeiten plus Wechselzeit-Bonus"],
    a: [0, 1], e: "Eine gültige Zeit gibt es nur, wenn beide Legs erfolgreich sind. Ein Fehlstart oder Sturz in einem Leg wird als Ergebnis des Teams erfasst.", r: "Anhang D §6.1" });

  add({ id: "T14", k: [0, 1, 0], c: true, q: "Finale: Team 1 läuft eine gültige Zeit von 12,40 Sekunden, bei Team 2 macht der Anchor Leg einen Fehlstart. Wer gewinnt?",
    o: ["Team 1", "Team 2, wenn es schneller war", "Re-Run", "Niemand"],
    a: [0], e: "Begeht ein Team einen Fehlstart, gewinnt das andere Team.", r: "Anhang D §6.2(A), §5.2" });

  add({ id: "T15", k: [0, 0, 1], q: "In welchen Fällen gibt es in einem Team-Speed-Ausscheidungsrace einen sofortigen Re-Run?",
    o: ["Beide Teams haben dieselbe gültige Zeit", "Keines der beiden Teams erzielt eine gültige Zeit", "Beide Teams haben im gleichen Leg einen Fehlstart", "Ein Team ist weniger als 0,5 Sekunden schneller als das andere"],
    a: [0, 1, 2], e: "§6.3 nennt: gleiche gültige Zeit, keine gültige Zeit bei beiden, Fehlstart beider Teams im gleichen Leg. Ist auch der Re-Run unentschieden, gilt §8.2.", r: "Anhang D §6.3" });

  add({ id: "T16", k: [1, 1, 2], c: true, q: "Keines der beiden Teams tritt zu seinem Ausscheidungsrace an. Wer kommt weiter?",
    o: ["Niemand, in diesem Race gibt es keinen Sieger", "Das in der Qualifikation bessere Team", "Es wird gelost", "Beide"],
    a: [0], e: "Startet keines der beiden Teams, gibt es keinen Sieger.", r: "Anhang D §6.2 (Anmerkung)" });

  add({ id: "T17", k: [1, 1, 1], c: true, q: "Ein Team ist zu seinem Zeitpunkt nicht in der Call Zone. Wann darf der Jury-Präsident es trotzdem klettern lassen?",
    o: ["Nur, wenn die Abwesenheit auf Faktoren außerhalb des Einflussbereichs des Teams zurückgeht", "Immer, wenn es vor dem Start erscheint", "Nie", "Wenn der Gegner zustimmt"],
    a: [0], e: "Der Jury-Präsident darf ein Team ohne rechtzeitige Anwesenheit in der Call Zone nur klettern lassen, wenn die Abwesenheit nicht in seinem Einflussbereich lag. Ein DNS-Team im K.-o. heißt: Das Race entfällt, der Gegner bekommt eine Wildcard.", r: "Anhang D §4.7 mit Anmerkung" });

  add({ id: "T18", k: [1, 0, 1], q: "Wie werden Gleichstände an der Quotengrenze zum Team-Speed-Finale aufgelöst?",
    o: ["Bei 2 Teams Kopf-an-Kopf mit ausgelosten Bahnen; bei mehr Teams läuft jedes Team einmal auf A & B. Diese Races zählen nicht als Wertungsversuche", "Durch Los", "Durch die bessere Einzelzeit des Anchor Leg", "Alle gleichplatzierten Teams kommen weiter"],
    a: [0], e: "Bei 2 gleichplatzierten Teams gibt es ein Kopf-an-Kopf-Rennen, bei mehr Teams je 1 Lauf auf A & B. Die Zeiten kommen nicht in die Official Results, Rekorde sind nicht möglich.", r: "Anhang D §2.4 mit Anmerkungen" });

  add({ id: "T19", k: [1, 0, 0], q: "Wie ist die Team-Speed-Finalrunde organisiert?",
    o: ["Als K.-o.-System nach dem Wettkampfbaum von Speed 2, mit kleinem Finale (3/4) und großem Finale (1/2)", "Als Speed-4-Modus, die besten 2 kommen weiter", "Als Zeitfahren, alle Teams laufen einmal", "Als Round-Robin"],
    a: [0], e: "Das Siegerteam jedes Race kommt weiter. Nach dem Halbfinale gibt es ein kleines und ein großes Finale. Die Wettkampfbäume entsprechen denen von Speed 2.", r: "Anhang D §2.5 mit Anmerkung" });

  add({ id: "T20", k: [0, 0, 0], q: "Wie werden Team-Speed-Zeiten gemessen und offiziell angegeben?",
    o: ["Gemessen auf 1/1000 Sekunde, offiziell auf 1/100 Sekunde abgerundet", "Gemessen und offiziell auf 1/100 Sekunde", "Gemessen auf 1/1000 Sekunde, offiziell aufgerundet", "Nur die Zeit des Anchor Leg zählt"],
    a: [0], e: "Wie im Individual Speed: Messung auf 1/1000 Sekunde, offizielle Zeiten auf 1/100 Sekunde abgerundet. Die Tausendstel dürfen einen Gleichstand anzeigen.", r: "Anhang D §7.1–7.3" });

  add({ id: "T21", k: [0, 0, 1], q: "Bis wann kann im Team Speed ein technischer Zwischenfall reklamiert werden, und wer bekommt einen Re-Run?",
    o: ["Bis im nächsten planmäßigen Race „At your marks“ gegeben wurde; Re-Run nur für das bzw. die direkt betroffenen Teams", "Bis zur Veröffentlichung der Ergebnisse; Re-Run für alle Teams des Race", "Bis 5 Minuten nach dem Race; Re-Run nur für den betroffenen Wettkämpfer", "TIs gibt es im Team Speed nicht"],
    a: [0], e: "Die Reklamationsgrenze ist das Kommando „At your marks“ im nächsten Race. Ein bestätigter TI bringt einen Re-Run nur für die direkt betroffenen Teams.", r: "Anhang D §9.1, §9.3" });

  add({ id: "T22", k: [0, 0, 0], q: "Welche Mindestpause steht einem Team zwischen 2 Races zu?",
    o: ["5 Minuten, außer bei einem wiederholten Race", "2 Minuten", "10 Minuten", "Keine Vorgabe"],
    a: [0], e: "Jedes Team hat Anspruch auf mindestens 5 Minuten zwischen 2 Races, außer bei einem Re-Run.", r: "Anhang D §4.3(C)" });

  add({ id: "T23", k: [2, 1, 1], c: true, q: "Ein Landesverband meldet die Athleten A, B und C für Team Speed. A und B klettern die Qualifikation, B und C das Finale, das Team wird Dritter. Wer bekommt eine Medaille?",
    o: ["A, B und C", "Nur B und C", "Nur B", "Nur A und B"],
    a: [0], e: "Als gestartet gilt, wer an mindestens einem Race oder einer Runde teilgenommen hat. Alle 3 bekommen eine Medaille. Ein Ersatz, der nie startet, bekommt keine.", r: "WB §8.3 mit Anmerkung" });

  add({ id: "T24", k: [1, 0, 1], q: "Ab welchem Alter darf man an der Deutschen Meisterschaft Speed bzw. Team Speed teilnehmen?",
    o: ["Ab dem 15. Lebensjahr", "Ab dem 16. Lebensjahr", "Ab dem 14. Lebensjahr", "Ab dem 18. Lebensjahr"],
    a: [0], e: "DM Speed und Team Speed: ab dem 15. Lebensjahr. DM Lead und Boulder: ab dem 16. Lebensjahr. Maßgeblich ist das Jahr, in dem das Lebensjahr vollendet wird.", r: "WB §1.1" });

  add({ id: "T25", k: [0, 0, 1], q: "Wie werden Teams im Team-Speed-Finale platziert?",
    o: ["Nach der zuletzt absolvierten Phase: erst die Sieger, dann die Verlierer, jeweils durch Vergleich ihrer besten Ergebnisse aus allen Races (§8.2)", "Ausschließlich nach der Qualifikationszeit", "Alle Verlierer einer Phase gleichplatziert", "Nach der schnellsten Einzelzeit eines Teammitglieds"],
    a: [0], e: "Gerankt wird nach der zuletzt absolvierten Phase, erst die Sieger, dann die Verlierer. Innerhalb dieser Gruppen entscheiden die besten Ergebnisse aus allen gestarteten Races.", r: "Anhang D §8.3" });

  add({ id: "T26", k: [0, 1, 1], c: true, q: "Finale: Bei Team 1 macht der Lead-off einen Fehlstart, bei Team 2 ebenfalls der Lead-off. Was passiert?",
    o: ["Sofortiger Re-Run, weil beide Teams im gleichen Leg einen Fehlstart haben", "Team 1 gewinnt, weil es zuerst gestartet ist", "Beide Teams scheiden aus", "Die Qualifikationsergebnisse entscheiden sofort"],
    a: [0], e: "Haben beide Teams im gleichen Leg einen Fehlstart, gibt es einen sofortigen Re-Run. Ist auch der unentschieden, gilt §8.2.", r: "Anhang D §6.3(C)" });
})();
