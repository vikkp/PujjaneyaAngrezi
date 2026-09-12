window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "complex-that",
    title: "Complex: that, whether",
    titleHi: "मिश्र वाक्य · that / whether",
    emoji: "🧠",
    xp: 36,
    paragraph: {
      en: "A noun clause does the work of a noun. Wren and Martin place it as subject, object, or complement. I know that the report is ready. Tell me whether Friday afternoon works.",
      hi: "that वाली बात अक्सर कर्म बनती है। whether दो संभावनाओं में चुनाव पूछता है।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Noun clause", prompt: "पूरी बात एक संज्ञा की जगह बैठती है।" },
      { type: "join", a: "I know something.", b: "The store closes at eight.", hi: "पता है कि दुकान आठ बजे बंद होती है।", options: ["I know that the store closes at eight.", "I know or the store closes at eight.", "I know but the store closes at eight."], answer: 0 },
      { type: "join", a: "She said something.", b: "She would call me back.", hi: "उसने कहा कि वह वापस फ़ोन करेगी।", options: ["She said that she would call me back.", "She said or she would call me back.", "She said but she would call me back."], answer: 0 },
      { type: "join", a: "Tell me something.", b: "Friday afternoon works or it does not.", hi: "बताओ कि शुक्रवार दोपहर चल सकती है या नहीं।", options: ["Tell me whether Friday afternoon works.", "Tell me or Friday afternoon works.", "Tell me but Friday afternoon works."], answer: 0 },
      { type: "join", a: "We hoped something.", b: "The rain would stop.", hi: "आशा थी कि बारिश रुक जाएगी।", options: ["We hoped that the rain would stop.", "We hoped or the rain would stop.", "We hoped but the rain would stop."], answer: 0 },
      { type: "join", a: "I asked something.", b: "The nearest park was close.", hi: "पूछा कि पार्क पास है या नहीं।", options: ["I asked whether the nearest park was close.", "I asked or the nearest park was close.", "I asked but the nearest park was close."], answer: 0 },
      { type: "join", a: "He believes something.", b: "The plan can work.", hi: "मानना है कि योजना चल सकती है।", options: ["He believes that the plan can work.", "He believes or the plan can work.", "He believes but the plan can work."], answer: 0 },
      { type: "join", a: "Please confirm something.", b: "You want any changes.", hi: "पुष्टि कीजिए कि बदलाव चाहिए या नहीं।", options: ["Please confirm whether you want any changes.", "Please confirm or you want any changes.", "Please confirm but you want any changes."], answer: 0 },
      { type: "join", a: "I am glad about something.", b: "You reached home safely.", hi: "खुशी है कि आप सकुशल घर पहुँचे।", options: ["I am glad that you reached home safely.", "I am glad or you reached home safely.", "I am glad but you reached home safely."], answer: 0 },
      { type: "speak", q: "that के बाद पूरी बात एक पैकेट की तरह बोलें।" }
    ]
  }
]);
