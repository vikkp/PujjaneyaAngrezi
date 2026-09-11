window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "compound-so",
    title: "Compound: so, for",
    titleHi: "संयुक्त वाक्य · so / for",
    emoji: "➡️",
    xp: 32,
    paragraph: {
      en: "Illative coordinators show a result or a reason. Wren and Martin list for, so, therefore. I was hungry, so I heated last night's rice.",
      hi: "Illative जोड़ कारण या परिणाम दिखाते हैं।"
    },
    steps: [
      { type: "read", title: "Wren & Martin · Illative", prompt: "so / therefore = result. for = reason." },
      { type: "join", a: "It started raining.", b: "We stood under the shop roof.", hi: "बारिश शुरू हुई, इसलिए छत के नीचे खड़े हो गए।", options: ["It started raining, so we stood under the shop roof.", "It started raining, or we stood under the shop roof.", "It started raining, but we stood under the shop roof."], answer: 0 },
      { type: "join", a: "The baby was asleep.", b: "We spoke in a low voice.", hi: "बच्चा सो रहा था, इसलिए धीमी आवाज鏀 में बात की।", options: ["The baby was asleep, or we spoke in a low voice.", "The baby was asleep, so we spoke in a low voice.", "The baby was asleep, yet we shouted."], answer: 1 },
      { type: "join", a: "She had an early train.", b: "She packed at night.", hi: "सुबह की ट्रेन थी, इसलिए रात में सामान बाँधा।", options: ["She had an early train, so she packed at night.", "She had an early train, or she packed at night.", "She had an early train, but she packed at night."], answer: 0 },
      { type: "join", a: "I trusted him.", b: "He had never broken a promise.", hi: "भरोसा किया, क्योंकि उसने वादा नहीं तोड़ा था।", options: ["I trusted him, or he had never broken a promise.", "I trusted him, for he had never broken a promise.", "I trusted him, but he had never broken a promise."], answer: 1 },
      { type: "join", a: "The store was closing.", b: "We paid quickly.", hi: "दुकान बंद हो रही थी, इसलिए जल्दी पैसे दिए।", options: ["The store was closing, so we paid quickly.", "The store was closing, yet we paid slowly.", "The store was closing, or we paid quickly."], answer: 0 },
      { type: "join", a: "He looked pale.", b: "We took him to the clinic.", hi: "वह पीला लग रहा था, इसलिए क्लिनिक ले गए।", options: ["He looked pale, or we took him to the clinic.", "He looked pale, but we took him to the clinic.", "He looked pale, so we took him to the clinic."], answer: 2 },
      { type: "join", a: "The road was blocked.", b: "We came home late.", hi: "सड़क बंद थी, इसलिए देर से घर आए।", options: ["The road was blocked, so we came home late.", "The road was blocked, or we came home late.", "The road was blocked, and we came home early."], answer: 0 },
      { type: "join", a: "She stayed home.", b: "Her fever had returned.", hi: "वह घर रही, क्योंकि बुखार लौट आया था।", options: ["She stayed home, for her fever had returned.", "She stayed home, or her fever had returned.", "She stayed home, yet her fever had returned."], answer: 0 },
      { type: "speak", q: "so से पहले छोटा विराम।" }
    ]
  }
]);
