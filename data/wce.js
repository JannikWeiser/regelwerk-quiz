// World Climbing Europe 2026. Sources: World Climbing Europe Youth Series Regulations 2026 (EYS), World Climbing Europe Youth Championship Regulations 2026 (EYCh)
(function () {
  const add = (d, q) => window.QUESTIONS.push(Object.assign({ rb: "wce", d }, q));
  window.QUESTIONS = window.QUESTIONS || [];

  add("allgemein", { id: "E01", k: [0, 0, 1], cat: "O", q: "How do the World Climbing Europe Youth Series Regulations 2026 relate to the World Climbing regulations?",
    o: ["The World Climbing Series regulations apply; the European document only sets out amendments", "The European document fully replaces the World Climbing Series regulations", "The European document applies only to speed; lead and boulder follow national rules", "The European document contains recommendations only, without binding effect"],
    a: [0], e: "The World Climbing Series regulations are used for the Europe Youth Series. The European document only lists the amendments.", r: "EYS §1 Introduction" });

  add("allgemein", { id: "E02", k: [0, 0, 0], cat: "O", q: "Which age categories are held at a World Climbing Europe Youth Series competition, and which at the Europe Youth Championship?",
    o: ["Youth Series: U17 and U19 – Youth Championship: U17, U19 and U21", "Youth Series: U17, U19 and U21 – Youth Championship: U17, U19 and U21", "Youth Series: U15 to U19 – Youth Championship: U21 only", "Youth Series: U17 and U19 – Youth Championship: U17 and U19"],
    a: [0], e: "The Youth Series has U17 and U19 categories. The Youth Championship has U17, U19 and U21, each for male and female competitors.", r: "EYS §2.1; EYCh §2.1" });

  add("allgemein", { id: "E03", k: [0, 0, 1], cat: "O", q: "How long may a World Climbing Europe Youth Series competition last, and when should it end?",
    o: ["Not longer than 2 days; if possible finished in one and a half days, before 16:00 on Sunday", "Not longer than 3 days; if possible finished on Sunday evening", "Only 1 day; qualification and final on the same day", "No time limit; the organiser decides the schedule"],
    a: [0], e: "A Youth Series competition lasts no longer than 2 days. Where possible it should finish in one and a half days, before 16:00 on Sunday. A later finish must be declared on the information sheet.", r: "EYS §1.2, §1.4(A), (B)" });

  add("allgemein", { id: "E04", k: [0, 0, 2], cat: "O", q: "Under which condition may a Europe Youth Series boulder competition be held over 3 days?",
    o: ["If the organiser expects more than 250 competitors – Friday afternoon to Sunday afternoon, clearly announced", "If the organiser expects more than 100 competitors – Friday morning to Sunday evening, without announcement", "If bad weather is forecast – any 3 consecutive days, announced at the Technical Meeting", "Never – Youth Series competitions are always limited to 2 days"],
    a: [0], e: "With more than 250 expected boulder competitors, the event may run from Friday afternoon to Sunday afternoon. This must be announced on the website and the Event Information Sheet.", r: "EYS §1.5" });

  add("allgemein", { id: "E05", k: [0, 0, 1], cat: "O", q: "In which period should Europe Youth Series competitions take place, and when should qualification and final rounds be held?",
    o: ["Between the first weekend of March and mid-October; qualifications on Saturday, finals on Sunday", "All year round; qualifications and finals on any day of the week", "Only during the summer holidays; qualifications on Friday, finals on Saturday", "Between April and September; qualifications on Sunday, finals on Saturday"],
    a: [0], e: "The season runs from the first weekend of March to mid-October, preferably at weekends or during holidays. Qualifications are on Saturday and finals on Sunday.", r: "EYS §1.3, §1.4(C)" });

  add("allgemein", { id: "E06", k: [0, 0, 2], cat: "O", q: "World Climbing wants to test a new rule format at a Europe Youth Series competition. What applies?",
    o: ["1 competition may be nominated as a test event, before the season and at least 3 months in advance", "Any competition may test new rules spontaneously, as announced at the Technical Meeting", "Tests of new rule formats are not allowed at Europe Youth Series competitions", "The organiser may decide on the day to test new rules, with Jury President approval"],
    a: [0], e: "World Climbing may nominate one Europe Youth Series competition per year as a test event. The nomination must be made before the season and at least 3 months ahead.", r: "EYS §1.6" });

  add("allgemein", { id: "E07", k: [0, 0, 1], cat: "O", q: "Which team officials may a federation register for a Europe Youth Series competition or the Youth Championship?",
    o: ["1 Team Manager", "Coaches: 4 for boulder, 3 for lead, 2 for speed", "Up to 3 qualified medicals", "Unlimited coaches per discipline"],
    a: [0, 1, 2], e: "Federations may register 1 Team Manager, coaches per discipline (boulder 4, lead 3, speed 2) and up to 3 qualified medicals.", r: "EYS §2.2; EYCh §2.2" });

  add("allgemein", { id: "E08", k: [0, 0, 1], cat: "O", q: "How many additional competitors may the host federation register at a Europe Youth Series competition?",
    o: ["2 per category for each relevant discipline", "1 per category for each relevant discipline", "Unlimited, as long as they hold a valid licence", "None, the host follows the normal quota"],
    a: [0], e: "The host federation may register an additional 2 competitors in each category and discipline.", r: "EYS §2.3(b)" });

  add("allgemein", { id: "E09", k: [0, 0, 2], cat: "O", q: "Athletes from other Continental Councils start at a Europe Youth Series competition. Which statements are correct?",
    o: ["Maximum 2 athletes per gender and discipline, subject to Executive Board validation", "They may reach the podium and take part in the day victory", "They do not receive ranking points for any World Climbing rankings", "They receive European ranking points but no World Climbing ranking points"],
    a: [0, 1, 2], e: "Exceptional spots are capped at 2 per gender and discipline. These athletes may reach the podium but get no World Climbing ranking points.", r: "EYS §2.3(c)" });

  add("allgemein", { id: "E10", k: [0, 0, 2], cat: "O", q: "Is a podium ceremony held for the European Youth National Team Ranking at a Youth Series competition?",
    o: ["No", "Yes, for the top 3 federations", "Only at the last event", "Only if the organiser wants"],
    a: [0], e: "The European Youth National Team Ranking is calculated for each discipline, but no podium ceremony is organised for it.", r: "EYS §3.1(b)" });

  add("allgemein", { id: "E11", k: [0, 0, 2], cat: "O", q: "When are European Youth Series Rankings calculated for a discipline and category?",
    o: ["When at least 3 competitions were held that year, or 2 Youth Series competitions plus a Youth European Championship", "Always, even if only 1 Youth Series competition was held that year", "Only if at least 5 Youth Series competitions were held that year", "Only after the Youth European Championship, regardless of the number of competitions"],
    a: [0], e: "Series rankings require at least 3 competitions, or 2 Youth Series events plus the Youth European Championship in that discipline.", r: "EYS §3.2" });

  add("allgemein", { id: "E12", k: [0, 2, 2], cat: "O", c: true, q: "4 Europe Youth Series lead competitions are held in a season. How many results count for the series ranking?",
    o: ["The best 3; the lowest result is disregarded", "All 4 results are counted", "The best 2; the 2 lowest are disregarded", "The last 3 of the season, regardless of the result"],
    a: [0], e: "A maximum of 3 results count. With more than 3 events, only the 3 best count.", r: "EYS §3.3(c), (d)" });

  add("allgemein", { id: "E13", k: [0, 0, 1], cat: "O", q: "What do the top 3 of the Europe Youth Series overall season ranking receive?",
    o: ["1st: trophy and gold medal; 2nd: silver medal; 3rd: bronze medal", "1st to 3rd: a trophy each, without medals", "1st: trophy; 2nd and 3rd: plates", "1st to 3rd: prize money only"],
    a: [0], e: "At season end, 1st gets a trophy and gold medal, 2nd silver and 3rd bronze, in each category and discipline.", r: "EYS §3.4" });

  add("lead", { id: "E14", k: [0, 0, 0], cat: "J", q: "How is lead organised at a Europe Youth Series competition?",
    o: ["2 rounds (qualification and final) with a fixed final quota of 10", "3 rounds (qualification, semi-final and final) with a semi-final quota of 24", "1 round only, in which the qualification result is final", "2 rounds (qualification and final) with a fixed final quota of 8"],
    a: [0], e: "Europe Youth Series lead uses 2 rounds, with a fixed final quota of 10.", r: "EYS §4.1, §4.2" });

  add("lead", { id: "E15", k: [0, 1, 1], cat: "J", c: true, q: "At the Europe Youth Championship, only 30 athletes are registered in a lead category after the registration deadline. Format?",
    o: ["Only 2 rounds (qualification and final) with a final quota of 8", "3 rounds as usual (qualification, semi-final and final)", "Only 2 rounds (qualification and final) with a final quota of 10", "A single round, in which the qualification result is final"],
    a: [0], e: "With fewer than 36 registered athletes in a category, the category runs only qualification and final, with a final quota of 8.", r: "EYCh §3.2" });

  add("lead", { id: "E16", k: [0, 0, 1], cat: "J", q: "Is there a route cleaning break during the lead semi-final at the Europe Youth Championship?",
    o: ["No – no cleaning break is performed during the semi-final", "Yes – after every 20 competitors, as in the standard regulations", "Yes – once at the halfway point of the start list", "Only if a team official requests it"],
    a: [0], e: "The Youth Championship regulations state that no cleaning break is performed during the lead semi-final.", r: "EYCh §3.3" });

  add("speed", { id: "E17", k: [0, 0, 1], cat: "J", q: "Who decides the cleaning breaks of the speed route at Europe Youth events, and when are they communicated?",
    o: ["The Jury President; communicated on the day of the Technical Meeting", "The organiser; communicated at the start of qualification", "The coaches, by vote; communicated at the Technical Meeting", "Nobody – cleaning is fixed after every 10 races"],
    a: [0], e: "Cleaning breaks are up to the Jury President and are communicated on the day of the Technical Meeting.", r: "EYS §4.3; EYCh §3.4" });

  add("boulder", { id: "E18", k: [0, 0, 0], cat: "J", q: "How is the boulder final organised at a Europe Youth Series competition?",
    o: ["Series finals format, 4 boulders, quota 10, preceded by an 8-minute collective observation for all boulders", "Series finals format, 4 boulders, quota 8, preceded by 2 minutes of observation per boulder", "Rotation format with 5-minute fixed rotations, 4 boulders, quota 10, without observation", "Series finals format, 6 boulders, quota 12, preceded by a 6-minute collective observation"],
    a: [0], e: "The final uses the World Climbing Series finals format with 4 boulders and a quota of 10. It starts with an 8-minute collective observation in which athletes choose their own order and timing.", r: "EYS §4.4(b), (d)" });

  add("boulder", { id: "E19", k: [0, 0, 0], cat: "J", q: "How is the starting order set for the 2 qualification courses in Europe Youth boulder events?",
    o: ["Course A random; course B in the same order, staggered by 50%", "Course A and course B both drawn at random independently", "Course A and course B both by ranking, best seeded last", "Course A random; course B in reverse order of course A"],
    a: [0], e: "Course A is drawn at random. Course B follows the same order, staggered by 50%.", r: "EYS §4.4(c); EYCh §3.6(d)" });

  add("boulder", { id: "E20", k: [0, 0, 1], cat: "J", q: "What minimum gap applies between a competitor’s 2 qualification courses in Europe Youth boulder events?",
    o: ["At least 30 minutes between the end of the first course and the start of the second", "At least 50 minutes between the end of the first course and the start of the second", "At least 15 minutes between the end of the first course and the start of the second", "No minimum gap; the start list sets the timing"],
    a: [0], e: "There must be at least 30 minutes between the end of the first course and the start of the second.", r: "EYS §4.4(c)(v); EYCh §3.6(d)(iii)" });

  add("boulder", { id: "E21", k: [0, 0, 1], cat: "J", q: "Which rules apply to the Europe Youth Championship boulder semi-final?",
    o: ["Climbing time fixed at 4 minutes", "Preceded by an 8-minute collective observation for all boulders", "Climbing time fixed at 5 minutes", "No collective observation"],
    a: [0, 1], e: "At the Youth Championship, the boulder semi-final has 4 minutes fixed. Both semi-final and final are preceded by an 8-minute collective observation for all boulders.", r: "EYCh §3.6(b), (e)" });

  add("boulder", { id: "E22", k: [0, 1, 1], cat: "J", c: true, q: "At the Europe Youth Championship, 34 athletes are registered in a boulder category after the deadline. What format applies?",
    o: ["Only qualification and final, with a final quota of 8", "Qualification, semi-final and final as usual", "Only qualification and final, with a final quota of 10", "Only a final, in which all athletes take part"],
    a: [0], e: "With fewer than 36 registered athletes in a category, there are only 2 rounds and a final quota of 8.", r: "EYCh §3.5" });

  add("boulder", { id: "E23", k: [0, 0, 0], cat: "J", q: "How many qualification starting groups are used in Europe Youth boulder qualifications?",
    o: ["1 starting group, climbing 2 flash courses (A and B)", "2 starting groups, each climbing 1 flash course", "4 starting groups, each climbing 1 on-sight course", "No starting groups, 1 single on-sight course for all"],
    a: [0], e: "The qualification is a flash format with 2 courses (A and B), organised with 1 starting group.", r: "EYS §4.4(a); EYCh §3.6(a)" });
})();
