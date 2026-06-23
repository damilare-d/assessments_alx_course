/* ===================================================
   CSS QUIZ — quiz.js
   All quiz logic, state, navigation, and rendering
   =================================================== */

// ── STATE ──────────────────────────────────────────
const state = {
    pool:        [],    // active question set (filtered + maybe shuffled)
    order:       [],    // index array (shuffled or sequential)
    current:     0,     // current position in order
    answers:     {},    // { orderIndex: chosenOptionIndex | null }
    score:       0,
    correct:     0,
    wrong:       0,
    shuffleOn:   true,
  };
  
  // ── DOM REFS ───────────────────────────────────────
  const screens = {
    start:   document.getElementById('screen-start'),
    quiz:    document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results'),
    review:  document.getElementById('screen-review'),
  };
  
  const show = (name) => {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    window.scrollTo(0, 0);
  };
  
  // ── UNIT NAMES ─────────────────────────────────────
  const unitNames = [...new Set(questions.map(q => q.unit))];
  
  // ── START SCREEN SETUP ─────────────────────────────
  const shuffleToggle    = document.getElementById('shuffle-toggle');
  const unitFilterToggle = document.getElementById('unit-filter-toggle');
  const unitFilterPanel  = document.getElementById('unit-filter-panel');
  const unitCheckboxes   = document.getElementById('unit-checkboxes');
  const totalCount       = document.getElementById('total-count');
  
  // Build unit checkboxes
  unitNames.forEach((unit, i) => {
    const label = document.createElement('label');
    label.className = 'unit-check-row';
    label.innerHTML = `
      <input type="checkbox" class="unit-cb" value="${i}" checked />
      <span class="unit-check-box">✓</span>
      <span>${unit}</span>
    `;
    unitCheckboxes.appendChild(label);
  });
  
  // Update total count on filter change
  function updateTotalCount() {
    const selected = [...document.querySelectorAll('.unit-cb:checked')].map(cb => +cb.value);
    const count = questions.filter(q => selected.includes(unitNames.indexOf(q.unit))).length;
    totalCount.textContent = count;
  }
  
  unitCheckboxes.addEventListener('change', updateTotalCount);
  
  // Toggle filter panel
  unitFilterToggle.addEventListener('change', () => {
    unitFilterPanel.classList.toggle('hidden', !unitFilterToggle.checked);
    updateTotalCount();
  });
  
  // ── START ───────────────────────────────────────────
  document.getElementById('start-btn').addEventListener('click', () => {
    const selectedUnits = unitFilterToggle.checked
      ? [...document.querySelectorAll('.unit-cb:checked')].map(cb => +cb.value)
      : unitNames.map((_, i) => i);
  
    state.pool = questions.filter(q => selectedUnits.includes(unitNames.indexOf(q.unit)));
  
    if (state.pool.length === 0) {
      alert('Please select at least one unit.');
      return;
    }
  
    state.shuffleOn = shuffleToggle.checked;
    state.order     = state.pool.map((_, i) => i);
    if (state.shuffleOn) shuffle(state.order);
  
    state.current = 0;
    state.answers = {};
    state.score   = 0;
    state.correct = 0;
    state.wrong   = 0;
  
    show('quiz');
    renderQuestion();
    updateSidebar();
  });
  
  // ── FISHER-YATES SHUFFLE ────────────────────────────
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // ── RENDER QUESTION ────────────────────────────────
  function renderQuestion() {
    const idx = state.order[state.current];
    const q   = state.pool[idx];
    const total = state.order.length;
    const pos   = state.current + 1;
  
    document.getElementById('q-number').textContent =
      `Question ${String(pos).padStart(2, '0')} of ${total}`;
    document.getElementById('q-text').innerHTML = q.question;
    document.getElementById('unit-tag').textContent = q.unit;
    document.getElementById('progress-text').textContent = `Question ${pos}`;
    document.getElementById('progress-frac').textContent = `${pos} / ${total}`;
    document.getElementById('progress-bar').style.width = `${(pos / total) * 100}%`;
  
    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
  
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt}</span>`;
  
      // Restore answered state
      const prevAnswer = state.answers[state.current];
      if (prevAnswer !== undefined) {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add('correct');
        if (i === prevAnswer && i !== q.answer) btn.classList.add('wrong');
        if (i === prevAnswer && i === q.answer) btn.classList.add('correct');
      } else {
        btn.addEventListener('click', () => handleAnswer(i));
      }
      grid.appendChild(btn);
    });
  
    // Restore feedback
    const fb = document.getElementById('feedback-box');
    if (state.answers[state.current] !== undefined) {
      const chosen = state.answers[state.current];
      showFeedback(chosen === q.answer, q.explanation);
      document.getElementById('next-btn').disabled = false;
    } else {
      fb.classList.add('hidden');
      fb.className = 'feedback-box hidden';
      document.getElementById('next-btn').disabled = true;
    }
  
    document.getElementById('prev-btn').disabled = state.current === 0;
    document.getElementById('next-btn').textContent =
      state.current === state.order.length - 1 ? 'Finish →' : 'Next →';
  }
  
  // ── HANDLE ANSWER ──────────────────────────────────
  function handleAnswer(chosenIndex) {
    const idx = state.order[state.current];
    const q   = state.pool[idx];
  
    state.answers[state.current] = chosenIndex;
  
    const isCorrect = chosenIndex === q.answer;
    if (isCorrect) { state.correct++; state.score += 10; }
    else            { state.wrong++; }
  
    // Style options
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      if (i === chosenIndex && i !== q.answer) btn.classList.add('wrong');
    });
  
    showFeedback(isCorrect, q.explanation);
    document.getElementById('next-btn').disabled = false;
    updateSidebar();
  }
  
  // ── FEEDBACK ───────────────────────────────────────
  function showFeedback(isCorrect, explanation) {
    const fb   = document.getElementById('feedback-box');
    const icon = document.getElementById('feedback-icon');
    const text = document.getElementById('feedback-text');
  
    fb.className = `feedback-box ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;
    icon.textContent = isCorrect ? '✓' : '✗';
    text.innerHTML = explanation;
    fb.classList.remove('hidden');
  }
  
  // ── NAVIGATION ─────────────────────────────────────
  document.getElementById('next-btn').addEventListener('click', () => {
    if (state.current < state.order.length - 1) {
      state.current++;
      renderQuestion();
    } else {
      showResults();
    }
  });
  
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (state.current > 0) {
      state.current--;
      renderQuestion();
    }
  });
  
  document.getElementById('quit-btn').addEventListener('click', () => {
    if (confirm('Quit the quiz? Your progress will be lost.')) {
      show('start');
    }
  });
  
  // ── SIDEBAR ────────────────────────────────────────
  function updateSidebar() {
    const total = state.order.length;
    const answered = Object.keys(state.answers).length;
    const left = total - answered;
  
    document.getElementById('sidebar-score').textContent = state.score;
    document.getElementById('stat-correct').textContent  = state.correct;
    document.getElementById('stat-wrong').textContent    = state.wrong;
    document.getElementById('stat-left').textContent     = left;
  
    // Ring
    const pct = answered / total;
    const circumference = 2 * Math.PI * 32; // r=32 → 201.06
    const offset = circumference * (1 - pct);
    document.getElementById('ring-fill').style.strokeDashoffset = offset;
  }
  
  // ── RESULTS ────────────────────────────────────────
  function showResults() {
    const total    = state.order.length;
    const answered = Object.keys(state.answers).length;
    const skipped  = total - answered;
    const pct      = Math.round((state.correct / total) * 100);
  
    document.getElementById('result-score-big').textContent = `${pct}%`;
    document.getElementById('r-correct').textContent = state.correct;
    document.getElementById('r-wrong').textContent   = state.wrong;
    document.getElementById('r-skipped').textContent = skipped;
  
    // Grade message
    let trophy, title, subtitle;
    if (pct >= 90) {
      trophy = '🏆'; title = 'Excellent!';
      subtitle = 'Outstanding CSS knowledge. You\'re ready for production.';
    } else if (pct >= 75) {
      trophy = '🎯'; title = 'Great Work!';
      subtitle = 'Solid understanding. Review a few areas to sharpen up.';
    } else if (pct >= 55) {
      trophy = '📚'; title = 'Keep Going';
      subtitle = 'You\'re building a foundation. More practice will help.';
    } else {
      trophy = '💪'; title = 'Keep Practising';
      subtitle = 'Go back through the lecture notes — you\'ve got this.';
    }
  
    document.getElementById('result-trophy').textContent   = trophy;
    document.getElementById('result-title').textContent    = title;
    document.getElementById('result-subtitle').textContent = subtitle;
  
    document.getElementById('result-title').style.color =
      pct >= 75 ? 'var(--correct)' : pct >= 55 ? 'var(--warn)' : 'var(--wrong)';
  
    // Unit breakdown
    const breakdown = {};
    unitNames.forEach(u => { breakdown[u] = { correct: 0, total: 0 }; });
  
    state.order.forEach((qIdx, orderIdx) => {
      const q = state.pool[qIdx];
      const unit = q.unit;
      breakdown[unit].total++;
      if (state.answers[orderIdx] === q.answer) breakdown[unit].correct++;
    });
  
    const breakdownEl = document.getElementById('unit-breakdown');
    breakdownEl.innerHTML = '<p class="breakdown-title">Performance by Unit</p>';
  
    Object.entries(breakdown).forEach(([unit, data]) => {
      if (data.total === 0) return;
      const p = Math.round((data.correct / data.total) * 100);
      const color = p >= 75 ? 'var(--correct)' : p >= 50 ? 'var(--warn)' : 'var(--wrong)';
      const shortName = unit.replace('Unit', 'U').replace('·', '·');
  
      breakdownEl.innerHTML += `
        <div class="breakdown-row">
          <span class="breakdown-name">${shortName}</span>
          <div class="breakdown-bar-track">
            <div class="breakdown-bar-fill" style="width:${p}%; background:${color}"></div>
          </div>
          <span class="breakdown-pct" style="color:${color}">${p}%</span>
        </div>
      `;
    });
  
    show('results');
  }
  
  // ── RESULTS ACTIONS ────────────────────────────────
  document.getElementById('retry-btn').addEventListener('click', () => {
    state.current = 0;
    state.answers = {};
    state.score   = 0;
    state.correct = 0;
    state.wrong   = 0;
    if (state.shuffleOn) shuffle(state.order);
    show('quiz');
    renderQuestion();
    updateSidebar();
  });
  
  document.getElementById('new-quiz-btn').addEventListener('click', () => {
    show('start');
  });
  
  document.getElementById('review-btn').addEventListener('click', () => {
    buildReview();
    show('review');
  });
  
  // ── REVIEW ─────────────────────────────────────────
  function buildReview() {
    const list = document.getElementById('review-list');
    list.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
  
    state.order.forEach((qIdx, orderIdx) => {
      const q      = state.pool[qIdx];
      const chosen = state.answers[orderIdx];
      const isSkipped = chosen === undefined;
      const isCorrect = !isSkipped && chosen === q.answer;
      const isWrong   = !isSkipped && !isCorrect;
  
      const badgeClass = isSkipped ? 'skipped' : isCorrect ? 'correct' : 'wrong';
      const badgeText  = isSkipped ? 'Skipped' : isCorrect ? '✓ Correct' : '✗ Wrong';
  
      const item = document.createElement('div');
      item.className = `review-item`;
      item.dataset.result = badgeClass;
  
      let optionsHTML = '';
      q.options.forEach((opt, i) => {
        let cls = 'review-opt';
        if (i === q.answer) cls += ' is-correct';
        if (i === chosen && i !== q.answer) cls += ' was-chosen is-wrong';
        optionsHTML += `
          <div class="${cls}">
            <strong>${labels[i]}.</strong> ${opt}
            ${i === q.answer ? ' ✓' : ''}
            ${i === chosen && i !== q.answer ? ' ✗' : ''}
          </div>`;
      });
  
      item.innerHTML = `
        <div class="review-item-header">
          <span class="review-num">Q${String(orderIdx + 1).padStart(2, '0')}</span>
          <span class="review-badge ${badgeClass}">${badgeText}</span>
          <span class="review-unit">${q.unit}</span>
        </div>
        <p class="review-q">${q.question}</p>
        <div class="review-options">${optionsHTML}</div>
        <div class="review-explanation">💡 ${q.explanation}</div>
      `;
  
      list.appendChild(item);
    });
  }
  
  // Review filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.review-item').forEach(item => {
        if (filter === 'all') {
          item.classList.remove('hidden');
        } else {
          item.classList.toggle('hidden', item.dataset.result !== filter);
        }
      });
    });
  });
  
  document.getElementById('back-to-results-btn').addEventListener('click', () => {
    show('results');
  });
  
  // ── INIT ───────────────────────────────────────────
  totalCount.textContent = questions.length;