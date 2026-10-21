// Fragen Allgemeine Regeln – Grundlage: Allgemeine Regeln (AR), Glossar, Wettkampfbestimmungen (WB), Technical Officials (TO)
(function () {
  const D = "allgemein";
  const add = (q) => window.QUESTIONS.push(Object.assign({ d: D }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "G01", k: [0, 0, 0], q: "Wo dürfen Wettkämpfe nach dem Nationalen Regelwerk ausgetragen werden?",
    o: ["Ausschließlich an künstlichen Kletterwänden", "An künstlichen Wänden und an Naturfels", "Auch an Felsblöcken, wenn der Jury-Präsident zustimmt", "Überall, wo eine Sicherung möglich ist"],
    a: [0], e: "Wettkämpfe nach diesen Regeln finden nur an künstlichen Kletterwänden statt, nicht an natürlichen Felsformationen oder Felsblöcken.", r: "AR §1.1" });

  add({ id: "G02", k: [1, 0, 0], q: "In welcher Farbe sind Grenzmarkierungen (out of bounds) gehalten?",
    o: ["Schwarz, in allen Routen/Bouldern und Runden einheitlich", "Rot, in allen Routen/Bouldern und Runden einheitlich", "Blau, in allen Routen/Bouldern und Runden einheitlich", "Frei wählbar, aber innerhalb einer Runde einheitlich"],
    a: [0], e: "Alle Grenzmarkierungen sind in allen Routen und Bouldern einer Runde und in allen Runden schwarz.", r: "AR §1.14 (Anmerkung)" });

  add({ id: "G03", k: [1, 1, 0], c: true, q: "Eine Athletin berührt beim Klettern das schwarze Tape einer Grenzmarkierung. Ist sie damit out of bounds?",
    o: ["Nein, die Markierung selbst darf berührt oder benutzt werden, ohne dass man out of bounds ist", "Ja, jede Berührung des schwarzen Tapes gilt als out of bounds und beendet den Versuch", "Nur wenn sie das Tape mit der Hand berührt, mit dem Fuß ist es erlaubt", "Ja, aber nur im Bouldern; im Lead darf das Tape berührt werden"],
    a: [0], e: "Wer die Begrenzungsmarkierung selbst berührt oder benutzt, gilt nicht als out of bounds.", r: "AR §1.14 (Anmerkung)" });

  add({ id: "G04", k: [1, 1, 0], c: true, q: "Ein Athlet streift mit dem Knie kurz ein durch schwarzes Tape abgetrenntes Volumen, ohne Gewicht darauf zu verlagern und ohne Einfluss auf die Bewegung. Wie ist das zu bewerten?",
    o: ["Ein zufälliger Kontakt ohne Gewichtsverlagerung kann zulässig sein", "Out of bounds: Jeder Kontakt mit dem Volumen beendet den Versuch", "Erlaubt, aber er bekommt eine Verwarnung (Gelbe Karte)", "Erlaubt, aber er muss den Versuch wiederholen"],
    a: [0], e: "Bei unbeabsichtigten Kontakten zählt die Wirkung. Ein einfaches Streifen oder Berühren ohne Gewichtsverlagerung kann zulässig sein.", r: "AR §1.14 (Anmerkung)" });

  add({ id: "G05", k: [1, 1, 0], c: true, q: "Eine Athletin stellt den Fuß bewusst auf ein durch schwarzes Tape abgetrenntes Volumen, um sich zu stabilisieren. Wie ist das zu bewerten?",
    o: ["Out of bounds: Jede aktive oder passive Nutzung, auch Stabilisieren, ist verboten", "Erlaubt, weil sie nur den Fuß benutzt", "Erlaubt, wenn sie den nächsten Griff auch ohne Volumen erreicht hätte", "Nur eine Verwarnung (Gelbe Karte)"],
    a: [0], e: "Out of bounds liegt vor, wenn ein Verstoß absichtlich ist oder die Kletterbewegung verändert. Ziehen, Treten, Stabilisieren oder Nutzen zum Vorwärtskommen ist nicht erlaubt.", r: "AR §1.14 (Anmerkung); AR §8.1(D)" });

  add({ id: "G06", k: [0, 1, 1], q: "Eine Route ist mit farbigen Griffen gekennzeichnet (z. B. alle Griffe gelb). Welchen Status haben Griffe in anderen Farben?",
    o: ["Sie gelten als out of bounds", "Sie dürfen mit den Füßen benutzt werden", "Sie dürfen benutzt werden, zählen aber nicht für die Wertung", "Sie dürfen benutzt werden, wenn sie nicht durch schwarzes Tape abgetrennt sind"],
    a: [0], e: "Wird eine Route mit optisch markanten Griffen ausgeführt, gelten alle Griffe ohne diese Unterscheidung als out of bounds.", r: "AR §1.9" });

  add({ id: "G07", k: [0, 0, 0], q: "Was müssen bzw. dürfen Wettkämpfer bei ihren Versuchen tragen bzw. benutzen?",
    o: ["Kletterschuhe (und gegebenenfalls einen Klettergurt) sind Pflicht", "Ein Chalkbag mit handelsüblichem trockenem oder flüssigem Chalk ist erlaubt", "Ein Kletterhelm ist erlaubt", "Knee Pads sind erlaubt"],
    a: [0, 1, 2], e: "Pflicht sind Kletterschuhe und gegebenenfalls ein Gurt. Erlaubt sind Chalkbag, Chalk und Helm. Handschuhe und Knee Pads sind verboten, sofern nicht ausdrücklich zugelassen.", r: "AR §3.3, §3.4" });

  add({ id: "G08", k: [0, 1, 1], c: true, q: "Ein Athlet will mit Knee Pad in den Boulder einsteigen. Was gilt?",
    o: ["Nicht erlaubt: Knee Pads sind verboten, sofern die Wettkampfbestimmungen sie nicht zulassen", "Erlaubt: Knee Pads sind zulässig, solange sie nicht klebrig beschichtet sind", "Erlaubt: Knee Pads sind zulässig, wenn der Boulderschiedsrichter vorher zustimmt", "Erlaubt: Knee Pads sind zulässig, aber nur in der Finalrunde"],
    a: [0], e: "Handschuhe und Knee Pads sind untersagt, wenn die Wettkampfbestimmungen sie nicht ausdrücklich erlauben.", r: "AR §3.4(B)" });

  add({ id: "G09", k: [1, 1, 0], c: true, q: "Eine Athletin hat einen Tape-Verband und eine elastische Kompressionsbandage am Unterarm. Erlaubt?",
    o: ["Ja, Kompressionsbandagen und kinesiologisches Tape sind zur Vorbeugung oder Behandlung von Verletzungen erlaubt", "Nein, außer Schuhen, Gurt, Chalk und Helm ist keine weitere Ausrüstung am Körper erlaubt", "Nur das Tape ist erlaubt, Kompressionsbandagen gelten als unzulässige Hilfsmittel", "Nur mit ärztlichem Attest, das vor dem Wettkampf beim Jury-Präsidenten vorliegt"],
    a: [0], e: "Kompressionsbandagen für Arme und Beine sowie kinesiologisches oder ähnliches Tape sind erlaubt, wenn sie zur Vorbeugung oder Behandlung von Verletzungen dienen.", r: "AR §3.4 (Anmerkung zu B)" });

  add({ id: "G10", k: [1, 0, 0], q: "Womit dürfen sich Wettkämpfer vor einem Versuch die Hände reinigen?",
    o: ["Mit Trinkwasser", "Mit handelsüblichen, nicht fettenden feuchtigkeitsspendenden Mitteln", "Mit Speichel", "Mit Haftspray für bessere Griffigkeit"],
    a: [0, 1], e: "Erlaubt sind Trinkwasser und nicht fettende feuchtigkeitsspendende Mittel, wenn überschüssige Flüssigkeit vor dem Versuch entfernt wird. Speichel und grifffördernde Substanzen sind verboten.", r: "AR §3.4 (Anmerkung zu A)" });

  add({ id: "G11", k: [1, 0, 1], q: "Welcher Grundsatz steht hinter den Regeln zu Chalk und Substanzen?",
    o: ["Die Substanz eines einzelnen Wettkämpfers darf keine Auswirkungen auf später startende Wettkämpfer haben", "Jeder darf benutzen, was er möchte, solange es für die Schiedsrichter sichtbar ist", "Nur Produkte des offiziellen Ausrüsters dürfen auf dem Field of Play genutzt werden", "Flüssigchalk ist generell verboten, weil er Rückstände auf den Griffen hinterlässt"],
    a: [0], e: "Was ein Wettkämpfer verwendet, darf die Bedingungen für spätere Starter nicht verändern. Normale Chalkrückstände von den Händen sind kein Verstoß.", r: "AR §3.4 (Anmerkung)" });

  add({ id: "G12", k: [0, 0, 1], q: "Welche Anforderungen gelten für den Jury-Präsidenten?",
    o: ["Er soll unabhängig vom Veranstalter sein", "Er soll keine familiären, beruflichen oder engen persönlichen Beziehungen zu Wettkämpfern oder Teamoffiziellen haben", "Er soll frei von finanziellen oder anderen Interessen sein, die seine Entscheidungen beeinflussen könnten", "Er muss Mitglied des ausrichtenden Vereins sein"],
    a: [0, 1, 2], e: "Der Jury-Präsident muss strikt neutral und unabhängig sein: unabhängig vom Veranstalter, ohne enge Beziehungen zu Beteiligten und ohne eigene Interessen.", r: "AR §4.1" });

  add({ id: "G13", k: [1, 1, 1], c: true, q: "Ein Trainer bittet den Jury-Präsidenten, für seine ängstliche Athletin eine zusätzliche Expressschlinge vorzuhängen. Wie entscheidet der JP?",
    o: ["Ablehnen: Sonderregelungen zugunsten einzelner Wettkämpfer sind unzulässig", "Zustimmen: Bei Sicherheitsfragen hat der Jury-Präsident freies Ermessen", "Zustimmen, wenn der Chefroutenbauer die zusätzliche Expressschlinge für sicher hält", "Zustimmen, wenn die Teamoffiziellen der anderen Wettkämpfer einverstanden sind"],
    a: [0], e: "Der JP darf keine Sonderregelungen für einzelne Wettkämpfer treffen. Ausdrücklich nicht stattgegeben werden darf z. B. Anträgen auf zusätzliche Expressschlingen, Matten oder eine Leiter zum Abstieg.", r: "AR §4.3 mit Anmerkung" });

  add({ id: "G14", k: [0, 0, 0], q: "Wer gehört zu den On-field Officials?",
    o: ["Der Jury-Präsident", "Die DAV-Schiedsrichter", "Die Routen- und Boulderschiedsrichter", "Die Routenbauer"],
    a: [0, 1, 2], e: "On-field Officials sind Jury-Präsident, DAV-Schiedsrichter und Routen-/Boulderschiedsrichter. Routenbauer sind Technical Officials, aber keine On-field Officials.", r: "AR §4.4" });

  add({ id: "G15", k: [1, 0, 0], q: "Was ist in einer On-Sight-Runde verboten?",
    o: ["Die Versuche anderer Wettkämpfer zu beobachten", "Die Routenbauer beim Setzen oder Testen zu beobachten", "Informationen über die offiziellen hinaus zu suchen oder anzunehmen", "Die Routen von öffentlichen Bereichen aus anzusehen, solange diese geöffnet sind"],
    a: [0, 1, 2], e: "Verboten sind zusätzliche Informationen, das Beobachten anderer Versuche und der Routenbauer. Von öffentlich zugänglichen Bereichen aus dürfen die Routen angesehen werden, solange diese geöffnet sind. Drohnen oder Ähnliches sind tabu.", r: "AR §5.3 mit Anmerkung" });

  add({ id: "G16", k: [0, 1, 0], c: true, q: "2 Athletinnen sprechen nach der gemeinsamen Besichtigung über die Schlüsselstelle. Keine von beiden hat die Route bisher versucht. Erlaubt?",
    o: ["Ja, solange keine von beiden die Route schon versucht hat", "Nein, Austausch ist in On-Sight-Runden immer verboten", "Nur in Anwesenheit eines Schiedsrichters", "Ja, auch wenn eine schon geklettert ist"],
    a: [0], e: "Informationen aus der gemeinsamen Besichtigung dürfen weitergegeben werden, solange keiner der beiden die Route oder den Boulder versucht hat.", r: "AR §5.4(B)" });

  add({ id: "G17", k: [1, 1, 0], c: true, q: "2 Athleten, die ihre Versuche in der Runde beide abgeschlossen haben, reden in der „Leader Corner“ über die Route. Erlaubt?",
    o: ["Ja, nach Abschluss ihrer Versuche dürfen sie sich austauschen", "Nein, ein Austausch ist erst nach der Siegerehrung erlaubt", "Nur mit ausdrücklicher Erlaubnis des Jury-Präsidenten", "Nein, das ist ein schwerer Verstoß gegen die On-Sight-Regeln"],
    a: [0], e: "Wer seine Versuche in der Runde abgeschlossen hat, darf sich mit anderen, die ebenfalls fertig sind, austauschen.", r: "AR §5.4 (Anmerkung)" });

  add({ id: "G18", k: [0, 0, 0], q: "Ab wann dürfen Teamoffizielle in einer On-Sight-Runde mit ihrem Athleten über die Route sprechen?",
    o: ["Erst wenn der Athlet die Runde beendet hat", "Nach der gemeinsamen Besichtigung", "Während der 40 Sekunden Vorbereitung", "Jederzeit, wenn es nicht laut ist"],
    a: [0], e: "Teamoffizielle dürfen keine Informationen über die Routen oder Boulder weitergeben, bevor der Wettkämpfer die Runde beendet hat.", r: "AR §5.4(C)" });

  add({ id: "G19", k: [0, 0, 0], q: "Was gilt in einer Runde im Flash-Format?",
    o: ["Vor der Runde muss eine Demonstration stattfinden", "Teamoffizielle dürfen vor, während und nach den Versuchen Informationen geben", "Die Wettkämpfer werden isoliert und dürfen nichts sehen", "Die Wettkämpfer dürfen vorher in der Route trainieren"],
    a: [0, 1], e: "Flash heißt: Demonstration vor der Runde, und Teamoffizielle dürfen jederzeit informieren. Trainieren an der Route ist nicht Flash, sondern After-Work.", r: "AR §5.5; Glossar „Flash“" });

  add({ id: "G20", k: [1, 0, 0], q: "Was bedeutet „On Sight“?",
    o: ["Vom Boden aus, ohne Informationen zu den Bewegungssequenzen und ohne vorheriges Training oder Versuche", "Vom Boden aus, mit Informationen zu den Bewegungssequenzen, aber ohne vorheriges Training oder Versuche", "Vom Boden aus, mit eigener Vorerfahrung aus Training oder früheren Versuchen an der Route", "Vom Boden aus, nach dem Studium eines Videos der Route, aber ohne eigene Versuche"],
    a: [0], e: "On Sight: ohne Informationen zu den Bewegungssequenzen und ohne vorheriges Training. Flash: mit Informationen, ohne Training. After-Work: mit eigener Vorerfahrung.", r: "Glossar „On Sight“, „Flash“, „After-Work“" });

  add({ id: "G21", k: [1, 1, 2], c: true, q: "Ein Wettkämpfer hilft einem verletzten Konkurrenten, der in der Call Zone zusammengebrochen ist. Ist das eine unerlaubte Einmischung?",
    o: ["Nein, Hilfe für verletzte oder in Not geratene Teilnehmer gilt nicht als Einmischung", "Ja, Wettkämpfer dürfen sich grundsätzlich nicht in Angelegenheiten anderer einmischen", "Nur wenn er dabei Informationen über die Route an den Verletzten weitergibt", "Ja, er bekommt deshalb eine Verwarnung (Gelbe Karte)"],
    a: [0], e: "Wer einem verletzten oder in Not geratenen Teilnehmer hilft, mischt sich nicht unerlaubt ein.", r: "AR §5.2(A) mit Anmerkung" });

  add({ id: "G22", k: [0, 1, 0], q: "Aus welchen Gründen wird ein Versuch allgemein (alle Disziplinen) als nicht erfolgreich gewertet?",
    o: ["Fehlstart, Sturz oder Bodenberührung", "Nutzung von out-of-bounds-Elementen, um sich einen Vorteil zu verschaffen", "Nutzung von Seil, Sicherungsmitteln, offenen Wandkanten, Schildern oder (mit den Händen) unbenutzten T-Nut-Löchern zum eigenen Vorteil", "Unbeabsichtigtes, folgenloses Streifen eines durch schwarzes Tape abgetrennten Volumens"],
    a: [0, 1, 2], e: "§8.1 nennt: Ablauf der Kletterzeit, Fehlstart, Sturz, Bodenberührung, Vorteil durch out of bounds oder durch Sicherungsmittel, Kanten, Schilder, T-Nut-Löcher, sowie Stopp durch einen On-field Official. Ein folgenloses Streifen kann zulässig sein.", r: "AR §8.1" });

  add({ id: "G23", k: [1, 0, 1], q: "Was zählt laut Glossar als Technical Incident?",
    o: ["Ein gebrochener oder loser Griff", "Eine falsch positionierte Expressschlinge oder ein falsch positionierter Karabiner", "Ein vom Sichernden verursachtes Straffseil, das den Wettkämpfer unterstützt oder behindert", "Ein Abrutschen wegen der eigenen schwitzigen Hände"],
    a: [0, 1, 2], e: "TIs sind: gebrochener oder loser Griff, falsch positionierte Expressschlinge, Straffseil durch den Sichernden, kritischer Ausfall der Zeitmessung, sowie ungewöhnliche Umstände mit wesentlichem Vor- oder Nachteil, die nicht vom Wettkämpfer selbst verursacht wurden.", r: "Glossar „Technical Incident“" });

  add({ id: "G24", k: [0, 1, 1], c: true, q: "Ein Griff dreht sich unter der Hand einer Athletin leicht und wird dadurch schwerer. Sie klettert trotzdem weiter und stürzt 3 Züge später. Kann sie noch einen TI geltend machen?",
    o: ["Nein, wer nach einem möglichen TI weiterklettert, hat ihn akzeptiert; er ist für sie abgeschlossen", "Ja, ein TI kann bis zur Veröffentlichung der Ergebnisse geltend gemacht werden", "Ja, weil der Griff nachweislich lose war, ist der TI unabhängig vom Weiterklettern gültig", "Nur wenn ihr Trainer unmittelbar nach dem Drehen des Griffs protestiert hat"],
    a: [0], e: "Wer einen Versuch nach einem möglichen oder bestätigten TI fortsetzt, akzeptiert ihn. Der Technical Incident ist für diesen Wettkämpfer abgeschlossen.", r: "AR §11.3" });

  add({ id: "G25", k: [0, 2, 2], c: true, q: "Ein Griff dreht sich so, dass er deutlich besser wird, und der Athlet profitiert davon. Er klettert weiter. Gilt der TI als akzeptiert und abgeschlossen?",
    o: ["Nein, ein Technical Incident, der einen Vorteil verschafft hat, kann nicht durch Akzeptieren abgeschlossen werden", "Ja, wer weiterklettert, akzeptiert den Technical Incident immer, egal ob mit Vor- oder Nachteil", "Ja, aber nur im Bouldern; im Lead muss der Vorteil trotzdem korrigiert werden", "Das entscheidet der Athlet selbst, indem er nach dem Versuch einen Antrag stellt oder nicht"],
    a: [0], e: "Hat der Technical Incident einen Vorteil verschafft, ist er durch Weiterklettern nicht abgeschlossen. Der Vorteil wird korrigiert.", r: "AR §11.3" });

  add({ id: "G26", k: [0, 0, 1], q: "Ein Technical Incident ist bestätigt und nicht abgeschlossen. Was ist möglich?",
    o: ["Der Versuch wird an Stelle und Zeitpunkt des Vorfalls als nicht erfolgreich gewertet", "Der Wettkämpfer darf nach Behebung neu starten; die Kletterzeit wird bei Bedarf angepasst", "Gewertet wird das bessere Ergebnis vor dem Technical Incident und nach dem Neustart", "Der Wettkämpfer bekommt an dieser Route bzw. diesem Boulder automatisch das Ergebnis TOP"],
    a: [0, 1, 2], e: "Bei einem bestätigten, nicht abgeschlossenen TI: Wertung als erfolglos an der Stelle des Vorfalls, Neustart nach Behebung mit angepasster Zeit, und das bessere Ergebnis zählt.", r: "AR §11.4" });

  add({ id: "G27", k: [2, 0, 1], q: "Wer entscheidet, ob ein Vorfall als Technical Incident eingestuft wird?",
    o: ["Die On-field Officials, bei Bedarf nach Rücksprache mit dem Chefroutenbauer", "Der Event Delegate allein, ohne Rücksprache mit anderen", "Der Veranstalter, nach Rücksprache mit dem Chefroutenbauer", "Die Teamoffiziellen gemeinsam, mit einfacher Mehrheit"],
    a: [0], e: "Die On-field Officials entscheiden und beraten sich bei Bedarf mit dem Chefroutenbauer. In der Praxis bestätigt der DAV-Schiedsrichter den TI.", r: "AR §11.2; Anhänge A–D §8.1/§9.1" });

  add({ id: "G28", k: [0, 0, 1], q: "Aus welchen Gründen kann ein Einspruch eingelegt werden?",
    o: ["Wegen eines Schiedsrichterfehlers", "Wegen eines Fehlers bei der Punkteerfassung oder Zeitnahme", "Wegen einer Frage der Teilnahmeberechtigung oder des Verhaltens eines Wettkämpfers oder Teamoffiziellen", "Weil die Route zu schwer war"],
    a: [0, 1, 2], e: "Ein Einspruch ist möglich bei Schiedsrichterfehlern, Fehlern bei Punkten oder Zeit sowie bei Fragen der Teilnahmeberechtigung oder des Verhaltens.", r: "AR §12.1" });

  add({ id: "G29", k: [0, 0, 1], q: "Was muss ein zulässiger Einspruch enthalten bzw. erfüllen?",
    o: ["Schriftliche Einreichung bei der Einspruchsjury", "Einreichung durch den Betroffenen oder einen einspruchsberechtigten Teamoffiziellen, innerhalb der Frist", "Angabe des betroffenen Wettkämpfers, des Inhalts und der Regelgrundlage", "Unterschrift von 3 verschiedenen Teams"],
    a: [0, 1, 2], e: "Der Einspruch geht schriftlich an die Einspruchsjury, kommt von einer berechtigten Person, wird fristgerecht eingereicht und nennt Wettkämpfer, Inhalt und Regelgrundlage. 3 Teams braucht es nur bei der Sicherheitspetition.", r: "AR §12.2" });

  add({ id: "G30", k: [0, 0, 1], q: "Wann darf eine Einspruchsgebühr erhoben werden?",
    o: ["Nur, wenn der Einspruch nicht erfolgreich bleibt", "Immer, und zwar bei Einreichung des Einspruchs", "Nur, wenn der Einspruch als unzulässig erklärt wird", "Nie, Einsprüche sind grundsätzlich gebührenfrei"],
    a: [0], e: "Eine Gebühr fällt nur an, wenn der Einspruch erfolglos bleibt. Bei unzulässigen Einsprüchen wird das Formular zurückgegeben und als ungültig markiert, eine Gebühr ist dann nicht zu zahlen.", r: "AR §12.2, §12.6" });

  add({ id: "G31", k: [2, 0, 1], q: "Wer bildet bei DAV-Wettkämpfen die Einspruchsjury?",
    o: ["Jury-Präsident und Event Delegate; ist ein Mitglied beteiligt, ersetzt es ein DAV-Schiedsrichter", "3 Teamoffizielle aus verschiedenen Teams; der Jury-Präsident hat den Vorsitz", "Der DAV-Schiedsrichter allein; ist er beteiligt, ersetzt ihn der Jury-Präsident", "Chefroutenbauer und Veranstalter; bei Uneinigkeit entscheidet der Event Delegate"],
    a: [0], e: "Die Einspruchsjury besteht aus Jury-Präsident und Event Delegate. War ein Mitglied an der Ausgangsentscheidung beteiligt, rückt ein DAV-Schiedsrichter nach.", r: "WB §10.1; TO §3.2" });

  add({ id: "G32", k: [2, 1, 1], q: "Wer darf einen Einspruch einlegen?",
    o: ["Der betroffene Wettkämpfer selbst, wenn sein Ergebnis oder seine Platzierung beeinträchtigt ist", "Ein für den Wettkampf registrierter Teamoffizieller, der einen Wettkämpfer der aktuellen Runde vertritt", "Jeder Zuschauer, der einen Fehler beobachtet hat", "Ein Wettkämpfer gegen das Ergebnis eines anderen, auch wenn seine eigene Platzierung davon nicht berührt ist"],
    a: [0, 1], e: "Einspruch einlegen kann der betroffene Wettkämpfer selbst oder ein einspruchsberechtigter Teamoffizieller in seinem Namen. Einspruchsberechtigt ist laut WB ein registrierter Teamoffizieller, der einen Wettkämpfer der aktuellen Runde vertritt. Voraussetzung ist immer, dass das eigene Ergebnis oder die eigene Platzierung betroffen ist.", r: "AR §12.1, §12.2(A); WB §10.2" });

  add({ id: "G69", k: [2, 2, 1], c: true, q: "Eine Athletin sieht, dass eine knapp vor ihr platzierte Konkurrentin ein durch schwarzes Tape abgetrenntes Volumen zum Weiterkommen genutzt hat, ohne dass der Schiedsrichter eingegriffen hat. Kann sie (oder ihr Teamoffizieller) Einspruch einlegen?",
    o: ["Ja, weil ihre eigene Platzierung durch den Schiedsrichterfehler beeinträchtigt ist", "Nein, Einsprüche sind nur gegen das eigene Ergebnis möglich", "Nein, ein fremdes Ergebnis kann nur der Jury-Präsident von sich aus ändern", "Ja, mündlich und ohne Frist"],
    a: [0], e: "Ein Einspruch ist zulässig, wenn das eigene Ergebnis oder die eigene Platzierung durch einen Schiedsrichterfehler beeinträchtigt wird, auch wenn es um den Versuch einer anderen Person geht. Es gelten Schriftform und die üblichen Fristen. Laut Judge Guide lässt sich so z. B. eine niedrigere Wertung für eine Konkurrentin wegen out of bounds beantragen.", r: "AR §12.1(A), §12.2; Judge Guide" });

  add({ id: "G33", k: [0, 0, 1], q: "Welche Beweismittel sind im Einspruchsverfahren zulässig?",
    o: ["Die Angaben im Einspruchsformular", "Offizielle Videoaufzeichnungen, also aus einem vom Veranstalter zugelassenen System oder aus einem autorisierten Broadcast-Stream", "Aussagen der Offiziellen auf dem Field of Play", "Handyvideos des Trainers von der Tribüne"],
    a: [0, 1, 2], e: "Zulässig sind die Angaben im Formular, offizielle Videoaufzeichnungen und Aussagen der Offiziellen auf dem Field of Play. Private Handyvideos gehören nicht dazu.", r: "WB §10.2" });

  add({ id: "G34", k: [0, 1, 2], c: true, q: "Die Mitglieder der Einspruchsjury kommen nach Sichtung des Videos zu keinem einstimmigen Ergebnis. Was gilt?",
    o: ["Die On-field-Entscheidung bleibt bestehen, der Einspruch wird als „nicht entschieden“ gekennzeichnet", "Der Einspruch gilt als erfolgreich, weil die Entscheidung nicht eindeutig bestätigt wurde", "Der Event Delegate entscheidet allein und sein Urteil ist endgültig", "Der betroffene Athlet darf seinen Versuch noch einmal klettern"],
    a: [0], e: "Ist die Jury nicht einstimmig oder lassen die Beweise keine Überprüfung zu, bleibt die On-field-Entscheidung bestehen und der Einspruch wird als nicht entschieden gekennzeichnet. Sind die Beweise dagegen nur nicht schlüssig, ist der Einspruch nicht erfolgreich (§12.4 B).", r: "AR §12.5" });

  add({ id: "G35", k: [1, 0, 2], q: "Welche Prinzipien soll die Einspruchsjury bei ihrer Entscheidung abwägen?",
    o: ["Konsistenz mit früheren Entscheidungen", "Korrektheit in der Anwendung der Regeln und ihres Geistes", "Fairness, statt starr an Präzedenzfällen festzuhalten", "Möglichst schnelle Entscheidung zugunsten des Veranstalters"],
    a: [0, 1, 2], e: "Abzuwägen sind Konsistenz, Korrektheit und Fairness.", r: "AR §12.3 (Anmerkung)" });

  add({ id: "G36", k: [0, 0, 1], q: "Bis wann muss ein Einspruch gegen einen Fehler in den offiziellen Ergebnissen eingereicht werden?",
    o: ["Medaillenphase: spätestens 2 Minuten, jede andere Runde: spätestens 5 Minuten nach Veröffentlichung", "Medaillenphase und jede andere Runde: spätestens 10 Minuten nach Veröffentlichung", "Medaillenphase und jede andere Runde: bis zum Ende des Wettkampftages", "Medaillenphase: spätestens 5 Minuten, jede andere Runde: spätestens 15 Minuten nach Veröffentlichung"],
    a: [0], e: "Einsprüche zu Fehlern in den offiziellen Ergebnissen: 2 Minuten in der Medaillenphase, sonst 5 Minuten nach Veröffentlichung.", r: "WB §10.4" });

  add({ id: "G37", k: [0, 0, 1], q: "Welche Sanktion folgt auf 2 Verwarnungen (Gelbe Karten) bei einer Veranstaltung?",
    o: ["Disqualifikation (Rote Karte)", "Eine dritte Verwarnung (Gelbe Karte)", "Eine mündliche Ermahnung", "Keine weitere Sanktion"],
    a: [0], e: "Wer bei einer Veranstaltung 2 Verwarnungen (Gelbe Karten) bekommt, wird disqualifiziert. Eine mündliche Ermahnung ist keine Verwarnung im Sinne der Sanktionstabelle und zählt nicht mit.", r: "AR §13.1" });

  add({ id: "G38", k: [2, 1, 1], c: true, q: "Ein Athlet filmt in einer On-Sight-Runde heimlich aus der Iso heraus den Versuch eines Konkurrenten. Welche Sanktion ist vorgesehen?",
    o: ["Disqualifikation (Rote Karte), weil es ein schwerer Verstoß gegen die On-Sight-Regeln ist", "Verwarnung (Gelbe Karte), weil es der erste Verstoß des Athleten ist", "Mündliche Ermahnung, weil der Konkurrent dadurch keinen Nachteil hat", "Strafversuch an dieser Route, weil er sich einen Vorteil verschafft hat"],
    a: [0], e: "Wer Informationen über eine On-Sight-Route über das erlaubte Maß hinaus betrachtet oder sammelt, wird disqualifiziert. Umgehungsversuche gelten als schwerwiegender Verstoß.", r: "AR §13.1; AR §5.3(C)" });

  add({ id: "G39", k: [0, 0, 1], q: "Welche Sanktion ist für die Nichtbeachtung der Anweisungen eines Technical Officials vorgesehen?",
    o: ["Verwarnung (Gelbe Karte)", "Disqualifikation (Rote Karte)", "Ausschluss aus der Saison", "Keine"],
    a: [0], e: "Laut Sanktionstabelle wird die Nichtbeachtung von Anweisungen eines Technical Officials mit einer Verwarnung (Gelbe Karte) geahndet. Beim ersten Verstoß kann im Ermessensfall stattdessen eine mündliche Ermahnung ausgesprochen werden.", r: "AR §13.1" });

  add({ id: "G40", k: [0, 0, 0], q: "Wie werden eine Verwarnung und eine Disqualifikation angezeigt?",
    o: ["Gelbe Karte für eine Verwarnung, Rote Karte für eine Disqualifikation", "Rote Karte für eine Verwarnung, Schwarze Karte für eine Disqualifikation", "Nur mündlich", "Durch Pfiff"],
    a: [0], e: "Eine Verwarnung wird mit der Gelben Karte gezeigt, eine Disqualifikation mit der Roten Karte. Beim ersten Verstoß kann im Ermessensfall stattdessen eine mündliche Ermahnung ausgesprochen werden.", r: "AR §13.3 mit Anmerkung" });

  add({ id: "G41", k: [0, 0, 1], q: "Wer darf bei DAV-Wettkämpfen welche Disziplinarstrafen verhängen?",
    o: ["Verwarnung (Gelbe Karte): Jury-Präsident und DAV-Schiedsrichter; Disqualifikation (Rote Karte): nur der Jury-Präsident", "Beides darf jeder Routenschiedsrichter", "Verwarnung (Gelbe Karte): nur der Event Delegate; Disqualifikation (Rote Karte): Jury-Präsident", "Beides darf nur der Event Delegate"],
    a: [0], e: "Eine Verwarnung (Gelbe Karte) dürfen Jury-Präsident und DAV-Schiedsrichter aussprechen, disqualifizieren darf nur der Jury-Präsident.", r: "WB §9.1" });

  add({ id: "G42", k: [0, 0, 1], q: "Welche Folge hat eine Verwarnung (Gelbe Karte) für einen Teamoffiziellen?",
    o: ["Er darf den Wettkampfbereich für den Rest des Wettkampfs nicht mehr betreten", "Keine weitere Folge, er darf seinen Athleten weiter betreuen", "Er muss eine Geldstrafe an den Veranstalter zahlen", "Sein Athlet wird für den Rest des Wettkampfs disqualifiziert"],
    a: [0], e: "Ein verwarnter Wettkämpfer darf weitermachen. Ein verwarnter Teamoffizieller darf den Wettkampfbereich für den Rest des Wettkampfs nicht mehr betreten.", r: "AR §13.4" });

  add({ id: "G43", k: [1, 0, 2], q: "Was folgt aus einer Disqualifikation eines Wettkämpfers?",
    o: ["Er darf an den folgenden Runden nicht mehr teilnehmen und wird aus der Wertung genommen", "Bei einem schwerwiegenden Verstoß gilt die Disqualifikation für alle Wettkämpfe der Veranstaltung", "Er wird im General Ranking nicht gerankt", "Er behält seine Platzierung der laufenden Runde"],
    a: [0, 1, 2], e: "Disqualifizierte sind für folgende Runden gesperrt und werden aus der Wertung genommen, auch im General Ranking. Bei schweren Verstößen gilt das für die gesamte Veranstaltung.", r: "AR §13.5, §13.6 mit Anmerkung" });

  add({ id: "G44", k: [0, 0, 2], q: "Was passiert, wenn eine Person innerhalb von 12 Monaten 3 Verwarnungen (Gelbe Karten) erhält?",
    o: ["Die DAV-Wettkampflizenz wird nach diesem Wettkampf ausgesetzt; die Teamquote des Landesverbands sinkt währenddessen", "Die DAV-Wettkampflizenz wird sofort und dauerhaft entzogen; die Teamquote bleibt unverändert", "Nichts, denn Verwarnungen (Gelbe Karten) verfallen nach jedem Wettkampf", "Die Person muss einen Regellehrgang besuchen, bevor sie wieder starten darf"],
    a: [0], e: "Nach der dritten Verwarnung in 12 Monaten wird die Lizenz ausgesetzt, die Dauer legt die Disziplinarkommission fest. Die Teamquote des Landesverbands verringert sich in dieser Zeit um einen Slot.", r: "WB §9.3" });

  add({ id: "G45", k: [0, 0, 2], q: "Eine Person ist sowohl als Wettkämpfer als auch als Teamoffizieller registriert. Wie werden ihre Strafen behandelt?",
    o: ["Als dieselbe Person: Disziplinarstrafen und ihre Kumulierung gelten gemeinsam", "Getrennt nach Rolle: Strafen als Wettkämpfer und als Teamoffizieller zählen einzeln", "Nur Strafen als Wettkämpfer zählen; Strafen als Teamoffizieller verfallen", "Gar nicht, weil eine Person nicht beide Rollen gleichzeitig haben darf"],
    a: [0], e: "Wer als Wettkämpfer und als Teamoffizieller registriert ist, gilt bei allen Disziplinarstrafen und deren Kumulierung als dieselbe Person.", r: "WB §9.4" });

  add({ id: "G46", k: [1, 0, 0], q: "Welche Invalid Result Marks (IRM) gibt es?",
    o: ["DNS: nicht gestartet", "DSQ: Disqualifikation wegen technischer Regelverstöße", "DQB: Disqualifikation wegen unsportlichen Verhaltens", "DNF: nicht beendet"],
    a: [0, 1, 2], e: "Zu den IRMs gehören DNS (nicht gestartet), DSQ (technischer Regelverstoß) und DQB (unsportliches Verhalten).", r: "Glossar „Invalid Result Mark“" });

  add({ id: "G47", k: [1, 0, 0], q: "Was bedeuten „muss“, „soll“ und „kann“ im Regelwerk?",
    o: ["„Muss“ ist zwingend, „soll“ eine Empfehlung, „kann/darf“ eine Ermessensentscheidung", "„Muss“, „soll“ und „kann“ sind alle gleichbedeutend zwingend", "„Muss“ ist eine Empfehlung, „soll“ zwingend, „kann“ ein Verbot", "„Muss“ und „soll“ sind zwingend, „kann“ ist eine Empfehlung"],
    a: [0], e: "Muss = zwingend, darf nicht = Verbot, soll/soll nicht = Empfehlung (Abweichung nur nach sorgfältiger Abwägung), kann/darf = Ermessen.", r: "Glossar 1" });

  add({ id: "G48", k: [1, 0, 0], q: "Was bedeutet die Startreihenfolge „versetzt“?",
    o: ["Die Reihenfolge einer Route ist eine zyklische Verschiebung der Reihenfolge einer anderen Route", "Die Reihenfolge einer Route ist die umgekehrte Reihenfolge einer anderen Route", "Jeder Wettkämpfer startet auf der zweiten Route mit einem festen Zeitversatz", "Die Reihenfolge wird für jede Route unabhängig neu ausgelost"],
    a: [0], e: "Bei versetzter Reihenfolge wird zyklisch verschoben, z. B. bei 2 Routen um die halbe Starterzahl, abgerundet.", r: "Glossar 3 „Versetzte Reihenfolge“" });

  add({ id: "G49", k: [0, 0, 1], q: "Bis wann muss die Teilnahme bestätigt werden (Registration), wenn die Ausschreibung keinen Termin nennt?",
    o: ["30 Minuten vor Beginn des Technical Meetings", "60 Minuten vor dem Start of Play der Qualifikation", "Am Vortag des Wettkampfs um 20 Uhr", "Bis zum Start of Play der Qualifikation"],
    a: [0], e: "Ohne Termin in der Ausschreibung gilt: 30 Minuten vor Beginn des Technical Meetings. Wer nicht bestätigt ist, kommt nicht auf die Startliste.", r: "WB §6.2" });

  add({ id: "G50", k: [0, 1, 2], c: true, q: "Zum Registrationsschluss sind in einer Kategorie nur 3 Wettkämpferinnen registriert. Was gilt?",
    o: ["Für diese Kategorie findet kein Wettkampf statt, es gibt keine Meisterschaftspunkte", "Der Wettkampf findet normal statt, die Meisterschaftspunkte werden halbiert", "Die Kategorie wird mit der nächsthöheren Altersklasse zusammengelegt", "Es wird nur ein Finale geklettert, die Qualifikation entfällt"],
    a: [0], e: "Bei weniger als 4 Registrierten findet für die Kategorie kein Wettkampf statt, und es werden keine Meisterschaftspunkte vergeben.", r: "WB §6.2" });

  add({ id: "G51", k: [0, 0, 1], q: "Ab wann bis wann muss medizinisches Personal anwesend sein?",
    o: ["Von der Öffnung der Isolationszone bzw. Aufwärmwand bis zum Ende des letzten Versuchs jeder Runde", "Vom Start of Play der Finalrunde bis zum Ende des letzten Versuchs im Finale", "Vom Start of Play der Qualifikation bis zum Ende der Siegerehrung", "Nur auf Anforderung des Jury-Präsidenten, wenn eine Verletzung vorliegt"],
    a: [0], e: "Das medizinische Personal ist ab Öffnung der Iso oder Aufwärmwand bis zum letzten Versuch jeder Runde anwesend.", r: "WB §3.1" });

  add({ id: "G52", k: [0, 0, 2], q: "Wie muss eine Sicherheitspetition eingereicht werden?",
    o: ["Schriftlich, unterzeichnet von Teamoffiziellen aus 3 verschiedenen Teams", "Mündlich, durch einen Teamoffiziellen beim Jury-Präsidenten", "Schriftlich, unterzeichnet von einem betroffenen Wettkämpfer", "Per E-Mail an den DAV, unterzeichnet von einem Landesverband"],
    a: [0], e: "Sicherheitspetitionen sind schriftlich einzureichen und von Teamoffiziellen aus 3 verschiedenen Teams zu unterzeichnen. Stimmt der JP zu, muss er sich sofort darum kümmern.", r: "WB §3.3" });

  add({ id: "G53", k: [1, 1, 1], c: true, q: "Ein Trainer will in einer On-Sight-Runde sein Handy in der Coaching Zone benutzen, um Ergebnisse nachzusehen. Erlaubt?",
    o: ["Ja, in der Coaching Zone sind elektronische Geräte erlaubt, solange sie nicht zur Kommunikation mit Wettkämpfern dienen", "Nein, in On-Sight-Runden sind elektronische Geräte im gesamten Wettkampfbereich ausnahmslos verboten", "Ja, aber nur im Flugmodus, damit keine Kommunikation mit Wettkämpfern möglich ist", "Nein, das Handy darf erst nach dem Ende der Runde wieder benutzt werden"],
    a: [0], e: "Grundsätzlich darf in On-Sight-Runden kein Teammitglied ohne Genehmigung des JP elektronische Kommunikationsgeräte im Wettkampfbereich nutzen. Ausnahme: Coaches in der Coaching Zone, wenn sie damit nicht mit den Athleten kommunizieren.", r: "WB §4.3 mit Anmerkung" });

  add({ id: "G54", k: [0, 0, 0], q: "Wo müssen Kletterer ihre Startnummer tragen?",
    o: ["Auf der Rückseite ihres Oberteils", "Am Klettergurt", "Auf der Vorderseite des Oberteils", "Am Chalkbag"],
    a: [0], e: "Die Startnummer gehört auf die Rückseite des Oberteils.", r: "WB §5.3" });

  add({ id: "G70", k: [0, 0, 0], q: "Wann müssen Kletterer ihre Startnummer tragen?",
    o: ["In der Call Zone und auf dem Field of Play", "Nur auf dem Field of Play", "Im gesamten Wettkampfbereich, auch beim Aufwärmen", "Nur bei der Siegerehrung"],
    a: [0], e: "Die Startnummer ist in der Call Zone und auf dem Field of Play zu tragen, jeweils auf der Rückseite des Oberteils.", r: "WB §5.3" });

  add({ id: "G55", k: [0, 0, 1], q: "Welche Zeitvorgaben gelten für Aufwärmbereich und Isolationszone?",
    o: ["Der Aufwärmbereich öffnet spätestens 90 Minuten (niemals später als 60 Minuten) vor Start of Play", "Die Isolationszone schließt spätestens 30 Minuten vor Start of Play", "Zwischen Finalistenpräsentation und dem ersten Versuch liegen mindestens 2 Minuten", "Der Aufwärmbereich öffnet frühestens 30 Minuten vor Start of Play"],
    a: [0, 1, 2], e: "Aufwärmen öffnet nicht später als 90 Minuten (niemals später als 60 Minuten) vor Start of Play. Die Iso schließt nicht später als 30 Minuten vorher. Nach der Finalistenpräsentation gibt es mindestens 2 Minuten Pause.", r: "WB §6.4" });

  add({ id: "G56", k: [0, 0, 1], q: "Bis wann sollen Wettkämpfe der Jugendkategorien abgeschlossen sein?",
    o: ["Bis 20:00 Uhr", "Bis 18:00 Uhr", "Bis 22:00 Uhr", "Keine Vorgabe"],
    a: [0], e: "Jugendwettkämpfe sollen bis 20:00 Uhr abgeschlossen sein.", r: "WB §6.5" });

  add({ id: "G57", k: [1, 1, 1], c: true, q: "Nach Veröffentlichung der offiziellen Startliste fürs Halbfinale zieht eine Athletin zurück. Was passiert mit der Startliste?",
    o: ["Sie wird mit dem IRM-Vermerk aktualisiert; Reihenfolge und Zeiten bleiben, niemand rückt nach", "Sie wird aktualisiert; der Nächstplatzierte aus der Qualifikation rückt nach", "Sie wird komplett neu erstellt, mit neuer Reihenfolge und neuen Zeiten", "Sie wird aktualisiert; die Startzeiten aller Nachfolgenden werden vorgezogen"],
    a: [0], e: "Die Liste bekommt den Vermerk (DNS/DSQ/DQB). Startreihenfolge und Zeiten bleiben, Ersatzwettkämpfer werden nicht eingefügt.", r: "WB §7.6 mit Anmerkung" });

  add({ id: "G58", k: [0, 1, 2], q: "Welche Befugnisse hat der Jury-Präsident bei unvorhergesehenen Ereignissen?",
    o: ["Er kann jede Runde unterbrechen und fortsetzen oder abbrechen und neu starten", "Er kann die Halbfinal- oder Finalrunde (im Speed-Finale jede Phase) streichen", "Er kann den gesamten Wettkampf annullieren", "Gegen seine Entscheidungen dieser Art kann Einspruch eingelegt werden"],
    a: [0, 1], e: "Der JP kann Runden unterbrechen, abbrechen, neu starten und Halbfinale oder Finale streichen. Absagen oder annullieren kann den Wettkampf nur der Event Delegate. Gegen solche Entscheidungen gibt es keinen Einspruch.", r: "WB §11.1" });

  add({ id: "G59", k: [2, 0, 2], q: "Wer übernimmt, wenn der Jury-Präsident ungeplant ausfällt?",
    o: ["Der DAV-Schiedsrichter; sind mehrere anwesend, nominiert der Event Delegate einen davon", "Der Event Delegate; er übernimmt die Aufgaben zusätzlich zu seinen eigenen", "Der Chefroutenbauer; er kennt die Routen und die Sicherheitslage am besten", "Der Veranstalter bestimmt eine geeignete Person aus seinem Team"],
    a: [0], e: "Fällt der JP aus, übernimmt der DAV-Schiedsrichter. Bei mehreren DAV-Schiedsrichtern entscheidet der Event Delegate. Fällt der ED aus, übernimmt der JP dessen Aufgaben.", r: "TO §2.1, §1.1; WB §12.1(D)" });

  add({ id: "G60", k: [2, 0, 0], q: "Welche Aufgaben hat der DAV-Schiedsrichter?",
    o: ["Er koordiniert und überwacht die Routen-/Boulderschiedsrichter", "Er bestätigt und bearbeitet Technical Incidents", "Er spricht Verwarnungen (Gelbe Karten) aus", "Er spricht Disqualifikationen aus"],
    a: [0, 1, 2], e: "Der DAV-Schiedsrichter assistiert dem JP, koordiniert die Schiedsrichter, prüft die Routen, gibt Wertungstopos frei, bearbeitet TIs, unterstützt die Einspruchsjury und verwarnt. Disqualifizieren darf nur der JP.", r: "TO §3.2; WB §9.1" });

  add({ id: "G61", k: [0, 0, 0], q: "In welchem Verhältnis werden Routen- bzw. Boulderschiedsrichter eingeteilt?",
    o: ["1:1, also ein Schiedsrichter je Route bzw. Boulder einer Runde", "1 Schiedsrichter für alle Routen bzw. Boulder einer Runde", "2 Schiedsrichter je Route bzw. Boulder einer Runde", "1 Schiedsrichter je 3 Routen bzw. Boulder einer Runde"],
    a: [0], e: "Routen- und Boulderschiedsrichter werden im Verhältnis 1:1 je Route oder Boulder eingeteilt. Ein zweiter Offizieller kann Zeiten und Ergebnisse aufzeichnen.", r: "WB §12.2(B)" });

  add({ id: "G62", k: [0, 2, 1], c: true, q: "Bei einem DJC-Wettkampf liegen 2 Athleten gemeinsam auf Platz 2. Wie viele Cup-Ranglistenpunkte bekommt jeder (Platz 2 = 80, Platz 3 = 65)?",
    o: ["72", "73", "80", "72,5"],
    a: [0], e: "Gleichplatzierte erhalten den Durchschnitt der betroffenen Plätze, auf ganze Zahlen abgerundet: (80 + 65) / 2 = 72,5, also 72.", r: "WB §7.10" });

  add({ id: "G63", k: [0, 0, 1], q: "Was gilt für Medaillen bei Gleichplatzierungen und bei Abwesenheit von der Siegerehrung?",
    o: ["Medaillen werden bei Gleichplatzierung mehrfach vergeben, Preisgelder aufsummiert und geteilt", "Medaillen und Preise gibt es nur für Anwesende, sie werden nicht nachgereicht", "Bei Gleichplatzierung entscheidet das Los, wer die Medaille bekommt", "Abwesende bekommen ihre Medaille und ihr Preisgeld nachträglich per Post"],
    a: [0, 1], e: "Bei Gleichplatzierung gibt es Medaillen mehrfach, Preisgelder werden summiert und geteilt. Wer nicht bei der Siegerehrung ist, bekommt nichts nachgereicht.", r: "WB §8.4" });

  add({ id: "G64", k: [1, 0, 0], q: "Was ist der „Start of Play“ einer Runde?",
    o: ["Der Zeitpunkt, an dem der erste Wettkämpfer das Field of Play zum Versuch oder zur individuellen Besichtigung betritt", "Der Zeitpunkt, an dem der Aufwärmbereich für die Wettkämpfer der Runde geöffnet wird", "Der Zeitpunkt, an dem die gemeinsame Besichtigung der Route bzw. Boulder beginnt", "Der Zeitpunkt, an dem die Isolationszone für die Wettkämpfer der Runde geschlossen wird"],
    a: [0], e: "Start of Play ist der Moment, in dem der erste Wettkämpfer der Runde das Field of Play für seinen ersten Versuch oder eine individuelle Besichtigung betritt.", r: "Glossar „Start of Play“" });

  add({ id: "G65", k: [1, 0, 0], q: "Was bedeutet „Kontrolle“ laut Glossar?",
    o: ["Die willentliche Steuerung von Position und Bewegung über Kletterfläche/Griffe oder Verlagerung des Schwerpunkts", "Das Berühren eines Griffs mit mindestens 2 Fingern, ohne dass der Wettkämpfer abrutscht", "Das ruhige Halten eines Griffs für mindestens 3 Sekunden in stabiler Position", "Das Einhängen einer Expressschlinge von einem Griff aus, ohne zu stürzen"],
    a: [0], e: "Kontrolle ist die willentliche Steuerung von Positionierung und Bewegung, entweder über Kletterfläche und Griffe oder über die Verlagerung des Körperschwerpunkts.", r: "Glossar „Kontrolle“" });

  add({ id: "G66", k: [0, 0, 1], q: "Welche Personen dürfen den Wettkampfbereich betreten?",
    o: ["Technical Officials, Personal von DAV und Ausrichter sowie Anti-Doping-Personal", "Wettkämpfer der laufenden Runde und ihre registrierten Teamoffiziellen", "Weitere vom Jury-Präsidenten autorisierte Personen, unter Aufsicht", "Eltern und Angehörige der Wettkämpfer, auch ohne Akkreditierung"],
    a: [0, 1, 2], e: "Zugang haben nur die in WB §4.1 genannten Personen. Teamoffizielle dürfen Field of Play, Call Zones und Transitbereiche nur mit Genehmigung des JP betreten.", r: "WB §4.1, §4.2" });

  add({ id: "G67", k: [1, 1, 2], q: "Was unterscheidet „Phase“ und „Runde“ im Regelwerk?",
    o: ["„Runde“ beschreibt das Format, „Phase“ die Ranglistenberechnung; fällt das Finale aus, kann das Halbfinale Medaillenphase werden", "„Runde“ und „Phase“ bedeuten immer exakt dasselbe; der Begriff hängt nur von der Disziplin ab", "„Phase“ umfasst mehrere Wettkämpfe einer Serie, „Runde“ einen einzelnen Wettkampf", "„Phase“ gibt es nur im Speed für die Stufen des Wettkampfbaums, sonst heißt es „Runde“"],
    a: [0], e: "Phase wird für Ranglisten und Medaillen meist synonym mit Runde verwendet. Die Trennung macht klar: Fällt die letzte Runde aus, wird z. B. das Halbfinale zur Medaillenphase, und es können dort Tie-Breaks greifen.", r: "Glossar 5 „Phase“ mit Anmerkung" });

  add({ id: "G68", k: [0, 0, 1], q: "Was regelt das Regelwerk, wenn eine Situation nicht direkt in den Regeln geregelt ist?",
    o: ["Die Technical Officials berücksichtigen Wortlaut und Zweck der Regeln, bei Unklarheiten auch die World-Climbing-Vorlage", "Der Veranstalter entscheidet nach eigenem Ermessen, eine Rücksprache mit den Officials ist nicht nötig", "Die Situation bleibt ohne Entscheidung, das Ergebnis wird so gewertet, wie es entstanden ist", "Die Teamoffiziellen stimmen gemeinsam ab, bei Gleichstand entscheidet das Los"],
    a: [0], e: "Fehlt eine direkte Regel, entscheiden die Technical Officials nach Wortlaut und Zweck der Regeln. Bei Unklarheiten oder Regellücken wird die World-Climbing-Vorlage mitberücksichtigt.", r: "AR, Über diese Regeln / Anmerkungen zu den Regeln" });
})();
