// World Climbing – General rules. Sources: Competition Rules 2026 (CR), Event Regulations v3 (ER)
(function () {
  const add = (q) => window.QUESTIONS.push(Object.assign({ rb: "wc", d: "allgemein" }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add({ id: "WG01", k: [1, 0, 2], q: "Which language version of the World Climbing rules is authoritative?",
    o: ["English", "French", "The language of the host country", "Any official translation"],
    a: [0], e: "World Climbing publishes the rules in English. If translations diverge, the English text is authoritative.", r: "CR Notes on the Rules; ER Notes on these Regulations" });

  add({ id: "WG02", k: [1, 0, 2], q: "How often does World Climbing plan to publish the Competition Rules and the Event Regulations in stable form?",
    o: ["Competition Rules quadrennially, Event Regulations biennially", "Both annually", "Both every 4 years", "Rules biennially, regulations annually"],
    a: [0], e: "The rules are planned on a 4-year cycle and the regulations on a 2-year cycle. The notes and guidance may be updated more often.", r: "CR Changes to the Rules; ER Changes to these Regulations" });

  add({ id: "WG03", k: [1, 0, 2], q: "What may World Climbing Continental Councils do with the Event Regulations?",
    o: ["Use them without modification for events under their jurisdiction", "Adapt elements such as rounds, quotas, number of routes/boulders and flash/on-sight formats", "Make substantive changes only with prior approval from World Climbing", "Change the scoring system freely"],
    a: [0, 1, 2], e: "Continental Councils may use the regulations unchanged or adapt certain elements. Substantive changes need prior approval from World Climbing.", r: "ER Notes on these Regulations" });

  add({ id: "WG04", k: [0, 0, 0], q: "Where may competitions under the World Climbing rules take place?",
    o: ["Only on artificial climbing structures", "Also on natural rock", "On boulders if the Jury President agrees", "Anywhere safe"],
    a: [0], e: "Competitions must take place on artificial climbing structures, not on natural rock formations or boulders.", r: "CR §1.1" });

  add({ id: "WG05", k: [1, 0, 0], q: "What colour are boundary (out-of-bounds) markings?",
    o: ["Black, for all routes/boulders in a round and all rounds", "Red", "Blue", "Free choice"],
    a: [0], e: "All boundary markings are black. When marking part of the climbing surface, the marking should extend to each edge of the surface.", r: "CR Note 5" });

  add({ id: "WG06", k: [1, 1, 0], c: true, q: "A climber touches the black tape of a boundary marking. Out of bounds?",
    o: ["No – climbers may touch or use the marking itself", "Yes, always", "Only with the hands", "Only in boulder"],
    a: [0], e: "Climbers may touch or use the boundary marking itself without being out of bounds.", r: "CR Note 5" });

  add({ id: "WG07", k: [1, 1, 0], c: true, q: "A climber’s knee brushes a volume marked off as out of bounds with black tape, without any weight transfer or effect on the move. Ruling?",
    o: ["Incidental contact can be allowed", "Always out of bounds", "A Yellow Card", "A re-climb"],
    a: [0], e: "For unintentional contact, the effect matters. Simply brushing or touching without weight transfer can be allowed.", r: "CR Note 5" });

  add({ id: "WG08", k: [1, 1, 0], c: true, q: "A climber deliberately steps on a volume marked off as out of bounds with black tape to stabilise. Ruling?",
    o: ["Out of bounds – any active or passive use, including stabilising, is not allowed", "Allowed with the feet", "Allowed if not needed", "A Yellow Card only"],
    a: [0], e: "A ruling should be made if the infraction is intentional or alters the climbing. Pulling, stepping or stabilising is not allowed.", r: "CR Note 5; CR §8.1(D)" });

  add({ id: "WG09", k: [1, 0, 0], q: "Which personal equipment rules apply?",
    o: ["Climbing shoes (and where relevant a harness) are mandatory", "A chalk bag with dry or liquid chalk and a helmet may be used", "Compression wraps and kinesiology tape may be used to prevent or manage injury", "Kneepads may be worn"],
    a: [0, 1, 2], e: "Shoes are mandatory; chalk bag, chalk and helmet are allowed. Compression wraps and tape are allowed for injury reasons. Gloves and kneepads are prohibited unless the regulations allow them.", r: "CR §3.3, §3.4, Note 7" });

  add({ id: "WG10", k: [0, 0, 2], q: "Which technical standard must climbing structures, holds and equipment comply with?",
    o: ["The World Climbing Equipment Code", "Only the national EN standard", "The organiser’s own standard", "None"],
    a: [0], e: "All technical equipment, whoever provides it, must comply with the World Climbing Equipment Code.", r: "CR §2.1" });

  add({ id: "WG11", k: [0, 0, 1], q: "Which requirements does the Jury President have to meet?",
    o: ["Be independent of the event organiser", "Have no family, professional or close personal relationship with any competitor or team official", "Be free from financial or other interests that could influence decisions", "Be a member of the host federation"],
    a: [0, 1, 2], e: "The Jury President must be strictly neutral and independent.", r: "CR §4.1" });

  add({ id: "WG12", k: [1, 1, 1], c: true, q: "A coach asks the Jury President to add extra safety matting under one boulder for their athlete only. Decision?",
    o: ["Refuse – no special provisions for an individual competitor", "Accept – safety first", "Accept if the Head Routesetter agrees", "Accept if other coaches agree"],
    a: [0], e: "The Jury President may never make special provisions for an individual. Extra matting, extra quickdraws or a ladder to descend are explicitly not granted.", r: "CR §4.3, Note 8" });

  add({ id: "WG13", k: [0, 0, 0], q: "Who are the on-field officials under the World Climbing rules?",
    o: ["The Jury President", "Category judges", "Route/boulder judges", "Routesetters"],
    a: [0, 1, 2], e: "The Jury President, category judges and route/boulder judges are the on-field officials.", r: "CR §4.4" });

  add({ id: "WG14", k: [0, 0, 1], q: "Which technical officials does World Climbing appoint for an event?",
    o: ["Event Delegate and Medical Delegate", "Jury President", "Head Routesetter, international routesetters and International Judges", "Route/boulder judges"],
    a: [0, 1, 2], e: "World Climbing appoints the Event Delegate, Medical Delegate, Jury President, Head Routesetter, international routesetters and International Judges. The organiser appoints the route/boulder judges (1:1), belayers, Competition Doctor and others.", r: "ER §12.1, §12.2" });

  add({ id: "WG15", k: [0, 0, 2], q: "Who replaces the Jury President if they cannot start or continue?",
    o: ["An International Judge", "The Event Delegate", "The Head Routesetter", "The organiser’s chief judge"],
    a: [0], e: "International Judges act as category judges and replace the Jury President if needed.", r: "ER §12.1(E)" });

  add({ id: "WG16", k: [0, 0, 1], q: "Who decides whether an injured climber may continue or return to competition?",
    o: ["The Medical Delegate, after consulting the Competition Doctor and the team’s medical staff", "The Jury President", "The team coach", "The climber"],
    a: [0], e: "The Medical Delegate decides, with the climber’s health and safety as the priority. The outcome of the competition must never influence the decision.", r: "ER §3.2" });

  add({ id: "WG17", k: [0, 0, 2], q: "What is required for a Safety Petition?",
    o: ["Written, signed by the Team Managers from 3 separate teams", "Verbal to the route judge", "Signed by one competitor", "An email to World Climbing"],
    a: [0], e: "A Safety Petition must be written and signed by Team Managers of 3 separate teams. If the JP agrees, the issue must be addressed without delay.", r: "ER §3.3" });

  add({ id: "WG18", k: [0, 1, 2], c: true, q: "A visually impaired spectator asks to bring a guide dog into the Call Zone. Allowed?",
    o: ["No – no animals, including guide or assistance animals, may be brought onto the Call Zone or Field of Play", "Yes, with Jury President approval", "Yes, guide dogs are always allowed", "Only with a certificate"],
    a: [0], e: "World Climbing regulations exclude all animals from the Call Zone and Field of Play, including guide and assistance animals.", r: "ER §4.4" });

  add({ id: "WG19", k: [1, 1, 1], c: true, q: "In an on-sight round, a coach uses a phone in the coaches’ zone to check results. Allowed?",
    o: ["Yes – permission is deemed given in the coaches’ zone, provided devices are not used to communicate with competitors", "No, never", "Only in flight mode", "Only after the round"],
    a: [0], e: "In on-sight rounds, electronic communication devices need JP approval in the Competition Area. Permission is deemed given for coaches in the coaches’ zone, as long as they do not communicate with athletes.", r: "ER §4.3, Note 5" });

  add({ id: "WG20", k: [0, 0, 1], q: "What scheduling constraints apply to the warm-up area under World Climbing regulations?",
    o: ["It should open not less than 2 hours before the Start of Play (never less than 90 minutes)", "It should close not less than 30 minutes before the Start of Play", "There should be a 2-minute break after any presentation of finalists", "It opens 30 minutes before the Start of Play"],
    a: [0, 1, 2], e: "The warm-up area opens at least 2 hours before the Start of Play (never less than 90 minutes) and closes at least 30 minutes before. After a finalist presentation there is a 2-minute break.", r: "ER §6.4" });

  add({ id: "WG21", k: [0, 0, 1], q: "When must participation be confirmed if the Event Information Sheet gives no separate deadline?",
    o: ["30 minutes before the start of the Technical Meeting", "60 minutes before Start of Play", "The day before at 20:00", "Before qualification starts"],
    a: [0], e: "Without a separate deadline, confirmation is due 30 minutes before the Technical Meeting. Climbers not confirmed are not on the Official Start List.", r: "ER §6.2" });

  add({ id: "WG22", k: [0, 0, 1], q: "When must World Climbing issue the Event Information Sheet, and when is the registration deadline?",
    o: ["Not less than 30 days before the competition; registration deadline not less than 10 days before the first day", "14 days before; deadline 3 days before", "60 days before; deadline 30 days before", "7 days before; no deadline"],
    a: [0], e: "The Event Information Sheet comes at least 30 days ahead. The registration deadline should be at least 10 days before the first competition day.", r: "ER §1.3" });

  add({ id: "WG23", k: [0, 0, 1], q: "How are Event Seedings determined?",
    o: ["From the World Ranking on the day preceding the start of the competition", "From the previous year’s results", "By lot", "From the qualification round"],
    a: [0], e: "Event Seedings come from the World Ranking on the day before the competition starts.", r: "ER §7.4" });

  add({ id: "WG24", k: [1, 0, 1], q: "In Rank Descending Order, where do unseeded competitors start?",
    o: ["Before all seeded competitors, in random order", "After all seeded competitors", "In the middle", "They are not allowed to start"],
    a: [0], e: "In Rank Descending Order, unseeded competitors start before all seeded ones. In Rank Ascending Order they start after them. Equal seeds are randomised.", r: "CR Glossary “Rank Descending Order”" });

  add({ id: "WG25", k: [0, 0, 2], q: "Which sporting codes have the status of rules under the Event Regulations?",
    o: ["Anti-Doping Rules and RED-S Health Screening Rules", "Betting and Anti-Corruption Code and Disciplinary Rules", "Eligibility, Equipment and Uniform Codes", "The host city’s traffic regulations"],
    a: [0, 1, 2], e: "§2.2 lists Anti-Doping, RED-S Health Screening, Betting and Anti-Corruption, Disciplinary Rules, Eligibility Code, Equipment Code and Uniform Code.", r: "ER §2.2" });

  add({ id: "WG26", k: [1, 0, 0], q: "What is forbidden in an on-sight round?",
    o: ["Observing other competitors’ attempts", "Watching or recording the routesetters’ work", "Seeking or accepting information beyond what is officially provided", "Viewing routes from public areas while they are open"],
    a: [0, 1, 2], e: "Observing other attempts, watching the routesetters and seeking extra information are prohibited. Viewing from areas open to the public is allowed, but drones and similar devices are not.", r: "CR §5.3, Note 11" });

  add({ id: "WG27", k: [0, 1, 0], c: true, q: "2 competitors discuss a route after collective observation. Neither has attempted it yet. Allowed?",
    o: ["Yes, as long as neither has attempted the route", "No, never", "Only with a judge present", "Yes, even if one has climbed"],
    a: [0], e: "Information from the collective observation may be shared only where neither competitor has attempted the route or boulder.", r: "CR §5.4(B)" });

  add({ id: "WG28", k: [0, 0, 0], q: "In a flash round, what may team officials do?",
    o: ["Communicate information about the routes before, during and after the attempts", "Nothing – no communication", "Only after the round", "Only during the demonstration"],
    a: [0], e: "In flash rounds, a demonstration is mandatory and team officials may share information at any time.", r: "CR §5.5" });

  add({ id: "WG29", k: [1, 0, 0], q: "What does “On Sight” mean?",
    o: ["A ground-up attempt without any prior knowledge of the sequence and without prior practice/attempts", "With knowledge but without practice", "With prior practice", "After video study"],
    a: [0], e: "On Sight: no prior knowledge and no practice. Flash: some knowledge, no practice. After-Work: first-hand knowledge from practice or earlier attempts.", r: "CR Glossary" });

  add({ id: "WG30", k: [1, 0, 1], q: "Which items are listed in the Technical Incident definition?",
    o: ["A broken or loose hold", "An improperly positioned quickdraw or karabiner", "A tight rope caused by the belayer", "A slip due to the climber’s own sweaty hands"],
    a: [0, 1, 2], e: "TIs also include a critical timing failure and any unusual circumstance placing the climber in a different situation from their peers. In every case there must be a material (dis)advantage that is not the climber’s own doing.", r: "CR Glossary “Technical Incident”" });

  add({ id: "WG31", k: [0, 1, 1], c: true, q: "A hold spins and gets harder, but the climber continues and falls 3 moves later. Can they still claim a TI?",
    o: ["No – continuing after a potential TI that adversely affected them waives and closes it", "Yes, until Official Results", "Yes, the hold was loose", "Only if the coach protests immediately"],
    a: [0], e: "A competitor who continues after a potential or confirmed TI that adversely affected them waives it.", r: "CR §11.3" });

  add({ id: "WG32", k: [0, 2, 2], c: true, q: "A spinning hold becomes better and helps the climber, who continues. Is the incident waived?",
    o: ["No – a competitor may not waive an incident that provided an advantage", "Yes, always", "Only in boulder", "The climber decides"],
    a: [0], e: "An incident that provided an advantage cannot be waived.", r: "CR §11.3" });

  add({ id: "WG33", k: [0, 0, 1], q: "Who decides an appeal at a World Climbing event?",
    o: ["The Jury President – or an International Judge if the appeal relates to a Field of Play judgement made by the Jury President", "The Jury President and Event Delegate together", "3 team managers", "The Event Delegate alone"],
    a: [0], e: "The Appeal Jury is the Jury President. If the appeal concerns the JP’s own Field of Play judgement, an International Judge decides.", r: "ER §10.1" });

  add({ id: "WG34", k: [2, 1, 1], q: "Who may file an appeal?",
    o: ["The affected competitor, if their result or ranking is affected", "A team official registered as team manager or coach for the event, representing a competitor in the current round", "Any spectator who noticed an error", "A competitor against another competitor’s result, even if their own ranking is not affected"],
    a: [0, 1], e: "An appeal may be filed by the affected competitor or by a team official with Appeal Eligibility acting on their behalf. Appeal Eligibility belongs to a registered team manager or coach representing a competitor in the current round. The appellant’s own result or ranking must always be affected.", r: "CR §12.1, §12.2(A); ER §10.2" });

  add({ id: "WG60", k: [2, 2, 1], c: true, q: "A climber notices that a competitor ranked just ahead of her used a volume marked off as out of bounds with black tape to progress, and the judge did not intervene. Can she (or her coach) appeal?",
    o: ["Yes – her own ranking is affected by the judging error", "No – appeals are only possible against one’s own result", "No – only the Jury President can change another competitor’s result on their own initiative", "Yes, verbally and without a deadline"],
    a: [0], e: "An appeal is admissible if the appellant’s own result or ranking is affected by a judging error, even when it concerns another competitor’s attempt. Written form and the usual deadlines apply. The Judge Guide confirms that a lower score for another competitor can be sought for an out-of-bounds infraction.", r: "CR §12.1(A), §12.2; Judge Guide" });

  add({ id: "WG35", k: [0, 0, 1], q: "Which is Admissible Evidence in an appeal?",
    o: ["Statements on the appeal form", "Official video recordings (organiser-approved system or authorised broadcast stream)", "Statements collected from on-field officials", "A coach’s phone video from the stands"],
    a: [0, 1, 2], e: "Admissible: the appeal form, official video recordings and statements from on-field officials.", r: "ER §10.2" });

  add({ id: "WG36", k: [0, 0, 1], q: "Which outcomes can an appeal have?",
    o: ["Successful (conclusive evidence supports it)", "Unsuccessful (evidence inconclusive or not supportive)", "Undetermined (evidence does not allow review)", "Postponed to the next competition"],
    a: [0, 1, 2], e: "Appeals are successful, unsuccessful or undetermined. In the last 2 cases the Field of Play decision stands.", r: "CR §12.4, §12.5" });

  add({ id: "WG37", k: [2, 0, 1], q: "When may an appeal fee be charged?",
    o: ["Only if the appeal is unsuccessful (including a verbal notice not followed by a timely written appeal)", "Always", "Only if inadmissible", "Never"],
    a: [0], e: "A fee may be charged only for unsuccessful appeals. A verbal notice without a written appeal in time is recorded as unsuccessful, and the fee is charged. Inadmissible appeals pay no fee.", r: "CR §12.2, §12.6; ER Annex A Note 27" });

  add({ id: "WG38", k: [0, 0, 1], q: "What is the deadline for an appeal about an error in the Official Results?",
    o: ["Medal phase: immediately on publication; other rounds: within 5 minutes", "Always 10 minutes", "Medal phase 2 minutes, others 5 minutes", "End of the day"],
    a: [0], e: "For the medal phase the appeal is due immediately on publication, for other rounds within 5 minutes.", r: "ER §10.4" });

  add({ id: "WG39", k: [0, 0, 1], q: "What follows 2 Cautions (Yellow Cards) in one event?",
    o: ["Disqualification (Red Card)", "A third Caution (Yellow Card)", "A verbal warning", "Nothing"],
    a: [0], e: "Receiving 2 Cautions (Yellow Cards) in an event leads to disqualification. A verbal warning is not a Caution and does not count.", r: "CR §13.1" });

  add({ id: "WG40", k: [0, 1, 1], c: true, q: "A competitor gathers information about an on-sight route by watching a livestream in the warm-up area. Sanction?",
    o: ["Disqualification (Red Card)", "Caution (Yellow Card)", "Verbal warning", "Penalty attempt"],
    a: [0], e: "Observing or gathering information on an on-sight route beyond what the rules allow is a disqualification offence.", r: "CR §13.1; §5.3(C)" });

  add({ id: "WG41", k: [0, 0, 1], q: "Who may issue Cautions and disqualifications at World Climbing events?",
    o: ["Caution (Yellow Card): Jury President and International Judge; Disqualification (Red Card): Jury President only", "Any route judge", "Caution (Yellow Card): Event Delegate; Disqualification (Red Card): Jury President", "Event Delegate only"],
    a: [0], e: "Cautions may be issued by the Jury President or an International Judge. Disqualifications are reserved for the Jury President.", r: "ER §9.1" });

  add({ id: "WG42", k: [0, 0, 1], q: "What happens to a team official who receives a Caution (Yellow Card)?",
    o: ["They are not allowed access to the Competition Area for the remainder of the event", "Nothing", "A fine", "Their athlete is disqualified"],
    a: [0], e: "A cautioned competitor may continue. A cautioned team official loses access to the Competition Area for the rest of the event.", r: "CR §13.4" });

  add({ id: "WG43", k: [0, 0, 2], q: "What happens if a person receives 3 Cautions (Yellow Cards) in the same year?",
    o: ["Their International Licence is suspended after the competition where the 3rd caution was received; the federation’s quota is reduced during the suspension", "Lifetime ban", "Nothing", "A training course"],
    a: [0], e: "After the 3rd caution in a year, the International Licence is suspended. The Disciplinary Commission sets the duration, and the federation’s team quota is reduced meanwhile.", r: "ER §9.3" });

  add({ id: "WG44", k: [0, 0, 2], q: "What does World Climbing do as soon as possible after a sanction is imposed?",
    o: ["Publish a sport communication summarising the matter, including whether it is referred to the Disciplinary Commission", "Nothing", "Inform only the athlete privately", "Fine the federation"],
    a: [0], e: "World Climbing publishes a sport communication on the matter.", r: "ER §9.2" });

  add({ id: "WG45", k: [1, 0, 2], q: "What are the consequences of a disqualification?",
    o: ["Ineligible for subsequent rounds and unranked", "For a serious offence, disqualified from all events in the competition", "Unranked in the General Ranking", "Keeps their ranking in the current round"],
    a: [0, 1, 2], e: "A disqualified competitor is unranked and may not take part in later rounds. A serious offence disqualifies them from all events of the competition.", r: "CR §13.5, §13.6, Note 30" });

  add({ id: "WG46", k: [1, 0, 0], q: "Which Invalid Result Marks exist?",
    o: ["DNS – failure to start", "DSQ – disqualification for technical infractions", "DQB – disqualification for unsporting behaviour", "DNF – did not finish"],
    a: [0, 1, 2], e: "The IRMs are DNS, DSQ and DQB.", r: "CR Glossary “Invalid Result Mark”" });

  add({ id: "WG47", k: [1, 0, 0], q: "What do “shall/must”, “should” and “may” mean in the rules?",
    o: ["“Shall/must” is mandatory, “should” a recommendation, “may” discretionary", "“Shall/must”, “should” and “may” are all equally mandatory", "“Shall/must” is a recommendation, “should” mandatory, “may” a prohibition", "“Shall/must” and “should” are mandatory, “may” is a recommendation"],
    a: [0], e: "Shall/must are mandatory, should is a recommendation (deviate only after weighing the implications), may is discretionary.", r: "CR Glossary 1" });

  add({ id: "WG48", k: [0, 0, 2], q: "How are ties for 1st place in a World Climbing Series ranking broken?",
    o: ["First by win-loss record against each other, then by number of best results (1st places, then 2nd places, …)", "By lot", "By the last competition", "By world ranking"],
    a: [0], e: "Ties for 1st are broken first by head-to-head (win-loss) record, then by number of best results.", r: "ER §7.12" });

  add({ id: "WG49", k: [0, 0, 2], q: "How is the National Team Ranking calculated for individual disciplines in the World Climbing Series?",
    o: ["Summing series points of the 3 best-ranked climbers of a federation in both men’s and women’s categories at each event", "Best 2 climbers per category", "All climbers of a federation", "Only the winners"],
    a: [0], e: "The 3 best-ranked climbers per category (men and women) count at each event.", r: "ER §7.13(A)" });

  add({ id: "WG50", k: [0, 0, 2], q: "What awards are given at the end of a World Climbing Series?",
    o: ["Trophies to the climbers/teams placed 1st; plates to climbers placed 2nd and 3rd", "Medals to the top 3", "Trophies to the top 3", "Prize money only"],
    a: [0], e: "The series winner gets a trophy, while 2nd and 3rd get plates.", r: "ER §8.5" });

  add({ id: "WG51", k: [0, 0, 1], q: "How is prize money handled for tied climbers?",
    o: ["Tied climbers receive the average of the prize money for the tied places", "Each gets the higher amount", "It is split by lot", "No prize money is paid"],
    a: [0], e: "Tied climbers get the average prize money for the tied places, and multiple medals are awarded.", r: "ER §8.2, §8.4" });

  add({ id: "WG52", k: [0, 0, 2], q: "What happens if an event is cancelled due to unplanned events?",
    o: ["No medals, prizes or ranking points are awarded", "Qualification results count", "Points are halved", "Medals by seeding"],
    a: [0], e: "If an event is cancelled, no medals, prizes or ranking points are awarded.", r: "ER §11.1" });

  add({ id: "WG53", k: [0, 0, 1], q: "What licence must all team members hold?",
    o: ["An International Licence", "Only a national licence", "No licence", "A coaching licence"],
    a: [0], e: "All team members must hold an International Licence.", r: "ER §1.4" });

  add({ id: "WG54", k: [0, 0, 2], q: "How often are the World Climbing Championships held, and which youth age groups have a World Youth Championship?",
    o: ["Adult championships “bi-annually”; youth championships annually for U17 and U19", "Adults annually; youth U15–U21", "Adults every 4 years; youth U17 only", "Adults and youth both bi-annually, youth for U15–U19"],
    a: [0], e: "ER §1.1 provides for adult championships “bi-annually” in boulder, lead and speed (in practice every 2 years) and youth championships for U17 and U19 annually.", r: "ER §1.1(B), (C)" });

  add({ id: "WG55", k: [0, 0, 2], q: "Which disciplines may the World Climbing Series include, and how many competitions per discipline?",
    o: ["Boulder, lead, speed and team speed – up to 8 competitions each per year", "Boulder, lead and speed only – up to 6 each", "Only combined events", "Up to 12 per discipline"],
    a: [0], e: "World Climbing may approve an annual series with up to 8 competitions in each of boulder, lead, speed and team speed.", r: "ER §1.1(A)" });

  add({ id: "WG56", k: [0, 0, 0], q: "What is the guiding principle when assessing incidents affecting an attempt?",
    o: ["Climbers are primarily responsible for their own actions and decisions, while external factors may impede or assist an attempt", "Officials are always responsible", "The organiser is responsible", "The coach is responsible"],
    a: [0], e: "Incidents are evaluated on the principle that climbers are mainly responsible for their own actions, while accepting that external factors can affect an attempt.", r: "CR §11.1" });

  add({ id: "WG57", k: [0, 0, 1], q: "How long must the Competition Doctor be present?",
    o: ["For all scheduled warm-up and competition activities", "Only during finals", "Only on request", "From Start of Play to the medal ceremony"],
    a: [0], e: "The Medical Delegate confirms a Competition Doctor is available, who must attend all scheduled warm-up and competition activities.", r: "ER §3.1" });

  add({ id: "WG58", k: [0, 0, 0], q: "Where must climbers wear their bib?",
    o: ["On the back of their top in the Call Zone and on the Field of Play", "On the harness", "On the front", "On the chalk bag"],
    a: [0], e: "Climbers must wear the bib on the back of their top in the Call Zone and on the Field of Play.", r: "ER §5.3" });

  add({ id: "WG59", k: [1, 1, 1], c: true, q: "After publication of the semi-final start list, a climber withdraws. What happens to the list?",
    o: ["It is re-issued with the relevant IRM; order and times stay; no replacement is advanced", "The next qualifier moves up", "A new list is drawn", "Everyone moves forward"],
    a: [0], e: "The start list is re-issued with the IRM added. Starting order and times stay the same, and no substitutes are advanced.", r: "ER §7.6, Note 9" });
})();
