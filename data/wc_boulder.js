// World Climbing – Boulder. Sources: Competition Rules 2026 (CR), Event Regulations v3 (ER) Annex C
(function () {
  const add = (q) => window.QUESTIONS.push(Object.assign({ rb: "wc", d: "boulder" }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "WB01", k: [0, 0, 0], q: "When is a boulder attempt considered to have started?",
    o: ["When the climber leaves the ground", "When the climber controls all 4 start markings", "With the rotation start signal", "When the climber touches the first hold"],
    a: [0], e: "A boulder attempt starts when the climber leaves the ground.", r: "CR §7.4" });

  add({ id: "WB02", k: [1, 1, 0], c: true, q: "A climber jumps to brush a hold without touching the climbing surface or any other hold. Does this count as an attempt?",
    o: ["No, it is not counted as a scoring attempt", "Yes, they left the ground", "Yes, if they are airborne longer than 2 seconds", "Only in the final"],
    a: [0], e: "Jumping to brush a hold is not counted as an attempt, provided the climber does not use the climbing surface or touch any other hold.", r: "CR Note 14" });

  add({ id: "WB03", k: [0, 0, 0], q: "What validates the start of a boulder attempt?",
    o: ["Controlling the marked starting holds to achieve a stable position with both hands and both feet in the Starting Position", "Hanging from the start holds with both hands, feet anywhere", "Placing one foot on a start hold", "Using the hand position indicated by the routesetter"],
    a: [0], e: "The climber must Control the marked starting holds and achieve a stable position with both hands and both feet in the Starting Position. Using any other hold first is a False Start.", r: "CR §7.5" });

  add({ id: "WB04", k: [1, 0, 0], q: "What must a boulder judge assess when validating a climber’s start?",
    o: ["Whether the climber has demonstrated Control of the marked starting holds and achieved the Starting Position", "Whether the movement to establish the Starting Position is separate and distinct from any movement made from it for progress", "Whether the climber used the routesetter’s intended hand placement", "Whether the climber chalked up beforehand"],
    a: [0, 1], e: "The judge checks that the Starting Position was achieved with Control, and that establishing it was separate from the first movement for progress. Markings must not indicate specific hand placements.", r: "CR Note 15; CR §1.12(A)" });

  add({ id: "WB05", k: [1, 0, 1], q: "Which statements about boulder start markings are correct?",
    o: ["Each Starting Position must have 4 markings, regardless of the number of holds used", "Markings should not indicate specific hand placements", "Blocker holds must not be designated as starting holds and cannot be Controlled when starting", "Each hand must have its own start hold"],
    a: [0, 1, 2], e: "A Starting Position has 4 markings in a distinctive colour, without prescribing hand placements. Blocker holds are not starting holds and cannot be used for the start.", r: "CR §1.12(A), Note 4" });

  add({ id: "WB06", k: [0, 0, 0], q: "How may the Top of a boulder be defined?",
    o: ["A finishing hold marked in the same colour as the starting holds", "A standing position on top of the boulder", "A hold marked in the Zone colour", "A hold marked with black tape"],
    a: [0, 1], e: "The Top is either a finishing hold in the starting-hold colour or a standing position on top of the boulder. Zone holds use a different colour from the start holds.", r: "CR §1.12(B), (C)" });

  add({ id: "WB07", k: [0, 0, 2], q: "How many handholds should a boulder have?",
    o: ["Not more than 12, with an average across the round between 4 and 8", "Not more than 15, average 6–10", "Not more than 10, average 3–6", "No limit"],
    a: [0], e: "The number of handholds on a boulder should not exceed 12, and the average across a round should be between 4 and 8.", r: "CR §1.10" });

  add({ id: "WB08", k: [0, 0, 0], q: "When is a boulder attempt with a marked finishing hold successful?",
    o: ["When the climber matches it with both hands, achieves a stable position before time expires and demonstrates clear and intentional Control", "When the climber touches it with one hand", "When the climber slaps it with both hands", "When the judge counts to 3"],
    a: [0], e: "Success requires a match with both hands, a stable position before the allowed time expires, and clear, intentional Control of the finishing hold.", r: "CR §8.5(B)" });

  add({ id: "WB09", k: [1, 1, 1], c: true, q: "A climber places the second hand on top of the first, which is on the finishing hold. The second hand does not touch the hold itself. Is the hold matched?",
    o: ["No – both hands must have simultaneous contact with the hold itself", "Yes, hand-on-hand counts", "Yes, if stable", "Only if the hold is too small"],
    a: [0], e: "Matching requires both hands to touch the marked finishing hold at the same time.", r: "CR Note 21" });

  add({ id: "WB10", k: [1, 0, 0], q: "Which actions demonstrate Control of the finishing hold?",
    o: ["Using the hold to arrest the movement to gain it", "Maintaining a stable position while holding it", "Shaking out or celebrating while maintaining a stable position", "Slapping the hold with both hands"],
    a: [0, 1, 2], e: "Control is shown by arresting the movement or keeping a stable position. Shaking out or celebrating also counts while stable. Slapping, instability or being carried away by momentum do not.", r: "CR Note 22" });

  add({ id: "WB11", k: [1, 1, 0], c: true, q: "A climber dynos to the finishing hold, briefly matches it and is carried away by momentum. Top?",
    o: ["No – being carried away by momentum does not demonstrate Control", "Yes, it was matched", "Yes, if contact lasted over one second", "Only if the judge raised a hand"],
    a: [0], e: "Control is not indicated where the climber is carried away from the hold by their momentum.", r: "CR Note 22" });

  add({ id: "WB12", k: [0, 0, 0], q: "When is a Zone awarded?",
    o: ["When the climber Controls the Zone hold with the hands to complete an Establishing Movement, or an Advancing Movement to a stable position on a hold further along", "As soon as the Zone hold is touched", "When standing on the Zone hold", "When the climber is higher than the Zone hold"],
    a: [0], e: "The Zone counts when the Zone hold is Controlled with the hands to complete an Establishing Movement, or an Advancing Movement to a stable position further along the line.", r: "CR §9.7" });

  add({ id: "WB13", k: [1, 2, 1], c: true, q: "A climber uses the Zone hold en passant for a paddle move, reaches the next hold but cannot hold it and falls. Zone?",
    o: ["No – the Zone is only awarded if the onward movement is completed and a stable position achieved", "Yes, any use counts", "Yes, it changed the direction of motion", "Only if the judge clearly saw the touch"],
    a: [0], e: "A paddle move via the Zone counts as an Advancing Movement. The Zone is only awarded once that movement is completed and the climber is stable.", r: "CR Note 26" });

  add({ id: "WB14", k: [0, 0, 0], q: "How is the score for a boulder calculated?",
    o: ["Zone: 10 points minus 0.1 per attempt before the Zone; Top: 25 points minus 0.1 per unsuccessful attempt; the greater value counts, minimum 0.0", "Top 1, Zone 0.5", "Top 25 plus Zone 10, no deductions", "Top 100 minus 10 per failed attempt"],
    a: [0], e: "A Zone is worth 10 points minus 0.1 for each attempt before it, a Top 25 points minus 0.1 for each unsuccessful attempt. The greater of the 2 counts, and the score cannot be negative.", r: "ER Annex C §5.1" });

  add({ id: "WB15", k: [0, 2, 0], c: true, q: "A climber tops a boulder on their 3rd attempt. Score?",
    o: ["24.8", "24.7", "25.0", "34.8"],
    a: [0], e: "25 − 2 × 0.1 = 24.8.", r: "ER Annex C §5.1" });

  add({ id: "WB16", k: [0, 2, 0], c: true, q: "A climber gets the Zone on attempt 4 but no Top. Score?",
    o: ["9.7", "9.6", "10.0", "6.0"],
    a: [0], e: "10 − 3 × 0.1 = 9.7.", r: "ER Annex C §5.1(A)" });

  add({ id: "WB17", k: [0, 2, 0], c: true, q: "Zone on attempt 2, Top on attempt 5. Score?",
    o: ["24.6", "34.5", "24.5", "9.9"],
    a: [0], e: "Zone = 9.9, Top = 25 − 0.4 = 24.6. The greater value counts: 24.6.", r: "ER Annex C §5.1" });

  add({ id: "WB18", k: [1, 0, 0], q: "How are boulder ranking ties broken?",
    o: ["Count-back to the General Ranking of the preceding round (not if it used multiple starting groups), then fewer attempts on topped boulders, then fewer attempts for Zones", "More tops, then more zones, then lots", "Fewer attempts for zones, then tops, then count-back", "Climbing time"],
    a: [0], e: "Ties are broken by (A) count-back to the preceding round, if applicable and not used with multiple starting groups, (B) total attempts on topped boulders, ascending, (C) total attempts for Zones, ascending.", r: "ER Annex C §7.1" });

  add({ id: "WB19", k: [0, 1, 1], c: true, q: "A competitor does not attempt the first boulder in a round. What happens?",
    o: ["They are unranked and marked DNS in the round", "They score 0 on boulder 1 and continue", "They may attempt boulder 1 at the end", "They are disqualified"],
    a: [0], e: "Competitors who do not attempt the first boulder in a round are unranked and marked DNS.", r: "ER Annex C §7.1" });

  add({ id: "WB20", k: [1, 0, 0], q: "What is the standard format of a World Climbing boulder event?",
    o: ["Qualification 5 boulders (5 minutes fixed, quota 60 per group), semi-final 4 boulders (5 minutes fixed, 24), final 4 boulders (4 minutes max, 8), all on-sight", "Qualification 4, final 4, no semi-final", "Qualification 5 (4 minutes), semi-final 4 (4 minutes), final 4 (5 minutes)", "Qualification 6 flash, final 4 on-sight"],
    a: [0], e: "Annex C Table 1: qualification with 5 boulders, on-sight, 5 minutes fixed, Rank Ascending, quota 60 per group. Semi-final with 4 boulders, 5 minutes fixed, Rank Descending, quota 24. Final with 4 boulders, 4 minutes max, Rank Descending, quota 8.", r: "ER Annex C §2.1 Table 1" });

  add({ id: "WB21", k: [1, 0, 0], q: "What is the starting order in a World Climbing boulder qualification?",
    o: ["Rank Ascending (best seeded starts first; unseeded start after all seeded, in random order)", "Rank Descending", "Fully random", "Alphabetical by nation"],
    a: [0], e: "The boulder qualification uses Rank Ascending Order. The best seeded competitor starts first, and unseeded competitors start after all seeded ones in random order.", r: "ER Annex C §2.1 Table 1; CR Glossary" });

  add({ id: "WB22", k: [1, 0, 2], q: "Which alternative qualification formats may international youth boulder competitions adopt?",
    o: ["Format A: 4–8 boulders, flash, limited attempts, round duration fixed but no individual rotation periods", "Format B: 4–6 boulders, flash, 4 or 5 minutes fixed rotations, ascending offset order", "Format C: head-to-head knockout", "Format D: on-sight with unlimited time"],
    a: [0, 1], e: "Table 3 lists Format A (limited attempts, overall round duration only) and Format B (flash variation of the standard format). Without Event Seeding, Format B reverts to random, offset.", r: "ER Annex C §2.3, Notes 55–56" });

  add({ id: "WB23", k: [1, 0, 2], q: "How many boulders may the Jury President cancel in a round?",
    o: ["Up to one boulder in any round, in exceptional circumstances", "Any number", "None", "Up to 2"],
    a: [0], e: "In exceptional circumstances, the Jury President may cancel up to 1 boulder per round.", r: "ER Annex C Note 53" });

  add({ id: "WB24", k: [0, 0, 0], q: "How long is the interval after each rotation to clear the Field of Play?",
    o: ["15 seconds", "5 seconds", "30 seconds", "1 minute"],
    a: [0], e: "There is a 15-second interval after each rotation.", r: "ER Annex C §4.4" });

  add({ id: "WB25", k: [0, 0, 0], q: "When does a rotation end in the boulder final?",
    o: ["When all competitors on the Field of Play have completed their attempts, or when the maximum rotation time has elapsed", "Always after exactly 4 minutes", "When the first competitor tops", "When the Jury President decides"],
    a: [0], e: "In the final, a rotation ends when everyone on the Field of Play is finished or the maximum time (4 minutes) has elapsed.", r: "ER Annex C §4.4" });

  add({ id: "WB26", k: [0, 0, 0], q: "What collective observation is held before a World Climbing boulder final?",
    o: ["2 minutes per boulder; recording equipment prohibited", "8 minutes for all boulders simultaneously", "6 minutes for all boulders", "None"],
    a: [0], e: "The standard World Climbing format has 2 minutes per boulder, without recording equipment, before competitors return to the Call Zone.", r: "ER Annex C §4.9" });

  add({ id: "WB27", k: [1, 1, 1], c: true, q: "During the final observation, a competitor tries the first move of a boulder. What may happen?",
    o: ["A disciplinary sanction or a “penalty attempt” added to their attempt count", "Nothing", "Automatic disqualification", "The boulder is cancelled for them"],
    a: [0], e: "Practising the boulder or touching holds other than the start (and associated blocker) holds may lead to a disciplinary sanction or a penalty attempt.", r: "ER Annex C Note 60" });

  add({ id: "WB28", k: [1, 0, 0], q: "What may competitors touch during a collective boulder observation?",
    o: ["Only the marked starting holds and any associated blocker holds", "Any hold reachable from the ground", "Nothing", "Start and Zone holds"],
    a: [0], e: "On boulders, competitors may touch only the marked starting holds and their blockers.", r: "CR Note 12" });

  add({ id: "WB29", k: [1, 0, 0], q: "Who is responsible for brushing boulders during World Climbing rounds?",
    o: ["The Jury President should arrange for the boulders to be cleaned at the end of each rotation; if impossible, this is announced before the round", "Each competitor alone, within their rotation", "Only the routesetters after the round", "Coaches"],
    a: [0], e: "The Jury President should arrange cleaning at the end of each rotation. If that is not possible, the decision is announced before the round. Competitors may also request a brusher.", r: "ER Annex C §4.6, Note 59, §4.13" });

  add({ id: "WB30", k: [0, 1, 1], c: true, q: "A competitor brushes a hold with a toothbrush from their chalk bag. Allowed?",
    o: ["No – only equipment provided by the event organiser may be used, or a brusher may be requested", "Yes, if clean", "Yes, if no brushes are provided", "Only during the 15-second interval"],
    a: [0], e: "Competitors may clean boulders only with equipment provided by the organiser, or request a brusher.", r: "ER Annex C §4.13" });

  add({ id: "WB31", k: [1, 0, 0], q: "What may a boulder competitor carry onto the Field of Play?",
    o: ["A small bag (e.g., a musette) with tape, chalk/liquid chalk, shoes", "A small unpressurised water spray with potable water", "A small container of commercially available non-greasing hydrating agent", "A personal fan"],
    a: [0, 1, 2], e: "A small bag, liquid chalk, an unpressurised water spray and a non-greasing hydrating agent are allowed. Other liquids are only allowed for drinking or with JP permission.", r: "ER Annex C §4.14, Note 62" });

  add({ id: "WB32", k: [0, 0, 0], q: "What applies to multiple attempts within a rotation?",
    o: ["Multiple attempts are allowed; each boulder must be attempted in its entirety; no part may be practised", "Only 1 attempt per rotation", "Sections may be practised from the ground", "After a fall, climbing may resume from the fall point"],
    a: [0], e: "Multiple attempts are allowed, but each must be from the start. Practising parts of a boulder is prohibited.", r: "ER Annex C §4.12" });

  add({ id: "WB33", k: [1, 0, 1], q: "How long should competitors stay in the Call Zone after completing their attempts on the course?",
    o: ["At least 1 full rotation", "Until the end of the round", "They may leave immediately", "At least 2 rotations"],
    a: [0], e: "The Jury President should ensure competitors stay in the Call Zone for at least one full rotation after finishing their attempts on the course.", r: "ER Annex C Note 58" });

  add({ id: "WB34", k: [0, 0, 1], q: "What is the minimum gap between 2 boulder rounds on the same day?",
    o: ["2 hours between publication of the Official Results and the next Start of Play", "1 hour", "90 minutes", "30 minutes"],
    a: [0], e: "As in lead, there must be at least 2 hours between the Official Results and the next Start of Play on the same day.", r: "ER Annex C §4.7" });

  add({ id: "WB35", k: [0, 0, 0], q: "How are competitors released onto the Field of Play in the boulder final?",
    o: ["As directed by the Call Zone manager; they present to the boulder judge and start when the rotation signal is given", "At the start of the rotation, starting immediately", "When the judge shouts “Go”", "After a 40-second observation"],
    a: [0], e: "In the final, competitors go out as directed by the Call Zone manager, present to the boulder judge and start on the rotation signal. In qualification and semi-final they start immediately at the beginning of the rotation.", r: "ER Annex C §4.11" });

  add({ id: "WB36", k: [0, 0, 1], q: "To whom must a potential boulder Technical Incident be referred, and until when?",
    o: ["Immediately to an International Judge; no claim after the start of the next scheduled rotation", "To the Jury President, until Official Results", "To the boulder judge, until the next competitor starts", "To the Event Delegate, until the end of the round"],
    a: [0], e: "Boulder TIs are referred to an International Judge. No claim is possible after the next scheduled rotation has started.", r: "ER Annex C §8.1" });

  add({ id: "WB37", k: [0, 1, 1], c: true, q: "A hold spins during a rotation; the TI is confirmed and can be fixed before the next rotation. What may the competitor choose?",
    o: ["Continue within the current rotation without extra time/attempts", "Suspend their attempts until a time decided by the Jury President", "An automatic full extra rotation", "A Top awarded automatically"],
    a: [0, 1], e: "If the TI can be fixed before the next rotation, the competitor chooses between continuing (no extra time or attempts) and suspending until a time set by the JP.", r: "ER Annex C §8.2" });

  add({ id: "WB38", k: [0, 0, 2], q: "A confirmed TI cannot be remedied before the next rotation. What happens?",
    o: ["The round is suspended for the affected competitor and all who have not yet tried that boulder; they resume as directed by the Jury President once fixed or the boulder is cancelled", "The whole round restarts", "Only the affected competitor waits; everyone else climbs the boulder", "Everyone receives a Top"],
    a: [0], e: "The round is suspended for the affected competitor and everyone still to try the boulder. They continue as directed by the JP once it is fixed or cancelled.", r: "ER Annex C §8.3" });

  add({ id: "WB39", k: [0, 2, 2], c: true, q: "A competitor started an attempt with 2 minutes and 10 seconds remaining in the rotation when a TI occurred. What is the maximum extra time?",
    o: ["2 minutes and 10 seconds", "A full new rotation", "1 minute", "Until the end of the round"],
    a: [0], e: "Extra time compensates only for time lost or not used, and must not exceed the time remaining in the rotation when the attempt started.", r: "ER Annex C §8.5" });

  add({ id: "WB40", k: [0, 1, 1], c: true, q: "After a TI, a competitor leaves the transit area before the matter is resolved. Consequence?",
    o: ["They will not be allowed to resume their attempts", "A Yellow Card only", "None if they return in time", "Disqualification"],
    a: [0], e: "A competitor who leaves the transit area before the incident is resolved may not resume their attempts.", r: "ER Annex C §8.4" });

  add({ id: "WB41", k: [0, 0, 1], q: "What is the deadline for a boulder appeal about a Top, Zone or attempt count (not seeking extra time) in the medal phase?",
    o: ["Immediately following the publication of the competitor’s Provisional Result", "Within 2 minutes of the Official Results", "Before the end of the next rotation", "Before the medal ceremony"],
    a: [0], e: "In the medal phase, the appeal must be made immediately after the Provisional Result. In other rounds it is due within 5 minutes of the Official Results.", r: "ER Annex C §9.1" });

  add({ id: "WB42", k: [0, 1, 1], q: "An appeal that may lead to extra time/attempts in a semi-final must be made by when?",
    o: ["Before the end of the next rotation", "Before the next competitor starts their attempts", "Within 5 minutes of the Official Results", "Immediately after the Provisional Result"],
    a: [0], e: "In rounds other than the medal phase, these appeals are due before the end of the next rotation. In the medal phase they are due before the next competitor starts. Verbal notice is possible, with 5 minutes for the written appeal.", r: "ER Annex C §9.2, §9.3" });

  add({ id: "WB43", k: [1, 1, 1], c: true, q: "A climber cuts a fingertip and bleeds. What applies?",
    o: ["They must stop the bleeding before continuing; contaminated holds are cleaned before others start; no extra time unless the injury was caused by a TI", "It is a TI with extra time", "They may continue bleeding; holds are cleaned after the round", "They must withdraw"],
    a: [0], e: "A blood injury is not a Technical Incident. The bleeding must be remedied and contaminated holds cleaned. Extra time is only given if a TI caused the injury.", r: "CR §11.6, Note 27" });

  add({ id: "WB44", k: [1, 1, 1], c: true, q: "A climber licks their fingers before an attempt. How is this handled?",
    o: ["Saliva is prohibited; contaminated holds are cleaned like a blood injury, with no extra time; a sanction is possible", "Allowed", "Allowed if chalked afterwards", "Only prohibited in finals"],
    a: [0], e: "Spit or saliva before or during an attempt is prohibited and handled like a blood injury. A sanction may be imposed.", r: "CR Note 6" });

  add({ id: "WB45", k: [1, 2, 2], c: true, q: "The timing display freezes briefly during a rotation, but start/stop signals work normally. Technical Incident?",
    o: ["Not automatically – it is critical only if the start/end of the allowed climbing time cannot be measured", "Yes, always", "Yes, everyone gets a new rotation", "No, timing is irrelevant in boulder"],
    a: [0], e: "In boulder, a timing failure is critical only if the start or end of the allowed climbing time cannot be measured.", r: "CR Note 33" });

  add({ id: "WB46", k: [1, 0, 2], q: "What minimum width per boulder should a boulder wall have?",
    o: ["3 m (e.g., 12 m for 4 simultaneous boulders, or 2 walls of 6 m)", "2 m", "5 m", "No requirement"],
    a: [0], e: "Each boulder needs at least 3 m width.", r: "ER Annex C §1.1, Note 52" });

  add({ id: "WB47", k: [0, 0, 1], q: "Who inspects the boulders and safety matting before each round?",
    o: ["The Jury President, the International Judge and the Head Routesetter", "The Event Delegate", "The boulder judges", "The Medical Delegate"],
    a: [0], e: "The JP, International Judge and Head Routesetter inspect each boulder and the matting before the round.", r: "ER Annex C §3.1" });
})();
