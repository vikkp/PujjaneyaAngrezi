window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "complex-time",
    title: "Complex: when, because",
    titleHi: "मिश्र वाक्य · when / because",
    emoji: "⏳",
    xp: 34,
    paragraph: {
      en: "A complex sentence has one main clause and one subordinate clause. Wren and Martin call time and reason clauses adverb clauses. I called her when the train stopped. We stayed inside because the rain was heavy.",
      hi: "Complex sentence में एक मुख्य उपवाक्य और एक आश्रित उपवाक्य होता है। when समय बताता है। because कारण बताता है।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Adverb clause", prompt: "when / after / because समय या कारण बाँधते हैं।" },
      { type: "join", a: "I heated the rice.", b: "I reached home.", hi: "घर पहुँचते ही चावल गरम किया।", options: ["I heated the rice when I reached home.", "I heated the rice or I reached home.", "I heated the rice but I reached home."], answer: 0 },
      { type: "join", a: "She locked the door.", b: "The children were asleep.", hi: "बच्चे सोए हुए थे, इसलिए दरवाज鏀 बंद किया।", options: ["She locked the door because the children were asleep.", "She locked the door or the children were asleep.", "She locked the door but the children were asleep."], answer: 0 },
      { type: "join", a: "We waited on the platform.", b: "The announcement came.", hi: "घोषणा आने तक प्रतीक्षा की।", options: ["We waited on the platform until the announcement came.", "We waited on the platform or the announcement came.", "We waited on the platform but the announcement came."], answer: 0 },
      { type: "join", a: "He washed his hands.", b: "He sat down to eat.", hi: "खाने से पहले हाथ धोए।", options: ["He washed his hands before he sat down to eat.", "He washed his hands or he sat down to eat.", "He washed his hands but he sat down to eat."], answer: 0 },
      { type: "join", a: "I took a jacket.", b: "The evening turns cold here.", hi: "यहाँ शाम ठंडी हो जाती है, इसलिए जैकेट ली।", options: ["I took a jacket because the evening turns cold here.", "I took a jacket or the evening turns cold here.", "I took a jacket but the evening turns cold here."], answer: 0 },
      { type: "join", a: "Meera sent the message.", b: "The meeting ended.", hi: "मीटिंग खत्म होने के बाद संदेश भेजा।", options: ["Meera sent the message after the meeting ended.", "Meera sent the message or the meeting ended.", "Meera sent the message but the meeting ended."], answer: 0 },
      { type: "join", a: "We spoke softly.", b: "The baby was sleeping.", hi: "बच्चा सो रहा था, इसलिए धीरे बोले।", options: ["We spoke softly because the baby was sleeping.", "We spoke softly or the baby was sleeping.", "We spoke softly but the baby was sleeping."], answer: 0 },
      { type: "join", a: "Rohan left the office.", b: "The clock struck six.", hi: "छह बजते ही रोहन दफ़्तर से निकला।", options: ["Rohan left the office when the clock struck six.", "Rohan left the office or the clock struck six.", "Rohan left the office but the clock struck six."], answer: 0 },
      { type: "speak", q: "when और because साफ़ कहें।" }
    ]
  }
]);
