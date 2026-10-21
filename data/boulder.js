// Fragen Boulder – Grundlage: Allgemeine Regeln (AR) und Anhang C
(function () {
  const D = "boulder";
  const add = (q) => window.QUESTIONS.push(Object.assign({ d: D }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "B01", k: [0, 0, 0], q: "Wann gilt ein Versuch im Bouldern als begonnen?",
    o: ["Wenn der Wettkämpfer den Boden verlässt", "Wenn der Wettkämpfer alle 4 Startmarkierungen kontrolliert", "Mit dem Startsignal des Intervalls", "Wenn der Wettkämpfer den ersten Griff berührt"],
    a: [0], e: "Auch im Bouldern beginnt der Versuch, sobald der Wettkämpfer den Boden verlässt.", r: "AR §7.4" });

  add({ id: "B02", k: [1, 1, 0], c: true, q: "Ein Athlet springt vom Boden hoch, um mit der Bürste einen Griff zu putzen. Er berührt dabei weder die Kletterfläche noch einen Griff. Zählt das als Versuch?",
    o: ["Nein, das zählt nicht als gewerteter Versuch", "Ja, er hat den Boden verlassen", "Ja, aber nur wenn er länger als 2 Sekunden in der Luft ist", "Nur im Finale"],
    a: [0], e: "Springen zum Bürsten ist erlaubt und zählt nicht als Versuch, solange weder Kletterfläche noch andere Griffe benutzt oder berührt werden.", r: "AR §7.4 (Anmerkung)" });

  add({ id: "B03", k: [1, 1, 0], c: true, q: "Beim Sprung zum Bürsten stützt sich eine Athletin kurz mit der freien Hand an einem Griff ab. Was gilt?",
    o: ["Das zählt als Versuch", "Das zählt nicht als Versuch, weil sie nur bürsten wollte", "Sie bekommt eine Verwarnung (Gelbe Karte), der Versuch zählt nicht", "Das zählt nur, wenn der Griff ein Startgriff ist"],
    a: [0], e: "Die Ausnahme fürs Bürsten gilt nur, wenn weder Kletterfläche noch andere Griffe benutzt oder berührt werden. Hier wurde ein Griff benutzt, also zählt es als Versuch.", r: "AR §7.4 (Anmerkung)" });

  add({ id: "B04", k: [0, 0, 0], q: "Was ist für einen gültigen Start im Bouldern erforderlich?",
    o: ["Die markierten Startgriffe kontrolliert halten und eine stabile Position mit beiden Händen und beiden Füßen in der Startposition einnehmen", "Mit beiden Händen an den Startgriffen hängen, die Füße sind egal", "Ein Fuß auf einem Startgriff, der Rest beliebig", "Nur die Starthaltung, die der Routenbauer vorgibt"],
    a: [0], e: "Der Wettkämpfer muss die markierten Startgriffe kontrolliert halten und mit beiden Händen und beiden Füßen eine stabile Startposition einnehmen.", r: "AR §7.5" });

  add({ id: "B05", k: [0, 1, 0], c: true, q: "Eine Athletin springt vom Boden direkt an einen Griff oberhalb der Startgriffe, ohne die Startposition eingenommen zu haben. Was gilt?",
    o: ["Fehlstart: Der Versuch ist nicht erfolgreich und zählt als Versuch", "Erlaubt, wenn sie danach die Zone erreicht", "Der Versuch zählt nicht, sie darf ohne Folgen neu starten", "Sie bekommt eine Verwarnung (Gelbe Karte)"],
    a: [0], e: "Wer andere Griffe benutzt, bevor die Startposition korrekt eingenommen ist, macht einen Fehlstart. Der Versuch endet erfolglos.", r: "AR §7.5, §8.1(A)" });

  add({ id: "B06", k: [1, 0, 0], q: "Was muss ein Boulderschiedsrichter beim Start eines Wettkämpfers beurteilen?",
    o: ["Ob der Wettkämpfer gezeigt hat, dass er die markierten Startgriffe kontrolliert hält und die Startposition eingenommen hat", "Ob die Bewegung in die Startposition getrennt und unabhängig von der ersten Bewegung zum Weiterkommen ist", "Ob der Wettkämpfer die vom Routenbauer vorgesehene Handposition nutzt", "Ob der Wettkämpfer seine Hände vorher gechalkt hat"],
    a: [0, 1], e: "Geprüft wird, ob die Startgriffe kontrolliert und die Startposition erfolgreich eingenommen wurden, und ob das Einnehmen der Startposition von der ersten Vorwärtsbewegung getrennt ist. Bestimmte Handpositionen dürfen nicht vorgegeben werden.", r: "AR §7.5 (Anmerkung); AR §1.12(A)" });

  add({ id: "B07", k: [2, 0, 0], q: "Wann soll der Boulderschiedsrichter laut Judge Guide „Fehlstart“ rufen, wenn die Startposition nicht korrekt eingenommen wurde?",
    o: ["Erst wenn der Wettkämpfer einen nicht als Start markierten Griff kontrolliert", "Sofort, wenn er den Eindruck hat, dass der Start misslingen wird", "Erst am Ende des Versuchs", "Erst wenn der Wettkämpfer die Zone erreicht"],
    a: [0], e: "Der Schiedsrichter soll einen Fehlstart nicht vorwegnehmen. Er ruft ihn erst, wenn der Wettkämpfer einen nicht als Start markierten Griff kontrolliert und klar gegen die Startvorgaben verstößt.", r: "AR §7.5; Judge Guide (False Starts)" });

  add({ id: "B08", k: [1, 0, 1], q: "Welche Aussagen zur Startmarkierung eines Boulders sind richtig?",
    o: ["Jede Startposition hat genau 4 Markierungen, egal wie viele Griffe sie umfasst", "Spezifische Handpositionen dürfen nicht vorgegeben werden", "Blockerholds dürfen nicht als Startgriffe markiert werden", "Für jede Hand muss ein eigener Startgriff markiert sein, Matchen am Start ist verboten"],
    a: [0, 1, 2], e: "Eine Startposition hat immer 4 Markierungen (beide Hände, beide Füße) in auffälliger Farbe. Handpositionen werden nicht vorgegeben, Blockerholds werden nicht als Start markiert und dürfen beim Start nicht genutzt werden.", r: "AR §1.12(A) mit Anmerkungen" });

  add({ id: "B09", k: [1, 1, 1], c: true, q: "Ein Athlet nutzt beim Einnehmen der Startposition einen Blockerhold, der den Startgriff begrenzt. Was gilt?",
    o: ["Unzulässig: Blockerholds dürfen beim Start nicht genutzt werden, also Fehlstart", "Erlaubt, Blocker gehören zum Startgriff", "Erlaubt, wenn er ihn nur mit dem Fuß nutzt", "Erlaubt, er bekommt aber keine Zone"],
    a: [0], e: "Blockerholds verändern oder begrenzen den nutzbaren Teil eines Startgriffs. Beim Start dürfen sie nicht genutzt werden.", r: "AR §1.12 (Anmerkung zu A); AR §7.5" });

  add({ id: "B10", k: [0, 0, 0], q: "Wie kann ein Boulder-Top markiert sein?",
    o: ["Als Endgriff in derselben Farbe wie die Startgriffe", "Als stehende Position auf dem Boulder", "In derselben Farbe wie die Zonengriffe", "Als mit schwarzem Tape markierter Griff"],
    a: [0, 1], e: "Der Top ist entweder ein Endgriff in der Farbe der Startgriffe oder eine stehende Position auf dem Boulder. Zonengriffe haben eine andere Farbe als die Startgriffe.", r: "AR §1.12(B), (C)" });

  add({ id: "B11", k: [0, 0, 2], q: "Wie viele Griffe sollte ein Wettkampfboulder höchstens haben, und wie viele im Durchschnitt pro Runde?",
    o: ["Höchstens 12, im Durchschnitt 4 bis 8", "Höchstens 15, im Durchschnitt 6 bis 10", "Höchstens 10, im Durchschnitt 3 bis 6", "Es gibt keine Vorgabe"],
    a: [0], e: "Ein Boulder sollte nicht mehr als 12 Griffe haben. Der Durchschnitt pro Boulder in einer Runde sollte zwischen 4 und 8 liegen.", r: "AR §1.10" });

  add({ id: "B12", k: [0, 0, 0], q: "Wann ist ein Versuch an einem Boulder mit markiertem Topgriff erfolgreich?",
    o: ["Wenn der Wettkämpfer den Topgriff mit beiden Händen matcht, eine stabile Position erreicht und eindeutige, bewusste Kontrolle zeigt, und das vor Ablauf der Kletterzeit", "Wenn der Wettkämpfer den Topgriff mit einer Hand berührt", "Wenn der Wettkämpfer den Topgriff mit beiden Händen abklatscht", "Wenn der Wettkämpfer mit einer Hand am Top hängt und der Schiedsrichter bis 3 zählt"],
    a: [0], e: "Nötig sind: Match mit beiden Händen, eine stabile Position vor Zeitablauf und eine eindeutige, bewusste Kontrolle des Topgriffs.", r: "AR §8.5(B)" });

  add({ id: "B13", k: [1, 1, 1], c: true, q: "Eine Athletin legt die zweite Hand auf ihre erste Hand, die den Topgriff hält. Die zweite Hand berührt den Griff selbst nicht. Ist der Top „gematcht“?",
    o: ["Nein, beide Hände müssen gleichzeitig den Griff selbst berühren", "Ja, Hand auf Hand zählt als Match", "Ja, wenn sie dabei stabil ist", "Nur wenn der Topgriff zu klein für 2 Hände ist"],
    a: [0], e: "Matchen heißt, dass beide Hände gleichzeitig Kontakt zum markierten Zielgriff haben. Hand über Hand ohne Kontakt beider Hände zum Griff ist kein Match.", r: "AR §8.5 (Anmerkung zum Matchen)" });

  add({ id: "B14", k: [1, 1, 0], c: true, q: "Ein Athlet springt dynamisch an den Topgriff, matcht ihn kurz mit beiden Händen und wird vom eigenen Schwung vom Griff weggerissen. Top?",
    o: ["Nein, wer vom Schwung weggezogen wird, zeigt keine Kontrolle", "Ja, er hat mit beiden Händen gematcht", "Ja, wenn der Kontakt länger als eine Sekunde dauerte", "Nur, wenn der Schiedsrichter die Hand gehoben hat"],
    a: [0], e: "Keine Kontrolle liegt vor, wenn der Wettkämpfer den Griff nur abklatscht, keine stabile Position halten kann oder vom Schwung weggezogen wird.", r: "AR §8.5 (Anmerkung zur Kontrolle)" });

  add({ id: "B15", k: [1, 0, 0], q: "Woran kann der Boulderschiedsrichter die Kontrolle des Topgriffs erkennen?",
    o: ["Der Wettkämpfer nutzt den Griff, um die Bewegung zu stoppen", "Der Wettkämpfer hält eine stabile Position am Topgriff", "Der Wettkämpfer schüttelt in stabiler Position einen Arm aus oder jubelt", "Der Wettkämpfer klatscht den Griff mit beiden Händen ab"],
    a: [0, 1, 2], e: "Kontrolle zeigt sich durch Stoppen der Bewegung oder eine stabile Position. Auch typische Bewegungen wie Ausschütteln oder Jubeln zählen, solange die Position stabil bleibt. Abklatschen ist keine Kontrolle.", r: "AR §8.5 (Anmerkung zur Kontrolle)" });

  add({ id: "B16", k: [2, 1, 1], c: true, q: "Ein möglicher Top passiert in den letzten Sekunden. Der Boulderschiedsrichter ist unsicher, ob er vor Zeitablauf kam. Wie soll er laut Judge Guide vorgehen?",
    o: ["Den Top zunächst nicht geben; der DAV-Schiedsrichter kann per offiziellem Video prüfen und das Ergebnis korrigieren", "Den Top im Zweifel für den Athleten geben", "Den Athleten den Boulder sofort wiederholen lassen", "Den Event Delegate entscheiden lassen"],
    a: [0], e: "Der Top muss vor Ablauf der Kletterzeit gezeigt werden. Im Zweifel gibt der Schiedsrichter ihn nicht. Der DAV-Schiedsrichter kann das Video prüfen und den Top nachträglich bestätigen.", r: "AR §8.5; Judge Guide (Tops and Potential Tops)" });

  add({ id: "B17", k: [0, 0, 0], q: "Wann wird eine Zone vergeben?",
    o: ["Wenn der Wettkämpfer den Zonengriff mit den Händen kontrolliert hält, um ein Establishing-Movement abzuschließen oder per Advancing-Movement eine stabile Position an einem weiteren Griff zu erreichen", "Sobald der Zonengriff berührt wird", "Wenn der Wettkämpfer mit dem Fuß auf dem Zonengriff steht", "Wenn der Wettkämpfer höher als der Zonengriff ist"],
    a: [0], e: "Die Zone zählt, wenn der Zonengriff mit den Händen kontrolliert gehalten wird, um ein Establishing-Movement abzuschließen oder ein Advancing-Movement bis zu einer stabilen Position an einem weiteren Griff zu schaffen.", r: "AR §9.7" });

  add({ id: "B18", k: [1, 2, 1], c: true, q: "Ein Athlet nutzt den Zonengriff „en passant“ für einen Paddle Move, ohne sich daran zu stabilisieren. Er erreicht den nächsten Griff, kann ihn aber nicht halten und fällt. Zone?",
    o: ["Nein, die Zone zählt nur, wenn die Vorwärtsbewegung abgeschlossen und eine stabile Position erreicht wurde", "Ja, jede Nutzung des Zonengriffs zählt", "Ja, weil der Zonengriff zur Richtungsänderung genutzt wurde", "Nur wenn der Schiedsrichter die Berührung deutlich gesehen hat"],
    a: [0], e: "Ein Paddle Move über die Zone gilt als Vorwärtsbewegung. Die Zone wird aber nur gewertet, wenn diese Bewegung erfolgreich abgeschlossen wurde und eine stabile Position erreicht ist.", r: "AR §9.7 (Anmerkung zum Advancing-Movement)" });

  add({ id: "B19", k: [0, 1, 0], c: true, q: "Eine Athletin steht mit dem Fuß auf dem Zonengriff, mit den Händen hat sie ihn nie gehalten. Bekommt sie die Zone?",
    o: ["Nein, der Zonengriff muss mit den Händen kontrolliert werden", "Ja, jede Nutzung zählt", "Ja, wenn sie dort stabil steht", "Nur im Finale"],
    a: [0], e: "Für die Zone muss der Zonengriff mit den Händen kontrolliert gehalten werden.", r: "AR §9.7" });

  add({ id: "B20", k: [0, 0, 0], q: "Wie wird die Punktzahl für einen Boulder berechnet?",
    o: ["Zone: 10 Punkte minus 0,1 pro weiterem Versuch vor der Zone; Top: 25 Punkte minus 0,1 pro Fehlversuch; es zählt der höhere Wert, mindestens 0,0", "Top: 1 Punkt, Zone: 0,5 Punkte", "Top: 25 Punkte, Zone: 10 Punkte, beides addiert, ohne Abzüge", "Top: 100 Punkte minus 10 pro Fehlversuch"],
    a: [0], e: "Eine Zone gibt 10 Punkte abzüglich 0,1 für jeden weiteren Versuch vor der Zone, ein Top 25 Punkte abzüglich 0,1 pro Fehlversuch. Es zählt der größere der beiden Werte. Negativ kann die Punktzahl nicht werden.", r: "Anhang C §5.1" });

  add({ id: "B21", k: [0, 2, 0], c: true, q: "Ein Athlet toppt einen Boulder im 3. Versuch. Wie viele Punkte bekommt er für diesen Boulder?",
    o: ["24,8", "24,7", "25,0", "34,8"],
    a: [0], e: "25 − 2 × 0,1 (2 Fehlversuche) = 24,8. Top und Zone werden nicht addiert, es zählt der höhere Wert.", r: "Anhang C §5.1" });

  add({ id: "B22", k: [0, 2, 0], c: true, q: "Eine Athletin erreicht die Zone im 4. Versuch, toppt den Boulder aber nicht. Wie viele Punkte bekommt sie?",
    o: ["9,7", "9,6", "10,0", "6,0"],
    a: [0], e: "10 − 3 × 0,1 (3 Versuche vor dem Zonenversuch) = 9,7.", r: "Anhang C §5.1(A)" });

  add({ id: "B23", k: [0, 2, 0], c: true, q: "Ein Athlet erreicht die Zone im 2. Versuch und toppt im 5. Versuch. Wie viele Punkte bekommt er für den Boulder?",
    o: ["24,6", "34,5", "24,5", "9,9"],
    a: [0], e: "Zone: 10 − 0,1 = 9,9. Top: 25 − 4 × 0,1 = 24,6. Es zählt der größere Wert: 24,6.", r: "Anhang C §5.1" });

  add({ id: "B24", k: [0, 2, 0], c: true, q: "Ergebnis einer Athletin in einer Runde mit 5 Bouldern: B1 Top im 1. Versuch, B2 Top im 2. Versuch, B3 Zone im 3. Versuch, B4 nichts, B5 Zone im 1. Versuch. Wie hoch ist ihre Gesamtpunktzahl?",
    o: ["69,7", "70,0", "69,6", "69,9"],
    a: [0], e: "25,0 + 24,9 + 9,8 + 0,0 + 10,0 = 69,7.", r: "Anhang C §5.1, §7.1" });

  add({ id: "B25", k: [0, 0, 0], q: "In welcher Reihenfolge werden Gleichstände im Boulder-Ranking aufgelöst?",
    o: ["1. Count-back zum General Result der Vorrunde (falls vorhanden), 2. weniger Versuche für die Tops, 3. weniger Versuche für die Zonen", "1. mehr Tops, 2. mehr Zonen, 3. Los", "1. weniger Versuche für die Zonen, 2. weniger Versuche für die Tops, 3. Count-back", "1. Kletterzeit, 2. Count-back"],
    a: [0], e: "Laut Anhang C §7.1: (A) Count-back zum General Result der vorangegangenen Runde, falls anwendbar, (B) Gesamtzahl der Versuche an den getoppten Bouldern, aufsteigend, (C) Gesamtzahl der Versuche für die Zonen, aufsteigend.", r: "Anhang C §7.1" });

  add({ id: "B26", k: [0, 1, 1], c: true, q: "Ein Athlet versucht in der Qualifikation den ersten Boulder seiner Rotation nicht. Was gilt?",
    o: ["Er wird nicht gewertet und für die Runde als DNS markiert", "Er bekommt 0 Punkte auf Boulder 1 und klettert normal weiter", "Er darf Boulder 1 am Ende der Runde nachholen", "Er wird disqualifiziert"],
    a: [0], e: "Wer den ersten Boulder einer Runde nicht versucht, wird nicht gewertet und ist DNS. Laut Judge Guide darf er dann auch keine weiteren Boulder versuchen. Wer den ersten Boulder versucht hat, darf andere auslassen und wird trotzdem gewertet.", r: "Anhang C §7.1; Judge Guide" });

  add({ id: "B27", k: [1, 0, 0], q: "Wie ist die Deutsche Meisterschaft Boulder aufgebaut?",
    o: ["Qualifikation 5 Boulder (Intervall, 5 Minuten fix), Halbfinale 4 Boulder (5 Minuten fix, Quote 24), Finale 4 Boulder (World Series, max. 4 Minuten, Quote 8)", "Qualifikation 4 Boulder, Finale 4 Boulder, ohne Halbfinale", "Qualifikation 5 Boulder (4 Minuten), Halbfinale 4 Boulder (4 Minuten), Finale 4 Boulder (5 Minuten)", "Qualifikation 6 Boulder Flash, Finale 4 Boulder On Sight"],
    a: [0], e: "Laut Tabelle 1: Qualifikation 5 Boulder, Intervall On Sight, 5 Minuten fix, zufällige Reihenfolge. Halbfinale 4 Boulder, Intervall On Sight, 5 Minuten fix, Quote 24. Finale 4 Boulder, World Series On Sight, max. 4 Minuten, Quote 8.", r: "Anhang C §2.1 Tabelle 1" });

  add({ id: "B28", k: [1, 0, 2], q: "Unter welchen Umständen darf ein Boulder aus einer Runde gestrichen werden?",
    o: ["In Ausnahmefällen kann der Jury-Präsident maximal 1 Boulder je Runde streichen", "Der Chefroutenbauer darf beliebig viele Boulder streichen", "Es darf nie ein Boulder gestrichen werden", "Der Event Delegate darf bis zu 2 Boulder je Runde streichen"],
    a: [0], e: "In Ausnahmefällen darf der Jury-Präsident höchstens 1 Boulder je Runde streichen.", r: "Anhang C §2.1 (Anmerkung)" });

  add({ id: "B29", k: [1, 0, 0], q: "Wie ist der Deutsche Jugendcup Boulder aufgebaut?",
    o: ["Qualifikation 2×3 Boulder Flash (4 Minuten fix), Finale 4 Boulder Intervall On Sight (4 Minuten fix) mit 8 Minuten Besichtigung, ohne Halbfinale", "Qualifikation 5 Boulder, Halbfinale, Finale wie bei der DM", "Qualifikation 4 Boulder On Sight, Finale 4 Boulder Flash", "Nur ein Durchgang mit 8 Bouldern im JAM-Format"],
    a: [0], e: "Im DJC Boulder gibt es kein Halbfinale. Qualifikation 2×3 Boulder im Flash-Format (4 Minuten fix, zufällig/versetzt), Finale 4 Boulder im Intervall-Format On Sight (4 Minuten fix) mit 8 Minuten Besichtigungszeit. Finalquote 10, bei weniger als 20 Startern 6.", r: "Anhang C §2.2 Tabelle 2" });

  add({ id: "B30", k: [0, 0, 0], q: "Wie lang ist die Pause nach jedem Intervall, um das Field of Play zu räumen?",
    o: ["15 Sekunden", "5 Sekunden", "30 Sekunden", "1 Minute"],
    a: [0], e: "Nach jedem Intervall gibt es 15 Sekunden Pause. Laut Judge Guide werden die Wettkämpfer erst nach diesen 15 Sekunden aufs Field of Play gelassen.", r: "Anhang C §4.4" });

  add({ id: "B31", k: [0, 0, 0], q: "Wann endet im Boulderfinale ein Intervall?",
    o: ["Wenn alle Wettkämpfer auf dem Field of Play ihre Versuche beendet haben oder die maximale Intervalldauer abgelaufen ist", "Immer nach genau 4 Minuten", "Wenn der erste Wettkämpfer toppt", "Wenn der Jury-Präsident es beendet"],
    a: [0], e: "Im Finale endet ein Intervall, wenn alle Wettkämpfer auf dem Field of Play fertig sind oder die maximale Dauer abgelaufen ist (World Series: „max. 4 Minuten“).", r: "Anhang C §4.4" });

  add({ id: "B32", k: [0, 0, 0], q: "Wie läuft die gemeinsame Besichtigung vor dem Boulderfinale ab?",
    o: ["2 Minuten pro Boulder, ohne Aufzeichnungsgeräte. Alternativ 8 Minuten für alle Boulder gleichzeitig, mit freier Einteilung", "6 Minuten für alle Boulder zusammen, Fotos erlaubt", "1 Minute pro Boulder mit Trainer", "Es gibt keine Besichtigung im Finale"],
    a: [0], e: "Vor dem Finale gibt es 2 Minuten pro Boulder, Aufzeichnungsgeräte sind verboten. Alternativ kann eine 8-minütige Besichtigung für alle Boulder gleichzeitig angesetzt werden, in der jeder Dauer und Reihenfolge selbst wählt.", r: "Anhang C §4.9" });

  add({ id: "B33", k: [1, 1, 1], c: true, q: "Während der Finalbesichtigung probiert ein Athlet den ersten Zug eines Boulders aus. Welche Folgen sind möglich?",
    o: ["Eine Disziplinarstrafe oder ein „Strafversuch“ (mehr Versuche an diesem Boulder)", "Keine, die Besichtigung ist zum Ausprobieren da", "Sofortige Disqualifikation ohne Ermessen", "Der Boulder wird für ihn gestrichen"],
    a: [0], e: "Wer in der Besichtigung den Boulder probiert oder andere Griffe als Start- bzw. Blockergriffe berührt, kann eine Disziplinarstrafe oder einen Strafversuch bekommen.", r: "Anhang C §4.9 (Anmerkung)" });

  add({ id: "B34", k: [1, 0, 0], q: "Was dürfen Wettkämpfer bei der gemeinsamen Besichtigung von Bouldern berühren?",
    o: ["Nur die markierten Startgriffe und die zugehörigen Blockergriffe", "Alle Griffe, die sie vom Boden aus erreichen", "Gar nichts", "Start- und Zonengriffe"],
    a: [0], e: "An Bouldern dürfen nur die markierten Startgriffe und die zugehörigen Blocker berührt werden. Im Lead gilt dagegen: alle vom Boden erreichbaren Griffe.", r: "AR §5.4 (Anmerkung)" });

  add({ id: "B35", k: [0, 0, 1], q: "Was gilt für die Call Zone in On-Sight-Boulderrunden?",
    o: ["Sie muss so eingerichtet sein, dass Wettkämpfer keine Boulder sehen können, die sie noch nicht versucht haben", "Wettkämpfer dürfen dort die anderen Athleten beobachten", "Trainer dürfen dort Tipps geben", "Sie muss direkt vor der Wand liegen"],
    a: [0], e: "Im On-Sight-Format darf man aus der Call Zone keinen noch nicht begangenen Boulder sehen können.", r: "Anhang C §4.3" });

  add({ id: "B36", k: [1, 0, 1], c: true, q: "Eine Athletin hat in der Qualifikation ihre Versuche am letzten Boulder der Runde beendet. Was sollte der Jury-Präsident sicherstellen?",
    o: ["Dass sie noch mindestens ein volles Zeitintervall in der Call Zone bleibt", "Dass sie sofort zu ihrem Trainer geht", "Dass sie die restlichen Boulder ansehen darf", "Nichts, sie ist fertig"],
    a: [0], e: "Wer den letzten Boulder beendet hat, soll noch mindestens ein volles Intervall in der Call Zone bleiben. So bleibt die Isolation gewahrt, falls ein Einspruch zu zusätzlichen Versuchen am letzten Boulder führt.", r: "Anhang C §4.3 (Anmerkung); Judge Guide" });

  add({ id: "B37", k: [0, 1, 1], c: true, q: "Ein Athlet bürstet einen Griff mit seiner eigenen Zahnbürste aus dem Chalkbag. Was gilt?",
    o: ["Nicht erlaubt: Boulder dürfen nur mit den vom Veranstalter gestellten Bürsten gereinigt werden, oder man fordert Reinigungspersonal an", "Erlaubt, solange die Bürste sauber ist", "Erlaubt, wenn der Veranstalter keine Bürsten stellt", "Erlaubt, aber nur in den 15 Sekunden Pause"],
    a: [0], e: "Zum Reinigen dürfen nur Bürsten des Veranstalters verwendet werden. Alternativ fordert man das Reinigungspersonal an, sofern es welches gibt.", r: "Anhang C §4.13" });

  add({ id: "B38", k: [1, 0, 0], q: "Was darf ein Wettkämpfer beim Bouldern auf das Field of Play mitnehmen?",
    o: ["Eine kleine Tasche mit Tape, Chalk/Liquid Chalk und Schuhen", "Einen kleinen, nicht unter Druck stehenden Sprüher mit Trinkwasser", "Einen kleinen Behälter mit einem handelsüblichen, nicht fettenden feuchtigkeitsspendenden Mittel", "Einen eigenen Ventilator zum Trocknen der Hände"],
    a: [0, 1, 2], e: "Erlaubt sind eine kleine Tasche mit der nötigen Ausrüstung, Flüssigchalk, ein druckloser Wassersprüher und ein nicht fettendes Mittel zur Handreinigung. Geräte zur Temperaturregulierung wie Ventilatoren bleiben laut Judge Guide in der Call Zone.", r: "Anhang C §4.14 mit Anmerkung; Judge Guide" });

  add({ id: "B39", k: [0, 0, 0], q: "Was gilt für mehrere Versuche innerhalb eines Intervalls?",
    o: ["Mehrere Versuche sind erlaubt, jeder muss vom Start aus erfolgen; einzelne Teile dürfen nicht separat probiert werden", "Pro Intervall ist nur ein Versuch erlaubt", "Man darf einzelne Züge separat üben, solange man vom Boden startet", "Nach einem Sturz darf man an der Sturzstelle weiterklettern"],
    a: [0], e: "Innerhalb eines Intervalls sind mehrere Versuche erlaubt. Jeder Versuch muss vom Start aus erfolgen, Teile des Boulders separat zu probieren ist verboten.", r: "Anhang C §4.12" });

  add({ id: "B40", k: [0, 0, 1], q: "Bis wann kann im Bouldern ein möglicher Technical Incident reklamiert werden?",
    o: ["Bis zum Beginn des nächsten planmäßigen Intervalls", "Bis zur Veröffentlichung der offiziellen Ergebnisse", "Bis der nächste Wettkämpfer am Boulder startet", "Bis zum Ende der Runde"],
    a: [0], e: "Nach Beginn des nächsten planmäßigen Intervalls kann kein möglicher TI mehr reklamiert werden.", r: "Anhang C §8.1" });

  add({ id: "B41", k: [0, 1, 1], c: true, q: "Mitten im Intervall dreht sich ein Griff. Der TI wird bestätigt und kann noch vor dem nächsten Intervall behoben werden. Welche Optionen hat die Athletin?",
    o: ["Sie macht im laufenden Intervall weiter, ohne zusätzliche Zeit oder Versuche", "Sie setzt ihre Versuche an diesem Boulder bis zu einem vom Jury-Präsidenten festgelegten Zeitpunkt aus", "Sie bekommt automatisch ein komplettes neues Intervall direkt im Anschluss", "Sie bekommt die Punkte für einen Top"],
    a: [0, 1], e: "Ist der TI vor dem nächsten Intervall behoben, wählt die Athletin: im aktuellen Intervall weitermachen (ohne Extra-Zeit oder -Versuche) oder aussetzen bis zu einem vom JP festgelegten Zeitpunkt.", r: "Anhang C §8.2" });

  add({ id: "B42", k: [0, 0, 2], q: "Ein bestätigter TI an einem Boulder lässt sich nicht vor dem nächsten Intervall beheben. Was passiert?",
    o: ["Das Intervall wird für die betroffene Person und alle, die den Boulder noch nicht versucht haben, ausgesetzt. Nach der Behebung oder Streichung geht es auf Anweisung des JP weiter", "Die ganze Runde wird neu gestartet", "Nur die betroffene Person setzt aus, alle anderen klettern den defekten Boulder normal", "Der Boulder wird automatisch für alle mit Top gewertet"],
    a: [0], e: "Das Intervall ruht für die betroffene Person und alle, die den Boulder noch nicht versucht haben. Nach Behebung (oder Streichung) setzen sie auf Anweisung des Jury-Präsidenten fort.", r: "Anhang C §8.3" });

  add({ id: "B43", k: [0, 2, 2], c: true, q: "Ein Athlet startet einen Versuch, als noch 2 Minuten und 10 Sekunden im Intervall übrig sind. Ein TI unterbricht ihn. Wie viel Ausgleichszeit darf er höchstens bekommen?",
    o: ["Höchstens 2 Minuten und 10 Sekunden", "Ein volles neues Intervall", "Höchstens 1 Minute", "Die Zeit bis zum Ende der Runde"],
    a: [0], e: "Ausgeglichen wird nur die verlorene oder nicht genutzte Zeit. Sie darf nicht länger sein als die Restzeit im Intervall zu dem Zeitpunkt, als der betroffene Versuch begann.", r: "Anhang C §8.5" });

  add({ id: "B44", k: [0, 1, 1], c: true, q: "Eine Athletin wartet nach einem TI im Transitbereich und geht vor Klärung zurück in den Aufwärmbereich. Folge?",
    o: ["Sie darf ihre Versuche nicht wieder aufnehmen", "Sie bekommt eine Verwarnung (Gelbe Karte), darf aber weiterklettern", "Keine, wenn sie pünktlich zurückkommt", "Sie wird disqualifiziert"],
    a: [0], e: "Wer den Transitbereich verlässt, bevor der Technical Incident gelöst ist, darf seine Versuche nicht wieder aufnehmen.", r: "Anhang C §8.4" });

  add({ id: "B45", k: [0, 0, 1], q: "Welche Frist gilt für einen Einspruch, der Top, Zone oder Anzahl der Versuche betrifft (ohne Anspruch auf zusätzliche Versuche)?",
    o: ["Medaillenphase: 2 Minuten, sonst 5 Minuten nach Veröffentlichung der offiziellen Ergebnisse", "Vor Ende des nächsten Intervalls", "Bevor der nächste Wettkämpfer startet", "Bis zum Ende des Wettkampftages"],
    a: [0], e: "Einsprüche nach §9.1 sind schriftlich innerhalb von 2 Minuten (Medaillenphase) bzw. 5 Minuten (andere Runden) nach Veröffentlichung der offiziellen Ergebnisse einzureichen.", r: "Anhang C §9.1" });

  add({ id: "B46", k: [0, 1, 1], q: "Ein Einspruch kann, wenn er Erfolg hat, zusätzliche Zeit oder Versuche bringen. Bis wann muss er im Finale im World-Series-Format eingelegt werden?",
    o: ["Bevor der nächste Wettkämpfer seine Versuche gestartet hat", "Vor Ende des nächstfolgenden Intervalls", "Innerhalb von 2 Minuten nach den offiziellen Ergebnissen", "Bis zur Siegerehrung"],
    a: [0], e: "In der Medaillenphase im World-Series- oder Classic-Format gilt: bevor der nächste Wettkämpfer seine Versuche beginnt. Im Intervallformat und in allen anderen Runden gilt: vor Ende des nächstfolgenden Intervalls.", r: "Anhang C §9.2" });

  add({ id: "B47", k: [1, 2, 1], c: true, q: "Im Halbfinale (Intervallformat) zeigt der Boulderschiedsrichter einer Athletin einen Top an und beendet damit ihre Versuche, obwohl noch Zeit übrig war. Ein Einspruch bestreitet den Top. Hat er Erfolg, bekäme sie zusätzliche Zeit. Bis wann muss der Einspruch eingelegt werden?",
    o: ["Vor Ende des nächstfolgenden Intervalls. Mündlich anmelden geht, schriftlich dann innerhalb von bis zu 5 Minuten", "Innerhalb von 5 Minuten nach den offiziellen Ergebnissen", "Bevor die nächste Athletin startet", "Gar nicht, ein angezeigter Top ist nicht anfechtbar"],
    a: [0], e: "Der Einspruch kann zu zusätzlicher Zeit oder zusätzlichen Versuchen führen, also gilt §9.2. Außerhalb von Finals im World-Series-/Classic-Format heißt das: vor Ende des nächstfolgenden Intervalls. Die Absicht kann mündlich angemeldet werden, schriftlich folgt innerhalb von bis zu 5 Minuten.", r: "Anhang C §9.2, §9.3" });

  add({ id: "B48", k: [1, 1, 1], c: true, q: "Ein Athlet reißt sich am Boulder die Fingerkuppe auf und blutet. Was gilt?",
    o: ["Er muss die Blutung stillen, bevor er weiterklettert. Verschmutzte Griffe werden vor dem nächsten Athleten gereinigt. Zusätzliche Zeit gibt es nicht", "Das ist ein Technical Incident mit Zusatzzeit", "Er darf blutend weiterklettern, die Griffe werden erst nach der Runde gereinigt", "Er muss die Runde abbrechen"],
    a: [0], e: "Eine blutende Verletzung ist kein Technical Incident. Zusatzzeit gibt es nur, wenn die Verletzung selbst Folge eines TI ist. Die Blutung muss gestillt sein, und kontaminierte Griffe werden gereinigt, bevor andere Wettkämpfer beginnen.", r: "AR §11.6 mit Anmerkung" });

  add({ id: "B49", k: [2, 1, 1], c: true, q: "Eine Athletin spuckt sich vor dem Versuch in die Hände. Wie ist das zu behandeln?",
    o: ["Speichel ist verboten. Kontaminierte Griffe werden wie bei Blut gereinigt, ohne Zusatzzeit. Sanktion möglich", "Erlaubt, weil Speichel die Griffe nicht verändert", "Erlaubt, wenn sie danach chalkt", "Nur im Finale verboten"],
    a: [0], e: "Speichel vor oder während eines Versuchs ist verboten. Verunreinigungen werden wie Blut behandelt und ohne Zusatzzeit gereinigt. Laut Judge Guide gibt es eine mündliche Ermahnung oder eine Verwarnung (Gelbe Karte).", r: "AR §3.4 (Anmerkung); Judge Guide" });

  add({ id: "B50", k: [0, 0, 1], q: "Was gilt im Flash-Format im Bouldern?",
    o: ["Mindestens 60 Minuten vor dem Start of Play gibt es eine Demonstration (Video oder live)", "Wettkämpfer bleiben im Wettkampfbereich, bis sie alle Boulder eines Sets beendet haben", "Aus der Transitzone dürfen sie mit Teamoffiziellen und anderen Wettkämpfern sprechen und deren Versuche beobachten", "Wettkämpfer müssen in der Isolationszone bleiben und dürfen niemanden beobachten"],
    a: [0, 1, 2], e: "Flash heißt: Demonstration mindestens 60 Minuten vorher, Verbleib im Wettkampfbereich bis zum Ende des Sets. Kommunikation und Beobachtung aus der Transitzone sind erlaubt. Isolation gibt es im Flash-Format nicht.", r: "Anhang C §4.7" });

  add({ id: "B51", k: [0, 0, 2], q: "Welche Erholungsphase gilt im Flash-Format mit 2 Boulder-Sets zwischen den Sets?",
    o: ["Mindestens 3 Versuchsphasen zwischen dem Ende der letzten Versuchsphase im ersten Set und dem Start im zweiten Set", "Mindestens 50 Minuten", "Mindestens eine Versuchsphase", "Es gibt keine Vorgabe"],
    a: [0], e: "Zwischen den Sets sind mindestens 3 Versuchsphasen Erholung garantiert.", r: "Anhang C §4.7(C)" });

  add({ id: "B52", k: [0, 0, 0], q: "Wann dürfen die Wettkämpfer im World-Series-Finale ihre Versuche beginnen?",
    o: ["Nach Aufruf durch den Call Zone Manager präsentieren sie sich dem Boulderschiedsrichter und starten mit dem Signal für den Beginn des Intervalls", "Sofort beim Betreten des Field of Play", "Wenn der Schiedsrichter „Go“ ruft", "Nach 40 Sekunden Besichtigung"],
    a: [0], e: "Im World-Series- und Classic-Finale gehen die Wettkämpfer auf Anweisung des Call Zone Managers raus, präsentieren sich dem Boulderschiedsrichter und starten mit dem Intervallsignal. Im Intervallformat dürfen sie dagegen sofort mit Beginn des Intervalls loslegen.", r: "Anhang C §4.11" });

  add({ id: "B53", k: [0, 0, 0], q: "Wer reinigt im Intervallformat die Boulder, die ein Athlet versucht hat?",
    o: ["Der Athlet selbst, innerhalb seines Intervalls", "Ausschließlich die Routenbauer", "Der Boulderschiedsrichter", "Der nächste Athlet"],
    a: [0], e: "Jeder Athlet reinigt die von ihm versuchten Boulder eigenverantwortlich innerhalb seines Intervalls. Gibt es Personal, soll der JP für eine Reinigung am Ende jeder Rotation sorgen.", r: "Anhang C §4.6 mit Anmerkung" });

  add({ id: "B54", k: [1, 2, 2], c: true, q: "Während eines Intervalls fällt die Zeitanzeige für einige Sekunden aus, Start- und Stoppsignal funktionieren normal. Ist das ein Technical Incident?",
    o: ["Nicht automatisch: Kritisch ist ein Ausfall im Bouldern erst, wenn Beginn oder Ende der Kletterzeit nicht gemessen werden können", "Ja, jeder Ausfall der Anzeige ist ein TI", "Ja, alle Athleten bekommen ein neues Intervall", "Nein, Zeitmessung ist im Bouldern egal"],
    a: [0], e: "Ein kritischer Ausfall des Zeitmesssystems liegt im Bouldern vor, wenn Beginn oder Ende der erlaubten Kletterzeit nicht gemessen werden können. Eine kurze Unterbrechung der Anzeige ohne Auswirkung auf die Signale ist nicht automatisch ein TI.", r: "Glossar „Technical Incident“ (D) mit Anmerkung" });

  add({ id: "B55", k: [2, 2, 1], c: true, q: "Ein Volumen ist als Startgriff markiert. Darauf ist ein kleiner Griff geschraubt. Daneben liegt ein zweites Volumen, das das erste berührt, aber nicht daran verschraubt ist. Was gehört laut Judge Guide zum Start?",
    o: ["Das markierte Volumen und der daran verschraubte Griff. Das nur anliegende Volumen gehört nicht dazu", "Nur das markierte Volumen", "Alle 3 Elemente", "Das anliegende Volumen, nicht aber der verschraubte Griff"],
    a: [0], e: "Ein Griff erbt die Markierung des Elements, an das er geschraubt ist. Ein nur anliegender, nicht verschraubter Griff erbt sie nicht. Er kann aber ein Blocker sein.", r: "Judge Guide (Inspection of Boulders); AR §1.12" });

  add({ id: "B56", k: [1, 0, 2], q: "Was beschreibt das alternative Qualifikationsformat „JAM“?",
    o: ["Ein Format mit begrenzten Versuchen, bei dem die Gesamtdauer der Runde festgelegt ist, aber keine einzelnen Rotationszeiten", "Ein On-Sight-Format mit 5-Minuten-Rotationen", "Ein K.-o.-Format mit Duellen", "Ein Format ohne Zonenwertung"],
    a: [0], e: "JAM ist ein Flash-Format mit begrenzten Versuchen. Festgelegt ist die Gesamtdauer der Runde, nicht die einzelnen Rotationszeiten.", r: "Anhang C §2.3 Tabelle 3 mit Anmerkung" });

  add({ id: "B57", k: [1, 0, 2], q: "Welche Mindestbreite pro Boulder soll eine Boulderwand haben?",
    o: ["3 Meter (z. B. 12 m für 4 gleichzeitig gekletterte Boulder)", "2 Meter", "5 Meter", "Es gibt keine Vorgabe"],
    a: [0], e: "Pro Boulder sollen mindestens 3 m Breite zur Verfügung stehen. Bei 4 gleichzeitig gekletterten Bouldern sind das 12 m oder 2 Wände mit je 6 m.", r: "Anhang C §1.1 mit Anmerkung" });

  add({ id: "B58", k: [1, 1, 2], c: true, q: "Ein Athlet verschüttet aus Unachtsamkeit seine Trinkflasche über die Fallschutzmatte. Was ist möglich?",
    o: ["Eine Sanktion nach AR §13.1", "Nichts, Wasser ist erlaubt", "Ein Technical Incident zu seinen Gunsten", "Zwangsweise Disqualifikation"],
    a: [0], e: "Bei Verstößen gegen §4.14 und bei unachtsamem oder vorsätzlichem Verschütten von Flüssigkeiten auf die Matten kann eine Sanktion verhängt werden.", r: "Anhang C §4.14 (Anmerkung); AR §13.1" });

  add({ id: "B59", k: [0, 0, 1], q: "Welche Anforderungen gelten für das Zeitmesssystem im Bouldern?",
    o: ["Es zeigt die verbleibende Intervallzeit bzw. die Zeit bis zum nächsten Intervall an", "Die Anzeige ist für alle auf dem Field of Play und in der Call Zone sichtbar", "Es gibt akustische Signale nach den offiziellen Spezifikationen", "Es misst die Kletterzeit jedes einzelnen Versuchs auf die Hundertstelsekunde"],
    a: [0, 1, 2], e: "Das System zeigt die verbleibende Zeit gut sichtbar auf dem Field of Play und in der Call Zone an und gibt akustische Signale nach Spezifikation.", r: "Anhang C §6.1" });

  add({ id: "B60", k: [2, 1, 1], c: true, q: "Ein Athlet hat Boulder 2 getoppt, aber noch Zeit. Kann er den Boulder für einen „schöneren“ Top noch einmal klettern?",
    o: ["Nein, mit dem Top endet seine Wertung an diesem Boulder. Der Schiedsrichter signalisiert das Ende der Versuche", "Ja, es zählt der bessere Versuch", "Ja, es zählt immer der letzte Versuch", "Ja, aber nur wenn er den ersten Top nicht kontrolliert hat"],
    a: [0], e: "Ein erfolgreicher Versuch wird als Top mit der Anzahl der dafür nötigen Versuche aufgezeichnet. Laut Judge Guide zeigt der Schiedsrichter mit erhobener Hand an, dass die Versuche beendet sind.", r: "AR §9.6; Judge Guide (Tops)" });
})();
