// Stellar Tests v3 — Self-contained viral quiz app
(function(){
  const app = document.getElementById('app');
  if (!app) return;

  const quizzes = [
    {
      id:'personality-type', title:"What's Your True Personality Type?", emoji:'🎭',
      gradient:'linear-gradient(135deg,#667eea,#764ba2)',
      particles:'💫✨🌟',
      questions:[
        {text:'Pick your weekend vibe:',options:['🏖️ Beach & chill','🏔️ Adventure time','📚 Deep conversations','🎉 Party all night']},
        {text:'Your ideal superpower:',options:['🧠 Read minds','⚡ Teleport anywhere','❤️ Heal people','🎭 Shapeshift']},
        {text:'Friends would describe you as:',options:['🤝 The loyal one','💡 The creative one','😄 The fun one','🧊 The calm one']},
        {text:'Your biggest fear:',options:['🕷️ Being alone','⏰ Running out of time','🎭 Being misunderstood','🔄 Stuck in routine']},
        {text:'Pick a color energy:',options:['🔥 Red — Passion','💙 Blue — Peace','💛 Yellow — Joy','💜 Purple — Mystery']},
      ],
      results:[
        {title:'The Phoenix 🔥',desc:"You're bold, passionate, and destined for greatness. You don't follow paths — you create them. People are drawn to your magnetic energy like moths to a flame.",share:"I'm The Phoenix 🔥 What's YOUR true personality type? Take the test!"},
        {title:'The Mystic 💜',desc:'You see the world differently. Your intuition is your superpower — you understand things others miss. Deep, mysterious, and incredibly perceptive.',share:"I'm The Mystic 💜 What's YOUR true personality type? Take the test!"},
        {title:'The Sunbeam ☀️',desc:"You light up every room you walk into. Your positivity is contagious and people can't help but smile around you. Pure good vibes incarnate.",share:"I'm The Sunbeam ☀️ What's YOUR true personality type? Take the test!"},
        {title:'The Anchor ⚓',desc:"You're the rock everyone leans on. Loyal, wise, and unshakable. When things get tough, you're the one who holds it all together with quiet strength.",share:"I'm The Anchor ⚓ What's YOUR true personality type? Take the test!"},
      ]
    },
    {
      id:'horoscope-2026', title:'Your 2026 Horoscope Revealed', emoji:'🌟',
      gradient:'linear-gradient(135deg,#f093fb,#f5576c)',
      particles:'⭐🌙✨💫',
      questions:[
        {text:"When's your birthday season?",options:['🌸 Spring (Mar–May)','☀️ Summer (Jun–Aug)','🍂 Fall (Sep–Nov)','❄️ Winter (Dec–Feb)']},
        {text:'Pick a lucky number:',options:['7 ✨','13 🍀','21 🎰','42 🌌']},
        {text:'Your dream vacation:',options:['🏛️ Ancient ruins','🏝️ Tropical island','🌃 Neon city','🌲 Mountain retreat']},
        {text:'What do you dream about most?',options:['💎 Wealth & success','❤️ Finding true love','🌍 Traveling the world','🧘 Inner peace']},
        {text:'Pick a celestial body:',options:['🌙 The Moon','⭐ The Sun','🪐 Saturn','💫 A shooting star']},
      ],
      results:[
        {title:'Jupiter Rising 🪐',desc:'2026 is YOUR year for expansion! Jupiter is blessing you with growth in career and finances. Big moves, big wins — the universe has your back.',share:"2026 is MY year! 🪐 Jupiter Rising! What's YOUR 2026 horoscope?"},
        {title:'Venus Glow 💕',desc:'Love is in the stars for you this year! Unexpected romance and deeper connections await. If single, someone special is coming. If taken, it gets even better.',share:"Love is in my stars for 2026! 💕 What's YOUR 2026 horoscope?"},
        {title:'Mercury Boost ⚡',desc:"Your mind is sharper than ever. Ideas flow, communication clicks, and opportunities come from the most unexpected places. Trust your instincts this year!",share:"Mercury is boosting my mind in 2026! ⚡ What's YOUR 2026 horoscope?"},
        {title:'Saturn Transformation 🦋',desc:"2026 is your transformation year. Old patterns break, new ones form. It might feel intense sometimes, but you're becoming exactly who you were meant to be.",share:"I'm transforming in 2026! 🦋 What's YOUR 2026 horoscope?"},
      ]
    },
    {
      id:'spirit-animal', title:"What's Your Spirit Animal?", emoji:'🦁',
      gradient:'linear-gradient(135deg,#4facfe,#00f2fe)',
      particles:'🐾🦋🐺',
      questions:[
        {text:'How do you handle conflict?',options:['😤 Face it head-on','🤫 Avoid and observe','🦊 Outsmart it','🕊️ Mediate peace']},
        {text:'Your sleep style:',options:['🌅 Rise with the sun','🌙 Night owl energy','😴 Can sleep anywhere','⏰ Precise schedule']},
        {text:"In a group, you're usually:",options:['👑 The leader','🧠 The strategist','😂 The entertainer','💛 The supporter']},
        {text:'Pick your element:',options:['🔥 Fire — fierce','🌊 Water — deep','💨 Air — free','🌍 Earth — grounded']},
        {text:'Your instinct when scared:',options:['⚔️ Fight','🏃 Run','🧊 Freeze','🤔 Analyze']},
      ],
      results:[
        {title:'The Wolf 🐺',desc:"Fiercely loyal, incredibly smart, and a natural leader of the pack. You protect the people you love with everything you've got. Independence meets family.",share:"My spirit animal is The Wolf 🐺 What's YOURS?"},
        {title:'The Eagle 🦅',desc:'You see everything from a bird\'s-eye view. Visionary, free-spirited, and determined. You soar above the noise and see what nobody else can.',share:"My spirit animal is The Eagle 🦅 What's YOURS?"},
        {title:'The Dolphin 🐬',desc:'Playful, social, and incredibly intuitive. You bring joy everywhere you go and have a natural gift for connecting with others on a deep level. Pure soul energy.',share:"My spirit animal is The Dolphin 🐬 What's YOURS?"},
        {title:'The Bear 🐻',desc:'Strong, wise, and fiercely protective. You have immense inner strength but also know the value of rest. People respect you without you even trying.',share:"My spirit animal is The Bear 🐻 What's YOURS?"},
      ]
    },
    {
      id:'aesthetic', title:"What's Your Aesthetic?", emoji:'🎨',
      gradient:'linear-gradient(135deg,#a18cd1,#fbc2eb)',
      particles:'🌸💜🎨',
      questions:[
        {text:'Pick your dream room:',options:['☁️ All white minimal','🌿 Plants & wood everywhere','💜 Moody & dramatic','🌸 Soft pink & cozy']},
        {text:'Your go-to outfit:',options:['🖤 Black on black','👖 Classic & clean','🌈 Bold & colorful','🧘 Comfortable & layered']},
        {text:'Your Instagram vibe:',options:['📸 Moody B&W','🌅 Golden hour glow','🎭 Curated chaos','🍃 Nature & peaceful']},
        {text:'Pick a music vibe:',options:['🎹 Lo-fi beats','🎸 Indie rock','🎧 Electronic','🎻 Classical ambient']},
        {text:'Your perfect morning:',options:['☕ Rainy window & coffee','🏃 Sunrise workout','📱 Scrolling in bed','🧘 Yoga & tea']},
      ],
      results:[
        {title:'Dark Academia 📜',desc:"You're drawn to knowledge, mystery, and timeless elegance. Moody libraries, vintage everything, and deep late-night conversations are your natural habitat.",share:"My aesthetic is Dark Academia 📜 What's YOURS?"},
        {title:'Cottagecore 🌻',desc:'You crave simplicity, nature, and warmth. Fresh-baked bread, wildflower gardens, and slow Sunday mornings sound like absolute heaven. Pure wholesome energy.',share:"My aesthetic is Cottagecore 🌻 What's YOURS?"},
        {title:'Cyberpunk 🌃',desc:'Futuristic, bold, and unapologetically you. Neon city lights, bleeding-edge tech, and pushing every boundary. You\'re already living in tomorrow.',share:"My aesthetic is Cyberpunk 🌃 What's YOURS?"},
        {title:'Pastel Dream ☁️',desc:'Soft, gentle, and dreamy. You create beauty wherever you go and see the world through rose-colored glasses. Everything around you becomes art.',share:"My aesthetic is Pastel Dream ☁️ What's YOURS?"},
      ]
    },
    {
      id:'fortune-cookie', title:'Your Fortune Cookie Message', emoji:'🍪',
      gradient:'linear-gradient(135deg,#f6d365,#fda085)',
      particles:'✨💎🍀',
      questions:[
        {text:'Think of a number 1–10:',options:['1–3','4–6','7–9','10']},
        {text:'Pick a direction:',options:['⬆️ North','➡️ East','⬇️ South','⬅️ West']},
        {text:'Choose a treasure:',options:['💎 Diamond','🥇 Gold','💀 Ancient relic','🗝️ A mysterious key']},
        {text:'Pick a time of day:',options:['🌅 Dawn','☀️ Noon','🌅 Dusk','🌙 Midnight']},
        {text:'Close your eyes… what color appears?',options:['🔴 Red','🟢 Green','🔵 Blue','🟡 Gold']},
      ],
      results:[
        {title:'Wealth Incoming 💰',desc:'A surprising financial opportunity appears this week. Someone from your past brings unexpected good news. Abundance is flowing your way — be ready to receive.',share:'My fortune says wealth is coming! 💰 Open YOUR fortune cookie!'},
        {title:'Love Blooming 💘',desc:'The stars align for your heart this month. Keep your eyes open — the universe is about to introduce you to someone special at the most unexpected moment.',share:'My fortune says love is blooming! 💘 Open YOUR fortune cookie!'},
        {title:'Bold Move Needed 🎯',desc:'The universe is sending you a clear sign: GO FOR IT. That thing you\'ve been hesitating about? The answer has always been YES. Fortune favors the brave.',share:'My fortune says GO FOR IT! 🎯 Open YOUR fortune cookie!'},
        {title:'Hidden Blessing 🎁',desc:'Something you think is bad luck is actually the universe redirecting you to something much better. Trust the detour. Your biggest breakthrough is closer than you think.',share:'My fortune says a hidden blessing awaits! 🎁 Open YOUR fortune cookie!'},
      ]
    },
    {
      id:'villain-type', title:'Which Disney Villain Are You?', emoji:'😈',
      gradient:'linear-gradient(135deg,#2c3e50,#fd746c)',
      particles:'⚡🔥😈',
      questions:[
        {text:'How do you enter a room?',options:['👑 Dramatically','🐍 Silently','🔥 Explosively','❄️ With elegance']},
        {text:'Your weapon of choice:',options:['🪄 Magic','💰 Money & power','🎭 Deception','🧪 Science']},
        {text:'Your villain lair:',options:['🏰 A dark castle','🌋 A volcano lair','🌐 A tech empire','🌊 An underwater palace']},
        {text:'Your weakness:',options:['❤️ Love (ugh)','🪞 Vanity','😤 Anger issues','🧠 Overthinking']},
        {text:'Your villain anthem:',options:['🎵 Be Prepared','🎵 Poor Unfortunate Souls','🎵 Mother Knows Best','🎵 Hellfire']},
      ],
      results:[
        {title:'Scar 🦁',desc:"Sarcastic, brilliant, and dangerously patient. You're the mastermind who plays the long game and always has a plan. Your wit is sharper than any claw.",share:"I'm Scar! 🦁 Which Disney villain are YOU?"},
        {title:'Ursula 🐙',desc:"Bold, fabulous, and takes absolutely NO nonsense from anyone. You know your worth and you're not afraid to demand what you deserve. Unapologetically iconic.",share:"I'm Ursula! 🐙 Which Disney villain are YOU?"},
        {title:'Maleficent 🐉',desc:"Elegant, powerful, and doesn't need anyone's permission to exist. When you're wronged, the whole kingdom knows about it. Grace with a dark, dark side.",share:"I'm Maleficent! 🐉 Which Disney villain are YOU?"},
        {title:'Hades 😈',desc:"Fast-talking, charismatic, and always three steps ahead. You're the god of deals and your sarcasm is absolutely legendary. Work smarter, not harder.",share:"I'm Hades! 😈 Which Disney villain are YOU?"},
      ]
    },
  ];

  const optStyles = [
    {bg:'#fef2f2',border:'#ef4444',hover:'#fee2e2'},
    {bg:'#eff6ff',border:'#3b82f6',hover:'#dbeafe'},
    {bg:'#fefce8',border:'#eab308',hover:'#fef9c3'},
    {bg:'#faf5ff',border:'#a855f7',hover:'#f3e8ff'},
  ];

  const WP_URL='https://billionairepitclub.wordpress.com/tests/';

  function pick(){
    // Support deep linking via hash: #personality-type, #horoscope-2026, etc.
    const hash=location.hash.replace('#','');
    if(hash){
      const found=quizzes.find(q=>q.id===hash);
      if(found) return found;
    }
    const taken=JSON.parse(localStorage.getItem('st_v3')||'{}');
    const pool=quizzes.filter(q=>!taken[q.id]);
    return (pool.length?pool:quizzes)[Math.floor(Math.random()*(pool.length||quizzes.length))];
  }

  function result(){const m=Math.max(...scores);return quiz.results[scores.indexOf(m)]}

  function init(){
    quiz=pick(); qIdx=0; scores=[0,0,0,0]; render();
  }

  function render(){
    if(qIdx<quiz.questions.length) renderQ(); else renderR();
  }

  function renderQ(){
    const q=quiz.questions[qIdx];
    const pct=(qIdx/quiz.questions.length)*100;
    answered=false;
    const opts=q.options.map((o,i)=>{
      const s=optStyles[i];
      return `<button class="opt" style="--bg:${s.bg};--bd:${s.border};--hv:${s.hover};animation:fadeInUp .4s cubic-bezier(.16,1,.3,1) ${i*.07}s both" onclick="window.__ans(${i})">
        <span>${o}</span><span class="chk">✓</span>
      </button>`;
    }).join('');
    const particles=quiz.particles.split('').map(p=>
      `<span style="position:absolute;font-size:${12+Math.random()*18}px;opacity:${.08+Math.random()*.12};left:${Math.random()*100}%;top:${Math.random()*100}%;animation:float ${3+Math.random()*4}s ease-in-out ${Math.random()*2}s infinite">${p}</span>`
    ).join('');

    app.innerHTML=`
      <div style="background:${quiz.gradient};min-height:100vh;position:relative;overflow:hidden;color:#fff">
        <div style="position:absolute;inset:0;pointer-events:none">${particles}</div>
        <div style="position:relative;z-index:1;padding:20px 24px 0;display:flex;align-items:center;gap:14px">
          <div style="flex:1;height:5px;background:rgba(255,255,255,.18);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:rgba(255,255,255,.85);border-radius:99px;transition:width .4s cubic-bezier(.4,0,.2,1)"></div>
          </div>
          <div style="font-size:.78em;font-weight:700;opacity:.6;white-space:nowrap">${qIdx+1}/${quiz.questions.length}</div>
        </div>
        <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;padding:36px 20px 48px">
          <div style="font-size:3.2em;animation:float 3s ease-in-out infinite">${quiz.emoji}</div>
          <div style="font-size:1.55em;font-weight:800;text-align:center;max-width:400px;line-height:1.3;margin:24px 0 28px;text-shadow:0 2px 10px rgba(0,0,0,.1)">${q.text}</div>
          <div style="display:flex;flex-direction:column;gap:11px;width:100%;max-width:400px">${opts}</div>
        </div>
      </div>
      <style>
        .opt{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-radius:16px;border:2px solid var(--bd);background:var(--bg);cursor:pointer;font-size:1.02em;font-weight:600;color:#1a1a1a;text-align:left;transition:all .2s;box-shadow:0 1px 4px rgba(0,0,0,.05);font-family:inherit}
        .opt:hover{background:var(--hv);transform:translateY(-1px);box-shadow:0 4px 14px rgba(0,0,0,.1)}
        .opt:active{transform:scale(.98)}
        .opt .chk{width:24px;height:24px;border-radius:50%;border:2px solid var(--bd);display:flex;align-items:center;justify-content:center;font-size:.7em;opacity:0;transition:all .2s;flex-shrink:0;margin-left:12px}
        .opt.sel{background:var(--bd);color:#fff;transform:scale(1.01);box-shadow:0 4px 20px rgba(0,0,0,.15)}
        .opt.sel .chk{opacity:1;background:#fff;color:var(--bd)}
        .opt.dim{opacity:.35;pointer-events:none;transform:scale(.97)}
        @media(max-width:480px){.opt{padding:14px 16px;font-size:.96em}}
      </style>`;
  }

  function renderR(){
    const r=result();
    const confetti=Array.from({length:25},()=>{const e=['🎉','✨','⭐','🌟','💫','🎊','💖','🔥','👑','💎'];return `<span style="position:fixed;font-size:${14+Math.random()*20}px;top:-10%;left:${Math.random()*100}%;animation:confettiFall ${2+Math.random()*3}s ease-in ${Math.random()}s forwards;pointer-events:none;z-index:99">${e[Math.floor(Math.random()*e.length)]}</span>`}).join('');
    const others=quizzes.filter(q=>q.id!==quiz.id).sort(()=>Math.random()-.5).slice(0,3);

    app.innerHTML=`
      <div style="background:${quiz.gradient};min-height:100vh;position:relative;overflow:hidden;color:#fff">
        ${confetti}
        <div style="text-align:center;padding:52px 24px 36px;max-width:480px;position:relative;z-index:1">
          <div style="font-size:3em;animation:pulse 2s ease-in-out infinite">✨</div>
          <div class="fade-up" style="font-size:.75em;font-weight:800;letter-spacing:3px;opacity:.6;margin:12px 0 20px">YOUR RESULT</div>
          <div class="fade-up" style="animation-delay:.12s;font-size:2.6em;font-weight:900;line-height:1.15;margin-bottom:20px;text-shadow:0 2px 12px rgba(0,0,0,.15)">${r.title}</div>
          <div class="fade-up" style="animation-delay:.2s;width:50px;height:3px;background:rgba(255,255,255,.4);border-radius:99px;margin:0 auto 22px"></div>
          <div class="fade-up" style="animation-delay:.28s;font-size:1.05em;line-height:1.7;opacity:.95;margin-bottom:32px">${r.desc}</div>
          <div class="fade-up" style="animation-delay:.4s">
            <div style="font-size:.85em;font-weight:700;opacity:.7;margin-bottom:14px">Share your result ✨</div>
            <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center" id="share-btns"></div>
          </div>
          <button class="fade-up" style="animation-delay:.5s;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.25);color:#fff;padding:15px 34px;border-radius:30px;font-size:1em;font-weight:800;cursor:pointer;margin-top:24px;transition:all .2s;backdrop-filter:blur(8px);font-family:inherit" onmouseover="this.style.background='rgba(255,255,255,.28)';this.style.transform='translateY(-2px)'" onmouseout="this.style.background='rgba(255,255,255,.15)';this.style.transform='none'" onclick="location.href=WP_URL">Take Another Test ✨</button>
        </div>
        <div style="max-width:480px;padding:0 20px 48px;margin:0 auto">
          <div style="text-align:center;font-size:.8em;font-weight:700;opacity:.5;margin-bottom:14px;letter-spacing:1px;text-transform:uppercase">More tests you'll love</div>
          ${others.map((q,i)=>`
            <div class="fade-up" style="animation-delay:${.55+i*.1}s;background:${q.gradient};border-radius:18px;padding:18px 20px;cursor:pointer;display:flex;align-items:center;gap:14px;margin-bottom:10px;transition:transform .2s,box-shadow .2s;color:#fff" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 24px rgba(0,0,0,.2)'" onmouseout="this.style.transform='none';this.style.boxShadow='none'" onclick="location.href=WP_URL">
              <div style="font-size:2.2em">${q.emoji}</div>
              <div style="flex:1;font-size:.95em;font-weight:700;line-height:1.3">${q.title}</div>
              <div style="font-size:.82em;font-weight:700;opacity:.65">Start →</div>
            </div>`).join('')}
        </div>
      </div>
      <style>
        .fade-up{animation:fadeInUp .5s cubic-bezier(.16,1,.3,1) both}
      </style>`;

    // Build share buttons
    const shareDiv=document.getElementById('share-btns');
    const url=encodeURIComponent(location.href);
    const text=encodeURIComponent(r.share+' '+location.href);
    const btnStyle='padding:11px 18px;border-radius:28px;border:2px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:#fff;font-weight:700;font-size:.85em;cursor:pointer;transition:all .2s;backdrop-filter:blur(8px);font-family:inherit';
    shareDiv.innerHTML=`
      <button style="${btnStyle}" onclick="window.open('https://wa.me/?text=${text}','_blank')">📱 WhatsApp</button>
      <button style="${btnStyle}" onclick="window.open('https://twitter.com/intent/tweet?text=${text}','_blank')">🐦 Twitter</button>
      <button style="${btnStyle}" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${url}','_blank')">📘 Facebook</button>
      <button id="copy-btn" style="${btnStyle}" onclick="navigator.clipboard.writeText(decodeURIComponent('${text}')).then(function(){document.getElementById('copy-btn').textContent='✅ Copied!';setTimeout(function(){document.getElementById('copy-btn').textContent='📋 Copy'},2000)})">📋 Copy</button>
    `;

    // Save
    const saved=JSON.parse(localStorage.getItem('st_v3')||'{}');
    saved[quiz.id]={result:r.title,date:new Date().toISOString()};
    localStorage.setItem('st_v3',JSON.stringify(saved));
  }

  // Global handlers
  window.__ans=function(i){
    if(answered) return;
    answered=true;
    document.querySelectorAll('.opt').forEach((el,j)=>{
      if(j===i) el.classList.add('sel');
      else el.classList.add('dim');
    });
    scores[i]++;
    setTimeout(()=>{qIdx++;render();window.scrollTo(0,0)},400);
  };
  window.__next=function(){quiz=pick();qIdx=0;scores=[0,0,0,0];render();window.scrollTo(0,0)};
  window.__start=function(i){quiz=quizzes[i];qIdx=0;scores=[0,0,0,0];render();window.scrollTo(0,0)};

  // Auto-start immediately — no delay
  init();
})();
