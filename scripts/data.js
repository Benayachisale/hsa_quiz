const data = [
      {
    question: "What is the primary cause of the ongoing cholera outbreak in Malawi, which began in March 2022?",
    answers: ["A. Contaminated food", "B. Poor sanitation and lack of safe water", "C. Airborne transmission", "D. Insect bites"],
    answer: "B"
  },
  {
    question: "Which is the most appropriate step when transporting an unconscious patient with suspected spinal injury?",
    answers: ["A. Sit them up for easy breathing", "B. Drag them to the stretcher", "C. Log-roll them onto a spine board", "D. Place them in recovery position"],
    answer: "C"
  },
  {
    question: "Which of the following best describes herd immunity?",
    answers: ["A. Immunity acquired by eating healthy", "B. Direct protection from medicine", "C. Indirect protection due to high vaccination rates", "D. Resistance gained through natural infection"],
    answer: "C"
  },
  {
    question: "What is the primary purpose of conducting a verbal autopsy in rural areas?",
    answers: ["A. To assign blame", "B. To identify criminal cases", "C. To determine probable cause of death", "D. To write the death certificate"],
    answer: "C"
  },
  {
    question: "Which of the following vectors can transmit more than one disease?",
    answers: ["A. Culex mosquito", "B. Aedes aegypti", "C. Sandfly", "D. Testse fly"],
    answer: "B"
  },
  {
    question: "Which is the most efficient latrine design for flood-prone rural areas?",
    answers: ["A. VIP latrine", "B. Pour-flush latrine", "C. Arborloo", "D. Raised latrine"],
    answer: "D"
  },
  {
    question: "Which of the following diseases requires immediate notification under the IDSR system?",
    answers: ["A. Typhoid", "B. Tuberculosis", "C. Measles", "D. Cholera"],
    answer: "D"
  },
  {
    question: "What is the recommended distance between a water source and a pit latrine?",
    answers: ["A. 5 meters", "B. 15 meters", "C. 30 meters", "D. 50 meters"],
    answer: "C"
  },
  {
    question: "Which PPE is most critical when cleaning up a spill of infectious blood in a health facility?",
    answers: ["A. Face mask", "B. Apron", "C. Gloves", "D. Face shield"],
    answer: "C"
  },
  {
    question: "When is a hospital attendant legally liable for negligence?",
    answers: ["A. When a doctor is not present", "B. When tasks go beyond their training", "C. When equipment is faulty", "D. When the patient is rude"],
    answer: "B"
  },
  {
    question: "What distinguishes a community diagnosis from a clinical diagnosis?",
    answers: ["A. Community diagnosis uses CT scans", "B. It involves laboratory testing", "C. It assesses the health status of a population", "D. It focuses on one patient"],
    answer: "C"
  },
  {
    question: "Why should sharp boxes never be overfilled?",
    answers: ["A. To save disposal space", "B. To reduce weight", "C. To prevent needle-stick injuries", "D. To increase infection control"],
    answer: "C"
  },
  {
    question: "What is the most common source of nosocomial infections in hospitals?",
    answers: ["A. Food", "B. Water", "C. Hands of healthcare workers", "D. Toilets"],
    answer: "C"
  },
  {
    question: "The cold chain in vaccine storage ensures what?",
    answers: ["A. Vaccines are labeled", "B. Potency is maintained", "C. Storage rooms are cool", "D. Vaccines are always available"],
    answer: "B"
  },
  {
    question: "Which method best detects malnutrition in children under five?",
    answers: ["A. Eye inspection", "B. MUAC measurement", "C. X-ray", "D. Urine test"],
    answer: "B"
  },
  {
    question: "If a child vomits immediately after taking an oral vaccine, what should be done?",
    answers: ["A. Ignore and continue", "B. Re-dose the vaccine", "C. Refer to a doctor", "D. Stop immunization"],
    answer: "B"
  },
  {
    question: "What is the main role of HSAs during a cholera outbreak?",
    answers: ["A. Treat severe cases", "B. Distribute antibiotics", "C. Conduct active case finding and health education", "D. Build latrines"],
    answer: "C"
  },
  {
    question: "What is the main difference between antisepsis and disinfection?",
    answers: ["A. Antisepsis kills spores", "B. Disinfection is used on skin", "C. Antisepsis is for living tissue", "D. There is no difference"],
    answer: "C"
  },
  {
    question: "Why is overuse of antibiotics discouraged at community level?",
    answers: ["A. Increases blood pressure", "B. Reduces immunity", "C. Leads to antimicrobial resistance", "D. Causes vitamin deficiency"],
    answer: "C"
  },
  {
    question: "What is the incubation period of measles?",
    answers: ["A. 2–3 days", "B. 5–7 days", "C. 10–14 days", "D. 21–30 days"],
    answer: "C"
  }
,
  {
    question: "As of February 2023, which district in Malawi was most affected by the cholera outbreak in terms of case numbers?",
    answers: ["A. Nsanje", "B. Mangochi", "C. Machinga", "D. Lilongwe"],
    answer: "B"
  },
  {
    question: "What is the recommended household treatment for water disinfection to prevent cholera in Malawi?",
    answers: [
      "A. Boil water for 5 minutes",
      "B. Add one tablespoon of 1% chlorine stock solution to 20 liters of water",
      "C. Add 10 drops of iodine to 10 liters of water",
      "D. Filter water through a cloth"
    ],
    answer: "B"
  },
  {
    question: "Which of the following is a major challenge to Malawi’s health system in responding to the COVID-19 pandemic?",
    answers: [
      "A. Overabundance of healthcare workers",
      "B. Inadequate funding and staffing",
      "C. Low population density",
      "D. Excess medical supplies"
    ],
    answer: "B"
  },
  {
    question: "What is the estimated HIV/AIDS prevalence rate among adults aged 15–49 in Malawi as of recent data?",
    answers: ["A. 2.5%", "B. 5.8%", "C. 8.8%", "D. 12.5%"],
    answer: "C"
  },
  {
    question: "Which malaria control intervention has been scaled up by Malawi’s National Malaria Control Program?",
    answers: [
      "A. Distribution of artemisinin-based combination therapies",
      "B. Annual vaccination campaigns",
      "C. Aerial spraying of insecticides",
      "D. Distribution of untreated bed nets"
    ],
    answer: "A"
  },
  {
    question: "What percentage of children under five in Malawi suffer from severe acute malnutrition?",
    answers: ["A. 10.5%", "B. 25.3%", "C. 42.4%", "D. 60.2%"],
    answer: "C"
  },
  {
    question: "Which non-communicable disease (NCD) accounts for a significant proportion of deaths in Malawi?",
    answers: ["A. Influenza", "B. Cholera", "C. Cardiovascular Disease", "D. Malaria"],
    answer: "C"
  },
  {
    question: "What is a key role of Health Surveillance Assistants (HSAs) in Malawi’s response to childhood illnesses?",
    answers: [
      "A. Performing surgical procedures",
      "B. Providing Integrated Management of Childhood Illnesses (IMCI)",
      "C. Developing national health policies",
      "D. Conducting laboratory tests"
    ],
    answer: "B"
  },
  {
    question: "What environmental factor has significantly impacted Malawi’s health system by increasing disease transmission?",
    answers: ["A. Urbanization", "B. Climate-related natural hazards", "C. Deforestation", "D. Industrial pollution"],
    answer: "B"
  }
,
  {
    question: "According to Phalombe DHO data, 20% of the women of child bearing age accessed any form of family planning method in 2020 as compared to 25% in 2021. What was the rate in change in the percentage:",
    answers: ["A. 5%", "B. 20%", "C. 25%", "D. -5%"],
    answer: "C. 25%"
  },
  {
    question: "The population of a certain village in Phalombe in 2010 was 1000. Out of this, 60% of the population were females. In the same year, this village had cholera outbreak of which 20 males and 20 females were affected. What was the overall attack rate?",
    answers: ["A. 2.0%", "B. 3.3%", "C. 4.0%", "D. 5.0%"],
    answer: "C. 4.0%"
  },
  {
    question: "Basing on the scenario presented in question 2 above, which of the following statement(s) is true?",
    answers: [
      "A. Males were more affected by cholera than females",
      "B. Females were more affected by cholera than males",
      "C. Both males and females were equally affected by cholera",
      "D. None of the above",
      "E. All of the above"
    ],
    answer: "A. Males were more affected by cholera than females"
  },
  {
    question: "Pneumonia and Cough belongs to a group of ARI diseases. What does ARI stand for?",
    answers: [
      "A. Abnormal Rectal Infection",
      "B. Acute Respiratory Infection",
      "C. Acute Rectal Infection",
      "D. Abnormal Respiratory Infection"
    ],
    answer: "B. Acute Respiratory Infection"
  },
  {
    question: "AFP is a condition that is characterized by sudden weakness of a limb or limbs. What does AFP stand for?",
    answers: [
      "A. Acute Flaccid Paralysis",
      "B. Acute Folic Parameter",
      "C. Adverse Flaccid Paralysis",
      "D. Adverse Folic Parameter"
    ],
    answer: "A. Acute Flaccid Paralysis"
  },
  {
    question: "The right route for administration of Inactivated Polio Vaccine (IPV) is:",
    answers: ["A. Intramuscular", "B. Oral", "C. Inter dermal", "D. Sub cutaneous"],
    answer: "A. Intramuscular"
  },
  {
    question: "The right route for administration of Measles Vaccine is:",
    answers: ["A. Intramuscular", "B. Oral", "C. Inter dermal", "D. Sub cutaneous"],
    answer: "D. Sub cutaneous"
  },
  {
    question: "The following is the correct dosage for BCG vaccine for under 1 child:",
    answers: ["A. 0.5 ml", "B. 0.05 ml", "C. 0.1 ml", "D. 0.01 ml"],
    answer: "B. 0.05 ml"
  },
  {
    question: "When was Corona Virus Disease declared a National Disaster in Malawi by former President Arthur Peter Mutharika?",
    answers: [
      "A. 31st December 2019",
      "B. 12th March 2020",
      "C. 20th March 2020",
      "D. 2nd April 2020"
    ],
    answer: "C. 20th March 2020"
  },
  {
    question: "What do we call the proportion of cases for a particular condition in the surveyed population of interest and it includes both new and old cases?",
    answers: ["A. Incidence", "B. Prevalence", "C. Case fatality rate", "D. Attack rate"],
    answer: "B. Prevalence"
  },
  {
    question: "Which of these vectors or vermin transmit plague?",
    answers: ["A. Water snail", "B. Tsetse fly", "C. Mosquito", "D. Black fly", "E. Rats"],
    answer: "E. Rats"
  },
  {
    question: "When did Russia declared war on Ukraine?",
    answers: [
      "A. 20 February, 2022",
      "B. 24 February, 2022",
      "C. 26 February, 2022",
      "D. 18 February, 2022"
    ],
    answer: "B. 24 February, 2022"
  },
  {
    question: "District health system comprises of the following levels:",
    answers: [
      "A. Health Post, Health Centre, Hospital",
      "B. Community, Primary, Secondary",
      "C. Dispensary, Health Centre, Hospital",
      "D. HSAs, In-charges, district health management team"
    ],
    answer: "B. Community, Primary, Secondary"
  },
  {
    question: "COVID-19 in Malawi was first reported when the Minister of health was?",
    answers: [
      "A. Hon Jappie Mhango",
      "B. Hon Atupere Muluzi",
      "C. Hon Yusuf Mwawa",
      "D. Hon Khumbizire Kandodo Chiponda"
    ],
    answer: "A. Hon Jappie Mhango"
  },
  {
    question: "The following are characteristics of good water quality, except",
    answers: [
      "A. Free from Chlorine",
      "B. Free from turbidity",
      "C. Free from Pathogens",
      "D. Free from toxic substances",
      "E. Free from color, taste and odor"
    ],
    answer: "A. Free from Chlorine"
  },
  {
    question: "Which of the following food item is fortified with iodine?",
    answers: ["A. Sugar", "B. Salt", "C. Wheat flour", "D. Maize flour", "E. Cooking oil"],
    answer: "B. Salt"
  },
  {
    question: "Who is the current Principal Secretary (PS) for Ministry of Health?",
    answers: [
      "A. Dr. Dan Namarika",
      "B. Hon. Khumbize Kandodo",
      "C. Collen Zamba",
      "D. Dr. Charles Mwansambo",
      "E. Dr. Queen Dube"
    ],
    answer: "D. Dr. Charles Mwansambo" // Assumed based on common knowledge; adjust if needed
  },
  {
    question: "Which of the following is not an Epidemic prone disease?",
    answers: ["A. Cholera", "B. Measles", "C. Malaria", "D. Viral Hemorrhagic fever"],
    answer: "C. Malaria"
  },
  {
    question: "In order to confirm measles outbreak in a community, a sample should be taken from the suspects for analysis and confirmation. What is the recommended type of sample for measles outbreak confirmation?",
    answers: ["A. Blood", "B. Urine", "C. Stool", "D. Saliva"],
    answer: "A. Blood"
  },{
    question: "Worm Infestation is a condition whereby a person has worms in the body. Which of the following worms enter the human body through penetration of the skin by larvae through bare feet?",
    answers: ["A. Round worms", "B. Hook worms", "C. Pin worms", "D. Tape worms"],
    answer: "B. Hook worms"
  },
  {
    question: "Which of the following is not the main type of Non-Communicable Disease (NCD)?",
    answers: [
      "A. Corona Virus Disease",
      "B. Cardiovascular Disease",
      "C. Cancers",
      "D. Chronic Respiratory Diseases",
      "E. Diabetes"
    ],
    answer: "A. Corona Virus Disease"
  },
  {
    question: "Which of the following is not a Barrier Method for Family Planning?",
    answers: [
      "A. Tube Ligation",
      "B. Male and Female condoms",
      "C. Spermicides",
      "D. Foam Tablets",
      "E. Diaphragm"
    ],
    answer: "A. Tube Ligation"
  },
  {
    question: "The following are cold chain equipment used by HSAs, except:",
    answers: [
      "A. HSAs uniform",
      "B. Cool packs",
      "C. Temperature Chart",
      "D. Freeze watch"
    ],
    answer: "A. HSAs uniform"
  },
  {
    question: "Which of the following is an example of micronutrient?",
    answers: ["A. Carbohydrates", "B. Minerals", "C. Proteins", "D. Fats"],
    answer: "B. Minerals"
  },
  // Section A
  {
    question: "Which of the following is not the job of an H.S.A.",
    answers: [
      "a. to serve as a link between District Health Services and the community working directly with community leaders and medical assistants",
      "b. Conducting community assessments, village inspections, growth monitoring and reporting outbreaks",
      "c. Providing immunization services, water quality monitoring including shallow well protection",
      "d. Supervising Village Health Committees and Volunteers",
      "e. None of the above"
    ],
    answer: "e. None of the above"
  },
  {
    question: "A person suspected of having Covid-19 disease must...",
    answers: [
      "a. be under strict isolation",
      "b. be under strict quarantine",
      "c. be treated to cure the Corona virus",
      "d. under free movements"
    ],
    answer: "a. be under strict isolation"
  },
  {
    question: "Any child that has low weight for his/her age must be considered",
    answers: ["a. Stunted", "b. Underweight", "c. Wasted", "d. sick"],
    answer: "b. Underweight"
  },
  {
    question: "______ is not appropriate for children under the age of 2 years.",
    answers: [
      "a. Oral Polio Vaccine (OPV)",
      "b. Bacillus Calmette Guerin (BCG)",
      "c. Rota vaccine",
      "d. Human Papilloma Virus Vaccine (HPV)"
    ],
    answer: "d. Human Papilloma Virus Vaccine (HPV)"
  },
  {
    question: "You can catch Bilharzia when...",
    answers: [
      "a. Bilharzia snails enter your skin",
      "b. You step on eggs of Bilharzia worms",
      "c. Bilharzia larval enters your skin",
      "d. have sexual intercourse"
    ],
    answer: "c. Bilharzia larval enters your skin"
  },
  // Section B (True/False)
  {
    question: "You can catch Bilharzia when you accidentally drink eggs from Bilharzia worms.",
    answers: ["True", "False"],
    answer: "False"
  },
  {
    question: "DCSAs do apply chlorine in water for drinking in order to kill all the organisms in the water",
    answers: ["True", "False"],
    answer: "True"
  },
  {
    question: "Ventilated Pit latrines (VIPs) are the most important type of latrines to stop open defecation",
    answers: ["True", "False"],
    answer: "True"
  },
  {
    question: "Cholera is a bacterial disease.",
    answers: ["True", "False"],
    answer: "True"
  },
  {
    question: "Measles Rubella vaccine replaced Measles vaccine because Measles disease has been eliminated.",
    answers: ["True", "False"],
    answer: "False"
  },
  {
    question: "The head of a district council is called the District Commissioner.",
    answers: ["True", "False"],
    answer: "True"
  },
  {
    question: "The current Minister of Health is Dr. Chikosa Silungwe.",
    answers: ["True", "False"],
    answer: "False" // Assumed based on likely outdated info; adjust if needed
  },
  {
    question: "Cholera is caused by Vibrio cholera.",
    answers: ["True", "False"],
    answer: "True"
  },
  {
    question: "Sanitation is about provision of facilities that will promote hygiene.",
    answers: ["True", "False"],
    answer: "True"
  },
  {
    question: "Construction of a pit latrine is an example of good hygiene practice",
    answers: ["True", "False"],
    answer: "False"
  },
  // Section C
  {
    question: "A DCSA has a catchment area with a population of 1200. If 20 percent of his catchment area comprise under one-year children. The DCSA has a target population of ...... under one children",
    answers: [
      "a. 1200 children",
      "b. 20 children",
      "c. 240 children",
      "d. 600 children"
    ],
    answer: "c. 240 children"
  },
  {
    question: "If the DCSA in question 16 above vaccinates a total of 120 under one children with BCG vaccine, his vaccine coverage is....",
    answers: [
      "a. 120 percent",
      "b. 50 percent",
      "c. 100 percent",
      "d. 80 percent"
    ],
    answer: "b. 50 percent"
  },
  {
    question: "A vial of BCG contains 2 mls of vaccine. If each child receives 0.05 mls as a dose. The vaccine contains...",
    answers: ["a. 20 doses", "b. 2 doses", "c. 5 doses", "d. 40 doses"],
    answer: "d. 40 doses"
  },
  {
    question: "If the DCSA in question 16 has a malnutrition prevalence rate of 25 percent among the under one-year children, it means ...",
    answers: [
      "a. 20 children have malnutrition",
      "b. 48 children have malnutrition",
      "c. 40 children have malnutrition",
      "d. 60 children have malnutrition"
    ],
    answer: "d. 60 children"
  },
  {
    question: "If 5 out of 40 women have Malaria. The incidence of Malaria cases is....",
    answers: ["a. 5 percent", "b. 40 percent", "c. 12.5 percent", "d. 10 percent"],
    answer: "c. 12.5 percent"
  },
  // Section D (Choose all that apply treated as single answer option)
  {
    question: "Infertility is when",
    answers: [
      "a. A couple has previously conceived but can now not get pregnant within 12 months of unprotected intercourse",
      "b. A couple has never conceived within 12 months of having unprotected intercourse",
      "c. When a couple cannot have intercourse within 12 months",
      "d. When pregnancy fails to grow despite having intercourse"
    ],
    answer: "b. A couple has never conceived within 12 months of having unprotected intercourse" // Primary infertility as standard definition
  },
  {
    question: "In infection prevention, the following must be considered dangerous",
    answers: [
      "a. Semen",
      "b. Sterile gloves",
      "c. vaginal fluid",
      "d. Sputum"
    ],
    answer: "a, c, d" // Multiple correct, listed as single answer
  },
  {
    question: "During this period of Covid-19, the following handwashing procedures are important...",
    answers: [
      "a. Wash hands before and after contact with each client",
      "b. Wash hands before and after visiting a toilet",
      "c. Wash hands with clean water and ash",
      "d. Wash hands before putting on gloves"
    ],
    answer: "a, b, d" // Multiple correct, listed as single answer
  },
  {
    question: "In order to assess the nutrition status of a child, the DCSA should ensure measuring",
    answers: [
      "a. Weight of the child",
      "b. Brightness of the eyes",
      "c. Height of the child",
      "d. the mid upper arm circumference"
    ],
    answer: "a, c, d" // Multiple correct, listed as single answer
  },
  {
    question: "Misconduct is when a DCSA performs the following...",
    answers: [
      "a. When a DCSA takes annual holiday",
      "b. When a DCSA takes an unpaid leave",
      "c. when an DCSA takes his sick leave",
      "d. When a DCSA does not take annual holidays"
    ],
    answer: "d. When a DCSA does not take annual holidays" // Assumed as potential neglect of duty
  },
  {
    question: "The following are the main interventions being used in Malawi to prevent and control Covid-19 Pandemic",
    answers: [
      "a. Hand washing with soap, Use of face mask, Social mobilization and Case management",
      "b. Case management, keeping of one-meter social distance, Covid-19 vaccinations, Disease surveillance",
      "c. Social mobilization, Case management, covid-19 vaccinations and Disease surveillance",
      "d. Use of face masks, Hand washing with soap, keeping of one-meter social distance and Covid-19 Vaccinations",
      "e. All of the above"
    ],
    answer: "d. Use of face masks, Hand washing with soap, keeping of one-meter social distance and Covid-19 Vaccinations"
  },
  {
    question: "During the rainy season, most communities are provided with 1% stock solution of Chlorine by Disease Control and Surveillance Assistants to disinfect their water to prevent them from contracting Cholera disease. At household level communities are advised to do the following in 20 litres of water:",
    answers: [
      "a. Pour Five Table spoons of 1% stock solution of chlorine",
      "b. Pour Five Tea spoons of 1% stock solution of chlorine",
      "c. Pour One Table spoon of 1% stock solution of chlorine",
      "d. Pour Twenty-Two Tea spoons of 1% stock solution of chlorine",
      "e. Pour Twenty Table spoons of 1% stock solution of chlorine"
    ],
    answer: "c. Pour One Table spoon of 1% stock solution of chlorine"
  },
  // Question 3 (Table format adapted)
  {
    question: "Is Scabies classified as a Water-related vector-borne disease?",
    answers: ["Correct", "Incorrect"],
    answer: "Incorrect"
  },
  {
    question: "Is Cholera classified as a Waterborne disease?",
    answers: ["Correct", "Incorrect"],
    answer: "Correct"
  },
  {
    question: "Is Schistosomiasis classified as a Water washed disease?",
    answers: ["Correct", "Incorrect"],
    answer: "Incorrect" // Should be water-based
  },
  {
    question: "Is Malaria classified as a Water based disease?",
    answers: ["Correct", "Incorrect"],
    answer: "Incorrect" // Should be water-related vector-borne
  },
  {
    question: "The following statements are true with all Covid-19 Vaccination:",
    answers: [
      "a. To prevent communities from Covid-19 infections",
      "b. To prevent severe forms of covid-19 disease",
      "c. Should not be administered to children under the age of 18",
      "d. Should not be administered to pregnant women",
      "e. All of above",
      "f. a, b and c",
      "g. b, c and d",
      "h. b",
      "i. a, c and d"
    ],
    answer: "h. b"
  },
  {
    question: "Covid-19 is a vaccine preventable disease",
    answers: ["a. True", "b. False"],
    answer: "a. True"
  },
  {
    question: "Generally, Malnutrition is a",
    answers: [
      "a. National issue",
      "b. A district issue",
      "c. A community issue",
      "d. A household issue"
    ],
    answer: "a. National issue"
  },
  {
    question: "When admitting a child into CMAM programme using Z-scores, it is better to:",
    answers: [
      "a. Greater than equal to sign",
      "b. Greater than sign",
      "c. Less than equal to sign",
      "d. Less than sign"
    ],
    answer: "c. Less than equal to sign"
  },
  {
    question: "In community health services which community structures are responsible for health service delivery:",
    answers: [
      "a. Community Village Volunteers, Village health Committee, Community Health Action Group, Health Centre Management Committee",
      "b. Village Health Committee, Community Health Action Group, Health Centre Management Committee, Community Health Action Group",
      "c. Non-Governmental Organization, Community-based Organization, Village Health Committee, Community Health Action Group",
      "d. Hospital Management Committee, District Health Office, Health and Environment Committee, Community-based Organization",
      "e. Village Health Committee, District Health Office, Community Health Action Group, Health Management Committee"
    ],
    answer: "a. Community Village Volunteers, Village health Committee, Community Health Action Group, Health Centre Management Committee"
  },
  {
    question: "Imagine you are the Disease Control and Surveillance Assistant responsible for John Mapata village in Traditional Authority Mponda, how can you ensure that you work well with the community health structures in your catchment area:",
    answers: [
      "a. Encourage the local leaders to select members from their families only",
      "b. Orient the community structures on their roles and responsibilities, work with them in health service delivery in the catchment area, link the structures with other community health structures, conduct supportive supervision",
      "c. Leave them to do everything on their own, work with male members of the committee only, always issue instructions to them",
      "d. Tell them what to do, give them money to do their work",
      "e. All of the above"
    ],
    answer: "b. Orient the community structures on their roles and responsibilities, work with them in health service delivery in the catchment area, link the structures with other community health structures, conduct supportive supervision"
  },
  {
    question: "Which of the following are pharmaceutical covid-19 prevention measure?",
    answers: [
      "a. Face mask and Vaccine",
      "b. Social distance",
      "c. Vaccine",
      "d. Handwashing",
      "e. All above"
    ],
    answer: "c. Vaccine"
  },
  {
    question: "All of the following are roles of Disease Control and Surveillance Assistants in the fight against covid-19 except?",
    answers: [
      "a. Contact Tracing",
      "b. Case follow up",
      "c. Community engagement",
      "d. Case management"
    ],
    answer: "d. Case management"
  },
  {
    question: "What is the standard unit for measuring available chlorine in water?",
    answers: ["a. g/l", "b. g/ml", "c. 1/g", "d. mg/l", "e. mg/ml"],
    answer: "d. mg/l"
  },
  {
    question: "How does Indoor Residual Spraying (IRS) work as a Malaria intervention?",
    answers: [
      "a. Kills plasmodium for a longer period of six months hence reducing malaria causing organism density",
      "b. Prevents mosquitoes from entering the houses for a period of six months",
      "c. The excito-repellent effect causes discomfort to mosquitoes that do enter houses and that come into contact with the sprayed surface causing the mosquitoes to either die or to exit before biting",
      "d. All of the above"
    ],
    answer: "c. The excito-repellent effect causes discomfort to mosquitoes that do enter houses and that come into contact with the sprayed surface causing the mosquitoes to either die or to exit before biting"
  },
  {
    question: "How do we measure spray coverage in IRS?",
    answers: [
      "a. Number structures sprayed divided by insecticide used",
      "b. Number of rooms sprayed divided by total number of rooms found",
      "c. Number of structures sprayed divided by number of structures targeted",
      "d. Number of structures sprayed divided by number of structures found"
    ],
    answer: "c. Number of structures sprayed divided by number of structures targeted"
  },
  {
    question: "Why is spray coverage important in IRS",
    answers: [
      "a. The combined repellency effect of sprayed houses in an area disrupts the collective resting and feeding patterns of the mosquito population in the sprayed areas",
      "b. Coverage just before dusk kills outdoor resting adult mosquitoes and reduces the mosquito density in the control area leading to less human vector contact",
      "c. Coverage on stagnant water kills mosquito larvae before they reach the adult stage",
      "d. None of the above"
    ],
    answer: "a. The combined repellency effect of sprayed houses in an area disrupts the collective resting and feeding patterns of the mosquito population in the sprayed areas"
  },
  {
    question: "The following is a schedule for measles Rubella routine immunization:",
    answers: [
      "a. 1st dose is given at 6 months and 2nd dose from 15 to 23 months",
      "b. 1st dose at 9 months and 2nd dose from 20-23 months",
      "c. 1st dose at 6 weeks and 2nd dose at 9 months",
      "d. 1st dose at 9 months and 2nd dose from 15 to 23 months"
    ],
    answer: "d. 1st dose at 9 months and 2nd dose from 15 to 23 months"
  },
  {
    question: "The following are recommended ranges of temperatures for storage of vaccines for immunization in Malawi",
    answers: [
      "a. -8 degrees Celsius to -2 degrees Celsius",
      "b. 0 degrees Celsius to 2 degrees Celsius",
      "c. 2 degrees Celsius to 8 degrees Celsius",
      "d. 2 degrees Celsius to 6 degrees Celsius"
    ],
    answer: "c. 2 degrees Celsius to 8 degrees Celsius"
  },
  {
    question: "The percentage of pit latrine/households in a village is never more than 100% ?",
    answers: ["a. True", "b. False"],
    answer: "a. True"
  },
  {
    question: "The number of households is always more than number of dwelling structures",
    answers: ["a. True", "b. False"],
    answer: "b. False"
  },
  {
    question: "Cold chain means:",
    answers: [
      "a. Vaccines should be cold always until they are administered",
      "b. Vaccines are continuously stored at the right temperature from the manufacture until they are administered",
      "c. Vaccines are continuously frozen from the time they are manufactured until they are administered",
      "d. Vaccines are potent regardless of refrigeration"
    ],
    answer: "b. Vaccines are continuously stored at the right temperature from the manufacture until they are administered"
  },
  {
    question: "Immunization is a process of reinforcing natural defense by providing active artificial immunity to the mother and the child through vaccines. Choose four vaccine preventable diseases in under-one children 1. Bacterial pneumonia 2. Scabies 3. Diphtheria 4. Malaria 5. Pertusis 6. Eye infection 7. Hepatitis B 8. Malnutrition",
    answers: [
      "A (1, 4, 6 & 8)",
      "B (2, 5, 7 & 8)",
      "C (3, 5, 6 & 7)",
      "D (1, 3, 5 & 7)"
    ],
    answer: "D (1, 3, 5 & 7)"
  },
  {
    question: "The following are marks for 5 candidates sitting for a Statistical Clerks test at Mangochi District Council. 18,6,12,10,14. Multiply the range of the marks by its mean.",
    answers: ["a. 56", "b. 168", "c. 252", "d. 120"],
    answer: "None" // Correct answer is 144, not listed; adjust options if needed
  }
];

// Export the data if using modules (optional)
//export default data;

