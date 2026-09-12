window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "complex-mix",
    title: "Complex: mixed practice",
    titleHi: "मिश्र वाक्य · मिश्रित अभ्यास",
    emoji: "🕸️",
    xp: 38,
    paragraph: {
      en: "Now mix the families. If you see a person, try who. If you see a reason, try because. If you see a fact in the mind, try that. Although this looks hard, the thought still leads the word.",
      hi: "व्यक्ति = who। कारण = because। शर्त = if। मन की बात = that।"
    },
    steps: [
      { type: "read", title: "मिश्रित अभ्यास", prompt: "पहले विचार, फिर जोड़।" },
      { type: "join", a: "I stayed home.", b: "My fever had returned.", hi: "बुखार लौट आया था, इसलिए घर रही।", options: ["I stayed home because my fever had returned.", "I stayed home who my fever had returned.", "I stayed home whether my fever had returned."], answer: 0 },
      { type: "join", a: "This is the neighbor.", b: "The neighbor showed us the park.", hi: "यह वही पड़ोसी है जिसने पार्क दिखाया।", options: ["This is the neighbor who showed us the park.", "This is the neighbor because showed us the park.", "This is the neighbor if showed us the park."], answer: 0 },
      { type: "join", a: "We will wait.", b: "You finish the call.", hi: "कॉल खत्म होने तक प्रतीक्षा।", options: ["We will wait until you finish the call.", "We will wait who you finish the call.", "We will wait whether you finish the call."], answer: 0 },
      { type: "join", a: "I know something.", b: "The appointment can move to Friday.", hi: "पता है कि अपॉइंटमेंट शुक्रवार को खिसक सकती है।", options: ["I know that the appointment can move to Friday.", "I know who the appointment can move to Friday.", "I know although the appointment can move to Friday."], answer: 0 },
      { type: "join", a: "Bring a jacket.", b: "The wind gets stronger.", hi: "अगर हवा तेज鏀 हो जाए तो जैकेट ले आना।", options: ["Bring a jacket if the wind gets stronger.", "Bring a jacket who the wind gets stronger.", "Bring a jacket that the wind gets stronger."], answer: 0 },
      { type: "join", a: "She kept her voice steady.", b: "She was nervous.", hi: "घबराहट के बावजूद आवाज鏀 स्थिर रखी।", options: ["She kept her voice steady although she was nervous.", "She kept her voice steady who she was nervous.", "She kept her voice steady whether she was nervous."], answer: 0 },
      { type: "join", a: "Tell me something.", b: "The clinic is open now or it is not.", hi: "बताओ कि क्लिनिक अभी खुला है या नहीं।", options: ["Tell me whether the clinic is open now.", "Tell me who the clinic is open now.", "Tell me although the clinic is open now."], answer: 0 },
      { type: "join", a: "This is the report.", b: "I finished the report last night.", hi: "यह वही रिपोर्ट है जो कल रात पूरी की।", options: ["This is the report that I finished last night.", "This is the report if I finished last night.", "This is the report although I finished last night."], answer: 0 },
      { type: "speak", q: "हर जोड़ का काम अलग है।" }
    ]
  }
]);
