const CARDS = [
  { tag: "open loop", en: "She was tired.", back: "yet she finished the work.", hi: "थकी थी, फिर भी काम पूरा किया।", note: "Compound · yet" },
  { tag: "say this", en: "I see your point.", back: "I think the plan can work, but it feels a little rushed.", hi: "बात समझी। योजना चल सकती है, पर जल्दबाज़ी लगती है।", note: "पहले पुल, फिर राय।" },
  { tag: "complex", en: "Call me", back: "if the train is late.", hi: "अगर ट्रेन लेट हो तो फ़ोन करना।", note: "if = शर्त" },
  { tag: "shop", en: "Excuse me.", back: "I am looking for fresh coriander.", hi: "माफ़ कीजिए। ताज鏀 धनिया ढूँढ रही/रहा हूँ।", note: "Excuse me दरवाज鏀 खोलता है।" },
  { tag: "compound", en: "The shop was small,", back: "but it had everything we needed.", hi: "दुकान छोटी थी, लेकिन कमी नहीं थी।", note: "but = contrast" },
  { tag: "clinic", en: "I have had a sore throat", back: "for three days.", hi: "तीन दिनों से गले में खराश है।", note: "have had = अभी तक है" },
  { tag: "relative", en: "This is the neighbor", back: "who showed us the park.", hi: "यह वही पड़ोसी है जिसने पार्क दिखाया।", note: "who व्यक्ति से चिपकता है।" },
  { tag: "illative", en: "The baby was asleep,", back: "so we spoke in a low voice.", hi: "बच्चा सो रहा था, इसलिए धीरे बोले।", note: "so = नतीजा" },
  { tag: "phone", en: "Hi, this is Meera.", back: "Could we move it to Friday afternoon?", hi: "मीरा बोल रही हूँ। शुक्रवार दोपहर चल सकता है?", note: "फ़ोन पर नाम पहले।" },
  { tag: "unless", en: "You will miss the bus", back: "unless you hurry.", hi: "जल्दी नहीं की तो बस छूट जाएगी।", note: "unless = if not" },
  { tag: "noun clause", en: "Tell me", back: "whether Friday afternoon works.", hi: "बताओ कि शुक्रवार दोपहर चलेगी या नहीं।", note: "whether दो रास्ते" },
  { tag: "time", en: "I heated the rice", back: "when I reached home.", hi: "घर पहुँचते ही चावल गरम किया।", note: "when = समय" },
  { tag: "opinion", en: "It feels a little rushed.", back: "Maybe we can try it for two weeks first.", hi: "थोड़ी जल्दबाज़ी है। पहले दो हफ़्ते आज़माएँ।", note: "राय के बाद रास्ता दो।" },
  { tag: "although", en: "Although the bus was late,", back: "we reached on time.", hi: "बस लेट थी, फिर भी समय पर पहुँचे।", note: "although = फिर भी" },
  { tag: "help", en: "Sorry to bother you.", back: "Could you please point me in the right direction?", hi: "माफ़ी। सही दिशा बता सकते हैं?", note: "Could you please…" },
  { tag: "and", en: "She made tea,", back: "and she laid the table.", hi: "चाय बनाई और मेज鏀 सजाई।", note: "and सिर्फ़ जोड़ता है।" },
  { tag: "that", en: "I know", back: "that the store closes at eight.", hi: "पता है कि दुकान आठ बजे बंद होती है।", note: "noun clause" },
  { tag: "weather", en: "It is colder than I expected.", back: "I still prefer this to the heavy rain.", hi: "सोचा था उससे ज鏀यादा ठंड। बारिश से यही बेहतर।", note: "small talk" },
  { tag: "otherwise", en: "Hurry up,", back: "otherwise you will miss the bus.", hi: "जल्दी करो, नहीं तो बस छूट जाएगी।", note: "otherwise = नहीं तो" },
  { tag: "day", en: "My day was busy but good.", back: "In the evening we watched a short film together.", hi: "दिन व्यस्त रहा, शाम को साथ फ़िल्म देखी।", note: "सुबह → शाम" },
  { tag: "whose", en: "The man waved", back: "whose car was parked next to ours.", hi: "जिसकी गाड़ी बगल में थी, उसने हाथ हिलाया।", note: "whose = जिसका" }
];
const STORE = "pujja.v1";
function load(){try{return JSON.parse(localStorage.getItem(STORE))||{};}catch{return{};}}
function save(s){localStorage.setItem(STORE,JSON.stringify(s));}
function speak(text){if(!window.speechSynthesis)return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=0.92;speechSynthesis.speak(u);}
const feed=document.getElementById("feed");
const countEl=document.getElementById("count");
CARDS.forEach((c,i)=>{
  const el=document.createElement("section");
  el.className="slide";
  el.dataset.i=i;
  el.innerHTML=`<div class="flip" data-i="${i}"><inner><div class="face front"><div><div class="kicker">${c.tag} · ${i+1}/${CARDS.length}</div><p class="line">${c.en}</p></div><p class="hint-tap">टैप — वाक्य पूरा होगा</p></div><div class="face back"><div><div class="kicker">close the loop</div><p class="line">${c.back}</p><p class="hi">${c.hi}</p><p class="meta">${c.note}</p></div><div style="display:flex;justify-content:space-between;align-items:center"><button class="say" data-say="${(c.en+" "+c.back).replace(/"/g,"")}">🔊</button><span class="hint-tap">ऊपर स्वाइप</span></div></div></inner></div>`;
  feed.appendChild(el);
});
const end=document.createElement("section");
end.className="slide";
end.innerHTML=`<div class="flip end"><inner><div class="face front" style="transform:none"><div><div class="kicker">rush break</div><p class="line">इतनी ही स्क्रोल। अब एक पूरा पाठ।</p><p class="hi">Endless feed नहीं। बीस कार्ड, एक विराम।</p></div><p class="meta"><a class="ghost-link" href="index.html">मार्ग पर लौटें</a></p></div></inner></div>`;
feed.appendChild(end);
feed.addEventListener("click",e=>{
  const say=e.target.closest("[data-say]");
  if(say){speak(say.dataset.say);return;}
  const flip=e.target.closest(".flip");
  if(!flip||flip.classList.contains("end"))return;
  if(flip.classList.toggle("on")){const S=load();S.xp=(S.xp||0)+1;S.reels=(S.reels||0)+1;save(S);}
});
const io=new IntersectionObserver(entries=>{
  entries.forEach(ent=>{
    if(!ent.isIntersecting)return;
    const i=ent.target.dataset.i;
    countEl.textContent=i!=null?`${+i+1}/${CARDS.length}`:"विराम";
  });
},{root:feed,threshold:0.7});
[...feed.querySelectorAll(".slide")].forEach(s=>io.observe(s));
