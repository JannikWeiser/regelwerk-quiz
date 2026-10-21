// Fragen Lead – Grundlage: Allgemeine Regeln (AR) und Anhang A
(function () {
  const D = "lead";
  const add = (q) => window.QUESTIONS.push(Object.assign({ d: D }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "L01", k: [0, 0, 0], cat: "W", q: "Wann gilt ein Versuch im Lead als begonnen?",
    o: ["Wenn der Wettkämpfer den Boden verlässt", "Wenn der Wettkämpfer den ersten nummerierten Griff berührt", "Wenn die 40 Sekunden Vorbereitungszeit abgelaufen sind", "Wenn der Routenschiedsrichter das Startzeichen gibt"],
    a: [0], e: "Im Lead beginnt der Versuch, sobald der Wettkämpfer den Boden verlässt.", r: "AR §7.1" });

  add({ id: "L02", k: [1, 1, 0], cat: "W", c: true, q: "Ein Athlet stellt vor dem Einstieg einen Fuß auf einen Tritt, nimmt ihn wieder herunter und sortiert noch einmal sein Seil. Ist der Versuch damit gestartet?",
    o: ["Der Routenschiedsrichter entscheidet nach Ermessen, ob es nur eine Positionsänderung oder der tatsächliche Start war", "Ja, jeder Kontakt mit einem Griff der Route startet den Versuch, egal wie kurz er ist", "Nein, ein Versuch startet erst, wenn beide Füße gleichzeitig den Boden verlassen haben", "Ja, und weil er den Boden danach wieder berührt hat, ist der Versuch bereits beendet"],
    a: [0], e: "Ob eine Bewegung eine Positionsänderung vor dem Start oder der tatsächliche Start ist, liegt im Ermessen des Routenschiedsrichters.", r: "AR §7.1 (Anmerkung)" });

  add({ id: "L03", k: [0, 0, 0], cat: "W", q: "Wann wird ein Versuch im Lead als erfolgreich (TOP) gewertet?",
    o: ["Wenn der Wettkämpfer die letzte Expressschlinge der Route eingehängt hat", "Wenn der Wettkämpfer den Topgriff mit beiden Händen kontrolliert", "Wenn der Wettkämpfer den Umlenker berührt", "Wenn der Wettkämpfer den höchsten nummerierten Griff des Wertungstopos erreicht"],
    a: [0], e: "Ein Lead-Versuch ist erfolgreich, wenn die letzte Expressschlinge der Route eingehängt wurde.", r: "AR §8.3" });

  add({ id: "L04", k: [1, 1, 1], cat: "W", c: true, q: "Eine Athletin hängt die letzte Expressschlinge von einem Griff ein, der 2 Griffe unterhalb des letzten nummerierten Griffs liegt. Wie lautet ihr Ergebnis?",
    o: ["TOP", "Der Griff, von dem aus sie eingehängt hat", "Der Griff, von dem aus sie eingehängt hat, mit „+“", "Der Versuch ist ungültig, weil sie nicht von der vorgesehenen Position eingehängt hat"],
    a: [0], e: "Das Ergebnis lautet TOP, egal von welchem Griff aus die letzte Expressschlinge eingehängt wurde.", r: "AR §8.3 (Anmerkung)" });

  add({ id: "L05", k: [0, 1, 0], cat: "W", q: "Welche Situationen führen speziell im Lead dazu, dass ein Versuch als nicht erfolgreich gewertet wird?",
    o: ["Eine Expressschlinge wird außerhalb der Reihenfolge eingehängt", "Eine Expressschlinge wird ausgehängt, ohne dass damit ein Z-Clip korrigiert wird", "Eine Kletterbewegung über die letzte sichere Position hinaus", "Eine Expressschlinge wird später als an der letzten Einhängeposition, aber noch vor der letzten sicheren Position eingehängt"],
    a: [0, 1, 2], e: "§8.2 nennt: Einhängen außerhalb der Reihenfolge, Aushängen (außer zum Korrigieren eines Z-Clips) und Klettern über die letzte sichere Position hinaus. Spätes Einhängen vor der letzten sicheren Position unterbricht nur die Wertung, der Versuch läuft weiter.", r: "AR §8.2" });

  add({ id: "L06", k: [1, 1, 1], cat: "W", c: true, q: "Während eines Versuchs hängt sich eine bereits eingehängte Expressschlinge von selbst aus. Wie wird das grundsätzlich bewertet?",
    o: ["Es wird angenommen, dass sie nicht ordnungsgemäß eingehängt war: Der Versuch ist an der letzten Einhängeposition dieser Expressschlinge nicht erfolgreich", "Es wird angenommen, dass sie defekt war: Es liegt automatisch ein Technical Incident vor und der Wettkämpfer erhält einen Neustart", "Es wird angenommen, dass sie korrekt eingehängt war: Das hat keine Folgen, solange der Wettkämpfer nicht stürzt", "Der Wettkämpfer muss die Expressschlinge sofort neu einhängen, sonst wird an der aktuellen Position gewertet"],
    a: [0], e: "Wenn es sich nicht schlüssig widerlegen lässt, gilt die Expressschlinge als nicht ordnungsgemäß eingehängt. Ausnahme: Es ist eindeutig belegt, dass sie richtig eingehängt war und sich durch Faktoren außerhalb der Kontrolle des Wettkämpfers ausgehängt hat.", r: "AR §8.2 (Anmerkung zu A)" });

  add({ id: "L07", k: [1, 0, 1], cat: "W", q: "Wie wird ein Z-Clip gewertet, solange er nicht korrigiert ist?",
    o: ["Die z-geklippte Expressschlinge gilt als nicht eingehängt; die Wertung stoppt an ihrer letzten Einhängeposition", "Der Z-Clip gilt als Einhängen außerhalb der Reihenfolge; der Versuch wird sofort als nicht erfolgreich beendet", "Beide Expressschlingen gelten als eingehängt; ein Z-Clip hat keinen Einfluss auf die Wertung", "Die untere Expressschlinge gilt als nicht eingehängt; die Wertung stoppt an deren letzter Einhängeposition"],
    a: [0], e: "Eine z-geklippte Expressschlinge gilt als nicht eingehängt. Die Wertung stoppt an der letzten Einhängeposition dieser Expressschlinge und läuft an derselben Stelle weiter, sobald der Z-Clip korrigiert ist.", r: "AR §8.2 (Anmerkung zu B)" });

  add({ id: "L08", k: [1, 0, 1], cat: "W", q: "Wie darf ein Wettkämpfer einen Z-Clip korrigieren?",
    o: ["Indem er eine der beiden betroffenen Expressschlingen aushängt und wieder korrekt einhängt", "Gar nicht, denn jedes Aushängen einer Expressschlinge beendet den Versuch als nicht erfolgreich", "Nur indem er bis unter die untere Expressschlinge abklettert und beide neu einhängt", "Nur nach ausdrücklicher Freigabe durch den Routenschiedsrichter, der das Klettern dafür unterbricht"],
    a: [0], e: "Ein Z-Clip wird korrigiert, indem eine der beiden betroffenen Expressschlingen ausgehängt und wieder eingehängt wird. Dieses Aushängen ist ausdrücklich erlaubt.", r: "AR §8.2(B) mit Anmerkung" });

  add({ id: "L09", k: [1, 2, 1], cat: "W", c: true, q: "Ein Athlet bemerkt seinen Z-Clip nicht und klettert über die letzte sichere Position der betroffenen Expressschlinge hinaus. Was gilt?",
    o: ["Der Versuch wird als nicht erfolgreich gewertet", "Der Versuch läuft weiter, die Wertung bleibt aber an der letzten Einhängeposition stehen", "Es liegt ein Technical Incident vor, weil das Seil falsch lief", "Der Schiedsrichter muss den Athleten auf den Z-Clip hinweisen und weiterklettern lassen"],
    a: [0], e: "Wer einen Z-Clip nicht korrigiert, fällt unter §8.2(C): Eine Kletterbewegung über die letzte sichere Position hinaus beendet den Versuch als nicht erfolgreich.", r: "AR §8.2(C) (Anmerkung zu B)" });

  add({ id: "L10", k: [1, 1, 1], cat: "W", q: "Welche Aussagen zu „letzter Einhängeposition“ und „letzter sicherer Position“ sind richtig?",
    o: ["Die beiden Positionen müssen nicht identisch sein", "Erreicht ein Wettkämpfer die letzte Einhängeposition ohne einzuhängen, wird die Wertung unterbrochen, der Versuch läuft aber weiter", "An der letzten sicheren Position muss die nächste Handlung das Einhängen sein", "Wer die letzte Einhängeposition ohne Einhängen passiert, ist sofort raus"],
    a: [0, 1, 2], e: "Die letzte Einhängeposition ist der letzte Griff, von dem aus Einhängen möglich ist. Die letzte sichere Position ist die Stelle, über die hinaus ein Weiterklettern ohne Einhängen unsicher wäre. Passiert man die Einhängeposition, ruht nur die Wertung. Erst ein Weiterklettern über die sichere Position beendet den Versuch.", r: "AR §8.2 (Anmerkung zu C)" });

  add({ id: "L11", k: [1, 2, 1], cat: "W", c: true, q: "Eine Athletin klettert 2 Griffe über die letzte Einhängeposition von Expressschlinge 7 hinaus, ohne einzuhängen. Dann hängt sie ein, noch bevor sie die letzte sichere Position passiert hat. Was gilt?",
    o: ["Der Versuch läuft weiter, die Wertung wird ab dem Griff der letzten Einhängeposition fortgesetzt", "Der Versuch ist nicht erfolgreich, weil sie zu spät eingehängt hat", "Die beiden Griffe über der Einhängeposition werden rückwirkend mitgewertet", "Sie muss zur letzten Einhängeposition zurückklettern, sonst ist der Versuch beendet"],
    a: [0], e: "Wer einhängt, bevor die letzte sichere Position passiert ist, klettert weiter. Die Wertung läuft ab dem Griff weiter, der als letzte Einhängeposition festgelegt ist.", r: "AR §8.2 (Anmerkung zu C)" });

  add({ id: "L12", k: [0, 0, 1], cat: "W", q: "Wie wird ein Safety Hold gekennzeichnet?",
    o: ["Mit einem blauen Kreuz am Griff und einem zweiten blauen Kreuz neben dem Haken der zugehörigen Expressschlinge", "Mit einem roten Kreuz am Griff und einem zweiten roten Kreuz neben dem Haken der zugehörigen Expressschlinge", "Mit schwarzem Tape um den Griff und einem Hinweis neben dem Haken der zugehörigen Expressschlinge", "Nur auf dem Wertungstopo und in der Besichtigung angekündigt, aber nicht an der Wand markiert"],
    a: [0], e: "Safety Holds bekommen ein blaues Kreuz, ein zweites blaues Kreuz sitzt neben dem Haken der zugehörigen Expressschlinge. Außerdem stehen sie auf dem Wertungstopo und werden in der gemeinsamen Besichtigung angekündigt.", r: "AR §1.13" });

  add({ id: "L13", k: [2, 1, 1], cat: "W", c: true, q: "Ein Athlet steht am markierten Safety Hold und macht, ohne die zugehörige Expressschlinge eingehängt zu haben, eine Kletterbewegung darüber hinaus. Was passiert?",
    o: ["Der Versuch ist nicht erfolgreich und wird abgebrochen", "Der Versuch läuft weiter, gewertet wird nur bis zum Safety Hold", "Er bekommt eine Verwarnung (Gelbe Karte) und darf weiterklettern", "Nichts, solange er die Expressschlinge später noch einhängt"],
    a: [0], e: "Ein markierter Safety Hold ist eine letzte sichere Position. Wer ohne Einhängen eine Kletterbewegung darüber hinaus macht, beendet den Versuch erfolglos. Laut Judge Guide müssen JP oder DAV-Schiedsrichter ihn dann abbrechen.", r: "AR §8.2(C); Glossar „Letzte sichere Position“" });

  add({ id: "L14", k: [1, 0, 1], cat: "J", q: "Wer bestimmt eine letzte sichere Position, die nicht als Safety Hold markiert ist?",
    o: ["Der Jury-Präsident oder der DAV-Schiedsrichter nach begründeter Meinung", "Ausschließlich der Chefroutenbauer, und zwar vor Beginn der Runde", "Der Sichernde, weil er die Sturzsituation am besten einschätzen kann", "Der Routenschiedsrichter allein, ohne Rücksprache mit anderen"],
    a: [0], e: "Laut Glossar ist das ein Griff, über den hinaus ein Weiterbewegen nach begründeter Meinung des Jury-Präsidenten oder des DAV-Schiedsrichters unsicher wäre.", r: "Glossar „Letzte sichere Position“" });

  add({ id: "L15", k: [0, 0, 0], cat: "W", q: "Was ist das Ergebnis eines nicht erfolgreichen Lead-Versuchs?",
    o: ["Der letzte mit den Händen kontrolliert gehaltene Griff, an dem ein Establishing-Movement abgeschlossen oder ein Advancing-Movement durchgeführt wurde", "Der höchste Griff, den der Wettkämpfer mit einer Hand berührt hat, auch ohne ihn kontrolliert zu halten", "Der höchste Griff, auf dem der Wettkämpfer mit einem Fuß stand oder den er mit einer Hand kontrolliert hat", "Der Griff, von dem aus die letzte Expressschlinge eingehängt wurde, unabhängig von späteren Zügen"],
    a: [0], e: "Gewertet wird der letzte mit den Händen kontrollierte Griff, an dem ein Establishing-Movement abgeschlossen oder von dem aus ein Advancing-Movement gemacht wurde.", r: "AR §9.1" });

  add({ id: "L16", k: [0, 1, 0], cat: "W", c: true, q: "Ein Athlet hält Griff 23 kontrolliert. Er bewegt Hüfte und Hand deutlich Richtung Griff 24, verfehlt ihn und stürzt. Wie lautet sein Ergebnis?",
    o: ["23+", "23", "24", "24+"],
    a: [0], e: "Die Bewegung von Hüfte bzw. Schulter und Hand zum nächsten Griff ist ein Advancing-Movement vom kontrollierten Griff 23 aus. Dafür gibt es das „+“.", r: "AR §9.1(B)" });

  add({ id: "L17", k: [0, 1, 0], cat: "W", c: true, q: "Eine Athletin zieht von Griff 23 kontrolliert zu Griff 24, berührt ihn, kann ihn aber nicht halten und stürzt sofort. Wie lautet ihr Ergebnis?",
    o: ["23+", "24", "24+", "23"],
    a: [0], e: "Griff 24 wurde nicht kontrolliert, also gibt es kein Establishing-Movement an 24. Die Bewegung von 23 aus war ein Advancing-Movement, deshalb lautet das Ergebnis 23+.", r: "AR §9.1" });

  add({ id: "L18", k: [1, 1, 0], cat: "W", c: true, q: "Ein Athlet hält Griff 30. Statt zum nächsten Griff zu ziehen, kippt sein Körper beim Ansetzen von der Wand und vom nächsten Griff weg, und er stürzt. Wie lautet sein Ergebnis?",
    o: ["30", "30+", "31", "Der Versuch zählt nicht"],
    a: [0], e: "Eine Bewegung ist kein Advancing-Movement, wenn der Körper dabei vom nächsten Griff oder von der Kletterfläche weg abfällt. Es bleibt bei 30 ohne „+“.", r: "Glossar „Advancing-Movement“ (Anmerkung)" });

  add({ id: "L19", k: [1, 0, 0], cat: "W", q: "Woran erkennt man, dass ein Establishing-Movement abgeschlossen ist?",
    o: ["Die Bewegung kommt zum Stillstand", "Der Wettkämpfer kann die hintere Hand loslassen oder neu positionieren", "Der Körperschwerpunkt verlagert sich und ein oder beide Füße werden neu gesetzt", "Der Griff wurde mit mindestens einem Finger berührt"],
    a: [0, 1, 2], e: "Die Indikatoren sind: die Bewegung stoppt, die hintere Hand kann losgelassen oder neu gesetzt werden, Schwerpunkt und Füße werden verlagert. Eine bloße Berührung reicht nicht.", r: "Glossar „Establishing-Movement“" });

  add({ id: "L20", k: [1, 0, 0], cat: "W", q: "Was ist der Indikator für ein Advancing-Movement?",
    o: ["Hüfte oder Schultern und die Hand bewegen sich gleichzeitig oder nacheinander in Richtung des nächsten Griffs der Sequenz", "Der Wettkämpfer schaut zum nächsten Griff der Sequenz und löst dabei eine Hand vom aktuellen Griff", "Der Wettkämpfer setzt einen Fuß höher und verlagert dabei sein Gewicht auf den aktuellen Griff", "Der Wettkämpfer chalkt die Hand für den nächsten Zug und schüttelt den anderen Arm aus"],
    a: [0], e: "Ein Advancing-Movement zeigt sich daran, dass sich Hüfte oder Schultern und die Hand gleichzeitig oder nacheinander zum nächsten Griff der Sequenz bewegen.", r: "Glossar „Advancing-Movement“" });

  add({ id: "L21", k: [0, 1, 1], cat: "W", c: true, q: "Ein Athlet hält Griff 27 kontrolliert und hängt dann eine Expressschlinge außerhalb der Reihenfolge ein. Kann er das Postfix „+“ erhalten?",
    o: ["Nein, das „+“ ist ausgeschlossen, wenn der Versuch nach §8.2 nicht erfolgreich endet", "Ja, wenn er vorher schon eine Bewegung zum nächsten Griff begonnen hatte", "Ja, das „+“ hängt nur von der Bewegung ab, nicht vom Grund des Versuchsendes", "Nur wenn der DAV-Schiedsrichter nach Videoprüfung ausdrücklich zustimmt"],
    a: [0], e: "Endet ein Versuch aus einem Lead-spezifischen Grund nach §8.2 (Reihenfolge, Aushängen, letzte sichere Position), gibt es kein „+“.", r: "AR §9.2" });

  add({ id: "L22", k: [1, 0, 1], cat: "W", q: "Welcher Griff gilt im Lead als „nächster Griff in einer Sequenz“?",
    o: ["Normalerweise der Griff mit der nächsten Nummer auf dem Wertungstopo; ein höher nummerierter, wenn ein anderer Wettkämpfer zeigt, dass der Zug dorthin möglich ist", "Immer und ausschließlich der Griff mit der nächsten Nummer auf dem Wertungstopo, auch wenn andere Wettkämpfer Griffe überspringen", "Der Griff, den der Wettkämpfer selbst ansteuert, auch wenn er auf dem Wertungstopo eine niedrigere Nummer hat", "Der Griff, den der Chefroutenbauer während der Runde nachträglich festlegt, sobald der erste Wettkämpfer dort ist"],
    a: [0], e: "Normalerweise ist es die nächste fortlaufende Nummer. Zeigt ein anderer Wettkämpfer, dass eine Bewegung bis zu einem höher nummerierten Griff möglich ist, kann auch dieser als nächster Griff gelten.", r: "AR §9.1 (Anmerkung Advancing-Movement)" });

  add({ id: "L23", k: [0, 1, 0], cat: "W", c: true, q: "Ein Athlet steht mit dem Fuß auf Griff 31, mit den Händen hält er höchstens Griff 29 kontrolliert. Dann stürzt er. Zählt Griff 31 für die Wertung?",
    o: ["Nein, nur mit den Händen genutzte Griffe zählen für die Wertung", "Ja, jeder genutzte Griff zählt, egal ob mit Hand oder Fuß", "Ja, aber nur mit „+“, weil er ihn nicht mit der Hand hielt", "Nur wenn er auf Griff 31 erkennbar stabil gestanden hat"],
    a: [0], e: "Für die Wertung zählen nur Griffe, die mit den Händen genutzt werden.", r: "Anhang A §5.1" });

  add({ id: "L24", k: [0, 0, 1], cat: "J", q: "Welche Aussagen zum Wertungstopo im Lead sind richtig?",
    o: ["Es wird vom Chefroutenbauer in Absprache mit den On-field Officials vor jeder Runde erstellt", "Nach dem Start of Play darf es nicht mehr verändert oder ergänzt werden", "Es kann nach Schließung der Isolationszone veröffentlicht werden", "Es darf während der Runde angepasst werden, wenn ein Athlet eine neue Lösung zeigt"],
    a: [0, 1, 2], e: "Das Wertungstopo wird vor der Runde erstellt und darf nach dem Start of Play nicht mehr geändert werden. Veröffentlicht werden kann es nach Schließung der Isolationszone. Den einspruchsberechtigten Teamoffiziellen soll es nach der Besichtigung bzw. vor dem Start of Play vorliegen.", r: "Anhang A §5.1" });

  add({ id: "L25", k: [1, 0, 0], cat: "W", q: "Wie lange ist die Kletterzeit pro Route bei der Deutschen Meisterschaft Lead?",
    o: ["6 Minuten", "4 Minuten", "5 Minuten", "8 Minuten"],
    a: [0], e: "In allen Runden der DM Lead gelten 6 Minuten. Laut AR sollte die Kletterzeit 6 Minuten grundsätzlich nicht überschreiten.", r: "Anhang A §2.1 Tabelle 1; AR §6.3" });

  add({ id: "L26", k: [0, 0, 0], cat: "W", q: "Wie viel Zeit hat ein Wettkämpfer nach Betreten des Field of Play, um die Route zu besichtigen und sich vorzubereiten?",
    o: ["40 Sekunden", "30 Sekunden", "60 Sekunden", "2 Minuten"],
    a: [0], e: "Nach Betreten des Field of Play bleiben 40 Sekunden für Besichtigung und letzte Vorbereitungen.", r: "Anhang A §4.12" });

  add({ id: "L27", k: [0, 0, 0], cat: "W", q: "Wie lange dauert die gemeinsame Besichtigung einer On-Sight-Route im Lead?",
    o: ["6 Minuten", "2 Minuten", "4 Minuten", "10 Minuten"],
    a: [0], e: "Für On-Sight-Routen gibt es eine 6-minütige gemeinsame Besichtigung. Teamoffizielle dürfen nicht teilnehmen.", r: "Anhang A §4.8" });

  add({ id: "L28", k: [1, 0, 0], cat: "W", q: "Was dürfen Wettkämpfer während der gemeinsamen Besichtigung einer Lead-Route?",
    o: ["Jeden Griff berühren, den sie vom Boden aus erreichen", "Ein Fernglas benutzen", "Handschriftliche Notizen und Skizzen anfertigen", "Fotos der Route machen"],
    a: [0, 1, 2], e: "Erlaubt sind das Berühren aller vom Boden erreichbaren Griffe, ein Fernglas sowie handschriftliche Notizen und Skizzen. Fotos und Aufnahmen sind verboten. Bewegungen einüben ist ebenfalls nicht erlaubt.", r: "AR §5.4(A) mit Anmerkung" });

  add({ id: "L29", k: [1, 0, 0], cat: "J", q: "Wie viele Wettkämpfer qualifizieren sich bei der Deutschen Meisterschaft Lead für das Halbfinale und für das Finale?",
    o: ["24 ins Halbfinale, 8 ins Finale", "26 ins Halbfinale, 8 ins Finale", "20 ins Halbfinale, 10 ins Finale", "24 ins Halbfinale, 10 ins Finale"],
    a: [0], e: "Laut Tabelle 1 gilt: Halbfinale Quote 24, Finale Quote 8.", r: "Anhang A §2.1 Tabelle 1" });

  add({ id: "L30", k: [1, 0, 0], cat: "J", q: "Wie ist der Deutsche Jugendcup Lead aufgebaut?",
    o: ["Qualifikation mit 2 Flash-Routen und Finale On Sight, ohne Halbfinale", "Qualifikation mit 2 Flash-Routen, Halbfinale und Finale On Sight wie bei der DM", "Nur eine Runde mit 3 Routen im Flash-Format, ohne Finale", "Qualifikation mit 2 Routen On Sight und Finale im Flash-Format"],
    a: [0], e: "Im DJC Lead gibt es kein Halbfinale: Qualifikation mit 2 Routen im Flash-Format, Finale mit 1 Route On Sight, jeweils 6 Minuten.", r: "Anhang A §2.2 Tabelle 2" });

  add({ id: "L31", k: [0, 1, 0], cat: "J", c: true, q: "Beim Deutschen Jugendcup Lead sind in einer Kategorie zum Registrationsschluss 18 Athletinnen registriert. Wie groß ist die Finalquote?",
    o: ["6", "8", "10", "9"],
    a: [0], e: "Die Finalquote im DJC beträgt 10. Bei weniger als 20 Startern zum Registrationsschluss sinkt sie auf 6.", r: "Anhang A §2.2" });

  add({ id: "L32", k: [1, 2, 0], cat: "J", c: true, q: "In der Lead-Qualifikation mit 2 Routen starten 21 Wettkämpfer (Startreihenfolge „zufällig, versetzt“). Wer startet auf Route 2 als Erster?",
    o: ["Der Wettkämpfer, der auf Route 1 als 11. startet", "Der Wettkämpfer, der auf Route 1 als 10. startet", "Der Wettkämpfer, der auf Route 1 als 12. startet", "Der Wettkämpfer, der auf Route 1 als Letzter startet"],
    a: [0], e: "Die Reihenfolge auf Route 2 ist um die halbe Starterzahl versetzt, abgerundet. Bei 21 Startern sind das 10 Plätze, also startet der 11. von Route 1 auf Route 2 als Erster.", r: "Anhang A §2.1 mit Anmerkung" });

  add({ id: "L33", k: [1, 0, 0], cat: "W", q: "Was bedeutet die Startreihenfolge „Rang, absteigend“ im Halbfinale und Finale?",
    o: ["Der bestplatzierte Wettkämpfer der Vorrunde startet als Letzter", "Der bestplatzierte Wettkämpfer der Vorrunde startet als Erster", "Die Reihenfolge wird ausgelost", "Es starten abwechselnd Damen und Herren"],
    a: [0], e: "Bei absteigender Reihenfolge startet der Bestplatzierte zuletzt. Bei gleicher Platzierung wird gelost.", r: "Glossar „Absteigende Reihenfolge“" });

  add({ id: "L34", k: [0, 1, 1], cat: "J", c: true, q: "Finalquote 8: Nach dem Halbfinale liegen 3 Athleten gemeinsam auf Platz 7, auch nach Count-back. Wie viele Athleten kommen ins Finale?",
    o: ["9", "8", "7", "Es wird ein Stechen geklettert"],
    a: [0], e: "Die Quote wird mit den Bestplatzierten aufgefüllt, inklusive aller, die auf der letzten Qualifikationsposition gleichplatziert sind. Plätze 1–6 plus dreimal Platz 7 ergibt 9 Finalisten.", r: "Anhang A §2.3" });

  add({ id: "L35", k: [0, 0, 1], cat: "J", q: "Ab wie vielen Startern muss eine Lead-Route während der Runde gereinigt werden, und wie groß darf das Intervall höchstens sein?",
    o: ["Ab mehr als 22 Startern; das Intervall sollte höchstens 20 und darf höchstens 22 Wettkämpfer umfassen", "Ab 20 Startern; das Intervall sollte höchstens 15 und darf höchstens 18 Wettkämpfer umfassen", "Ab mehr als 30 Startern; das Intervall sollte höchstens 25 und darf höchstens 30 Wettkämpfer umfassen", "Gar nicht; eine Reinigung ist nur zwischen den Runden vorgesehen, egal wie viele Starter es gibt"],
    a: [0], e: "Bei mehr als 22 Startern wird in gleichmäßigen Abständen gereinigt. Das Intervall sollte nicht mehr als 20 und darf nicht mehr als 22 Wettkämpfer umfassen. Die Reinigungen stehen in der offiziellen Startliste.", r: "Anhang A §4.3" });

  add({ id: "L36", k: [0, 0, 1], cat: "J", q: "Wie viel Zeit muss ein Wettkämpfer mindestens zwischen dem Ende seines Versuchs auf der ersten und dem Start auf der zweiten Qualifikationsroute haben?",
    o: ["50 Minuten", "30 Minuten", "60 Minuten", "20 Minuten"],
    a: [0], e: "Hat eine Runde mehr als eine Route, stehen jedem Wettkämpfer mindestens 50 Minuten zwischen den Versuchen zu.", r: "Anhang A §4.4" });

  add({ id: "L37", k: [0, 0, 1], cat: "J", q: "Halbfinale und Finale finden am selben Tag statt. Welcher Mindestabstand gilt?",
    o: ["1 Stunde zwischen Veröffentlichung der offiziellen Halbfinalergebnisse und dem Start of Play des Finales", "30 Minuten zwischen dem letzten Halbfinalversuch und dem Start of Play des Finales", "2 Stunden zwischen Veröffentlichung der offiziellen Halbfinalergebnisse und dem Start of Play des Finales", "Kein fester Mindestabstand, der Jury-Präsident legt ihn je nach Zeitplan fest"],
    a: [0], e: "Zwischen der Veröffentlichung der offiziellen Ergebnisse einer Runde und dem Start of Play der nächsten Runde muss mindestens 1 Stunde liegen.", r: "Anhang A §4.5" });

  add({ id: "L38", k: [0, 0, 1], cat: "J", q: "Wie und wann wird eine Flash-Route im Lead demonstriert?",
    o: ["Mindestens 60 Minuten vor dem geplanten Start of Play, als Video oder, falls nicht möglich, live", "Unmittelbar vor dem ersten Versuch, ausschließlich als Live-Demonstration an der Wand", "Am Vortag im Technical Meeting, als Video für die Teamoffiziellen", "Gar nicht, denn Flash bedeutet, dass es keine Informationen zur Route gibt"],
    a: [0], e: "Die Routendemonstration gibt es mindestens 60 Minuten vor dem Start of Play, bevorzugt als Video (Download, Stream oder Dauerschleife im Aufwärmbereich), sonst live.", r: "Anhang A §4.7" });

  add({ id: "L39", k: [0, 1, 1], cat: "W", c: true, q: "In einer On-Sight-Runde verlässt eine Athletin nach Schließung der Isolationszone ohne Erlaubnis die Iso, um etwas aus dem Auto zu holen. Was gilt?",
    o: ["Sie ist nicht startberechtigt und wird als DNS gewertet", "Sie erhält eine Verwarnung (Gelbe Karte) und darf starten", "Sie startet als Letzte der Runde", "Das ist erlaubt, solange sie die Route nicht gesehen hat"],
    a: [0], e: "Wer die Isolationszone nach der Schließzeit ohne Erlaubnis verlässt, ist nicht startberechtigt und wird als DNS gewertet.", r: "Anhang A §4.2" });

  add({ id: "L40", k: [1, 1, 1], cat: "J", c: true, q: "Ein Athlet ist zu seinem Zeitpunkt nicht in der Call Zone, weil ihn die Sanitäter wegen einer Kleinigkeit aufgehalten haben. Was gilt?",
    o: ["Grundsätzlich DNS auf dieser Route, aber der Jury-Präsident kann ihn klettern lassen, weil die Abwesenheit außerhalb seines Einflusses lag", "Immer DNS auf dieser Route, denn Ausnahmen für die Call Zone sind im Regelwerk nicht vorgesehen", "Er startet automatisch am Ende der Runde, ohne dass jemand darüber entscheiden muss", "Der Routenschiedsrichter entscheidet allein, ob er noch klettern darf"],
    a: [0], e: "Wer nicht rechtzeitig in der Call Zone ist, wird als DNS markiert. Der Jury-Präsident kann eine Ausnahme machen, wenn die Abwesenheit auf Faktoren außerhalb des Einflussbereichs des Wettkämpfers zurückgeht.", r: "Anhang A §4.10 mit Anmerkung" });

  add({ id: "L41", k: [0, 0, 0], cat: "W", q: "Was muss der Sichernde prüfen, bevor der Wettkämpfer seinen Versuch startet?",
    o: ["Das Seil ist frei von Krangeln und Knoten", "Der Klettergurt ist ordnungsgemäß geschlossen", "Das Seil ist mit Achterknoten und zusätzlichem Sicherungsknoten eingebunden", "Die Kletterschuhe sind fest geschnürt"],
    a: [0, 1, 2], e: "Der Sichernde prüft das Seil (kein Krangel, kein Knoten), den geschlossenen Gurt und den Achterknoten mit Sicherungsknoten.", r: "Anhang A §4.11" });

  add({ id: "L42", k: [0, 0, 0], cat: "W", q: "In welcher Reihenfolge werden Wettkämpfer auf einer einzelnen Lead-Route gewertet?",
    o: ["Erst alle mit erfolgreichem Versuch, dann alle anderen absteigend nach ihrer Wertung", "Erst alle mit erfolgreichem Versuch nach Kletterzeit, dann alle anderen nach Startreihenfolge", "Alle nach ihrer Wertung, bei Gleichstand entscheidet die Startreihenfolge", "Erst alle mit „+“, dann alle ohne „+“, jeweils absteigend nach ihrer Wertung"],
    a: [0], e: "Zuerst kommen alle mit TOP, danach alle mit erfolglosem Versuch, absteigend nach ihrer Wertung an der Route.", r: "Anhang A §7.1" });

  add({ id: "L43", k: [0, 0, 0], cat: "W", q: "Wie werden die Qualifikationspunkte im Lead berechnet?",
    o: ["Als geometrisches Mittel der Fractional Rankings auf den Routen, gerundet auf 3 Dezimalstellen; weniger ist besser", "Als Summe der Fractional Rankings auf den Routen, gerundet auf 3 Dezimalstellen; weniger ist besser", "Als arithmetisches Mittel der erreichten Griffe auf den Routen, gerundet auf 3 Dezimalstellen; mehr ist besser", "Aus der besseren der beiden Routenplatzierungen; die schlechtere Route wird gestrichen"],
    a: [0], e: "QP ist die n-te Wurzel aus dem Produkt der Fractional Rankings Pr auf allen n Routen, gerundet auf 3 Dezimalstellen. Ein kleinerer Wert ist besser.", r: "Anhang A §7.2" });

  add({ id: "L44", k: [0, 2, 0], cat: "W", c: true, q: "Eine Athletin wird auf Route 1 alleinige Zweite und auf Route 2 alleinige Achte. Wie viele Qualifikationspunkte hat sie?",
    o: ["4,000", "5,000", "10,000", "16,000"],
    a: [0], e: "√(2 × 8) = √16 = 4,000.", r: "Anhang A §7.2" });

  add({ id: "L45", k: [2, 2, 0], cat: "W", stufe: 2, c: true, q: "Ein Athlet toppt Route 1 gemeinsam mit 2 anderen (3 Wettkämpfer gleichauf auf Platz 1). Auf Route 2 ist er alleiniger Achter. Wie viele Qualifikationspunkte hat er?",
    o: ["4,000", "2,828", "5,000", "3,000"],
    a: [0], e: "3 Gleichplatzierte teilen sich die Plätze 1–3, ihr Fractional Ranking ist (1+2+3)/3 = 2. √(2 × 8) = 4,000.", r: "Anhang A §7.2; Glossar „Ranking“" });

  add({ id: "L46", k: [1, 1, 1], cat: "W", stufe: 2, c: true, q: "Ein Wettkämpfer klettert in der Qualifikation nur Route 1 und tritt auf Route 2 nicht an. Wie wird er gewertet?",
    o: ["Er wird gewertet und auf Route 2 gleichrangig als Letzter eingestuft", "Er wird für die gesamte Runde als DNS markiert und nicht gewertet", "Er wird gewertet, aber nur mit seiner Platzierung auf Route 1", "Er wird disqualifiziert, weil er nicht alle Routen geklettert ist"],
    a: [0], e: "Wer auf mindestens einer Route gestartet ist, wird gewertet. Ohne Ergebnis auf der anderen Route gilt er dort als gleichrangig Letzter. DNS für die Runde ist nur, wer auf keiner Route gestartet ist.", r: "Anhang A §7.2 mit Anmerkung" });

  add({ id: "L47", k: [0, 0, 0], cat: "W", q: "Wie werden Gleichstände im Lead-Halbfinale bzw. -Finale aufgelöst?",
    o: ["Zuerst per Count-back auf die Vorrunde, in der geplanten Medaillenphase auf dem Podium danach über die Kletterzeit", "Zuerst über die Kletterzeit, in der geplanten Medaillenphase auf dem Podium danach per Count-back auf die Vorrunde", "Zuerst per Count-back auf die Vorrunde, auf dem Podium danach durch ein Superfinale der Gleichplatzierten", "Zuerst per Count-back auf die Qualifikation, danach in allen Runden durch Los"],
    a: [0], e: "Zuerst gilt der Count-back zum General Ranking nach der Vorrunde. Bleiben in der geplanten Medaillenphase Gleichstände auf dem Podium, entscheidet die tatsächliche Kletterzeit (kürzer ist besser).", r: "Anhang A §7.3" });

  add({ id: "L48", k: [1, 0, 1], cat: "W", q: "Wie wird die Kletterzeit gemessen, wenn sie im Finale einen Podiumsgleichstand entscheidet?",
    o: ["Auf die volle Sekunde abgerundet; bei TOP endet sie mit dem Schließen des Schnappers der letzten Expressschlinge, sonst mit dem Sturz", "Auf die Hundertstelsekunde genau; bei TOP endet sie mit dem Berühren des Topgriffs, sonst mit dem Sturz", "Auf die volle Sekunde aufgerundet; bei TOP und bei Sturz endet sie erst, wenn der Wettkämpfer wieder am Boden ist", "Auf die Zehntelsekunde genau; bei TOP endet sie mit dem Einhängen der vorletzten Expressschlinge, sonst mit dem Sturz"],
    a: [0], e: "Gemessen wird auf die volle Sekunde abgerundet. Endzeitpunkt bei TOP: Der Schnapper der letzten Expressschlinge hat sich geschlossen. Bei erfolglosem Versuch: der Sturz oder der sonstige Grund für das Ende.", r: "Anhang A §7.3 (Anmerkung zu B)" });

  add({ id: "L49", k: [1, 2, 2], cat: "J", c: true, q: "Bei einer DM Lead wird das Finale abgesagt, nachdem das Halbfinale bereits begonnen hat. Wird die Kletterzeit im Halbfinale zur Auflösung von Podiumsgleichständen genutzt?",
    o: ["Nein, das Finale bleibt die geplante Medaillenphase, die Halbfinalergebnisse werden nicht neu berechnet", "Ja, das Halbfinale wird zur geplanten Medaillenphase und die Kletterzeit entscheidet die Podiumsplätze", "Ja, aber nur für Platz 1; die Plätze 2 und 3 bleiben gleichplatziert", "Nein, die Podiumsplätze werden in diesem Fall unter den Gleichplatzierten ausgelost"],
    a: [0], e: "Geplante Medaillenphase ist die letzte Runde im Zeitplan vor Beginn dieser Runde. Wird das Finale erst nach Beginn des Halbfinales abgesagt, bleibt es geplante Medaillenphase, und die Kletterzeit wird im Halbfinale nicht herangezogen. Bei einer Absage vor Beginn des Halbfinales wäre das anders.", r: "Anhang A §7.3 (Anmerkung zur Medaillenphase)" });

  add({ id: "L50", k: [0, 0, 1], cat: "J", stufe: 1, q: "Bei wem muss ein möglicher Technical Incident im Lead gemeldet werden, und wer entscheidet?",
    o: ["Meldung unverzüglich an einen DAV-Schiedsrichter; der DAV-Schiedsrichter entscheidet", "Meldung unverzüglich an den Routenschiedsrichter; der Routenschiedsrichter entscheidet", "Meldung unverzüglich an den Event Delegate; der Event Delegate entscheidet", "Meldung schriftlich an die Einspruchsjury; die Einspruchsjury entscheidet"],
    a: [0], e: "Wettkämpfer, Teamoffizielle, Sicherer, Routenbauer und On-field Officials melden mögliche TIs unverzüglich einem DAV-Schiedsrichter. Er entscheidet über die Bestätigung.", r: "Anhang A §8.1" });

  add({ id: "L51", k: [0, 0, 1], cat: "J", q: "Bis wann kann im Lead ein möglicher Technical Incident reklamiert werden?",
    o: ["Bis der planmäßig nächste Wettkämpfer auf der betroffenen Route gestartet ist", "Bis zur Veröffentlichung der offiziellen Ergebnisse der betroffenen Runde", "Bis 5 Minuten nach dem Ende des betroffenen Versuchs", "Bis der letzte Wettkämpfer der Runde seinen Versuch beendet hat"],
    a: [0], e: "Sobald der planmäßig nächste Wettkämpfer auf der betroffenen Route gestartet ist, kann kein TI mehr reklamiert werden.", r: "Anhang A §8.1" });

  add({ id: "L52", k: [0, 2, 1], cat: "J", c: true, q: "Ein Athlet stürzt an Griff 14 wegen eines bestätigten Technical Incidents (loser Griff). Wie lang ist seine Erholungszeit?",
    o: ["14 Minuten", "20 Minuten", "7 Minuten", "Die verbleibende Kletterzeit"],
    a: [0], e: "Pro gewertetem Griff vor dem TI gibt es 1 Minute Erholungszeit, maximal 20 Minuten. 14 Griffe ergeben 14 Minuten.", r: "Anhang A §8.2(B)" });

  add({ id: "L53", k: [0, 2, 1], cat: "J", c: true, q: "Eine Athletin fällt an Griff 35 wegen eines bestätigten Technical Incidents. Wie lang ist ihre Erholungszeit?",
    o: ["20 Minuten", "35 Minuten", "30 Minuten", "17,5 Minuten"],
    a: [0], e: "1 Minute pro gewertetem Griff, aber höchstens 20 Minuten.", r: "Anhang A §8.2(B)" });

  add({ id: "L54", k: [0, 0, 1], cat: "J", q: "Welches Ergebnis zählt nach einem Neustart wegen eines Technical Incidents im Lead?",
    o: ["Das bessere Ergebnis aus ursprünglichem und neu gestartetem Versuch", "Immer das Ergebnis des neu gestarteten Versuchs, auch wenn es schlechter ist", "Immer das ursprüngliche Ergebnis, der Neustart dient nur der Kontrolle", "Der Durchschnitt aus ursprünglichem und neu gestartetem Versuch"],
    a: [0], e: "Gewertet wird das bessere der beiden Ergebnisse.", r: "Anhang A §8.4; AR §11.4(C)" });

  add({ id: "L55", k: [0, 1, 2], cat: "J", c: true, q: "Ein Athlet hätte nach einem bestätigten TI einen Neustart. Mit seinem bisherigen Ergebnis ist er aber sicher qualifiziert, und der Neustart kann seine Platzierung am Ende der Runde nicht beeinflussen. Was passiert?",
    o: ["Der Neustart wird abgesagt", "Er muss trotzdem neu starten", "Er darf wählen, ob er neu startet", "Der Neustart wird ans Ende der Runde verschoben"],
    a: [0], e: "Ein Neustart wird abgesagt, wenn er die Platzierung des Wettkämpfers am Ende der Runde nicht beeinflussen kann.", r: "Anhang A §8.3" });

  add({ id: "L56", k: [0, 1, 1], cat: "J", c: true, q: "Ein Athlet wartet nach einem möglichen TI im separaten Bereich und geht ohne Erlaubnis zu seinem Trainer, um mit ihm zu sprechen. Folge?",
    o: ["Der Technical Incident gilt als abgeschlossen, weitere Versuche sind nicht mehr möglich", "Er erhält eine Verwarnung (Gelbe Karte), der Neustart bleibt aber bestehen", "Die Erholungszeit beginnt von vorn, der Neustart verschiebt sich entsprechend", "Keine Folge, solange er rechtzeitig vor dem Neustart zurück ist"],
    a: [0], e: "Im separaten Bereich darf er nur mit Officials sprechen. Verlässt er den Bereich ohne Erlaubnis, ist der TI abgeschlossen und es gibt keine weiteren Versuche.", r: "Anhang A §8.2(A)" });

  add({ id: "L57", k: [0, 0, 1], cat: "W", q: "Bis wann muss ein Einspruch gegen den Abbruch eines Lead-Versuchs eingelegt werden?",
    o: ["Bevor der nächste Wettkämpfer seinen Versuch beginnt; mündlich anmelden, schriftlich innerhalb von bis zu 5 Minuten", "Innerhalb von 5 Minuten nach den offiziellen Ergebnissen; mündlich anmelden, schriftlich innerhalb von 10 Minuten", "Bis zum Ende der Runde; nur schriftlich, eine mündliche Anmeldung reicht nicht", "Innerhalb von 2 Minuten nach dem Abbruch; nur schriftlich beim Jury-Präsidenten"],
    a: [0], e: "Einsprüche gegen einen Versuchsabbruch müssen vor dem Start des nächsten Wettkämpfers angemeldet werden. Die mündliche Anmeldung reicht, schriftlich folgt innerhalb von bis zu 5 Minuten. Der Athlet wird bis zur Klärung wie bei einem TI getrennt gehalten.", r: "Anhang A §9.1" });

  add({ id: "L58", k: [0, 0, 1], cat: "W", q: "Welche Frist gilt für einen Einspruch gegen die Wertung oder das Ranking im Lead?",
    o: ["Medaillenphase: 2 Minuten, jede andere Runde: 5 Minuten nach Veröffentlichung der offiziellen Ergebnisse", "Medaillenphase und jede andere Runde: 5 Minuten nach Veröffentlichung der offiziellen Ergebnisse", "Medaillenphase: 5 Minuten, jede andere Runde: 10 Minuten nach Veröffentlichung der offiziellen Ergebnisse", "Medaillenphase: bis zur Siegerehrung, jede andere Runde: bis zum Start der nächsten Runde"],
    a: [0], e: "In der Medaillenphase sind es 2 Minuten, sonst 5 Minuten nach Veröffentlichung der offiziellen Ergebnisse, jeweils schriftlich.", r: "Anhang A §9.2" });

  add({ id: "L59", k: [2, 1, 1], cat: "J", c: true, q: "Der Sichernde holt während eines Versuchs so viel Seil ein, dass er den Athleten am Seil nach oben zieht. Wie ist das einzuordnen?",
    o: ["Als Technical Incident (Straffseil durch den Sichernden); gewertet wird höchstens bis zum letzten kontrollierten Griff vor dem Vorteil", "Als Regelverstoß des Athleten; er wird disqualifiziert, weil er sich durch das Seil einen Vorteil verschafft hat", "Als normaler Verlauf; das Seilhandling liegt beim Sichernden und hat keine Folgen für die Wertung", "Als Sturz; der Versuch ist an der Stelle beendet, an der das Seil straff wurde"],
    a: [0], e: "Ein vom Sichernden verursachtes Straffseil, das den Wettkämpfer unterstützt oder behindert, ist ein Technical Incident. Laut Judge Guide wird das Ergebnis auf den letzten kontrollierten Griff vor dem Vorteil reduziert, ein weiterer Versuch ist nach den TI-Regeln möglich.", r: "Glossar „Technical Incident“ (C); AR §11.3; Judge Guide" });

  add({ id: "L60", k: [1, 1, 1], cat: "J", q: "Der Jury-Präsident will das Seil in die ersten beiden Expressschlingen vorhängen lassen. Was gilt?",
    o: ["Das ist möglich, aber nur für alle Wettkämpfer oder für keinen", "Das darf nur auf Antrag einzelner Wettkämpfer geschehen", "Das ist grundsätzlich verboten", "Das entscheidet jeder Wettkämpfer selbst"],
    a: [0], e: "Der JP kann Vorhängen oder einen Spotter anordnen, aber nur für alle Wettkämpfer oder für keinen. Anträge einzelner Wettkämpfer darf er nicht berücksichtigen.", r: "Anhang A §3.2 mit Anmerkung; AR §4.3" });

  add({ id: "L61", k: [1, 0, 1], cat: "J", q: "Welche Sicherungsgeräte sind im Lead-Wettkampf zu bevorzugen?",
    o: ["Manuelle Sicherungsgeräte", "Halbautomaten mit Panikfunktion", "Autobelay-Systeme", "Das ist nicht geregelt"],
    a: [0], e: "Das Seil wird von einem Sichernden pro Seil bedient. Manuelle Sicherungsgeräte sind zu bevorzugen.", r: "Anhang A §3.3 mit Anmerkung" });

  add({ id: "L62", k: [0, 1, 1], cat: "W", c: true, q: "Ein Athlet greift mit 2 Fingern in ein unbenutztes, offenes T-Nut-Loch, um sich zu halten. Was gilt?",
    o: ["Der Versuch ist nicht erfolgreich, weil er sich durch ein unbenutztes T-Nut-Loch einen Vorteil verschafft hat", "Erlaubt, weil T-Nut-Löcher Teil der Wand sind und wie Strukturen genutzt werden dürfen", "Erlaubt, aber das T-Nut-Loch zählt nicht für die Wertung, nur der nächste Griff", "Er bekommt eine Verwarnung (Gelbe Karte), der Versuch läuft aber normal weiter"],
    a: [0], e: "Unbenutzte, offene T-Nut-Löcher dürfen nicht mit den Händen benutzt werden. Wer sich so einen Vorteil verschafft, beendet den Versuch erfolglos.", r: "AR §8.1(E)" });

  add({ id: "L63", k: [0, 2, 1], cat: "W", c: true, q: "Eine Athletin stellt den Fuß in ein unbenutztes T-Nut-Loch. Was gilt?",
    o: ["Das ist erlaubt, das Verbot gilt nur für die Hände", "Der Versuch ist nicht erfolgreich", "Sie bekommt eine Verwarnung (Gelbe Karte)", "Das ist nur erlaubt, wenn das Loch verschraubt ist"],
    a: [0], e: "§8.1(E) verbietet die Nutzung unbenutzter T-Nut-Löcher ausdrücklich nur mit den Händen.", r: "AR §8.1(E)" });

  add({ id: "L64", k: [0, 1, 1], cat: "W", c: true, q: "Ein Athlet tritt beim Klettern auf die Lasche eines Bohrhakens, um eine Stelle zu überbrücken. Was gilt?",
    o: ["Der Versuch ist nicht erfolgreich, weil er Sicherungsmittel benutzt hat", "Erlaubt, solange er nicht an der Expressschlinge zieht", "Das wird nur verwarnt", "Erlaubt, wenn der Bohrhaken unterhalb der letzten Expressschlinge liegt"],
    a: [0], e: "Wer sich durch Seil, Expressschlingen, Bohrhaken oder andere Sicherungsmittel einen Vorteil verschafft, beendet den Versuch erfolglos.", r: "AR §8.1(E)" });

  add({ id: "L65", k: [1, 2, 1], cat: "W", stufe: 2, c: true, q: "Der Routenschiedsrichter ist unsicher, ob ein Athlet beim Klettern kurz die offene Seitenkante der Wand benutzt hat, und lässt ihn zu Ende klettern. Der Versuch wurde also nicht abgebrochen. Welche Einspruchsfrist gilt für eine Beschwerde dazu?",
    o: ["Die Frist für Wertungs- und Ranking-Einsprüche (z. B. 5 Minuten nach den offiziellen Ergebnissen)", "Die Frist für Einsprüche gegen einen Abbruch (bevor der nächste Wettkämpfer startet)", "Eine Sonderfrist bis zum Ende des Wettkampftages, weil kein Abbruch erfolgt ist", "Keine, denn ohne Abbruch durch den Schiedsrichter ist kein Einspruch möglich"],
    a: [0], e: "Die Frist „vor dem nächsten Starter“ gilt nur, wenn ein Versuch abgebrochen wurde. Lief der Versuch weiter, ist es ein Wertungseinspruch mit der normalen Frist nach Veröffentlichung der Ergebnisse.", r: "Anhang A §9.1 / §9.2; Judge Guide" });

  add({ id: "L66", k: [0, 0, 2], cat: "O", q: "Welche Mindestmaße gelten für eine Lead-Wettkampfwand?",
    o: ["Mindestens 3 m Breite pro Route; die Höhe soll mindestens 15 m betragen", "Mindestens 2 m Breite pro Route; die Höhe soll mindestens 12 m betragen", "Mindestens 4 m Breite pro Route; die Höhe soll mindestens 18 m betragen", "Mindestens 3 m Breite pro Route; eine Mindesthöhe ist nicht vorgegeben"],
    a: [0], e: "Laut Anhang A gelten mindestens 3 m Breite pro Route und eine Wandhöhe von mindestens 15 m (Soll-Vorgabe).", r: "Anhang A §1.1" });

  add({ id: "L67", k: [0, 1, 1], cat: "W", c: true, q: "Ein Athlet hängt nach 6 Minuten und 2 Sekunden die letzte Expressschlinge ein. Die Kletterzeit beträgt 6 Minuten. Ergebnis?",
    o: ["Nicht erfolgreich: Gewertet wird das höchste Ergebnis, das vor Ablauf der Kletterzeit erreicht wurde", "TOP: Die Kletterzeit gilt nur für den Start, ein laufender Versuch darf beendet werden", "TOP mit Zeitstrafe: Die Überschreitung wird bei Gleichstand gegen ihn gewertet", "Annulliert: Der gesamte Versuch wird gestrichen und als DNS gewertet"],
    a: [0], e: "Mit Ablauf der Kletterzeit endet der Versuch erfolglos. Laut Judge Guide prüft der DAV-Schiedsrichter im Zweifel per Video, welches Ergebnis vor Zeitablauf erreicht war.", r: "AR §8.1; Judge Guide" });

  add({ id: "L68", k: [0, 0, 0], cat: "W", q: "Wie viele gewertete Versuche hat ein Wettkämpfer im Lead pro Route und Runde?",
    o: ["1", "2", "Unbegrenzt innerhalb der Kletterzeit", "3"],
    a: [0], e: "Pro Route und Runde gibt es einen separaten, gewerteten Versuch. Ein Neustart ist nur nach einem Technical Incident möglich.", r: "AR §6.1, §6.2" });

  add({ id: "L69", k: [0, 0, 1], cat: "J", q: "Wann sollte das Wertungstopo den einspruchsberechtigten Teamoffiziellen zur Verfügung stehen?",
    o: ["Nach dem Ende einer gemeinsamen Besichtigung bzw. vor dem Start of Play", "Erst zusammen mit den offiziellen Ergebnissen der jeweiligen Runde", "Bereits am Vortag des Wettkampfs, zusammen mit der Startliste", "Nur auf Nachfrage, nachdem ein Einspruch angemeldet wurde"],
    a: [0], e: "Das Wertungstopo sollte den einspruchsberechtigten Teamoffiziellen nach der gemeinsamen Besichtigung bzw. vor dem Start of Play vorliegen.", r: "Anhang A §5.1(B)" });

  add({ id: "L70", k: [0, 2, 1], cat: "W", stufe: 2, c: true, q: "2 Finalistinnen sind nach dem Finale gleichauf auf Platz 2, auch nach Count-back auf das Halbfinale. Beide sind an Griff 38+ gestürzt, eine nach 4 Minuten und 31 Sekunden, die andere nach 4 Minuten und 47 Sekunden. Wie wird entschieden?",
    o: ["Die Athletin mit 4 Minuten und 31 Sekunden wird Zweite, weil die kürzere Kletterzeit den Podiumsgleichstand auflöst", "Beide werden Zweite, weil die Kletterzeit nur bei Gleichstand auf Platz 1 herangezogen wird", "Die Athletin mit 4 Minuten und 47 Sekunden wird Zweite, weil die längere Kletterzeit besser ist", "Beide klettern ein Superfinale, weil Count-back und Wertung keinen Unterschied ergeben"],
    a: [0], e: "In der geplanten Medaillenphase werden Podiumsgleichstände nach dem Count-back über die tatsächliche Kletterzeit aufgelöst. Die kürzere Zeit ist besser.", r: "Anhang A §7.3(B)" });
})();
