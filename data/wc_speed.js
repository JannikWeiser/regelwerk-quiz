// World Climbing – Speed & Team Speed. Sources: Competition Rules 2026 (CR), Event Regulations v3 (ER) Annexes B and D, Errata 1 April 2026
(function () {
  const add = (q) => window.QUESTIONS.push(Object.assign({ rb: "wc", d: "speed" }, q));
  const addT = (q) => window.QUESTIONS.push(Object.assign({ rb: "wc", d: "teamspeed" }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  // ---- Individual Speed ----
  add({ id: "WS01", k: [0, 0, 0], cat: "W", q: "When is a speed attempt considered to have started?",
    o: ["At the earlier of the Starting Signal or when the force on the starting pad falls below the trigger threshold", "When the climber releases the first hold after the Starting Signal and moves upwards", "On the command “Ready”, because any movement from then on counts as a start", "On the command “At your marks”, as soon as both hands are on the starting holds"],
    a: [0], e: "A speed attempt starts with the Starting Signal or when the force on the start pad drops below the threshold, whichever comes first.", r: "CR §7.2" });

  add({ id: "WS02", k: [0, 1, 0], cat: "W", q: "Which recorded Reaction Time is a False Start?",
    o: ["0.099 seconds", "0.100 seconds", "0.101 seconds", "0.130 seconds"],
    a: [0], e: "A start is invalid if the Reaction Time is less than 0.100 seconds. Exactly 0.100 seconds is valid.", r: "CR §7.3" });

  add({ id: "WS03", k: [1, 0, 0], cat: "W", q: "How is “Reaction Time” defined?",
    o: ["The difference between the Starting Signal and the moment the force on the starting pad falls below the threshold", "The difference between the command “Ready” and the climber’s first hand movement", "The difference between the command “At your marks” and the Starting Signal", "The difference between the Starting Signal and the climber touching the first hold"],
    a: [0], e: "Reaction Time is measured from the Starting Signal to the moment the force on the starting pad falls below the threshold.", r: "CR Glossary “Reaction Time”" });

  add({ id: "WS04", k: [0, 0, 0], cat: "W", q: "When is a speed attempt successful?",
    o: ["When the climber stops the timer by striking the finishing pad with a hand", "When the climber touches the top hold with a hand, even if the timer keeps running", "When the climber touches the finishing pad with any body part", "When the climber reaches the top of the wall and the judge confirms it"],
    a: [0], e: "The climber must stop the timer by striking the finishing pad with a hand.", r: "CR §8.4" });

  add({ id: "WS05", k: [2, 1, 0], cat: "W", q: "According to the 2026 rules (including the April 2026 errata), when is a speed climber considered to have fallen after a slip?",
    o: ["When they have lost contact with both hands and are descending under the control of the auto-belay", "As soon as one foot slips off a hold, even if both hands stay on the holds", "As soon as one hand loses contact with the holds, even if the climber recovers", "As soon as their upward motion slows or stops after a slip"],
    a: [0], e: "Note 16 (ii), as corrected by the errata (“and/or” replaced by “and”): a fall requires losing contact with both hands and descending under the auto-belay. A climber who regains Control after a slip may continue.", r: "CR Note 16; Errata 1 April 2026 No. 1" });

  add({ id: "WS06", k: [2, 1, 1], cat: "W", c: true, q: "A climber strikes the finishing pad but the timer does not stop (approved timing system). How is this recorded?",
    o: ["As a Fall; no appeal is possible, only a Technical Incident claim regarding the system", "As a valid time taken from video; an appeal is possible", "As an automatic re-run, without any claim being necessary", "As a False Start; an appeal is possible within 5 minutes"],
    a: [0], e: "Striking the pad without stopping the timer counts as a fall. With an approved timing system, no appeal is possible. Concerns can only be raised as a TI claim.", r: "CR Note 16 (b); ER Annex B §10.1, Note 50" });

  add({ id: "WS07", k: [1, 1, 1], cat: "W", c: true, q: "A climber steadies themself on a bolt hanger during a speed race and then hits the pad. Result?",
    o: ["Recorded as a Fall", "Valid time", "False Start", "Valid time with a Yellow Card"],
    a: [0], e: "If a speed attempt is unsuccessful under §8.1(C), (D) or (E), it is recorded as a fall.", r: "CR §8.1(E), Note 16" });

  add({ id: "WS08", k: [0, 1, 0], cat: "J", c: true, q: "15 competitors complete the speed qualification with a valid result. Final quota?",
    o: ["8", "16", "4", "15"],
    a: [0], e: "4–7 competitors: quota 4; 8–15: quota 8; 16 or more: quota 16; 32 or more: quota 32 (Speed 4 only).", r: "ER Annex B §2.3" });

  add({ id: "WS09", k: [1, 2, 1], cat: "J", c: true, q: "17 start the Speed 2 qualification; 1 is DNS and 1 is DSQ. Final quota?",
    o: ["8", "16", "4", "17"],
    a: [0], e: "Competitors with an Invalid Result Mark are excluded, which leaves 15 and a quota of 8.", r: "ER Annex B §2.3, Note 31" });

  add({ id: "WS10", k: [0, 1, 2], cat: "J", c: true, q: "A Speed 4 event has 35 competitors with a valid qualification result. Final quota?",
    o: ["32", "16", "35", "8"],
    a: [0], e: "A quota of 32 applies only to Speed 4 events with 32 or more valid results.", r: "ER Annex B §2.3(D)" });

  add({ id: "WS11", k: [1, 1, 0], cat: "J", c: true, q: "Speed 2 qualification with 16 starters: who races first on lane B?",
    o: ["The competitor scheduled 9th on lane A", "The competitor scheduled 8th on lane A", "The competitor scheduled 16th on lane A", "The competitor scheduled 2nd on lane A"],
    a: [0], e: "Lane B uses an offset of half the number of starters (rounded down). With 16 or 17 starters, the 9th on A races 1st on B.", r: "ER Annex B Note 29" });

  add({ id: "WS12", k: [1, 2, 2], cat: "J", c: true, q: "Speed 4 qualification with 16 starters: the competitor racing 1st on lane A races at which positions on lanes B, C, D?",
    o: ["5th, 9th, 13th", "2nd, 3rd, 4th", "9th, 1st, 9th", "4th, 8th, 12th"],
    a: [0], e: "Speed 4 uses an offset of a quarter of the starters (rounded down), which is 4 with 16 starters.", r: "ER Annex B Note 30" });

  add({ id: "WS13", k: [1, 0, 1], cat: "J", q: "If ties exceed the final quota, what happens?",
    o: ["Additional races are held; they are not scoring attempts and no official times or records are recorded", "All tied competitors advance; the quota is increased accordingly", "Lots are drawn among the tied competitors; the quota stays the same", "The best qualification reaction time decides; the quota stays the same"],
    a: [0], e: "Ties at the quota are separated by extra races. Times from these races are not official results, and no records can be set.", r: "ER Annex B §2.4, Notes 32–33" });

  add({ id: "WS14", k: [1, 1, 2], cat: "J", c: true, q: "5 competitors are tied at the quota boundary in a Speed 4 event. How is it resolved?",
    o: ["Each makes 1 run on lane C; the best advance", "Head-to-head races of 4", "Lots", "Best qualification reaction time"],
    a: [0], e: "Up to 4 tied competitors (Speed 4) race head-to-head with random lanes. More than 4 each make 1 run on lane C (Speed 4) or lane A (Speed 2).", r: "ER Annex B Note 32" });

  add({ id: "WS15", k: [1, 0, 0], cat: "J", q: "In a Speed 2 tournament bracket with 16 starters, who races in heat 1 of the preliminary stage?",
    o: ["Qualifier #1 vs qualifier #16", "Qualifier #1 vs qualifier #2", "Qualifier #1 vs qualifier #8", "Qualifier #1 vs qualifier #9"],
    a: [0], e: "Figure 1: race 1 is #1 (lane A) vs #16 (lane B), race 2 is #8 vs #9, and so on. The best seeds should meet in the final race.", r: "ER Annex B Figure 1; CR Glossary “Tournament Bracket Order”" });

  add({ id: "WS16", k: [0, 0, 1], cat: "W", q: "In Speed 4, who advances from a tournament bracket race?",
    o: ["The 2 competitors with the lower (or only) climbing times", "Only the competitor with the lowest (or only) climbing time", "The 3 competitors with the lowest (or only) climbing times", "The 2 competitors with the best reaction times"],
    a: [0], e: "Speed 4 is a modified elimination format in which the 2 best competitors in each race advance.", r: "ER Annex B §2.6, §6.4" });

  add({ id: "WS17", k: [1, 0, 0], cat: "W", q: "What happens after a False Start in a speed qualification race?",
    o: ["The race continues without a recall signal and is recorded; the False Start is shown visually only", "The race is stopped and re-run with both climbers; the False Start is shown visually only", "The race continues, but the climber is disqualified; the False Start is shown visually and audibly", "The race is stopped; the False Start is shown visually and audibly"],
    a: [0], e: "In qualification, the race continues and the false start is indicated visually only, with no audio signal.", r: "ER Annex B §5.1(A), Note 41" });

  add({ id: "WS18", k: [1, 0, 0], cat: "W", q: "What happens after a False Start in a tournament bracket race?",
    o: ["The starter stops the race; the False Start is indicated by visual and audio signals", "The race continues; the False Start is indicated by visual signals only", "The starter stops the race; both climbers receive a Caution (Yellow Card)", "The race continues; the climber who false-started receives a time penalty"],
    a: [0], e: "In a tournament bracket race, the starter stops the race and the false start is shown visually and audibly.", r: "ER Annex B §5.1(B), Note 42" });

  add({ id: "WS19", k: [0, 1, 0], cat: "W", c: true, q: "Speed 2 final bracket: A makes a False Start; B falls. Winner?",
    o: ["B", "A", "Re-run", "Better qualifier"],
    a: [0], e: "If one competitor makes a false start or does not start, the other competitor wins.", r: "ER Annex B §6.2(A)" });

  add({ id: "WS20", k: [0, 1, 1], cat: "W", c: true, q: "In a Speed 2 bracket race, both competitors fall. What happens?",
    o: ["The race is re-run; if inconclusive, best results per §8.2 decide", "No re-run; whoever climbed higher wins the race", "No re-run; the better qualification time decides directly", "No re-run; both are eliminated and there is no winner"],
    a: [0], e: "If both false start, both fall or both record the same time, the race is re-run. If that is inconclusive, best results under §8.2 decide.", r: "ER Annex B §6.3" });

  add({ id: "WS21", k: [0, 0, 0], cat: "W", q: "How are speed times measured and published?",
    o: ["Measured to 1/1000 second; official times rounded down to 1/100 second", "Measured and published to 1/1000 second", "Measured to 1/100 second, published to 1/10 second", "Measured to 1/1000 second, published rounded to nearest 1/100 second"],
    a: [0], e: "Times are measured to 1/1000 second. Official times, including records, are rounded down to 1/100 second. High-precision timing may show a tie-break but does not replace the official time.", r: "ER Annex B §7.1–7.3" });

  add({ id: "WS22", k: [1, 2, 2], cat: "O", c: true, q: "The world record is 4.79 seconds (measured 4.798 seconds). A climber records 4.795 seconds. What is the result?",
    o: ["They equal the record but do not break it", "New record because 4795 < 4798", "New record of 4.80 seconds", "The time is not eligible for records"],
    a: [0], e: "4.795 seconds rounds down to 4.79 seconds, which equals the record. Breaking it requires 4.789 seconds or better.", r: "ER Annex B Note 48" });

  add({ id: "WS23", k: [0, 0, 0], cat: "W", q: "In what order are results compared in the speed ranking?",
    o: ["Valid Time (ascending), Fall, False Start, Not Started", "Valid Time, False Start, Fall, Not Started", "Fall, Valid Time, False Start, Not Started", "Valid Time, Not Started, Fall, False Start"],
    a: [0], e: "The order is valid time (ascending), then Fall, then False Start, then Not Started.", r: "ER Annex B §8.2" });

  add({ id: "WS24", k: [0, 2, 0], cat: "W", c: true, q: "Qualification: A has 6.12 seconds and a Fall; B has 6.12 seconds and 7.01 seconds. Who ranks higher?",
    o: ["B – the next best result is a valid time, which ranks ahead of a fall", "A – a fall is ignored when comparing the next best result", "Tied – only the best result counts in qualification", "Whoever had the better reaction time, because the times are equal"],
    a: [0], e: "With equal best results, the next best result decides, and a valid time beats a fall.", r: "ER Annex B §8.2(A)" });

  add({ id: "WS25", k: [1, 1, 1], cat: "J", c: true, q: "A competitor does not show up for their first scheduled final race. Consequence for them and their opponent?",
    o: ["They are unranked (DNS); the race is not run and the opponent gets a bye", "They rank last in the final; the opponent climbs alone and needs a valid time", "They may start at the end of the stage; the opponent waits", "They are replaced by the next-ranked climber from qualification"],
    a: [0], e: "A competitor who misses their first scheduled race is DNS and unranked. The race is not run, and the opponent gets a bye.", r: "ER Annex B §8.3, Note 38" });

  add({ id: "WS26", k: [0, 0, 0], cat: "J", q: "What minimum gap between races is a speed competitor entitled to?",
    o: ["5 minutes, except for re-runs", "2 minutes, except for re-runs", "10 minutes, including re-runs", "None; the start list sets the timing"],
    a: [0], e: "Competitors are entitled to at least 5 minutes between races, unless a race is re-run.", r: "ER Annex B §4.2(C)" });

  add({ id: "WS27", k: [0, 0, 1], cat: "W", q: "Where is the assembly position in speed?",
    o: ["Not more than 2 m in front of and facing away from the wall, after connecting to the auto-belay", "Directly on the starting pad, facing the wall, after connecting to the auto-belay", "In the Call Zone, until the starter calls the climbers to the wall", "At least 5 m in front of the wall, facing it, before connecting to the auto-belay"],
    a: [0], e: "Once connected to the auto-belay, competitors stand in the assembly position, not more than 2 m in front of the wall and facing away from it.", r: "ER Annex B §4.8" });

  add({ id: "WS28", k: [0, 0, 0], cat: "W", q: "What does a competitor do on “At your marks”?",
    o: ["Take the starting position: both hands and one foot on the starting holds, one foot on the starting pad", "Return to the assembly position facing away from the wall and wait for “Ready”", "Adjust the starting pad and get connected to the auto-belay by the belayer", "Raise a hand to show the starter that they are ready"],
    a: [0], e: "On “At your marks”, competitors go straight into the start position: both hands and one foot on their chosen starting holds, the other foot on the pad.", r: "ER Annex B §4.9" });

  add({ id: "WS29", k: [0, 0, 0], cat: "W", q: "When does the starter announce “Ready”?",
    o: ["Once all competitors are motionless in their starting positions", "Exactly 3 seconds after the command “At your marks”", "As soon as the crowd is quiet enough for the audio signal", "As soon as the Jury President gives a hand signal"],
    a: [0], e: "“Ready” is announced once all competitors are motionless in their starting positions, then the timing system is started.", r: "ER Annex B §4.10" });

  add({ id: "WS30", k: [1, 1, 1], cat: "J", c: true, q: "A competitor repeatedly delays the start and disturbs the opponent. What happens under World Climbing rules?",
    o: ["The starter sends both back to the assembly position and the Jury President issues a Yellow Card to the offender", "The starter sends both back to the assembly position and the disturbed opponent is disqualified", "The starter starts the race without the offender, who is recorded as DNS", "Nothing – each competitor may prepare for as long as they like"],
    a: [0], e: "For undue delay or disturbance, the starter sends both competitors back and the Jury President issues a Yellow Card to the offending competitor.", r: "ER Annex B Notes 39–40" });

  add({ id: "WS31", k: [0, 0, 1], cat: "J", q: "To whom is a potential speed Technical Incident reported, and until when?",
    o: ["To the Jury President; no claim after “At your marks” has been given in the next scheduled race", "To an International Judge; claims are possible until the Official Results", "To the starter; claims are possible until 5 minutes after the race", "To the Event Delegate; claims are possible until the end of the round"],
    a: [0], e: "In speed, potential TIs go to the Jury President, who decides and may review video or test the timing system. The deadline is “At your marks” in the next race.", r: "ER Annex B §9.1, Note 49" });

  add({ id: "WS32", k: [0, 0, 1], cat: "J", q: "When can a Technical Incident related to the auto-belay or timing system be claimed, and who re-runs?",
    o: ["Only for a clear or systematic error; only directly affected competitors re-run", "For any reasonable suspicion; all competitors in the race re-run", "Never; auto-belay and timing systems are excluded from Technical Incidents", "Only with Event Delegate approval; the whole round re-runs"],
    a: [0], e: "A TI concerning the auto-belay or timing system requires a clear or systematic error. Only the directly affected competitors re-run.", r: "ER Annex B §9.2, §9.3" });

  add({ id: "WS33", k: [1, 0, 1], cat: "W", stufe: 2, q: "When must notice of appeal about the scoring of a speed race be given?",
    o: ["Before the start of the next race; verbal notice allowed, 5 minutes for the written appeal", "Within 5 minutes of the Official Results; written only", "Before the end of the round; verbal notice allowed, 10 minutes for the written appeal", "Within 2 minutes of the race; written only"],
    a: [0], e: "Notice is due before the next race starts and may be verbal, with 5 minutes to submit in writing. Without a written appeal, it is recorded as unsuccessful and a fee is charged.", r: "ER Annex B §10.2, Note 51" });

  add({ id: "WS34", k: [1, 0, 1], cat: "J", q: "Which statements about speed training sessions are correct?",
    o: ["At least one training session is organised before an individual speed event", "Any training session includes a demonstration of the False Start signal", "Training times have no competitive or ranking value", "A training session is repeated if a hold is replaced"],
    a: [0, 1, 2], e: "A training session is mandatory, must demonstrate the false start signal and has no ranking value. It is not repeated if equipment is replaced or the route adjusted.", r: "ER Annex B §4.1, Note 36" });

  add({ id: "WS35", k: [1, 0, 2], cat: "J", q: "Is the practice-period format used for Speed 4 training?",
    o: ["No – to avoid excessive physical demand on athletes", "Yes – always, to rehearse the qualification conditions", "Only with more than 32 athletes, because there is more time", "Only if the Event Delegate orders it before the event"],
    a: [0], e: "Speed 4 training does not use the practice-period format. For Speed 2 it is the normal format, immediately before qualification.", r: "ER Annex B Note 37" });

  add({ id: "WS36", k: [0, 0, 1], cat: "J", q: "When should speed route cleaning take place?",
    o: ["Before and after the qualification round of each event", "After every race, so all competitors have equal conditions", "After every 5th race, as announced at the Technical Meeting", "Only on request of a team official, decided by the Jury President"],
    a: [0], e: "Route cleaning should take place before and after the qualification round of each event.", r: "ER Annex B §4.4" });

  add({ id: "WS37", k: [2, 0, 1], cat: "J", q: "When does the presentation of finalists take place in individual speed (per the April 2026 errata)?",
    o: ["Before the final stage races", "Following the quarter-final races", "Before qualification", "After the medal ceremony"],
    a: [0], e: "The errata replaced “following the quarter-final races” with “before the final stage races”.", r: "ER Annex B §4.5; Errata 1 April 2026 No. 2" });

  add({ id: "WS38", k: [1, 1, 2], cat: "J", c: true, q: "Speed 4 non-medal race: false starts on lanes B, C and D. What happens?",
    o: ["Lane A advances; lanes B/C/D re-run", "Lane A advances alone; no re-run", "Re-run all 4", "Lanes A and B advance"],
    a: [0], e: "Per the protocol in Note 44, lane A advances and lanes B, C and D re-run to decide the second place.", r: "ER Annex B §6.5, Note 44" });

  add({ id: "WS39", k: [1, 2, 2], cat: "J", c: true, q: "Speed 4 non-medal race: A 5.031 seconds, B 4.99 seconds, C 5.05 seconds, D 5.031 seconds. What happens?",
    o: ["Lanes A and D re-run", "A and D both advance", "B and C advance", "Re-run all 4"],
    a: [0], e: "B advances. A and D are tied for the second spot and re-run.", r: "ER Annex B Note 45" });

  add({ id: "WS40", k: [1, 2, 2], cat: "J", c: true, q: "Speed 4 non-medal race: A Fall, B Fall, C Fall, D 4.99 seconds. What happens?",
    o: ["D advances; lanes A, B and C re-run to determine who advances", "D advances alone; no second competitor advances from this race", "All 4 lanes re-run, because 3 competitors fell", "A and D advance; A had the lowest lane letter"],
    a: [0], e: "D advances. The second place cannot be determined, so A, B and C re-run.", r: "ER Annex B Note 45" });

  add({ id: "WS41", k: [1, 1, 2], cat: "J", c: true, q: "Speed 4 medal race: A 5.02 seconds, B 4.97 seconds, C 4.97 seconds, D Fall. What happens?",
    o: ["Lanes B and C re-run to determine 1st and 2nd place", "B and C are both ranked 1st without a re-run", "All 4 lanes re-run to determine the podium", "No re-run; countback decides 1st and 2nd place"],
    a: [0], e: "When 2 or more competitors are tied for 1st, only they re-run.", r: "ER Annex B §6.6(B), Note 47" });

  add({ id: "WS42", k: [1, 1, 2], cat: "J", c: true, q: "Speed 4 medal race: false starts on lanes A and B. What happens?",
    o: ["Lanes C and D re-run", "C and D are 1st and 2nd without re-run", "Re-run all 4", "Lane C wins"],
    a: [0], e: "Per the medal-race protocol in Note 46: FS on A and B leads to a re-run for lanes C and D.", r: "ER Annex B §6.6, Note 46" });

  add({ id: "WS43", k: [0, 0, 0], cat: "W", q: "By when must speed competitors report under World Climbing regulations?",
    o: ["To the warm-up area by the time stated on the Official Start List", "To the Call Zone 5 minutes before their scheduled race", "To the starter at the wall when their race is called", "There is no deadline as long as they start on time"],
    a: [0], e: "Competitors must report to the warm-up area by the time on the Official Start List, then to the Call Zone in start-list order.", r: "ER Annex B §4.2(A), §4.6" });

  add({ id: "WS44", k: [1, 0, 0], cat: "W", q: "What is the Starting Signal in speed?",
    o: ["A starting light on the left side of the route with a unique audible tone from the timing system", "A whistle from the starter together with a starting light on the right side of the route", "The starter’s command “Ready”, followed immediately by an audible tone", "An audible tone from the timing system only, without any light"],
    a: [0], e: "The Starting Signal is a start light on the left side of the route plus a unique tone from the timing system.", r: "CR Glossary “Starting Signal” (A)" });

  // ---- Team Speed ----
  addT({ id: "WT01", k: [0, 0, 1], cat: "W", q: "How is a Team Speed team composed?",
    o: ["2 competitors drawn from a squad of up to 3 (single-gender) or 4 (mixed events)", "3 competitors drawn from a squad of up to 4, regardless of the event type", "2 competitors who are fixed for the whole season and cannot be changed", "4 competitors, who all climb in every race of the event"],
    a: [0], e: "Each team has 2 competitors drawn from a squad of up to 3 (single-gender events) or 4 (mixed events).", r: "ER Annex D §1.2" });

  addT({ id: "WT02", k: [0, 0, 1], cat: "J", q: "By when must a team declare its pairing and lane assignment?",
    o: ["Not later than 90 minutes before each round, in writing to the Jury President", "Once at registration for the event; it then applies to all rounds", "In the Call Zone before each race, verbally to the starter", "At the Technical Meeting, in writing to the Event Delegate"],
    a: [0], e: "Declarations are due in writing to the Jury President no later than 90 minutes before each round. No changes are allowed after submission, but they may differ between qualification and final.", r: "ER Annex D §4.1, Note 71" });

  addT({ id: "WT03", k: [1, 0, 2], cat: "J", q: "In a mixed Team Speed event, who decides whether the man or the woman climbs first?",
    o: ["Each team freely; the order may differ between teams", "The rules require the woman to climb the lead-off leg", "The rules require the man to climb the lead-off leg", "The order is drawn by lot before each round"],
    a: [0], e: "In mixed events, teams are free to choose the running order of men and women.", r: "ER Annex D Note 71" });

  addT({ id: "WT04", k: [1, 0, 0], cat: "W", q: "Which team wins a Team Speed race?",
    o: ["The team with the lowest total time from the lead-off Starting Signal to the successful completion of the anchor leg", "The team with the fastest single leg, whether lead-off or anchor", "The team whose anchor hits the pad first, regardless of how long the lead-off took", "The team with the lowest sum of both leg times, excluding the changeover"],
    a: [0], e: "The valid time runs from the Starting Signal of the lead-off leg to the successful completion of the anchor leg.", r: "ER Annex D §1.3, §6.1, Note 79" });

  addT({ id: "WT05", k: [2, 1, 0], cat: "J", c: true, q: "20 teams complete the Team Speed qualification with a valid result. Final quota?",
    o: ["16", "8", "20", "32"],
    a: [0], e: "4–7 teams: quota 4; 8–15: quota 8; 16 or more: quota 16. The errata clarified that §2.3 counts teams.", r: "ER Annex D §2.3; Errata 1 April 2026 No. 3" });

  addT({ id: "WT06", k: [0, 0, 0], cat: "W", q: "Which lanes do the lead-off competitors start on?",
    o: ["Lanes A and C", "Lanes A and B", "Lanes B and D", "Free choice"],
    a: [0], e: "Lead-off competitors start on lanes A and C with an audible signal.", r: "ER Annex D §4.12" });

  addT({ id: "WT07", k: [0, 0, 0], cat: "W", q: "What is the starting signal for the anchor leg?",
    o: ["A visual-only indicator when the lead-off competitor has successfully completed their route", "An audible tone when the lead-off competitor has successfully completed their route", "A hand signal from the starter when the lead-off competitor hits the pad", "None – the anchor starts at their own discretion"],
    a: [0], e: "The timing system gives a visual-only indicator once the lead-off leg is completed.", r: "ER Annex D §4.12" });

  addT({ id: "WT08", k: [0, 0, 0], cat: "W", q: "What happens after a lead-off False Start in a qualification race?",
    o: ["The race continues without a recall signal and the result is recorded", "The race is stopped and re-run immediately with both teams", "The race continues, but the team is disqualified", "The race continues, but that team’s anchor may not start"],
    a: [0], e: "In qualification, the race continues and the false start is shown visually only. In a bracket race, the starter stops the race.", r: "ER Annex D §5.1" });

  addT({ id: "WT09", k: [0, 0, 0], cat: "W", q: "What happens if an anchor-leg competitor makes a False Start?",
    o: ["The race continues and the result is recorded, in qualification and finals alike", "The race is stopped and re-run, in qualification and finals alike", "The race is stopped only in finals and continues in qualification", "The anchor must return to the starting position and restart"],
    a: [0], e: "An anchor-leg false start never stops the race. The result is recorded.", r: "ER Annex D §5.2" });

  addT({ id: "WT10", k: [2, 1, 1], cat: "W", q: "After the April 2026 errata, in which cases is a Team Speed bracket race re-run?",
    o: ["Both teams record the same valid time", "Both teams fail to record a valid time", "Both teams record a False Start on either leg", "One team is faster by less than 0.5 seconds"],
    a: [0, 1, 2], e: "The errata deleted the exclusion in (B) and changed (C) from “the anchor” to “either”. If the re-run is still tied, best results under §8.2 decide.", r: "ER Annex D §6.3; Errata 1 April 2026 No. 5" });

  addT({ id: "WT11", k: [0, 1, 0], cat: "W", c: true, q: "Bracket race: team 1 records a valid 12.40 seconds; team 2’s anchor makes a False Start. Winner?",
    o: ["Team 1", "Team 2 if faster", "Re-run", "No winner"],
    a: [0], e: "If one team records a False Start or does not start, the other team wins.", r: "ER Annex D §6.2(A), §5.2" });

  addT({ id: "WT12", k: [1, 0, 1], cat: "J", q: "How are ties at the Team Speed final quota resolved?",
    o: ["2 tied teams race head-to-head; more than 2 each make 1 run on lanes A+B; these runs produce no official times", "2 tied teams race head-to-head; more than 2 are separated by lot; these runs count as scoring attempts", "The fastest anchor leg from qualification decides, without additional runs", "All tied teams advance and the quota is increased accordingly"],
    a: [0], e: "2 tied teams race head-to-head. With more, each team makes 1 run on lanes A+B. No official times or records come from these runs.", r: "ER Annex D §2.4, Notes 68–69" });

  addT({ id: "WT13", k: [1, 1, 1], cat: "O", c: true, q: "A National Federation enters athletes A, B, C. A/B race in qualification, B/C in the final, and the team finishes 3rd. Who gets medals?",
    o: ["A, B and C", "B and C only", "B only", "A and B only"],
    a: [0], e: "Medals go to all team members who started in any round. A reserve who never competes gets none.", r: "ER §8.3, Note 11" });

  addT({ id: "WT14", k: [0, 0, 1], cat: "J", q: "To whom is a Team Speed Technical Incident reported, and who re-runs?",
    o: ["To the Jury President; only the directly affected competitor(s) re-run", "To an International Judge; both teams in the race re-run", "To the starter; the whole round re-runs", "Nowhere – there are no Technical Incidents in Team Speed"],
    a: [0], e: "Claims go to the Jury President, up to “At your marks” of the next race. Only directly affected competitors re-run.", r: "ER Annex D §9.1, §9.3" });

  addT({ id: "WT15", k: [1, 0, 0], cat: "W", q: "How is the Team Speed final organised?",
    o: ["Single elimination with small and big final, brackets as for Speed 2", "Speed 4 style, where the best 2 teams of each race advance", "Time trial, where each team runs once and the time decides", "Round robin, where every team races every other team"],
    a: [0], e: "The final is a single elimination tournament. Losers of the semi-final stage race the small final, winners the big final.", r: "ER Annex D §2.5, Note 70" });

  addT({ id: "WT16", k: [2, 0, 1], cat: "J", q: "When does the presentation of finalists take place in Team Speed (per the April 2026 errata)?",
    o: ["Before the final stage races", "Following the quarter-final races", "Before qualification", "After the medal ceremony"],
    a: [0], e: "The errata replaced “following the quarter-final races” with “before the final stage races”.", r: "ER Annex D §4.6; Errata 1 April 2026 No. 4" });

})();
