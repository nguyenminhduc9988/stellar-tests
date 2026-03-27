// Stellar Tests - Viral Quiz App v2
(function() {
  const APP_ID = 'stellar-app';
  const STORAGE_KEY = 'stellar_v2';

  const quizzes = [
    {
      id: 'personality-type',
      title: "What's Your True Personality Type?",
      emoji: '🎭',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      particles: '💫✨🌟',
      questions: [
        { text: 'Pick your weekend vibe:', options: ['🏖️ Beach & chill', '🏔️ Adventure time', '📚 Deep conversations', '🎉 Party all night'] },
        { text: 'Your ideal superpower:', options: ['🧠 Read minds', '⚡ Teleport anywhere', '❤️ Heal people', '🎭 Shapeshift'] },
        { text: 'Friends would describe you as:', options: ['🤝 The loyal one', '💡 The creative one', '😄 The fun one', '🧊 The calm one'] },
        { text: 'Your biggest fear:', options: ['🕷️ Being alone', '⏰ Running out of time', '🎭 Being misunderstood', '🔄 Stuck in routine'] },
        { text: 'Pick a color energy:', options: ['🔥 Red - Passion', '💙 Blue - Peace', '💛 Yellow - Joy', '💜 Purple - Mystery'] },
      ],
      results: [
        { title: 'The Phoenix 🔥', desc: "You're bold, passionate, and destined for greatness. You don't follow paths — you create them. People are drawn to your magnetic energy.", share: "I'm The Phoenix 🔥 What's YOUR true personality type? Take the test!" },
        { title: 'The Mystic 💜', desc: 'You see the world differently. Your intuition is your superpower and you understand things others miss. Deep and mysterious.', share: "I'm The Mystic 💜 What's YOUR true personality type? Take the test!" },
        { title: 'The Sunbeam ☀️', desc: "You light up every room. Your positivity is contagious and people can't help but smile around you. Pure good vibes.", share: "I'm The Sunbeam ☀️ What's YOUR true personality type? Take the test!" },
        { title: 'The Anchor ⚓', desc: "You're the rock everyone leans on. Loyal, wise, and unshakable. When things get tough, you're the one who holds it all together.", share: "I'm The Anchor ⚓ What's YOUR true personality type? Take the test!" },
      ],
    },
    {
      id: 'horoscope-2026',
      title: 'Your 2026 Horoscope Revealed',
      emoji: '🌟',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      particles: '⭐🌙✨💫',
      questions: [
        { text: "When's your birthday season?", options: ['🌸 Spring (Mar-May)', '☀️ Summer (Jun-Aug)', '🍂 Fall (Sep-Nov)', '❄️ Winter (Dec-Feb)'] },
        { text: 'Pick a lucky number:', options: ['7 ✨', '13 🍀', '21 🎰', '42 🌌'] },
        { text: 'Your dream vacation:', options: ['🏛️ Ancient ruins', '🏝️ Tropical island', '🌃 Neon city', '🌲 Mountain retreat'] },
        { text: 'What do you dream about most?', options: ['💎 Wealth & success', '❤️ Finding true love', '🌍 Traveling the world', '🧘 Inner peace'] },
        { text: 'Pick a celestial body:', options: ['🌙 The Moon', '⭐ The Sun', '🪐 Saturn', '💫 A shooting star'] },
      ],
      results: [
        { title: 'Jupiter Rising 🪐', desc: '2026 is YOUR year for expansion! Jupiter is blessing you with growth in career and finances. Big moves, big wins.', share: "2026 is MY year! 🪐 Jupiter Rising energy! What's YOUR 2026 horoscope?" },
        { title: 'Venus Glow 💕', desc: 'Love is in the stars for you! 2026 brings unexpected romance and deeper connections. Someone special is coming.', share: "Love is in my stars for 2026! 💕 What's YOUR 2026 horoscope?" },
        { title: 'Mercury Boost ⚡', desc: "Your mind is sharper than ever in 2026. Ideas flow, communication clicks, and opportunities come from unexpected places.", share: "Mercury is boosting my mind in 2026! ⚡ What's YOUR 2026 horoscope?" },
        { title: 'Saturn Transformation 🦋', desc: "2026 is a transformation year. Old patterns break, new ones form. You're becoming who you were meant to be.", share: "I'm transforming in 2026! 🦋 What's YOUR 2026 horoscope?" },
      ],
    },
    {
      id: 'spirit-animal',
      title: "What's Your Spirit Animal?",
      emoji: '🦁',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      particles: '🐾🦋🐺',
      questions: [
        { text: 'How do you handle conflict?', options: ['😤 Face it head-on', '🤫 Avoid and observe', '🦊 Outsmart it', '🕊️ Mediate peace'] },
        { text: 'Your sleep style:', options: ['🌅 Rise with the sun', '🌙 Night owl energy', '😴 Can sleep anywhere', '⏰ Precise schedule'] },
        { text: 'In a group, you\'re usually:', options: ['👑 The leader', '🧠 The strategist', '😂 The entertainer', '💛 The supporter'] },
        { text: 'Pick your element:', options: ['🔥 Fire - fierce', '🌊 Water - deep', '💨 Air - free', '🌍 Earth - grounded'] },
        { text: 'Your instinct when scared:', options: ['⚔️ Fight', '🏃 Run', '🧊 Freeze', '🤔 Analyze'] },
      ],
      results: [
        { title: 'The Wolf 🐺', desc: 'Fiercely loyal, incredibly smart, and a natural leader. You protect your pack with everything you\'ve got.', share: "My spirit animal is The Wolf 🐺 What's YOURS? Take the test!" },
        { title: 'The Eagle 🦅', desc: 'You see everything from above. Visionary, free-spirited, and determined. You soar above the noise.', share: "My spirit animal is The Eagle 🦅 What's YOURS? Take the test!" },
        { title: 'The Dolphin 🐬', desc: 'Playful, social, and incredibly intuitive. You bring joy everywhere and have a natural gift for connecting with others.', share: "My spirit animal is The Dolphin 🐬 What's YOURS? Take the test!" },
        { title: 'The Bear 🐻', desc: 'Strong, wise, and fiercely protective. You have immense inner strength but also know when to rest and recharge.', share: "My spirit animal is The Bear 🐻 What's YOURS? Take the test!" },
      ],
    },
    {
      id: 'aesthetic',
      title: "What's Your Aesthetic?",
      emoji: '🎨',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      particles: '🌸💜🎨',
      questions: [
        { text: 'Pick your dream room:', options: ['☁️ All white minimal', '🌿 Plants & wood everywhere', '💜 Moody & dramatic', '🌸 Soft pink & cozy'] },
        { text: 'Your go-to outfit:', options: ['🖤 Black on black', '👖 Classic & clean', '🌈 Bold & colorful', '🧘 Comfortable & layered'] },
        { text: 'Your Instagram aesthetic:', options: ['📸 Moody B&W', '🌅 Golden hour glow', '🎭 Curated chaos', '🍃 Nature & peaceful'] },
        { text: 'Pick a music vibe:', options: ['🎹 Lo-fi beats', '🎸 Indie rock', '🎧 Electronic', '🎻 Classical ambient'] },
        { text: 'Your perfect morning:', options: ['☕ Rainy window & coffee', '🏃 Sunrise workout', '📱 Scrolling in bed', '🧘 Yoga & tea'] },
      ],
      results: [
        { title: 'Dark Academia 📜', desc: "You're drawn to knowledge, mystery, and timeless elegance. Moody libraries, vintage everything, and deep conversations.", share: "My aesthetic is Dark Academia 📜 What's YOURS? Take the test!" },
        { title: 'Cottagecore 🌻', desc: 'You crave simplicity, nature, and warmth. Baking bread, flower gardens, and slow living. Pure wholesome energy.', share: "My aesthetic is Cottagecore 🌻 What's YOURS? Take the test!" },
        { title: 'Cyberpunk 🌃', desc: 'Futuristic, bold, and unapologetic. Neon lights, tech, and pushing boundaries. You\'re already living in tomorrow.', share: "My aesthetic is Cyberpunk 🌃 What's YOURS? Take the test!" },
        { title: 'Pastel Dream ☁️', desc: 'Soft, gentle, and dreamy. You create beauty wherever you go and see the world through rose-colored glasses.', share: "My aesthetic is Pastel Dream ☁️ What's YOURS? Take the test!" },
      ],
    },
    {
      id: 'fortune-cookie',
      title: 'Your Fortune Cookie Message',
      emoji: '🍪',
      gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      particles: '✨💎🍀',
      questions: [
        { text: 'Think of a number 1-10:', options: ['1-3', '4-6', '7-9', '10'] },
        { text: 'Pick a direction:', options: ['⬆️ North', '➡️ East', '⬇️ South', '⬅️ West'] },
        { text: 'Choose a treasure:', options: ['💎 Diamond', '🥇 Gold', '💀 Ancient relic', '🗝️ A mysterious key'] },
        { text: 'Pick a time of day:', options: ['🌅 Dawn', '☀️ Noon', '🌅 Dusk', '🌙 Midnight'] },
        { text: 'Close your eyes... what color do you see?', options: ['🔴 Red', '🟢 Green', '🔵 Blue', '🟡 Gold'] },
      ],
      results: [
        { title: 'Wealth Incoming 💰', desc: 'A surprising financial opportunity appears this week. Someone from your past brings unexpected good news. Abundance is flowing.', share: 'My fortune says wealth is coming! 💰 What\'s YOUR fortune? Open your cookie!' },
        { title: 'Love Blooming 💘', desc: 'The stars align for your heart this month. Keep your eyes open at an unexpected place. Love finds you.', share: 'My fortune says love is blooming! 💘 What\'s YOUR fortune? Open your cookie!' },
        { title: 'Bold Move Needed 🎯', desc: 'The universe is telling you: GO FOR IT. That thing you\'ve been hesitating about? The answer is YES.', share: 'My fortune says GO FOR IT! 🎯 What\'s YOUR fortune? Open your cookie!' },
        { title: 'Hidden Blessing 🎁', desc: 'Something you think is bad luck is actually the universe redirecting you to something better. Trust the detour.', share: 'My fortune says a hidden blessing awaits! 🎁 What\'s YOUR fortune? Open your cookie!' },
      ],
    },
    {
      id: 'villain-type',
      title: 'Which Disney Villain Are You?',
      emoji: '😈',
      gradient: 'linear-gradient(135deg, #2c3e50 0%, #fd746c 100%)',
      particles: '⚡🔥😈',
      questions: [
        { text: 'How do you enter a room?', options: ['👑 Dramatically', '🐍 Silently', '🔥 Explosively', '❄️ With elegance'] },
        { text: 'Your weapon of choice:', options: ['🪄 Magic', '💰 Money/power', '🎭 Deception', '🧪 Science'] },
        { text: 'Your villain lair:', options: ['🏰 A dark castle', '🌋 A volcano lair', '🌐 A tech empire', '🌊 An underwater palace'] },
        { text: 'Your weakness:', options: ['❤️ Love (ugh)', '🪞 Vanity', '😤 Anger issues', '🧠 Overthinking'] },
        { text: 'Your villain song would be:', options: ['🎵 "Be Prepared"', '🎵 "Poor Unfortunate Souls"', '🎵 "Mother Knows Best"', '🎵 "Hellfire"]' },
      ],
      results: [
        { title: 'Scar 🦁', desc: 'Sarcastic, brilliant, and dangerously patient. You\'re the mastermind who plays the long game. Your wit is sharper than any claw.', share: "I'm Scar! 🦁 Which Disney villain are YOU? Take the test!" },
        { title: 'Ursula 🐙', desc: 'Bold, fabulous, and takes absolutely NO nonsense. You know your worth and you\'re not afraid to demand what you deserve.', share: "I'm Ursula! 🐙 Which Disney villain are YOU? Take the test!" },
        { title: 'Maleficent 🐉', desc: "Elegant, powerful, and doesn't need anyone's permission. When you're wronged, the whole kingdom knows about it.", share: "I'm Maleficent! 🐉 Which Disney villain are YOU? Take the test!" },
        { title: 'Hades 😈', desc: 'Fast-talking, charismatic, and always has a plan B. You\'re the god of deals and your sarcasm is legendary.', share: "I'm Hades! 😈 Which Disney villain are YOU? Take the test!" },
      ],
    },
  ];

  const optionStyles = [
    { bg: '#fef2f2', border: '#ef4444', hover: '#fee2e2' },
    { bg: '#eff6ff', border: '#3b82f6', hover: '#dbeafe' },
    { bg: '#fefce8', border: '#eab308', hover: '#fef9c3' },
    { bg: '#faf5ff', border: '#a855f7', hover: '#f3e8ff' },
  ];

  let currentQuiz = null;
  let currentQ = 0;
  let scores = [0, 0, 0, 0];
  let answeredThisQ = false;
  let animFrame = null;

  function getResult() {
    const max = Math.max(...scores);
    const idx = scores.indexOf(max);
    return currentQuiz.results[idx];
  }

  function run() {
    const container = document.getElementById(APP_ID);
    if (!container) return;

    // Inject global styles once
    if (!document.getElementById('stellar-global-styles')) {
      const style = document.createElement('style');
      style.id = 'stellar-global-styles';
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        #stellar-app, #stellar-app * { box-sizing: border-box; }
        #stellar-app { font-family: 'Inter', -apple-system, sans-serif; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes pulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.04); } }
        @keyframes shimmer { 0% { background-position:-200% 0; } 100% { background-position:200% 0; } }
        @keyframes confetti-fall { 0% { transform:translateY(-10px) rotate(0deg); opacity:1; } 100% { transform:translateY(100vh) rotate(720deg); opacity:0; } }
        .s-fade-up { animation: fadeInUp 0.5s ease both; }
        .s-fade { animation: fadeIn 0.4s ease both; }
      `;
      document.head.appendChild(style);
    }

    if (!currentQuiz) {
      // Auto-start a random quiz
      const taken = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      const untaken = quizzes.filter(q => !taken[q.id]);
      const pick = untaken.length > 0 ? untaken : quizzes;
      start(pick[Math.floor(Math.random() * pick.length)]);
    } else if (currentQ < currentQuiz.questions.length) {
      renderQuestion(container);
    } else {
      renderResult(container);
    }
  }

  function start(quizOrIndex) {
    currentQuiz = typeof quizOrIndex === 'number' ? quizzes[quizOrIndex] : quizOrIndex;
    currentQ = 0;
    scores = [0, 0, 0, 0];
    answeredThisQ = false;
    run();
    window.scrollTo(0, 0);
  }

  function renderQuestion(container) {
    const q = currentQuiz.questions[currentQ];
    const progress = ((currentQ) / currentQuiz.questions.length) * 100;
    answeredThisQ = false;

    const optionsHTML = q.options.map((opt, i) => {
      const s = optionStyles[i];
      return `
        <button class="s-option" onclick="window.__sa(${i})" 
          style="--obg:${s.bg};--oborder:${s.border};--ohover:${s.hover};animation-delay:${i * 0.07}s"
          data-idx="${i}">
          <span class="s-option-text">${opt}</span>
          <span class="s-option-check">✓</span>
        </button>`;
    }).join('');

    container.innerHTML = `
      <div class="s-quiz" style="background:${currentQuiz.gradient};min-height:100vh;color:white;position:relative;overflow:hidden;">
        <div class="s-particles">${currentQuiz.particles.split('').map((p,i) =>
          `<span style="position:absolute;font-size:${12+Math.random()*20}px;opacity:${0.1+Math.random()*0.15};left:${Math.random()*100}%;top:${Math.random()*100}%;animation:pulse ${2+Math.random()*3}s ease-in-out ${Math.random()*2}s infinite;">${p}</span>`
        ).join('')}</div>
        
        <div class="s-q-header">
          <div class="s-q-progress-track">
            <div class="s-q-progress-fill" style="width:${progress}%"></div>
          </div>
          <div class="s-q-counter">${currentQ + 1} of ${currentQuiz.questions.length}</div>
        </div>

        <div class="s-q-body">
          <div class="s-q-emoji s-fade-up">${currentQuiz.emoji}</div>
          <div class="s-q-text s-fade-up" style="animation-delay:0.1s">${q.text}</div>
          <div class="s-q-options">${optionsHTML}</div>
        </div>
      </div>

      <style>
        .s-quiz { display:flex; flex-direction:column; }
        .s-particles { position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0; }
        .s-q-header { position:relative;z-index:1;padding:20px 24px 0;display:flex;align-items:center;gap:14px; }
        .s-q-progress-track { flex:1;height:5px;background:rgba(255,255,255,0.2);border-radius:99px;overflow:hidden; }
        .s-q-progress-fill { height:100%;background:rgba(255,255,255,0.85);border-radius:99px;transition:width 0.4s cubic-bezier(0.4,0,0.2,1); }
        .s-q-counter { font-size:0.8em;font-weight:700;opacity:0.7;white-space:nowrap; }
        .s-q-body { position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;padding:32px 20px 40px; }
        .s-q-emoji { font-size:3.5em;margin-bottom:20px; }
        .s-q-text { font-size:1.6em;font-weight:800;text-align:center;max-width:420px;line-height:1.3;margin-bottom:28px;text-shadow:0 1px 8px rgba(0,0,0,0.1); }
        .s-q-options { display:flex;flex-direction:column;gap:11px;width:100%;max-width:400px; }
        .s-option {
          display:flex;align-items:center;justify-content:space-between;
          padding:16px 20px;border-radius:16px;border:2px solid var(--oborder);
          background:var(--obg);cursor:pointer;font-size:1.05em;font-weight:600;
          color:#1a1a1a;text-align:left;transition:all 0.2s ease;
          animation:fadeInUp 0.4s ease both;
          box-shadow:0 1px 3px rgba(0,0,0,0.06);
        }
        .s-option:hover { background:var(--ohover);transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        .s-option:active { transform:scale(0.98); }
        .s-option-text { flex:1; }
        .s-option-check { width:24px;height:24px;border-radius:50%;border:2px solid var(--oborder);display:flex;align-items:center;justify-content:center;font-size:0.7em;opacity:0;transition:all 0.2s;flex-shrink:0;margin-left:12px; }
        .s-option.selected { border-color:var(--oborder);background:var(--oborder);color:white;transform:scale(1.01);box-shadow:0 4px 20px rgba(0,0,0,0.15); }
        .s-option.selected .s-option-check { opacity:1;background:white;color:var(--oborder); }
        .s-option.dimmed { opacity:0.4;pointer-events:none;transform:scale(0.97); }
        @media(max-width:480px) {
          .s-q-emoji { font-size:2.8em; }
          .s-q-text { font-size:1.3em; }
          .s-option { padding:14px 16px;font-size:0.98em; }
        }
      </style>
    `;
  }

  function answer(idx) {
    if (answeredThisQ) return;
    answeredThisQ = true;

    // Visual feedback
    const options = document.querySelectorAll('.s-option');
    options.forEach((el, i) => {
      if (i === idx) el.classList.add('selected');
      else el.classList.add('dimmed');
    });

    scores[idx]++;
    setTimeout(() => { currentQ++; run(); window.scrollTo(0, 0); }, 450);
  }

  function renderResult(container) {
    const result = getResult();
    const confetti = Array.from({length: 30}, () => {
      const emojis = ['🎉','✨','⭐','🌟','💫','🎊','💖','🔥','👑','💎'];
      return `<span style="position:fixed;font-size:${14+Math.random()*22}px;top:-10%;left:${Math.random()*100}%;animation:confetti-fall ${2+Math.random()*3}s ease-in ${Math.random()*1}s forwards;pointer-events:none;z-index:99;">${emojis[Math.floor(Math.random()*emojis.length)]}</span>`;
    }).join('');

    const otherQuizzes = quizzes.filter(q => q.id !== currentQuiz.id);
    const shuffled = otherQuizzes.sort(() => Math.random() - 0.5).slice(0, 3);

    container.innerHTML = `
      <div class="s-result" style="min-height:100vh;background:${currentQuiz.gradient};color:white;position:relative;overflow:hidden;">
        ${confetti}
        
        <div class="s-result-card">
          <div class="s-result-sparkle">✨</div>
          <div class="s-result-label s-fade-up">YOUR RESULT</div>
          <div class="s-result-title s-fade-up" style="animation-delay:0.15s">${result.title}</div>
          <div class="s-result-divider s-fade-up" style="animation-delay:0.25s"></div>
          <div class="s-result-desc s-fade-up" style="animation-delay:0.3s">${result.desc}</div>

          <div class="s-share-section s-fade-up" style="animation-delay:0.45s">
            <div class="s-share-label">Share your result ✨</div>
            <div class="s-share-btns">
              <button class="s-share-btn s-wa" onclick="window.__sw()">📱 WhatsApp</button>
              <button class="s-share-btn s-tw" onclick="window.__st()">🐦 Twitter</button>
              <button class="s-share-btn s-fb" onclick="window.__sf()">📘 Facebook</button>
              <button class="s-share-btn s-cp" onclick="window.__sc()">📋 Copy</button>
            </div>
          </div>

          <button class="s-next-btn s-fade-up" style="animation-delay:0.55s" onclick="window.__sn()">
            Take Another Test ✨
          </button>
        </div>

        <div class="s-more-section">
          <div class="s-more-label">More tests you'll love</div>
          <div class="s-more-grid">
            ${shuffled.map((q, i) => `
              <div class="s-more-card" onclick="window.__ss(${quizzes.indexOf(q)})" style="background:${q.gradient};animation-delay:${0.6 + i * 0.1}s">
                <div class="s-more-emoji">${q.emoji}</div>
                <div class="s-more-title">${q.title}</div>
                <div class="s-more-cta">Start →</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <style>
        .s-result { display:flex;flex-direction:column;align-items:center; }
        .s-result-card { text-align:center;padding:56px 24px 40px;max-width:500px; }
        .s-result-sparkle { font-size:3em;margin-bottom:8px;animation:pulse 2s ease-in-out infinite; }
        .s-result-label { font-size:0.8em;font-weight:800;letter-spacing:3px;opacity:0.7;margin-bottom:20px; }
        .s-result-title { font-size:2.6em;font-weight:900;line-height:1.15;margin-bottom:20px;text-shadow:0 2px 12px rgba(0,0,0,0.15); }
        .s-result-divider { width:60px;height:3px;background:rgba(255,255,255,0.5);border-radius:99px;margin:0 auto 24px; }
        .s-result-desc { font-size:1.05em;line-height:1.7;opacity:0.95;margin-bottom:32px; }
        .s-share-section { margin-bottom:28px; }
        .s-share-label { font-size:0.9em;font-weight:700;opacity:0.8;margin-bottom:14px; }
        .s-share-btns { display:flex;flex-wrap:wrap;gap:10px;justify-content:center; }
        .s-share-btn { padding:11px 20px;border-radius:28px;border:2px solid rgba(255,255,255,0.35);background:rgba(255,255,255,0.12);color:white;font-weight:700;font-size:0.88em;cursor:pointer;transition:all 0.2s;backdrop-filter:blur(8px); }
        .s-share-btn:hover { background:rgba(255,255,255,0.25);transform:translateY(-1px); }
        .s-next-btn { background:rgba(255,255,255,0.2);border:2px solid rgba(255,255,255,0.3);color:white;padding:16px 36px;border-radius:30px;font-size:1em;font-weight:800;cursor:pointer;transition:all 0.2s;backdrop-filter:blur(8px); }
        .s-next-btn:hover { background:rgba(255,255,255,0.35);transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,0.15); }
        .s-more-section { width:100%;max-width:500px;padding:0 20px 40px; }
        .s-more-label { text-align:center;font-size:0.85em;font-weight:700;opacity:0.6;margin-bottom:14px;text-transform:uppercase;letter-spacing:1px; }
        .s-more-grid { display:flex;flex-direction:column;gap:10px; }
        .s-more-card { border-radius:18px;padding:20px;cursor:pointer;color:white;transition:transform 0.2s,box-shadow 0.2s;animation:fadeInUp 0.4s ease both;display:flex;align-items:center;gap:14px; }
        .s-more-card:hover { transform:translateY(-2px);box-shadow:0 6px 24px rgba(0,0,0,0.2); }
        .s-more-emoji { font-size:2.2em; }
        .s-more-title { font-size:0.95em;font-weight:700;flex:1;line-height:1.3; }
        .s-more-cta { font-size:0.85em;font-weight:700;opacity:0.7; }
        @media(max-width:480px) {
          .s-result-sparkle { font-size:2.4em; }
          .s-result-title { font-size:2.1em; }
          .s-result-desc { font-size:0.98em; }
          .s-share-btn { padding:10px 16px;font-size:0.82em; }
          .s-result-card { padding:40px 16px 28px; }
        }
      </style>
    `;

    // Save result
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    saved[currentQuiz.id] = { result: result.title, date: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }

  // Share functions
  function shareWA() {
    const r = getResult();
    window.open('https://wa.me/?text=' + encodeURIComponent(r.share + ' ' + location.href.split('?')[0]), '_blank');
  }
  function shareTW() {
    const r = getResult();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(r.share + ' ' + location.href.split('?')[0]), '_blank');
  }
  function shareFB() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href.split('?')[0]), '_blank');
  }
  function shareCopy() {
    const r = getResult();
    navigator.clipboard.writeText(r.share + ' ' + location.href.split('?')[0]).then(() => {
      const btn = document.querySelector('.s-cp');
      if (btn) { btn.textContent = '✅ Copied!'; setTimeout(() => btn.textContent = '📋 Copy', 2000); }
    });
  }
  function startNext() { start(quizzes[Math.floor(Math.random() * quizzes.length)]); }
  function startSpecific(idx) { start(idx); }

  // Expose
  window.__sa = answer;
  window.__sw = shareWA;
  window.__st = shareTW;
  window.__sf = shareFB;
  window.__sc = shareCopy;
  window.__sn = startNext;
  window.__ss = startSpecific;

  // Init
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
