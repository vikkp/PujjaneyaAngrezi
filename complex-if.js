window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "complex-if",
    title: "Complex: if, although",
    titleHi: "मिश्र वाक्य · if / although",
    emoji: "🚪",
    xp: 34,
    paragraph: {
      en: "Condition and concession are also adverb clauses. If the store is closed, we will come back tomorrow. Although the shop was small, it had everything we needed.",
      hi: "if शर्त है। unless = if not। although / though विरोध के बावजूद मुख्य बात सत्य रहती है।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Condition & concession", prompt: "if / unless = शर्त। although / though = फिर भी।" },
      { type: "join", a: "Call me.", b: "The train is late.", hi: "अगर ट्रेन लेट हो तो फ़ोन करना।", options: ["Call me if the train is late.", "Call me or the train is late.", "Call me but the train is late."], answer: 0 },
      { type: "join", a: "We will cook at home.", b: "The restaurant is crowded.", hi: "अगर रेस्तराँ भीड़भाड़ वाला हो तो घर पर पकाएँगे।", options: ["We will cook at home if the restaurant is crowded.", "We will cook at home or the restaurant is crowded.", "We will cook at home but the restaurant is crowded."], answer: 0 },
      { type: "join", a: "You will miss the bus.", b: "You do not hurry.", hi: "जल्दी नहीं की तो बस छूट जाएगी।", options: ["You will miss the bus unless you hurry.", "You will miss the bus or you do not hurry.", "You will miss the bus but you do not hurry."], answer: 0 },
      { type: "join", a: "She finished the report.", b: "She was tired.", hi: "थकी होने के बावजूद रिपोर्ट पूरी की।", options: ["She finished the report although she was tired.", "She finished the report or she was tired.", "She finished the report so she was tired."], answer: 0 },
      { type: "join", a: "We reached on time.", b: "The bus was late.", hi: "बस लेट थी, फिर भी समय पर पहुँचे।", options: ["We reached on time although the bus was late.", "We reached on time or the bus was late.", "We reached on time so the bus was late."], answer: 0 },
      { type: "join", a: "Take your ID.", b: "They ask for it.", hi: "अगर माँगें तो पहचान पत्र निकालना।", options: ["Take your ID if they ask for it.", "Take your ID or they ask for it.", "Take your ID but they ask for it."], answer: 0 },
      { type: "join", a: "I will wait.", b: "You send a message first.", hi: "पहले संदेश आए बिना प्रतीक्षा।", options: ["I will wait unless you send a message first.", "I will wait or you send a message first.", "I will wait but you send a message first."], answer: 0 },
      { type: "join", a: "He kept walking.", b: "His feet hurt.", hi: "पैर दर्द कर रहे थे, फिर भी चलता रहा।", options: ["He kept walking though his feet hurt.", "He kept walking or his feet hurt.", "He kept walking so his feet hurt."], answer: 0 },
      { type: "speak", q: "if पर शर्त। although पर रियायत।" }
    ]
  }
]);
