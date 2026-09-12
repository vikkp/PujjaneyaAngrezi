window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "complex-who",
    title: "Complex: who, which",
    titleHi: "मिश्र वाक्य · who / which",
    emoji: "🪪",
    xp: 36,
    paragraph: {
      en: "An adjective clause describes a noun. Wren and Martin also call it a relative clause. The woman who lives next door helped us. This is the shop which sells fresh coriander.",
      hi: "who व्यक्ति के लिए। which चीज鏀 या बात के लिए।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Adjective clause", prompt: "संज्ञा को पहचानने वाला उपवाक्य relative clause है।" },
      { type: "join", a: "I thanked the nurse.", b: "The nurse checked my throat.", hi: "जिस नर्स ने गला देखा, उसे धन्यवाद दिया।", options: ["I thanked the nurse who checked my throat.", "I thanked the nurse or she checked my throat.", "I thanked the nurse but she checked my throat."], answer: 0 },
      { type: "join", a: "This is the park.", b: "The children play there every evening.", hi: "यह वही पार्क है जहाँ बच्चे हर शाम खेलते हैं।", options: ["This is the park where the children play every evening.", "This is the park or the children play every evening.", "This is the park but the children play every evening."], answer: 0 },
      { type: "join", a: "I met a neighbor.", b: "The neighbor had just moved in.", hi: "मैं उस पड़ोसी से मिला जो अभी आया था।", options: ["I met a neighbor who had just moved in.", "I met a neighbor or he had just moved in.", "I met a neighbor but he had just moved in."], answer: 0 },
      { type: "join", a: "Bring the book.", b: "I left the book on the table.", hi: "जो किताब मेज鏀 पर छोड़ी, वह लाओ।", options: ["Bring the book that I left on the table.", "Bring the book or I left it on the table.", "Bring the book but I left it on the table."], answer: 0 },
      { type: "join", a: "She works with a doctor.", b: "The doctor is very patient.", hi: "वह उस डॉक्टर के साथ काम करती है जो बहुत धैर्यवान है।", options: ["She works with a doctor who is very patient.", "She works with a doctor or he is very patient.", "She works with a doctor but he is very patient."], answer: 0 },
      { type: "join", a: "This is the train.", b: "The train goes to Chicago.", hi: "यह वही ट्रेन है जो शिकागो जाती है।", options: ["This is the train which goes to Chicago.", "This is the train or it goes to Chicago.", "This is the train but it goes to Chicago."], answer: 0 },
      { type: "join", a: "I remember the day.", b: "We first cooked dal together that day.", hi: "मुझे वह दिन याद है जब हमने पहली बार साथ दाल बनाई।", options: ["I remember the day when we first cooked dal together.", "I remember the day or we first cooked dal together.", "I remember the day but we first cooked dal together."], answer: 0 },
      { type: "join", a: "The man waved.", b: "His car was parked next to ours.", hi: "जिस आदमी की गाड़ी हमारी बगल में थी, उसने हाथ हिलाया।", options: ["The man whose car was parked next to ours waved.", "The man or his car was parked next to ours waved.", "The man but his car was parked next to ours waved."], answer: 0 },
      { type: "speak", q: "who / which के बाद वाली जानकारी संज्ञा से चिपके।" }
    ]
  }
]);
