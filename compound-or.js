window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "compound-or",
    title: "Compound: or, nor",
    titleHi: "संयुक्त वाक्य · or / nor",
    emoji: "🔀",
    xp: 32,
    paragraph: {
      en: "Alternative coordinators offer a choice. Wren and Martin list or, either...or, neither...nor, otherwise, else. We can cook at home, or we can get takeout.",
      hi: "Alternative जोड़ विकल्प देते हैं। घर पर पकाएँ, या बाहर से मँगवाएँ।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Alternative", prompt: "or = चुनाव। neither...nor = दोनों नहीं।" },
      { type: "join", a: "You may wait here.", b: "You may come back at five.", hi: "यहाँ प्रतीक्षा करें, या पाँच बजे आएँ।", options: ["You may wait here, and you may come back at five.", "You may wait here, or you may come back at five.", "You may wait here, but you may come back at five."], answer: 1 },
      { type: "join", a: "Call me tonight.", b: "Send a short message.", hi: "रात को फ़ोन करें, या छोटा संदेश भेजें।", options: ["Call me tonight, or send a short message.", "Call me tonight, but send a short message.", "Call me tonight, so send a short message."], answer: 0 },
      { type: "join", a: "We can take the train.", b: "We can drive.", hi: "ट्रेन या गाड़ी।", options: ["We can take the train, yet we can drive.", "We can take the train, or we can drive.", "We can take the train, for we can drive."], answer: 1 },
      { type: "join", a: "Hurry up.", b: "You will miss the bus.", hi: "जल्दी करो, नहीं तो बस छूट जाएगी।", options: ["Hurry up, and you will miss the bus.", "Hurry up, otherwise you will miss the bus.", "Hurry up, but you will miss the bus."], answer: 1 },
      { type: "join", a: "She does not eat onion.", b: "She does not eat garlic.", hi: "न प्याज鏀, न लहसुन।", options: ["She neither eats onion nor eats garlic.", "She either eats onion or eats garlic.", "She eats onion, but she eats garlic."], answer: 0 },
      { type: "join", a: "Take a jacket.", b: "The evening will turn cold.", hi: "जैकेट ले लो।", options: ["Take a jacket, or the evening will turn cold.", "Take a jacket, and the evening will turn cold.", "Take a jacket, yet the evening will turn cold."], answer: 0 },
      { type: "join", a: "We can meet on Saturday.", b: "We can meet on Sunday.", hi: "शनिवार या रविवार।", options: ["We can meet on Saturday, but we can meet on Sunday.", "We can meet on Saturday, so we can meet on Sunday.", "We can meet on Saturday, or we can meet on Sunday."], answer: 2 },
      { type: "join", a: "He did not write.", b: "He did not call.", hi: "न लिखा, न फ़ोन।", options: ["He neither wrote nor called.", "He either wrote or called.", "He wrote, and he called."], answer: 0 },
      { type: "speak", q: "विकल्प देते समय आवाज鏀 उठे।" }
    ]
  }
]);
