window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "compound-and",
    title: "Compound: and",
    titleHi: "संयुक्त वाक्य · and",
    emoji: "🔗",
    xp: 30,
    paragraph: {
      en: "A compound sentence joins two complete thoughts with a coordinator. Wren and Martin call the and-group cumulative. I washed the rice, and I put the dal on the stove.",
      hi: "Compound sentence दो पूरे विचारों को जोड़ता है। Wren and Martin में and वाला समूह cumulative है।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Cumulative", prompt: "and, both…and, as well as, not only…but also — ये जोड़ते हैं।" },
      { type: "join", a: "She made tea.", b: "She laid the table.", hi: "उसने चाय बनाई और मेज鏀 सजाई।", options: ["She made tea, and she laid the table.", "She made tea, but she laid the table.", "She made tea, or she laid the table."], answer: 0 },
      { type: "join", a: "Rohan locked the door.", b: "He took the keys.", hi: "रोहन ने दरवाज़ा बंद किया और चाबियाँ लीं।", options: ["Rohan locked the door, or he took the keys.", "Rohan locked the door, and he took the keys.", "Rohan locked the door, but he took the keys."], answer: 1 },
      { type: "join", a: "The children finished homework.", b: "They went out to play.", hi: "बच्चों ने होमवर्क पूरा किया और खेलने गए।", options: ["The children finished homework, so they stayed inside.", "The children finished homework, but they went out to play.", "The children finished homework, and they went out to play."], answer: 2 },
      { type: "join", a: "I called my mother.", b: "I told her the news.", hi: "मैंने माँ को फ़ोन किया और खबर बताई।", options: ["I called my mother, and I told her the news.", "I called my mother, yet I told her the news.", "I called my mother, or I told her the news."], answer: 0 },
      { type: "join", a: "We bought tomatoes.", b: "We bought coriander.", hi: "हमने टमाटर खरीदे और धनिया भी।", options: ["We bought tomatoes, but we bought coriander.", "We bought tomatoes, and we bought coriander.", "We bought tomatoes, otherwise we bought coriander."], answer: 1 },
      { type: "join", a: "Meera opened the window.", b: "Fresh air came in.", hi: "मीरा ने खिड़की खोली और ताज鏀 हवा आई।", options: ["Meera opened the window, and fresh air came in.", "Meera opened the window, but fresh air came in.", "Meera opened the window, or fresh air came in."], answer: 0 },
      { type: "join", a: "He packed his bag.", b: "He left for the station.", hi: "उसने बैग बाँधा और स्टेशन चला गया।", options: ["He packed his bag, or he left for the station.", "He packed his bag, and he left for the station.", "He packed his bag, yet he left for the station."], answer: 1 },
      { type: "join", a: "I warmed the milk.", b: "I added a little turmeric.", hi: "मैंने दूध गरम किया और हल्दी डाली।", options: ["I warmed the milk, but I added a little turmeric.", "I warmed the milk, or I added a little turmeric.", "I warmed the milk, and I added a little turmeric."], answer: 2 },
      { type: "speak", q: "नमूना पैराग्राफ बोलें। and पर थोड़ा रुकें।" }
    ]
  }
]);
