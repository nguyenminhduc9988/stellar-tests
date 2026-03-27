// Stellar Tests - Viral Quiz App
(function() {
  const APP_ID = 'stellar-app';
  const STORAGE_KEY = 'stellar_results';

  const quizzes = [
    {
      id: 'personality-type',
      title: '🎭 What\'s Your True Personality Type?',
      subtitle: 'Find out who you REALLY are in 5 quick clicks',
      emoji: '🎭',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      questions: [
        { text: 'Pick your weekend vibe:', options: ['🏖️ Beach & chill', '🏔️ Adventure time', '📚 Deep conversations', '🎉 Party all night'] },
        { text: 'Your ideal superpower:', options: ['🧠 Read minds', '⚡ Teleport anywhere', '❤️ Heal people', '🎭 Shapeshift'] },
        { text: 'Friends would describe you as:', options: ['🤝 The loyal one', '💡 The creative one', '😄 The fun one', '🧊 The calm one'] },
        { text: 'Your biggest fear:', options: ['🕷️ Being alone', '⏰ Running out of time', '🎭 Being misunderstood', '🔄 Stuck in routine'] },
        { text: 'Pick a color energy:', options: ['🔥 Red - Passion', '💙 Blue - Peace', '💛 Yellow - Joy', '💜 Purple - Mystery'] },
      ],
      results: [
        { title: 'The Phoenix 🔥', desc: 'You\'re bold, passionate, and destined for greatness. You don\'t follow paths — you create them. People are drawn to your magnetic energy.', share: 'I\'m The Phoenix 🔥 What\'s YOUR true personality type? Take the test!' },
        { title: 'The Mystic 💜', desc: 'You see the world differently. Your intuition is your superpower and you understand things others miss. Deep and mysterious.', share: 'I\'m The Mystic 💜 What\'s YOUR true personality type? Take the test!' },
        { title: 'The Sunbeam ☀️', desc: 'You light up every room. Your positivity is contagious and people can\'t help but smile around you. Pure good vibes.', share: 'I\'m The Sunbeam ☀️ What\'s YOUR true personality type? Take the test!' },
        { title: 'The Anchor ⚓', desc: 'You\'re the rock everyone leans on. Loyal, wise, and unshakable. When things get tough, you\'re the one who holds it all together.', share: 'I\'m The Anchor ⚓ What\'s YOUR true personality type? Take the test!' },
      ],
      getResult(scores) {
        const max = Math.max(...scores);
        const idx = scores.indexOf(max);
        return this.results[idx];
      }
    },
    {
      id: 'horoscope-2026',
      title: '🌟 Your 2026 Horoscope Revealed',
      subtitle: 'What the stars have in store for you this year',
      emoji: '🌟',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      questions: [
        { text: 'When\'s your birthday season?', options: ['🌸 Spring (Mar-May)', '☀️ Summer (Jun-Aug)', '🍂 Fall (Sep-Nov)', '❄️ Winter (Dec-Feb)'] },
        { text: 'Pick a lucky number:', options: ['7 ✨', '13 🍀', '21 🎰', '42 🌌'] },
        { text: 'Your dream vacation:', options: ['🏛️ Ancient ruins', '🏝️ Tropical island', '🌃 Neon city', '🌲 Mountain retreat'] },
        { text: 'What do you dream about most?', options: ['💎 Wealth & success', '❤️ Finding true love', '🌍 Traveling the world', '🧘 Inner peace'] },
        { text: 'Pick a celestial body:', options: ['🌙 The Moon', '⭐ The Sun', '🪐 Saturn', '💫 A shooting star'] },
      ],
      results: [
        { title: 'Jupiter Rising 🪐', desc: '2026 is YOUR year for expansion! Jupiter is blessing you with growth in career and finances. Big moves, big wins. The universe has your back.', share: '2026 is MY year! 🪐 Jupiter Rising energy! What\'s YOUR 2026 horoscope?' },
        { title: 'Venus Glow 💕', desc: 'Love is in the stars for you! 2026 brings unexpected romance and deeper connections. Single? Someone special is coming. Taken? It gets better.', share: 'Love is in my stars for 2026! 💕 What\'s YOUR 2026 horoscope?' },
        { title: 'Mercury Boost ⚡', desc: 'Your mind is sharper than ever in 2026. Ideas flow, communication clicks, and opportunities come from unexpected places. Trust your instincts!', share: 'Mercury is boosting my mind in 2026! ⚡ What\'s YOUR 2026 horoscope?' },
        { title: 'Saturn Transformation 🦋', desc: '2026 is a transformation year. Old patterns break, new ones form. It might feel intense, but you\'re becoming who you were meant to be.', share: 'I\'m transforming in 2026! 🦋 What\'s YOUR 2026 horoscope?' },
      ],
      getResult(scores) {
        const max = Math.max(...scores);
        const idx = scores.indexOf(max);
        return this.results[idx];
      }
    },
    {
      id: 'spirit-animal',
      title: '🦁 What\'s Your Spirit Animal?',
      subtitle: 'The animal that represents your soul',
      emoji: '🦁',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      questions: [
        { text: 'How do you handle conflict?', options: ['😤 Face it head-on', '🤫 Avoid and observe', '🦊 Outsmart it', '🕊️ Mediate peace'] },
        { text: 'Your sleep style:', options: ['🌅 Rise with the sun', '🌙 Night owl energy', '😴 Can sleep anywhere', '⏰ Precise schedule'] },
        { text: 'In a group, you\'re usually:', options: ['👑 The leader', '🧠 The strategist', '😂 The entertainer', '💛 The supporter'] },
        { text: 'Pick your element:', options: ['🔥 Fire - fierce', '🌊 Water - deep', '💨 Air - free', '🌍 Earth - grounded'] },
        { text: 'Your instinct when scared:', options: ['⚔️ Fight', '🏃 Run', '🧊 Freeze', '🤔 Analyze'] },
      ],
      results: [
        { title: 'The Wolf 🐺', desc: 'Fiercely loyal, incredibly smart, and a natural leader. You protect your pack with everything you\'ve got. Independence meets family values.', share: 'My spirit animal is The Wolf 🐺 What\'s YOURS? Take the test!' },
        { title: 'The Eagle 🦅', desc: 'You see everything from above. Visionary, free-spirited, and determined. You soar above the noise and see what others can\'t.', share: 'My spirit animal is The Eagle 🦅 What\'s YOURS? Take the test!' },
        { title: 'The Dolphin 🐬', desc: 'Playful, social, and incredibly intuitive. You bring joy everywhere and have a natural gift for connecting with others. Pure soul energy.', share: 'My spirit animal is The Dolphin 🐬 What\'s YOURS? Take the test!' },
        { title: 'The Bear 🐻', desc: 'Strong, wise, and fiercely protective. You have immense inner strength but also know when to rest and recharge. Respect + power.', share: 'My spirit animal is The Bear 🐻 What\'s YOURS? Take the test!' },
      ],
      getResult(scores) {
        const max = Math.max(...scores);
        const idx = scores.indexOf(max);
        return this.results[idx];
      }
    },
    {
      id: 'aesthetic',
      title: '🎨 What\'s Your Aesthetic?',
      subtitle: 'Your visual vibe, decoded',
      emoji: '🎨',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      questions: [
        { text: 'Pick your dream room:', options: ['☁️ All white minimal', '🌿 Plants & wood everywhere', '💜 Moody & dramatic', '🌸 Soft pink & cozy'] },
        { text: 'Your go-to outfit:', options: ['🖤 Black on black', '👖 Classic & clean', '🌈 Bold & colorful', '🧘 Comfortable & layered'] },
        { text: 'Your Instagram aesthetic:', options: ['📸 Moody B&W', '🌅 Golden hour glow', '🎭 Curated chaos', '🍃 Nature & peaceful'] },
        { text: 'Pick a music vibe:', options: ['🎹 Lo-fi beats', '🎸 Indie rock', '🎧 Electronic', '🎻 Classical ambient'] },
        { text: 'Your perfect morning:', options: ['☕ Rainy window & coffee', '🏃 Sunrise workout', '📱 Scrolling in bed', '🧘 Yoga & tea'] },
      ],
      results: [
        { title: 'Dark Academia 📜', desc: 'You\'re drawn to knowledge, mystery, and timeless elegance. Moody libraries, vintage everything, and deep conversations are your jam.', share: 'My aesthetic is Dark Academia 📜 What\'s YOURS? Take the test!' },
        { title: 'Cottagecore 🌻', desc: 'You crave simplicity, nature, and warmth. Baking bread, flower gardens, and slow living sound like heaven to you. Pure wholesome energy.', share: 'My aesthetic is Cottagecore 🌻 What\'s YOURS? Take the test!' },
        { title: 'Cyberpunk 🌃', desc: 'Futuristic, bold, and unapologetic. Neon lights, tech, and pushing boundaries. You\'re already living in tomorrow.', share: 'My aesthetic is Cyberpunk 🌃 What\'s YOURS? Take the test!' },
        { title: 'Pastel Dream ☁️', desc: 'Soft, gentle, and dreamy. You create beauty wherever you go and see the world through rose-colored glasses. Everything is art to you.', share: 'My aesthetic is Pastel Dream ☁️ What\'s YOURS? Take the test!' },
      ],
      getResult(scores) {
        const max = Math.max(...scores);
        const idx = scores.indexOf(max);
        return this.results[idx];
      }
    },
    {
      id: 'fortune-cookie',
      title: '🍪 Your Fortune Cookie Message',
      subtitle: 'The universe has a message for you today',
      emoji: '🍪',
      gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      questions: [
        { text: 'Think of a number 1-10:', options: ['1-3', '4-6', '7-9', '10'] },
        { text: 'Pick a direction:', options: ['⬆️ North', '➡️ East', '⬇️ South', '⬅️ West'] },
        { text: 'Choose a treasure:', options: ['💎 Diamond', '🥇 Gold', '💀 Ancient relic', '🗝️ A mysterious key'] },
        { text: 'Pick a time of day:', options: ['🌅 Dawn', '☀️ Noon', '🌅 Dusk', '🌙 Midnight'] },
        { text: 'Close your eyes... what color do you see?', options: ['🔴 Red', '🟢 Green', '🔵 Blue', '🟡 Gold'] },
      ],
      results: [
        { title: 'Fortune: Wealth Incoming 💰', desc: 'A surprising financial opportunity appears this week. Someone from your past brings unexpected good news. Trust the process — abundance is flowing your way!', share: 'My fortune says wealth is coming! 💰 What\'s YOUR fortune? Open your cookie!' },
        { title: 'Fortune: Love Blooming 💘', desc: 'The stars align for your heart this month. If single, keep your eyes open at an unexpected place. If taken, a beautiful moment awaits. Love finds you.', share: 'My fortune says love is blooming! 💘 What\'s YOUR fortune? Open your cookie!' },
        { title: 'Fortune: Bold Move Needed 🎯', desc: 'The universe is telling you: GO FOR IT. That thing you\'ve been hesitating about? The answer is YES. Fortune favors the brave, and you\'re braver than you know.', share: 'My fortune says GO FOR IT! 🎯 What\'s YOUR fortune? Open your cookie!' },
        { title: 'Fortune: Hidden Blessing 🎁', desc: 'Something you think is bad luck is actually the universe redirecting you to something better. Trust the detour. Your biggest breakthrough comes from an unexpected place.', share: 'My fortune says a hidden blessing awaits! 🎁 What\'s YOUR fortune? Open your cookie!' },
      ],
      getResult(scores) {
        const max = Math.max(...scores);
        const idx = scores.indexOf(max);
        return this.results[idx];
      }
    },
    {
      id: 'villain-type',
      title: '😈 Which Disney Villain Are You?',
      subtitle: 'Embrace your dark side...',
      emoji: '😈',
      gradient: 'linear-gradient(135deg, #2c3e50 0%, #fd746c 100%)',
      questions: [
        { text: 'How do you enter a room?', options: ['👑 Dramatically', '🐍 Silently', '🔥 Explosively', '❄️ With elegance'] },
        { text: 'Your weapon of choice:', options: ['🪄 Magic', '💰 Money/power', '🎭 Deception', '🧪 Science'] },
        { text: 'Your villain lair:', options: ['🏰 A dark castle', '🌋 A volcano lair', '🌐 A tech empire', '🌊 An underwater palace'] },
        { text: 'Your weakness:', options: ['❤️ Love (ugh)', '🪞 Vanity', '😤 Anger issues', '🧠 Overthinking'] },
        { text: 'Your villain song would be:', options: ['🎵 "Be Prepared"', '🎵 "Poor Unfortunate Souls"', '🎵 "Mother Knows Best"', '🎵 "Hellfire"]' },
      ],
      results: [
        { title: 'Scar from Lion King 🦁', desc: 'Sarcastic, brilliant, and dangerously patient. You\'re the mastermind who plays the long game. Your wit is sharper than any claw.', share: 'I\'m Scar! 🦁 Which Disney villain are YOU? Take the test!' },
        { title: 'Ursula from Little Mermaid 🐙', desc: 'Bold, fabulous, and takes absolutely NO nonsense. You know your worth and you\'re not afraid to demand what you deserve. Unapologetically iconic.', share: 'I\'m Ursula! 🐙 Which Disney villain are YOU? Take the test!' },
        { title: 'Maleficent 🐉', desc: 'Elegant, powerful, and doesn\'t need anyone\'s permission. When you\'re wronged, the whole kingdom knows about it. Grace with a dark side.', share: 'I\'m Maleficent! 🐉 Which Disney villain are YOU? Take the test!' },
        { title: 'Hades 😈', desc: 'Fast-talking, charismatic, and always has a plan B. You\'re the god of deals and your sarcasm is legendary. Work smarter, not harder.', share: 'I\'m Hades! 😈 Which Disney villain are YOU? Take the test!' },
      ],
      getResult(scores) {
        const max = Math.max(...scores);
        const idx = scores.indexOf(max);
        return this.results[idx];
      }
    },
  ];

  // Color options for each quiz
  const optionColors = [
    ['rgba(239,68,68,0.15)', 'rgba(239,68,68,0.9)'],   // Red
    ['rgba(59,130,246,0.15)', 'rgba(59,130,246,0.9)'],    // Blue
    ['rgba(234,179,8,0.15)', 'rgba(234,179,8,0.9)'],     // Yellow
    ['rgba(168,85,247,0.15)', 'rgba(168,85,247,0.9)'],   // Purple
  ];

  let currentQuiz = null;
  let currentQ = 0;
  let scores = [0, 0, 0, 0];

  function render() {
    const container = document.getElementById(APP_ID);
    if (!container) return;

    if (!currentQuiz) {
      renderHome(container);
    } else if (currentQ < currentQuiz.questions.length) {
      renderQuestion(container);
    } else {
      renderResult(container);
    }
  }

  function renderHome(container) {
    const quizzesHTML = quizzes.map((q, i) => `
      <div class="quiz-card" onclick="window._stellar.start(${i})" style="background:${q.gradient};">
        <div class="quiz-emoji">${q.emoji}</div>
        <div class="quiz-title">${q.title}</div>
        <div class="quiz-subtitle">${q.subtitle}</div>
        <div class="quiz-cta">TAKE TEST →</div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="stellar-home">
        <div class="stellar-header">
          <div class="stellar-logo">✨ Stellar Tests</div>
          <div class="stellar-tagline">Click. Discover. Share. 🚀</div>
          <div class="stellar-counter" id="stellar-counter"></div>
        </div>
        <div class="stellar-grid">${quizzesHTML}</div>
        <div class="stellar-footer">
          <div class="stellar-share-bar">
            <span>Share Stellar Tests with friends! 🎁</span>
            <button class="share-btn" onclick="window._stellar.shareSite()">Share →</button>
          </div>
        </div>
      </div>
    `;
    loadCounter();
  }

  function renderQuestion(container) {
    const q = currentQuiz.questions[currentQ];
    const progress = ((currentQ) / currentQuiz.questions.length) * 100;

    const optionsHTML = q.options.map((opt, i) => {
      const [bg, border] = optionColors[i];
      return `<button class="quiz-option" onclick="window._stellar.answer(${i})" style="background:${bg};border:2px solid ${border};">
        <span>${opt}</span>
      </button>`;
    }).join('');

    container.innerHTML = `
      <div class="stellar-question" style="background:${currentQuiz.gradient};min-height:100vh;">
        <div class="question-header">
          <button class="back-btn" onclick="window._stellar.back()">← Back</button>
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
          <div class="question-num">${currentQ + 1}/${currentQuiz.questions.length}</div>
        </div>
        <div class="question-body">
          <div class="question-emoji">${currentQuiz.emoji}</div>
          <div class="question-text">${q.text}</div>
          <div class="options-grid">${optionsHTML}</div>
        </div>
      </div>
    `;
  }

  function renderResult(container) {
    const result = currentQuiz.getResult(scores);
    const pageUrl = window.location.href.split('?')[0];

    container.innerHTML = `
      <div class="stellar-result" style="background:${currentQuiz.gradient};min-height:100vh;">
        <div class="result-card">
          <div class="result-badge">✨ Your Result</div>
          <div class="result-title">${result.title}</div>
          <div class="result-desc">${result.desc}</div>
          <div class="result-share-section">
            <div class="result-share-label">Share your result:</div>
            <div class="result-share-buttons">
              <button class="result-share-btn whatsapp" onclick="window._stellar.shareWhatsApp()">📱 WhatsApp</button>
              <button class="result-share-btn twitter" onclick="window._stellar.shareTwitter()">🐦 Twitter</button>
              <button class="result-share-btn facebook" onclick="window._stellar.shareFacebook()">📘 Facebook</button>
              <button class="result-share-btn copy" onclick="window._stellar.copyResult()">📋 Copy</button>
            </div>
          </div>
          <button class="retake-btn" onclick="window._stellar.home()">Take Another Test →</button>
        </div>
        <div class="result-more">
          <div class="result-more-title">More Tests ✨</div>
          <div class="result-more-grid">
            ${quizzes.filter(q => q.id !== currentQuiz.id).slice(0, 3).map((q, i) => `
              <div class="mini-quiz" onclick="window._stellar.start(${quizzes.indexOf(q)})" style="background:${q.gradient};">
                <div>${q.emoji}</div>
                <div style="font-size:0.8em;margin-top:4px;">${q.title.replace(/'/g, "\\'")}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Save result
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    saved[currentQuiz.id] = { result: result.title, date: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }

  function start(index) {
    currentQuiz = quizzes[index];
    currentQ = 0;
    scores = [0, 0, 0, 0];
    render();
    window.scrollTo(0, 0);
  }

  function answer(optionIndex) {
    scores[optionIndex]++;
    currentQ++;
    render();
    window.scrollTo(0, 0);
  }

  function back() {
    if (currentQ > 0) {
      currentQ--;
      scores[scores.indexOf(Math.max(...scores))]--;
    } else {
      currentQuiz = null;
    }
    render();
    window.scrollTo(0, 0);
  }

  function home() {
    currentQuiz = null;
    currentQ = 0;
    render();
    window.scrollTo(0, 0);
  }

  function shareWhatsApp() {
    const result = currentQuiz.getResult(scores);
    const text = encodeURIComponent(result.share + ' ' + window.location.href.split('?')[0]);
    window.open('https://wa.me/?text=' + text, '_blank');
  }

  function shareTwitter() {
    const result = currentQuiz.getResult(scores);
    const text = encodeURIComponent(result.share + ' ' + window.location.href.split('?')[0]);
    window.open('https://twitter.com/intent/tweet?text=' + text, '_blank');
  }

  function shareFacebook() {
    const url = encodeURIComponent(window.location.href.split('?')[0]);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
  }

  function copyResult() {
    const result = currentQuiz.getResult(scores);
    navigator.clipboard.writeText(result.share + ' ' + window.location.href.split('?')[0]).then(() => {
      const btn = document.querySelector('.result-share-btn.copy');
      if (btn) btn.textContent = '✅ Copied!';
    });
  }

  function shareSite() {
    const text = encodeURIComponent('Take these amazing personality tests! ✨ ' + window.location.href.split('?')[0]);
    window.open('https://wa.me/?text=' + text, '_blank');
  }

  function loadCounter() {
    // Show how many tests taken
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const count = Object.keys(saved).length;
    const el = document.getElementById('stellar-counter');
    if (el) {
      el.textContent = count > 0 ? `🎯 You've taken ${count} test${count > 1 ? 's' : ''}!` : '';
    }
  }

  // Expose
  window._stellar = { start, answer, back, home, shareWhatsApp, shareTwitter, shareFacebook, copyResult, shareSite };

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
