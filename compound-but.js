window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "compound-but",
    title: "Compound: but, yet",
    titleHi: "संयुक्त वाक्य · but / yet",
    emoji: "⚖️",
    xp: 30,
    paragraph: {
      en: "Adversative coordinators show contrast. Wren and Martin list but, still, yet, nevertheless, whereas. The rain was heavy, but the train was on time.",
      hi: "Adversative जोड़ विपरीत बात दिखाते हैं। बारिश तेज鏀 थी, लेकिन ट्रेन समय पर थी।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Adversative", prompt: "but / yet = विरोध।" },
      { type: "join", a: "The shop was small.", b: "It had everything we needed.", hi: "दुकान छोटी थी, लेकिन ज鏀रूरत की हर चीज鏀 थी।", options: ["The shop was small, and it had nothing we needed.", "The shop was small, but it had everything we needed.", "The shop was small, or it had everything we needed."], answer: 1 },
      { type: "join", a: "She was tired.", b: "She finished the work.", hi: "वह थकी थी, फिर भी काम पूरा किया।", options: ["She was tired, yet she finished the work.", "She was tired, or she finished the work.", "She was tired, so she left the work."], answer: 0 },
      { type: "join", a: "I like Chicago winters.", b: "I miss Lucknow sun.", hi: "शिकागो की सर्दी अच्छी लगती है, लेकिन लखनऊ का सूरज याद आता है।", options: ["I like Chicago winters, or I miss Lucknow sun.", "I like Chicago winters, so I miss Lucknow sun.", "I like Chicago winters, but I miss Lucknow sun."], answer: 2 },
      { type: "join", a: "The food was simple.", b: "It tasted wonderful.", hi: "खाना सादा था, फिर भी स्वाद बढ़िया था।", options: ["The food was simple, yet it tasted wonderful.", "The food was simple, or it tasted wonderful.", "The food was simple, and it tasted terrible."], answer: 0 },
      { type: "join", a: "He speaks softly.", b: "Everyone listens.", hi: "वह धीरे बोलता है, लेकिन सब सुनते हैं।", options: ["He speaks softly, or everyone listens.", "He speaks softly, but everyone listens.", "He speaks softly, otherwise everyone listens."], answer: 1 },
      { type: "join", a: "The road was long.", b: "We did not complain.", hi: "रास्ता लंबा था, फिर भी हमने शिकायत नहीं की।", options: ["The road was long, yet we did not complain.", "The road was long, so we complained.", "The road was long, or we did not complain."], answer: 0 },
      { type: "join", a: "I wanted to stay.", b: "I had to leave.", hi: "मैं रुकना चाहता/चाहती थी, लेकिन जाना पड़ा।", options: ["I wanted to stay, and I had to leave.", "I wanted to stay, or I had to leave.", "I wanted to stay, but I had to leave."], answer: 2 },
      { type: "join", a: "The apartment is old.", b: "It is full of light.", hi: "फ्लैट पुराना है, लेकिन रोशनी से भरा है।", options: ["The apartment is old, but it is full of light.", "The apartment is old, or it is full of light.", "The apartment is old, so it is full of light."], answer: 0 },
      { type: "speak", q: "but और yet पर ज鏀र दें।" }
    ]
  }
]);
