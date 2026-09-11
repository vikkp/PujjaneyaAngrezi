window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "compound-mix",
    title: "Compound: mixed practice",
    titleHi: "संयुक्त वाक्य · मिश्रित अभ्यास",
    emoji: "🧩",
    xp: 36,
    paragraph: {
      en: "Now mix the four families. Not only did we finish the work, but we also cooked dinner. Choose the coordinator that fits the thought.",
      hi: "अब चारों परिवार मिलाकर। जो विचार है, वही जोड़ चुनें।"
    },
    steps: [
      { type: "read", title: "मिश्रित अभ्यास", prompt: "and adds. but contrasts. or chooses. so shows result." },
      { type: "join", a: "The room was dark.", b: "We opened the curtains.", hi: "कमरा अँधेरा था, इसलिए पर्दे खोले।", options: ["The room was dark, or we opened the curtains.", "The room was dark, so we opened the curtains.", "The room was dark, but we opened the curtains."], answer: 1 },
      { type: "join", a: "He is strict.", b: "He is fair.", hi: "वह सख़्त है, लेकिन न्यायप्रिय है।", options: ["He is strict, but he is fair.", "He is strict, or he is fair.", "He is strict, so he is fair."], answer: 0 },
      { type: "join", a: "Bring your ID.", b: "They will not let you in.", hi: "पहचान पत्र लाओ, नहीं तो अंदर नहीं जाने देंगे।", options: ["Bring your ID, and they will not let you in.", "Bring your ID, but they will not let you in.", "Bring your ID, otherwise they will not let you in."], answer: 2 },
      { type: "join", a: "I washed the clothes.", b: "I hung them to dry.", hi: "कपड़े धोए और सुखाने टाँग दिए।", options: ["I washed the clothes, and I hung them to dry.", "I washed the clothes, but I hung them to dry.", "I washed the clothes, or I hung them to dry."], answer: 0 },
      { type: "join", a: "She not only teaches.", b: "She also writes stories.", hi: "वह सिर्फ़ पढ़ाती नहीं, कहानियाँ भी लिखती है।", options: ["She not only teaches, but she also writes stories.", "She not only teaches, or she also writes stories.", "She not only teaches, so she also writes stories."], answer: 0 },
      { type: "join", a: "The bus was late.", b: "We still reached on time.", hi: "बस लेट थी, फिर भी समय पर पहुँचे।", options: ["The bus was late, so we still reached on time.", "The bus was late, yet we still reached on time.", "The bus was late, or we still reached on time."], answer: 1 },
      { type: "join", a: "You can keep the book.", b: "You can return it tomorrow.", hi: "किताब रख सकते हो, या कल लौटा सकते हो।", options: ["You can keep the book, or you can return it tomorrow.", "You can keep the book, so you can return it tomorrow.", "You can keep the book, for you can return it tomorrow."], answer: 0 },
      { type: "join", a: "I believed her.", b: "Her voice was steady.", hi: "मैंने उसकी बात मानी, क्योंकि आवाज鏀 स्थिर थी।", options: ["I believed her, or her voice was steady.", "I believed her, but her voice was steady.", "I believed her, for her voice was steady."], answer: 2 },
      { type: "speak", q: "जोड़ के शब्द साफ़ कहें।" }
    ]
  }
]);
