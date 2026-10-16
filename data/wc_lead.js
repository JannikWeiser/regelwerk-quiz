// World Climbing – Lead. Sources: Competition Rules 2026 (CR), Event Regulations v3 (ER) Annex A, Errata 1 April 2026
(function () {
  const add = (q) => window.QUESTIONS.push(Object.assign({ rb: "wc", d: "lead" }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "WL01", lvl: 1, q: "When is a lead attempt considered to have started?",
    o: ["When the climber leaves the ground", "When the climber touches the first numbered hold", "When the 40-second preparation period ends", "When the route judge gives a start signal"],
    a: [0], e: "A lead attempt starts when the climber leaves the ground. The route judge decides whether a movement is only an adjustment before the start or the actual start.", r: "CR §7.1, Note 13" });

  add({ id: "WL02", lvl: 1, q: "When is a lead attempt ruled successful?",
    o: ["When the climber clips the final anchor on the route", "When the climber controls the top hold with both hands", "When the climber touches the anchor", "When the climber reaches the highest numbered hold on the scoring topo"],
    a: [0], e: "A lead attempt is successful when the climber clips the final anchor.", r: "CR §8.3" });

  add({ id: "WL03", lvl: 2, c: true, q: "A climber clips the final anchor from a hold two moves below the last numbered hold. What is the result in a lead event?",
    o: ["Top", "The hold used to clip, without “+”", "The hold used to clip, with “+”", "The attempt is invalid"],
    a: [0], e: "In the lead discipline, the result is Top regardless of the hold used to clip the final anchor. Only in the lead stage of boulder&lead must the anchor be clipped from the marked finishing hold.", r: "CR §8.3, Note 20" });

  add({ id: "WL04", lvl: 3, q: "In the lead stage of the boulder&lead discipline, when is a result marked as Top?",
    o: ["Only when the competitor clips the final anchor from the marked finishing hold", "Whenever the final anchor is clipped, from any hold", "When the competitor touches the finishing hold", "When the competitor matches the finishing hold"],
    a: [0], e: "In the lead stage of boulder&lead, a Top requires clipping the final anchor from the marked finishing hold.", r: "CR Note 20" });

  add({ id: "WL05", lvl: 2, q: "Which situations specifically end a lead attempt as unsuccessful under CR §8.2?",
    o: ["Clipping a quickdraw out of sequence", "Unclipping a quickdraw other than to correct a z-clip", "Making any climbing movement past the Last Safe Position", "Clipping a quickdraw late, but before reaching the Last Safe Position"],
    a: [0, 1, 2], e: "§8.2 covers out-of-sequence clipping, unclipping (except to correct a z-clip) and moving past the Last Safe Position. Late clipping before the Last Safe Position only pauses scoring.", r: "CR §8.2" });

  add({ id: "WL06", lvl: 2, c: true, q: "During an attempt, a quickdraw becomes unclipped. What is the default presumption?",
    o: ["It was not properly clipped; the attempt is ruled unsuccessful at the Last Clipping Position for that quickdraw, unless there is compelling evidence otherwise", "It is always a Technical Incident", "Nothing happens as long as the climber does not fall", "The climber is lowered and gets a restart"],
    a: [0], e: "Subject to rebuttal, an unclipped quickdraw is presumed not properly clipped. The exception requires compelling evidence that it was properly clipped and came out due to factors outside the competitor’s control.", r: "CR Note 17" });

  add({ id: "WL07", lvl: 2, q: "How is a z-clipped quickdraw scored while the z-clip is not corrected?",
    o: ["It is treated as unclipped; scoring stops at the Last Clipping Position for that quickdraw", "The attempt ends immediately", "A z-clip has no effect on scoring", "Scoring stops at the quickdraw below the z-clip"],
    a: [0], e: "A z-clipped quickdraw is treated as unclipped. Scoring stops at its Last Clipping Position and restarts from the same hold once the z-clip is corrected.", r: "CR Note 18" });

  add({ id: "WL08", lvl: 1, q: "How may a competitor correct a z-clip?",
    o: ["By un-clipping and re-clipping either of the two relevant quickdraws", "It cannot be corrected; the attempt ends", "Only by down-climbing below the lower quickdraw", "Only with the permission of the route judge"],
    a: [0], e: "A z-clip may be corrected by un-clipping and re-clipping either of the two relevant quickdraws. If it is not corrected, §8.2(C) governs when the attempt ends.", r: "CR §8.2(B), Note 18" });

  add({ id: "WL09", lvl: 3, q: "Which statements about the Last Clipping Position and the Last Safe Position are correct?",
    o: ["They may not be the same position", "Reaching the Last Clipping Position without clipping stops scoring, but the attempt continues", "At the Last Safe Position, any move to pass beyond it without clipping ends the attempt", "Passing the Last Clipping Position without clipping always ends the attempt immediately"],
    a: [0, 1, 2], e: "The Last Clipping Position is the last hold from which clipping is possible. The Last Safe Position is the point beyond which progress without clipping would be unsafe. Passing the former only pauses scoring, passing the latter without clipping ends the attempt.", r: "CR Note 19; Glossary" });

  add({ id: "WL10", lvl: 3, c: true, q: "A climber passes the Last Clipping Position of quickdraw 7 by two holds without clipping, then clips before reaching the Last Safe Position. What happens?",
    o: ["The attempt continues; scoring resumes from the hold designated as the Last Clipping Position", "The attempt is unsuccessful for late clipping", "The two holds above are credited retroactively", "The climber must down-climb to the Last Clipping Position"],
    a: [0], e: "If the competitor clips before passing the Last Safe Position, scoring resumes from the hold designated as the Last Clipping Position.", r: "CR Note 19" });

  add({ id: "WL11", lvl: 1, q: "How is a Safety Hold marked?",
    o: ["With a blue cross on the hold and a second blue cross next to the bolt hanger of the associated quickdraw", "With a red cross on the hold", "With black tape", "Only on the scoring topo"],
    a: [0], e: "Safety Holds get a blue cross, with a second blue cross adjacent to the bolt hanger of the associated quickdraw. They must also be on the scoring topo and pointed out during any collective observation.", r: "CR §1.13" });

  add({ id: "WL12", lvl: 2, q: "Besides a marked Safety Hold, who may designate a hold beyond which further progress would be unsafe (Last Safe Position)?",
    o: ["The Jury President or the category judge, in their reasonable opinion", "Only the Head Routesetter before the round", "The belayer", "The route judge alone"],
    a: [0], e: "The Last Safe Position includes any hold beyond which, in the reasonable opinion of the Jury President or category judge, further progress would be unsafe.", r: "CR Glossary “Last Safe Position”" });

  add({ id: "WL13", lvl: 1, q: "What is the result of an unsuccessful lead attempt?",
    o: ["The last scoring hold Controlled with the hands to complete an Establishing Movement or make an Advancing Movement", "The highest hold touched", "The highest hold stood on", "The last quickdraw clipped"],
    a: [0], e: "The result is the last scoring hold Controlled with the hands to complete an Establishing Movement or make an Advancing Movement. An Advancing Movement gets the postfix “+”.", r: "CR §9.1" });

  add({ id: "WL14", lvl: 2, c: true, q: "A climber Controls hold 23 and moves hips and hand clearly towards hold 24, misses it and falls. Result?",
    o: ["23+", "23", "24", "24+"],
    a: [0], e: "Moving hips, shoulders and hand towards the next hold from a Controlled hold is an Advancing Movement, so the result is 23+.", r: "CR §9.1(B), Note 31" });

  add({ id: "WL15", lvl: 3, c: true, q: "A climber holding hold 30 starts a move but their body falls away from the wall and the next hold, and they fall. Result?",
    o: ["30", "30+", "31", "No score"],
    a: [0], e: "A movement is not an Advancing Movement if the climber’s body is falling away from the next hold or the climbing surface.", r: "CR Note 31" });

  add({ id: "WL16", lvl: 2, q: "Which are indicators that an Establishing Movement has been completed?",
    o: ["Arresting their motion", "Being able to release or reposition the trailing hand", "Moving the centre of mass and repositioning one or both feet", "Touching the hold with at least one finger"],
    a: [0, 1, 2], e: "The listed indicators are arresting motion, releasing or repositioning the trailing hand, and moving the centre of mass with foot repositioning.", r: "CR Note 32" });

  add({ id: "WL17", lvl: 2, c: true, q: "A climber Controls hold 27 and then clips a quickdraw out of sequence. Can they receive a “+”?",
    o: ["No – no “+” may be awarded where an attempt ended unsuccessfully under §8.2", "Yes, if they had already moved towards the next hold", "Yes, the “+” is independent of how the attempt ended", "Only with the approval of the Jury President"],
    a: [0], e: "No postfix “+” may be awarded where an attempt has ended unsuccessfully under §8.2.", r: "CR §9.2" });

  add({ id: "WL18", lvl: 3, q: "In lead, which hold counts as the “next hold in a sequence”?",
    o: ["Normally the next sequentially numbered hold on the scoring topo; a higher-numbered hold may be credited if another climber shows the move to it is possible", "Always and only the next numbered hold", "Whichever hold the climber aims for", "A hold designated by the Head Routesetter during the round"],
    a: [0], e: "Normally it is the next sequentially numbered hold. A higher-numbered hold may also count if another climber shows it is possible to complete the movement to it.", r: "CR Note 24" });

  add({ id: "WL19", lvl: 1, c: true, q: "A climber stands on hold 31 but has only ever held hold 29 with the hands. Does hold 31 count for scoring?",
    o: ["No – only holds used by either hand are considered for scoring", "Yes, any hold used counts", "Yes, with “+”", "Only if they stood on it in a stable position"],
    a: [0], e: "Only holds used by either hand are considered for scoring.", r: "ER Annex A §5.1" });

  add({ id: "WL20", lvl: 2, q: "Which statements about the Scoring Topo are correct?",
    o: ["It is prepared by the Head Routesetter in consultation with the on-field officials before each round", "It should not be changed or amended following the Start of Play", "It may be made public after the closing time for the warm-up area", "It is adjusted live whenever a climber finds new beta"],
    a: [0, 1, 2], e: "The Scoring Topo is prepared before the round, should not be changed after the Start of Play, may be made public after the warm-up area closes, and should be given to team officials with Appeal Eligibility.", r: "ER Annex A §5.1" });

  add({ id: "WL21", lvl: 1, q: "What is the standard format of a World Climbing lead event?",
    o: ["Qualification 2 routes flash, semi-final 1 route on-sight (quota 24), final 1 route on-sight (quota 8), 6 minutes each", "Qualification 1 route on-sight, final 2 routes flash", "Qualification 2 routes on-sight (quota 26), final 1 route (quota 8)", "Qualification 3 routes flash, final 1 route on-sight (quota 10)"],
    a: [0], e: "Annex A Table 1: qualification with 2 flash routes (Seed Group, Offset), semi-final with 1 on-sight route (Rank Descending, 24), final with 1 on-sight route (Rank Descending, 8), all with 6 minutes.", r: "ER Annex A §2.1 Table 1" });

  add({ id: "WL22", lvl: 2, q: "What is “Seed Group Order” in the lead qualification?",
    o: ["Competitors are ordered in groups of 10 by seeding; within each seed group the order on the first route is drawn at random", "Fully random order", "Best seeded competitor starts last", "Competitors are ordered by nation"],
    a: [0], e: "Seed Group Order is a modified Rank Ascending Order: seeds 1–10 form the first group, 11–20 the second, and so on. The order within each group is drawn at random. Route 2 uses an offset of half the starters, rounded down.", r: "ER Annex A §2.1, Note 12" });

  add({ id: "WL23", lvl: 3, q: "When the lead qualification is split into two starting groups, how are seeds 1–6 assigned?",
    o: ["Group A: 1, 4, 5 – Group B: 2, 3, 6", "Group A: 1, 3, 5 – Group B: 2, 4, 6", "Group A: 1, 2, 3 – Group B: 4, 5, 6", "Randomly"],
    a: [0], e: "Groups are filled in a snake pattern: 1→A, 2→B, 3→B, 4→A, 5→A, 6→B. Unseeded competitors are assigned randomly.", r: "ER Annex A §2.2 Table 2" });

  add({ id: "WL24", lvl: 3, c: true, q: "The lead qualification ran in two starting groups and the semi-final quota is 24. Who qualifies?",
    o: ["All athletes ranked 12th or better within their own group", "The 24 best athletes across both groups combined", "The 12 best of group A and the 12 best of group B, ties excluded", "Always exactly 12 from each group"],
    a: [0], e: "The quota is split equally and applied independently within each group (sub-quota 12). Everyone ranked 12th or better in their group qualifies, so the numbers from each group may differ.", r: "ER Annex A §2.2, Note 15" });

  add({ id: "WL25", lvl: 3, q: "The semi-final ends in a tie. The qualification was run in two starting groups. Can the tie be broken by count-back to the qualification?",
    o: ["No – count-back does not apply if the preceding round used multiple starting groups", "Yes, always", "Yes, but only for the podium", "Only if the Jury President agrees"],
    a: [0], e: "Count-back to the General Ranking of the preceding round does not apply if that round used multiple starting groups.", r: "ER Annex A §7.3(A); CR Glossary “General Ranking”" });

  add({ id: "WL26", lvl: 2, q: "How long is the minimum gap between two lead rounds on the same day?",
    o: ["2 hours between publication of the Official Results and the Start of Play of the next round", "1 hour", "50 minutes", "90 minutes"],
    a: [0], e: "The minimum gap between the Official Results of one round and the Start of Play of the next round on the same day is 2 hours.", r: "ER Annex A §4.5" });

  add({ id: "WL27", lvl: 2, q: "What is the maximum scheduled duration of a lead final round?",
    o: ["90 minutes", "60 minutes", "120 minutes", "There is no limit"],
    a: [0], e: "The final should be preceded by a presentation of finalists and have a scheduled duration of no more than 90 minutes.", r: "ER Annex A §4.6" });

  add({ id: "WL28", lvl: 1, q: "How long is the collective observation period for an on-sight lead route?",
    o: ["6 minutes", "2 minutes", "4 minutes", "10 minutes"],
    a: [0], e: "On-sight routes have a 6-minute collective observation period. Team officials may not take part.", r: "ER Annex A §4.8" });

  add({ id: "WL29", lvl: 1, q: "How much time does a lead competitor have after entering the Field of Play before starting their attempt?",
    o: ["40 seconds", "30 seconds", "60 seconds", "2 minutes"],
    a: [0], e: "Competitors have 40 seconds for individual route observation and final preparation.", r: "ER Annex A §4.12" });

  add({ id: "WL30", lvl: 2, q: "What may competitors do during the collective observation of a lead route?",
    o: ["Touch any hold they can reach from the ground", "Use binoculars", "Make hand-written notes or sketches", "Take photographs of the route"],
    a: [0, 1, 2], e: "Competitors may touch holds reachable from the ground, use binoculars and make hand-written notes. Photographs and recordings are prohibited, and so is practising moves.", r: "CR §5.4(A), Note 12" });

  add({ id: "WL31", lvl: 2, q: "Which belay devices may be used in World Climbing lead events?",
    o: ["Only manual belay devices (other than during any working session)", "Assisted braking devices are preferred", "Auto-belays", "Any device approved by the belayer"],
    a: [0], e: "Only manual belay devices are allowed in lead events, except during a working session. Each rope is controlled by one belayer.", r: "ER Annex A §3.3, Note 17" });

  add({ id: "WL32", lvl: 2, q: "Who inspects each lead route before each round to decide whether Safety Holds are required?",
    o: ["The Jury President, the International Judge and the Head Routesetter", "The Event Delegate alone", "The route judges", "The Head Routesetter alone"],
    a: [0], e: "The Jury President, the International Judge and the Head Routesetter inspect each route before each round.", r: "ER Annex A §3.1" });

  add({ id: "WL33", lvl: 2, q: "The Jury President wants the rope pre-clipped into the first two quickdraws. What applies?",
    o: ["This is possible but must be implemented for all competitors or none", "It may only be done at the request of individual competitors", "It is always prohibited", "Each competitor decides individually"],
    a: [0], e: "The Jury President may require pre-clipping or a spotter. Such precautions apply to all competitors or none. Requests by or for individual competitors are not considered.", r: "ER Annex A §3.2, Note 16; CR §4.3" });

  add({ id: "WL34", lvl: 1, c: true, q: "In an on-sight round, a competitor leaves the warm-up area without permission after the closing time. What happens?",
    o: ["They are not eligible to start and are marked DNS", "They receive a Yellow Card and may start", "They start last", "Nothing, as long as they did not see the route"],
    a: [0], e: "Competitors who leave the warm-up area without permission after the closing time are not eligible to start and are marked DNS.", r: "ER Annex A §4.2" });

  add({ id: "WL35", lvl: 2, c: true, q: "A competitor is not in the Call Zone at the relevant time because they were held up by the anti-doping team. What does the Jury President do?",
    o: ["Allow them to climb, because the absence results from factors outside their control", "Mark them DNS without exception", "Let them start at the end of the round only if all coaches agree", "Leave the decision to the route judge"],
    a: [0], e: "The Jury President will allow a competitor to climb if the absence results from factors outside their control. Otherwise the competitor is marked DNS on the route.", r: "ER Annex A §4.10, Note 20" });

  add({ id: "WL36", lvl: 2, q: "When must a lead route be cleaned during the round?",
    o: ["If there are more than 22 starters, at evenly distributed intervals that should not exceed 20 and must not exceed 22 competitors", "After every 10 competitors", "Only between rounds", "Only at the request of a team official"],
    a: [0], e: "With more than 22 starters, the route is cleaned at even intervals: should not exceed 20, must not exceed 22. Intervals are marked on the Official Start List.", r: "ER Annex A §4.3" });

  add({ id: "WL37", lvl: 2, q: "What is the minimum gap between a competitor’s two qualification routes?",
    o: ["50 minutes", "30 minutes", "60 minutes", "2 hours"],
    a: [0], e: "Where a round includes more than one route, each competitor is entitled to at least 50 minutes between the end of one attempt and the start of the next.", r: "ER Annex A §4.4" });

  add({ id: "WL38", lvl: 2, q: "What does the Jury President provide in the lead warm-up area?",
    o: ["Images of the route when it opens; only organiser-provided images approved by the Jury President may be brought in", "A live video of the route", "The scoring topo", "Nothing; images are prohibited"],
    a: [0], e: "The Jury President arranges for route images in the warm-up area when it opens. Only organiser-provided, JP-approved images may be brought in.", r: "ER Annex A §4.9" });

  add({ id: "WL39", lvl: 2, q: "How are Qualification Points calculated in lead?",
    o: ["The n-th root of the product of the fractional rankings on the n routes (geometric mean), rounded to 3 decimals; lower is better", "The sum of rankings", "The average number of holds", "Only the better route counts"],
    a: [0], e: "QP is the geometric mean of the fractional rankings, rounded to 3 decimal places. Lower is better.", r: "ER Annex A §7.2" });

  add({ id: "WL40", lvl: 3, c: true, q: "A competitor is tied 1st with two others on route 1 and is alone in 8th on route 2. What are their Qualification Points?",
    o: ["4.000", "2.828", "5.000", "3.000"],
    a: [0], e: "Three tied competitors share places 1–3, so their fractional ranking is 2. √(2 × 8) = 4.000.", r: "ER Annex A §7.2" });

  add({ id: "WL41", lvl: 2, q: "How are ties in a lead semi-final or final broken?",
    o: ["First by count-back to the General Ranking of the preceding round; in the scheduled medal phase, remaining podium ties by actual climbing time (lower is better)", "First by climbing time, then by count-back", "By a super-final", "By drawing lots"],
    a: [0], e: "Count-back to the preceding round comes first, unless that round used multiple starting groups. In the scheduled medal phase only, remaining podium ties are broken by actual climbing time.", r: "ER Annex A §7.3" });

  add({ id: "WL42", lvl: 3, q: "How is the climbing time measured when it is used as a podium tie-break?",
    o: ["Rounded down to the nearest second; for a Top, it ends when the final anchor gate closes; otherwise, when the climber falls or the attempt is ruled unsuccessful", "To 1/100 s, ending when the top hold is touched", "Rounded up to the nearest second, ending when lowered", "It is not measured"],
    a: [0], e: "The time is rounded down to the nearest second. For a Top it ends when the final anchor gate closes, otherwise at the fall or when the attempt is ruled unsuccessful.", r: "ER Annex A Note 24" });

  add({ id: "WL43", lvl: 2, q: "To whom must a potential Technical Incident in lead be reported, and until when?",
    o: ["Immediately to an International Judge, who decides; no claim is possible once the next scheduled competitor has started the route", "To the route judge, until the Official Results", "To the Event Delegate, until the end of the round", "In writing to the Appeal Jury within 5 minutes"],
    a: [0], e: "Potential TIs are reported immediately to an International Judge, who decides whether to confirm. Once the next scheduled competitor has started the route, no claim is possible.", r: "ER Annex A §8.1" });

  add({ id: "WL44", lvl: 2, c: true, q: "A climber falls at scoring hold 14 because of a confirmed Technical Incident. How long is the recuperation period?",
    o: ["14 minutes", "20 minutes", "7 minutes", "The remaining climbing time"],
    a: [0], e: "The recuperation period is 1 minute per scoring hold used before the TI, up to a maximum of 20 minutes.", r: "ER Annex A §8.2(B)" });

  add({ id: "WL45", lvl: 2, c: true, q: "While waiting for a restart after a TI, a competitor leaves the separate area without permission to talk to their coach. What happens?",
    o: ["The Technical Incident is closed and no supplementary attempts are allowed", "A Yellow Card, but the restart remains", "The recuperation period restarts", "Nothing, if they return in time"],
    a: [0], e: "The competitor may only communicate with officials in the separate area. Leaving it without permission closes the TI, and no further attempts are allowed.", r: "ER Annex A §8.2(A)" });

  add({ id: "WL46", lvl: 2, q: "Which result counts after a restart following a Technical Incident in lead?",
    o: ["The better of the original and the restarted attempt", "Always the restart", "Always the original", "The average"],
    a: [0], e: "The better of the original and the restarted attempt counts. A restart is cancelled if it cannot affect the competitor’s ranking at the end of the round.", r: "ER Annex A §8.3, §8.4; CR §11.4(C)" });

  add({ id: "WL47", lvl: 2, q: "When must an appeal against the termination of a lead attempt be made?",
    o: ["Before the next competitor starts their attempt; verbal notice is possible, with up to 5 minutes for the written appeal", "Within 5 minutes of the Official Results", "Before the end of the round", "Immediately after the Provisional Result"],
    a: [0], e: "The appeal must be made before the next competitor starts. Verbal notice is allowed, followed by a written appeal within 5 minutes. If no written appeal follows, it is recorded as unsuccessful and a fee is charged.", r: "ER Annex A §9.1, Note 27" });

  add({ id: "WL48", lvl: 2, q: "What is the deadline for a lead scoring/ranking appeal in the medal phase?",
    o: ["Immediately following the publication of the competitor’s Provisional Result", "Within 2 minutes of the Official Results", "Within 5 minutes of the Official Results", "Before the medal ceremony"],
    a: [0], e: "In the medal phase, the deadline is immediately after the competitor’s Provisional Result. In other rounds it is within 5 minutes of the Official Results. Late appeals may be allowed if Provisional Results are not live.", r: "ER Annex A §9.2, Note 28" });

  add({ id: "WL49", lvl: 2, c: true, q: "The belayer pulls the rope so tight that the climber is lifted upwards. How is this classified?",
    o: ["As a Technical Incident (tight rope caused by the belayer)", "As a breach by the climber leading to disqualification", "As normal climbing", "As a fall"],
    a: [0], e: "A tight rope caused by the action or inaction of the belayer, which either assists or hinders a competitor, is a Technical Incident.", r: "CR Glossary “Technical Incident” (C)" });

  add({ id: "WL50", lvl: 2, c: true, q: "A climber uses an unused, unplugged T-nut hole with two fingers to hold on. Result?",
    o: ["The attempt is unsuccessful for gaining an advantage using an unplugged T-nut emplacement with the hands", "Allowed, T-nuts are part of the wall", "Allowed, but the hole does not score", "A Yellow Card"],
    a: [0], e: "Gaining an advantage by using unused or unplugged T-nut emplacements with the hands ends the attempt.", r: "CR §8.1(E)" });

  add({ id: "WL51", lvl: 2, c: true, q: "A climber steps on a bolt hanger to bridge a section. Result?",
    o: ["Unsuccessful – using safety equipment, including bolt hangers, to gain an advantage", "Allowed, as long as they do not pull on the quickdraw", "A Yellow Card only", "Allowed below the last clipped quickdraw"],
    a: [0], e: "Using safety equipment such as quickdraws or bolt hangers, open edges or placards to gain an advantage ends the attempt.", r: "CR §8.1(E)" });

  add({ id: "WL52", lvl: 1, q: "What are the minimum dimensions of a lead competition wall?",
    o: ["At least 3 m width per route and at least 15 m height", "2 m width and 12 m height", "4 m width and 18 m height", "No requirement"],
    a: [0], e: "Lead walls must be at least 3 m wide per route, and the wall height will not be less than 15 m.", r: "ER Annex A §1.1" });

  add({ id: "WL53", lvl: 3, c: true, q: "In a World Cup, the final round is cancelled before the semi-final starts. Is actual climbing time used to break podium ties in the semi-final?",
    o: ["Yes – the semi-final becomes the scheduled medal phase", "No – the final remains the scheduled medal phase", "Only for 1st place", "Places are drawn"],
    a: [0], e: "The scheduled medal phase is the last round in the schedule as it stands before that round starts. Cancelled before the semi-final began, the semi-final becomes the medal phase. Cancelled after it started, the final remains the medal phase and times are not used.", r: "ER Annex A Note 25" });

  add({ id: "WL54", lvl: 1, q: "By when must lead competitors report to the warm-up area?",
    o: ["By the closing time stated on the Official Start List; otherwise they are marked DNS", "By the Start of Play", "By 10 minutes before their attempt", "There is no deadline"],
    a: [0], e: "Competitors not present in the warm-up area by the stated closing time are not eligible to start and are marked DNS.", r: "ER Annex A §4.1" });

  add({ id: "WL55", lvl: 2, c: true, q: "A competitor clips the final anchor after 6:02 minutes. The allowed climbing time is 6 minutes. Result?",
    o: ["Unsuccessful – the result is the best progress before the time expired", "Top, because they kept climbing", "Top with a time penalty", "The attempt is annulled"],
    a: [0], e: "An attempt is unsuccessful when the allowed climbing time expires. Only the progress made before expiry counts.", r: "CR §8.1; ER Annex A Table 1" });
})();
