// World Climbing – Boulder. Sources: Competition Rules 2026 (CR), Event Regulations v3 (ER) Annex C
(function () {
  const add = (q) => window.QUESTIONS.push(Object.assign({ rb: "wc", d: "boulder" }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "WB01", k: [0, 0, 0], cat: "W", q: "When is a boulder attempt considered to have started?",
    o: ["When the climber leaves the ground", "When the climber controls all 4 start markings", "With the rotation start signal", "When the climber touches the first hold"],
    a: [0], e: "A boulder attempt starts when the climber leaves the ground.", r: "CR §7.4" });

  add({ id: "WB02", k: [1, 1, 0], cat: "W", c: true, q: "A climber jumps to brush a hold without touching the climbing surface or any other hold. Does this count as an attempt?",
    o: ["No, it is not counted as a scoring attempt", "Yes, they left the ground", "Yes, if they are airborne longer than 2 seconds", "Only in the final"],
    a: [0], e: "Jumping to brush a hold is not counted as an attempt, provided the climber does not use the climbing surface or touch any other hold.", r: "CR Note 14" });

  add({ id: "WB03", k: [0, 0, 0], cat: "W", q: "What validates the start of a boulder attempt?",
    o: ["Controlling the marked starting holds to achieve a stable position with both hands and both feet in the Starting Position", "Controlling the marked starting holds with both hands; the feet may be on any holds", "Having at least one hand and one foot on the marked starting holds and stabilising briefly", "Taking the hand position on the starting holds indicated by the routesetter and holding it briefly"],
    a: [0], e: "The climber must Control the marked starting holds and achieve a stable position with both hands and both feet in the Starting Position. Using any other hold first is a False Start.", r: "CR §7.5" });

  add({ id: "WB04", k: [1, 0, 0], cat: "W", q: "What must a boulder judge assess when validating a climber’s start?",
    o: ["Whether the climber has demonstrated Control of the marked starting holds and achieved the Starting Position", "Whether the movement to establish the Starting Position is separate from any movement made from it for progress", "Whether the climber used exactly the hand placement on the starting holds intended by the routesetter", "Whether the climber held the Starting Position still for at least 3 seconds before moving on"],
    a: [0, 1], e: "The judge checks that the Starting Position was achieved with Control, and that establishing it was separate from the first movement for progress. Markings must not indicate specific hand placements.", r: "CR Note 15; CR §1.12(A)" });

  add({ id: "WB05", k: [1, 0, 1], cat: "J", q: "Which statements about boulder start markings are correct?",
    o: ["Each Starting Position must have 4 markings, regardless of the number of holds used", "Markings should not indicate specific hand placements", "Blocker holds must not be marked as starting holds and cannot be Controlled when starting", "Each hand must have its own marked start hold, so matching at the start is not allowed"],
    a: [0, 1, 2], e: "A Starting Position has 4 markings in a distinctive colour, without prescribing hand placements. Blocker holds are not starting holds and cannot be used for the start.", r: "CR §1.12(A), Note 4" });

  add({ id: "WB06", k: [0, 0, 0], cat: "W", q: "How may the Top of a boulder be defined?",
    o: ["A finishing hold marked in the same colour as the starting holds", "A standing position on top of the boulder", "A hold marked in the Zone colour", "A hold marked with black tape"],
    a: [0, 1], e: "The Top is either a finishing hold in the starting-hold colour or a standing position on top of the boulder. Zone holds use a different colour from the start holds.", r: "CR §1.12(B), (C)" });

  add({ id: "WB07", k: [0, 0, 2], cat: "O", q: "How many handholds should a boulder have?",
    o: ["Not more than 12, with an average across the round between 4 and 8", "Not more than 15, with an average across the round between 6 and 10", "Not more than 10, with an average across the round between 3 and 6", "No maximum; only the average across the round must be between 4 and 8"],
    a: [0], e: "The number of handholds on a boulder should not exceed 12, and the average across a round should be between 4 and 8.", r: "CR §1.10" });

  add({ id: "WB08", k: [0, 0, 0], cat: "W", q: "When is a boulder attempt with a marked finishing hold successful?",
    o: ["When the climber matches it with both hands before time expires, is stable and demonstrates clear Control", "When the climber Controls it with one hand before time expires and is stable", "When the climber touches it with both hands before time expires, even if only slapping it", "When the climber hangs from it with one hand before time expires and the judge counts to 3"],
    a: [0], e: "Success requires a match with both hands, a stable position before the allowed time expires, and clear, intentional Control of the finishing hold.", r: "CR §8.5(B)" });

  add({ id: "WB09", k: [1, 1, 1], cat: "W", c: true, q: "A climber places the second hand on top of the first, which is on the finishing hold. The second hand does not touch the hold itself. Is the hold matched?",
    o: ["No – both hands must have simultaneous contact with the hold itself", "Yes – hand-on-hand counts as a match because both hands are on the hold", "Yes – if the climber is stable in that position and shows Control", "Only if the hold is too small to be gripped with 2 hands"],
    a: [0], e: "Matching requires both hands to touch the marked finishing hold at the same time.", r: "CR Note 21" });

  add({ id: "WB10", k: [1, 0, 0], cat: "W", q: "Which actions demonstrate Control of the finishing hold?",
    o: ["Using the hold to arrest the movement to gain it", "Maintaining a stable position while holding it", "Shaking out or celebrating while maintaining a stable position", "Slapping the hold with both hands at the same moment"],
    a: [0, 1, 2], e: "Control is shown by arresting the movement or keeping a stable position. Shaking out or celebrating also counts while stable. Slapping, instability or being carried away by momentum do not.", r: "CR Note 22" });

  add({ id: "WB11", k: [1, 1, 0], cat: "W", c: true, q: "A climber dynos to the finishing hold, briefly matches it and is carried away by momentum. Top?",
    o: ["No – being carried away by momentum does not demonstrate Control", "Yes – the hold was matched with both hands", "Yes – if contact with both hands lasted more than one second", "Only if the boulder judge raised a hand before the climber fell"],
    a: [0], e: "Control is not indicated where the climber is carried away from the hold by their momentum.", r: "CR Note 22" });

  add({ id: "WB12", k: [0, 0, 0], cat: "W", q: "When is a Zone awarded?",
    o: ["When the Zone hold is Controlled with the hands to complete an Establishing Movement or an Advancing Movement to a stable position", "As soon as the Zone hold is touched with one hand, even if the climber cannot Control it", "When the climber stands on the Zone hold in a stable position, even without holding it with the hands", "When the climber’s centre of mass is above the Zone hold, regardless of the holds used"],
    a: [0], e: "The Zone counts when the Zone hold is Controlled with the hands to complete an Establishing Movement, or an Advancing Movement to a stable position further along the line.", r: "CR §9.7" });

  add({ id: "WB13", k: [1, 2, 1], cat: "W", c: true, q: "A climber uses the Zone hold en passant for a paddle move, reaches the next hold but cannot hold it and falls. Zone?",
    o: ["No – the Zone is only awarded if the onward movement is completed and a stable position achieved", "Yes – any use of the Zone hold with the hand counts, even without a stable position", "Yes – the Zone hold was used to change direction and is therefore Controlled", "Only if the boulder judge clearly saw the hand touch the Zone hold"],
    a: [0], e: "A paddle move via the Zone counts as an Advancing Movement. The Zone is only awarded once that movement is completed and the climber is stable.", r: "CR Note 26" });

  add({ id: "WB14", k: [0, 0, 0], cat: "W", q: "How is the score for a boulder calculated?",
    o: ["Zone: 10 points minus 0.1 per attempt before the Zone; Top: 25 points minus 0.1 per unsuccessful attempt; the greater value counts", "Zone: 10 points, Top: 25 points, both added together; there is no deduction for unsuccessful attempts", "Zone: 10 points minus 1 per attempt before the Zone; Top: 25 points minus 1 per unsuccessful attempt; both added together", "Zone: 0.5 points, Top: 1 point; ties are broken by the total number of attempts"],
    a: [0], e: "A Zone is worth 10 points minus 0.1 for each attempt before it, a Top 25 points minus 0.1 for each unsuccessful attempt. The greater of the 2 counts, and the score cannot be negative.", r: "ER Annex C §5.1" });

  add({ id: "WB15", k: [0, 2, 0], cat: "W", c: true, q: "A climber tops a boulder on their 3rd attempt. Score?",
    o: ["24.8", "24.7", "25.0", "34.8"],
    a: [0], e: "25 − 2 × 0.1 = 24.8.", r: "ER Annex C §5.1" });

  add({ id: "WB16", k: [0, 2, 0], cat: "W", c: true, q: "A climber gets the Zone on attempt 4 but no Top. Score?",
    o: ["9.7", "9.6", "10.0", "6.0"],
    a: [0], e: "10 − 3 × 0.1 = 9.7.", r: "ER Annex C §5.1(A)" });

  add({ id: "WB17", k: [0, 2, 0], cat: "W", c: true, q: "Zone on attempt 2, Top on attempt 5. Score?",
    o: ["24.6", "34.5", "24.5", "9.9"],
    a: [0], e: "Zone = 9.9, Top = 25 − 0.4 = 24.6. The greater value counts: 24.6.", r: "ER Annex C §5.1" });

  add({ id: "WB18", k: [1, 0, 0], cat: "W", q: "How are boulder ranking ties broken?",
    o: ["Count-back to the preceding round (not after multiple starting groups), then fewer attempts for Tops, then fewer attempts for Zones", "More Tops, then more Zones, then count-back to the preceding round (not after multiple starting groups)", "Fewer attempts for Zones, then fewer attempts for Tops, then count-back to the preceding round", "Fewer attempts for Tops, then climbing time in the final, then count-back to the preceding round"],
    a: [0], e: "Ties are broken by (A) count-back to the preceding round, if applicable and not used with multiple starting groups, (B) total attempts on topped boulders, ascending, (C) total attempts for Zones, ascending.", r: "ER Annex C §7.1" });

  add({ id: "WB19", k: [0, 1, 1], cat: "W", stufe: 2, c: true, q: "A competitor does not attempt the first boulder in a round. What happens?",
    o: ["They are unranked and marked DNS in the round", "They score 0 on boulder 1 and continue", "They may attempt boulder 1 at the end", "They are disqualified"],
    a: [0], e: "Competitors who do not attempt the first boulder in a round are unranked and marked DNS.", r: "ER Annex C §7.1" });

  add({ id: "WB20", k: [1, 0, 0], cat: "J", q: "What is the standard format of a World Climbing boulder event?",
    o: ["Qualification 5 boulders (5 minutes fixed, quota 60 per group), semi-final 4 (5 minutes fixed, 24), final 4 (4 minutes max, 8)", "Qualification 5 boulders (4 minutes fixed, quota 60 per group), semi-final 4 (4 minutes fixed, 20), final 4 (5 minutes max, 8)", "Qualification 6 boulders (5 minutes fixed, quota 80 per group), semi-final 4 (5 minutes fixed, 24), final 4 (4 minutes max, 6)", "Qualification 5 boulders (5 minutes fixed, quota 60 per group), no semi-final, final 4 (4 minutes max, 10)"],
    a: [0], e: "Annex C Table 1: qualification with 5 boulders, on-sight, 5 minutes fixed, Rank Ascending, quota 60 per group. Semi-final with 4 boulders, 5 minutes fixed, Rank Descending, quota 24. Final with 4 boulders, 4 minutes max, Rank Descending, quota 8.", r: "ER Annex C §2.1 Table 1" });

  add({ id: "WB21", k: [1, 0, 0], cat: "J", q: "What is the starting order in a World Climbing boulder qualification?",
    o: ["Rank Ascending: best seeded starts first, unseeded start after all seeded in random order", "Rank Descending: best seeded starts last, unseeded start before all seeded in random order", "Random: all competitors are drawn at random, independent of their seeding", "Seed Group: competitors are grouped in tens by seeding, random within each group"],
    a: [0], e: "The boulder qualification uses Rank Ascending Order. The best seeded competitor starts first, and unseeded competitors start after all seeded ones in random order.", r: "ER Annex C §2.1 Table 1; CR Glossary" });

  add({ id: "WB22", k: [1, 0, 2], cat: "J", q: "Which alternative qualification formats may international youth boulder competitions adopt?",
    o: ["Format A: 4–8 boulders, flash, limited attempts, round duration fixed but no individual rotation periods", "Format B: 4–6 boulders, flash, 4 or 5 minutes fixed rotations, ascending offset order", "Format C: 4 boulders, on-sight, head-to-head knockout between 2 climbers per boulder", "Format D: 4–8 boulders, on-sight, unlimited time and unlimited attempts"],
    a: [0, 1], e: "Table 3 lists Format A (limited attempts, overall round duration only) and Format B (flash variation of the standard format). Without Event Seeding, Format B reverts to random, offset.", r: "ER Annex C §2.3, Notes 55–56" });

  add({ id: "WB23", k: [1, 0, 2], cat: "J", q: "How many boulders may the Jury President cancel in a round?",
    o: ["Up to 1 boulder in any round, in exceptional circumstances", "Any number of boulders, in exceptional circumstances", "None – boulders may never be cancelled", "Up to 2 boulders in any round, in exceptional circumstances"],
    a: [0], e: "In exceptional circumstances, the Jury President may cancel up to 1 boulder per round.", r: "ER Annex C Note 53" });

  add({ id: "WB24", k: [0, 0, 0], cat: "W", q: "How long is the interval after each rotation to clear the Field of Play?",
    o: ["15 seconds", "5 seconds", "30 seconds", "1 minute"],
    a: [0], e: "There is a 15-second interval after each rotation.", r: "ER Annex C §4.4" });

  add({ id: "WB25", k: [0, 0, 0], cat: "W", q: "When does a rotation end in the boulder final?",
    o: ["When all competitors on the Field of Play have completed their attempts, or the maximum rotation time has elapsed", "Always after exactly 4 minutes, even if all competitors on the Field of Play have completed their attempts", "As soon as the first competitor on the Field of Play tops the boulder", "When the Jury President ends it, regardless of the rotation time"],
    a: [0], e: "In the final, a rotation ends when everyone on the Field of Play is finished or the maximum time (4 minutes) has elapsed.", r: "ER Annex C §4.4" });

  add({ id: "WB26", k: [0, 0, 0], cat: "W", q: "What collective observation is held before a World Climbing boulder final?",
    o: ["2 minutes per boulder; recording equipment prohibited", "8 minutes for all boulders simultaneously", "6 minutes for all boulders", "None"],
    a: [0], e: "The standard World Climbing format has 2 minutes per boulder, without recording equipment, before competitors return to the Call Zone.", r: "ER Annex C §4.9" });

  add({ id: "WB27", k: [1, 1, 1], cat: "J", c: true, q: "During the final observation, a competitor tries the first move of a boulder. What may happen?",
    o: ["A disciplinary sanction or a “penalty attempt” added to their attempt count", "Nothing – trying the first moves is part of the observation", "Automatic disqualification, without discretion for the Jury President", "The boulder is cancelled for them and scored as 0 points"],
    a: [0], e: "Practising the boulder or touching holds other than the start (and associated blocker) holds may lead to a disciplinary sanction or a penalty attempt.", r: "ER Annex C Note 60" });

  add({ id: "WB28", k: [1, 0, 0], cat: "W", q: "What may competitors touch during a collective boulder observation?",
    o: ["Only the marked starting holds and any associated blocker holds", "Any hold they can reach from the ground", "No holds at all, only the climbing surface", "The marked starting holds and the Zone holds"],
    a: [0], e: "On boulders, competitors may touch only the marked starting holds and their blockers.", r: "CR Note 12" });

  add({ id: "WB29", k: [1, 0, 0], cat: "J", q: "Who is responsible for brushing boulders during World Climbing rounds?",
    o: ["The Jury President should arrange cleaning at the end of each rotation; if impossible, this is announced before the round", "Each competitor alone, within their own rotation; the organiser provides no brushers", "Only the routesetters, and only after the end of the round", "The coaches of the competitors, from the coaches’ zone"],
    a: [0], e: "The Jury President should arrange cleaning at the end of each rotation. If that is not possible, the decision is announced before the round. Competitors may also request a brusher.", r: "ER Annex C §4.6, Note 59, §4.13" });

  add({ id: "WB30", k: [0, 1, 1], cat: "W", c: true, q: "A competitor brushes a hold with a toothbrush from their chalk bag. Allowed?",
    o: ["No – only equipment provided by the event organiser may be used, or a brusher may be requested", "Yes – own brushes may be used as long as they are clean and free of additives", "Yes – own brushes may be used if the organiser provides no brushes", "Yes – own brushes may be used, but only during the 15-second interval"],
    a: [0], e: "Competitors may clean boulders only with equipment provided by the organiser, or request a brusher.", r: "ER Annex C §4.13" });

  add({ id: "WB31", k: [1, 0, 0], cat: "W", q: "What may a boulder competitor carry onto the Field of Play?",
    o: ["A small bag (e.g., a musette) with tape, chalk/liquid chalk, shoes", "A small unpressurised water spray with potable water", "A small container of commercially available non-greasing hydrating agent", "A personal battery-powered fan to dry the hands"],
    a: [0, 1, 2], e: "A small bag, liquid chalk, an unpressurised water spray and a non-greasing hydrating agent are allowed. Other liquids are only allowed for drinking or with JP permission.", r: "ER Annex C §4.14, Note 62" });

  add({ id: "WB32", k: [0, 0, 0], cat: "W", q: "What applies to multiple attempts within a rotation?",
    o: ["Multiple attempts are allowed; each must start from the beginning and no part may be practised", "Only 1 attempt per rotation is allowed; further attempts follow in the next rotation", "Multiple attempts are allowed; single moves may be practised as long as the climber starts from the ground", "Multiple attempts are allowed; after a fall the climber may continue from the fall point"],
    a: [0], e: "Multiple attempts are allowed, but each must be from the start. Practising parts of a boulder is prohibited.", r: "ER Annex C §4.12" });

  add({ id: "WB33", k: [1, 0, 1], cat: "J", q: "How long should competitors stay in the Call Zone after completing their attempts on the course?",
    o: ["At least 1 full rotation", "Until the end of the round", "They may leave immediately", "At least 2 rotations"],
    a: [0], e: "The Jury President should ensure competitors stay in the Call Zone for at least one full rotation after finishing their attempts on the course.", r: "ER Annex C Note 58" });

  add({ id: "WB34", k: [0, 0, 1], cat: "J", q: "What is the minimum gap between 2 boulder rounds on the same day?",
    o: ["2 hours between publication of the Official Results and the next Start of Play", "1 hour between publication of the Official Results and the next Start of Play", "90 minutes between the last attempt and the next Start of Play", "30 minutes between the last attempt and the next Start of Play"],
    a: [0], e: "As in lead, there must be at least 2 hours between the Official Results and the next Start of Play on the same day.", r: "ER Annex C §4.7" });

  add({ id: "WB35", k: [0, 0, 0], cat: "W", q: "How are competitors released onto the Field of Play in the boulder final?",
    o: ["As directed by the Call Zone manager; they present to the boulder judge and start on the rotation signal", "At the start of the rotation; they may start their attempts immediately without presenting", "As directed by the Call Zone manager; they start when the boulder judge shouts “Go”", "As directed by the Call Zone manager; they start after a 40-second observation at the boulder"],
    a: [0], e: "In the final, competitors go out as directed by the Call Zone manager, present to the boulder judge and start on the rotation signal. In qualification and semi-final they start immediately at the beginning of the rotation.", r: "ER Annex C §4.11" });

  add({ id: "WB36", k: [0, 0, 1], cat: "J", q: "To whom must a potential boulder Technical Incident be referred, and until when?",
    o: ["Immediately to an International Judge; no claim after the start of the next scheduled rotation", "Immediately to the Jury President; claims are possible until the Official Results", "Immediately to the boulder judge; claims are possible until the next competitor starts", "Immediately to the Event Delegate; claims are possible until the end of the round"],
    a: [0], e: "Boulder TIs are referred to an International Judge. No claim is possible after the next scheduled rotation has started.", r: "ER Annex C §8.1" });

  add({ id: "WB37", k: [0, 1, 1], cat: "J", c: true, q: "A hold spins during a rotation; the TI is confirmed and can be fixed before the next rotation. What may the competitor choose?",
    o: ["Continue within the current rotation without extra time or attempts", "Suspend their attempts until a time decided by the Jury President", "Receive an automatic full extra rotation at the end of the round", "Have the Top awarded automatically for this boulder"],
    a: [0, 1], e: "If the TI can be fixed before the next rotation, the competitor chooses between continuing (no extra time or attempts) and suspending until a time set by the JP.", r: "ER Annex C §8.2" });

  add({ id: "WB38", k: [0, 0, 2], cat: "J", q: "A confirmed TI cannot be remedied before the next rotation. What happens?",
    o: ["The round is suspended for the affected competitor and all who have not yet tried that boulder; they resume as directed by the Jury President", "The whole round is interrupted and restarted for all competitors once the boulder is fixed", "Only the affected competitor waits; everyone else climbs the faulty boulder as normal", "The boulder is cancelled for all competitors, including those who have already tried it"],
    a: [0], e: "The round is suspended for the affected competitor and everyone still to try the boulder. They continue as directed by the JP once it is fixed or cancelled.", r: "ER Annex C §8.3" });

  add({ id: "WB39", k: [0, 2, 2], cat: "J", c: true, q: "A competitor started an attempt with 2 minutes and 10 seconds remaining in the rotation when a TI occurred. What is the maximum extra time?",
    o: ["2 minutes and 10 seconds", "A full new rotation", "1 minute", "Until the end of the round"],
    a: [0], e: "Extra time compensates only for time lost or not used, and must not exceed the time remaining in the rotation when the attempt started.", r: "ER Annex C §8.5" });

  add({ id: "WB40", k: [0, 1, 1], cat: "J", c: true, q: "After a TI, a competitor leaves the transit area before the matter is resolved. Consequence?",
    o: ["They will not be allowed to resume their attempts", "They receive a Caution (Yellow Card) but may continue", "Nothing, as long as they return in time", "They are disqualified from the event"],
    a: [0], e: "A competitor who leaves the transit area before the incident is resolved may not resume their attempts.", r: "ER Annex C §8.4" });

  add({ id: "WB41", k: [0, 0, 1], cat: "W", q: "What is the deadline for a boulder appeal about a Top, Zone or attempt count (not seeking extra time) in the medal phase?",
    o: ["Immediately following the publication of the competitor’s Provisional Result", "Within 2 minutes of the publication of the Official Results", "Before the end of the next rotation", "At any time before the medal ceremony"],
    a: [0], e: "In the medal phase, the appeal must be made immediately after the Provisional Result. In other rounds it is due within 5 minutes of the Official Results.", r: "ER Annex C §9.1" });

  add({ id: "WB42", k: [0, 1, 1], cat: "W", q: "An appeal that may lead to extra time/attempts in a semi-final must be made by when?",
    o: ["Before the end of the next rotation", "Before the next competitor starts their attempts", "Within 5 minutes of the Official Results", "Immediately after the Provisional Result"],
    a: [0], e: "In rounds other than the medal phase, these appeals are due before the end of the next rotation. In the medal phase they are due before the next competitor starts. Verbal notice is possible, with 5 minutes for the written appeal.", r: "ER Annex C §9.2, §9.3" });

  add({ id: "WB43", k: [1, 1, 1], cat: "J", c: true, q: "A climber cuts a fingertip and bleeds. What applies?",
    o: ["They must stop the bleeding; holds are cleaned before others start; no extra time unless a TI caused the injury", "They must stop the bleeding; it is a Technical Incident, so they get the lost time back", "They may continue bleeding; holds are cleaned after the end of the round", "They must withdraw; their results so far remain valid"],
    a: [0], e: "A blood injury is not a Technical Incident. The bleeding must be remedied and contaminated holds cleaned. Extra time is only given if a TI caused the injury.", r: "CR §11.6, Note 27" });

  add({ id: "WB44", k: [1, 1, 1], cat: "J", c: true, q: "A climber licks their fingers before an attempt. How is this handled?",
    o: ["Saliva is prohibited; contaminated holds are cleaned like a blood injury, with no extra time; a sanction is possible", "Saliva is allowed because it does not change the holds; no cleaning is needed", "Saliva is allowed if the climber chalks up afterwards; holds are cleaned at the end of the round", "Saliva is prohibited only in finals; in other rounds it is allowed"],
    a: [0], e: "Spit or saliva before or during an attempt is prohibited and handled like a blood injury. A sanction may be imposed.", r: "CR Note 6" });

  add({ id: "WB45", k: [1, 2, 2], cat: "J", c: true, q: "The timing display freezes briefly during a rotation, but start/stop signals work normally. Technical Incident?",
    o: ["Not automatically – it is critical only if the start/end of the allowed climbing time cannot be measured", "Yes – any failure of the time display is a Technical Incident, even if the signals work", "Yes – all competitors on the Field of Play get a new rotation with full time", "No – timing is never relevant for Technical Incidents in boulder"],
    a: [0], e: "In boulder, a timing failure is critical only if the start or end of the allowed climbing time cannot be measured.", r: "CR Note 33" });

  add({ id: "WB46", k: [1, 0, 2], cat: "O", q: "What minimum width per boulder should a boulder wall have?",
    o: ["3 m (e.g., 12 m for 4 simultaneous boulders, or 2 walls of 6 m)", "2 m (e.g., 8 m for 4 simultaneous boulders, or 2 walls of 4 m)", "5 m (e.g., 20 m for 4 simultaneous boulders, or 2 walls of 10 m)", "No requirement; the Head Routesetter decides"],
    a: [0], e: "Each boulder needs at least 3 m width.", r: "ER Annex C §1.1, Note 52" });

  add({ id: "WB47", k: [0, 0, 1], cat: "J", q: "Who inspects the boulders and safety matting before each round?",
    o: ["The Jury President, the International Judge and the Head Routesetter", "The Event Delegate alone, after the routesetters have finished", "The boulder judges of the respective boulders, before the round", "The Medical Delegate together with the Competition Doctor"],
    a: [0], e: "The JP, International Judge and Head Routesetter inspect each boulder and the matting before the round.", r: "ER Annex C §3.1" });
})();
