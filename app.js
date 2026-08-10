// ===================================
// CSCS Practice Exam - Application Logic
// ===================================

// ===================================
// Exam Configuration
// ===================================
const PASSING_SCORE = 67.5;
const SECONDS_PER_QUESTION = 60; // 1 minute per question, matching typical MC exam pacing

const EXAMS = {
    exam1: {
        title: 'Exam 1',
        sections: {
            'scientific-foundations': {
                title: 'Scientific Foundations',
                domains: ['Exercise Sciences', 'Sport Psychology', 'Nutrition'],
                get questions() { return SF_QUESTIONS; }
            },
            'practical-applied': {
                title: 'Practical/Applied',
                domains: ['Program Design', 'Exercise Technique', 'Program Implementation', 'Organization and Administration'],
                get questions() { return PA_QUESTIONS; }
            }
        }
    },
    exam2: {
        title: 'Exam 2 (Advanced)',
        sections: {
            'scientific-foundations': {
                title: 'Scientific Foundations',
                domains: ['Exercise Sciences', 'Sport Psychology', 'Nutrition'],
                get questions() { return SF2_QUESTIONS; }
            },
            'practical-applied': {
                title: 'Practical/Applied',
                domains: ['Program Design', 'Exercise Technique', 'Program Implementation', 'Organization and Administration'],
                get questions() { return PA2_QUESTIONS; }
            }
        }
    },
    exam3: {
        title: 'Exam 3 (Expert)',
        sections: {
            'scientific-foundations': {
                title: 'Scientific Foundations',
                domains: ['Exercise Sciences', 'Sport Psychology', 'Nutrition'],
                get questions() { return SF3_QUESTIONS; }
            },
            'practical-applied': {
                title: 'Practical/Applied',
                domains: ['Program Design', 'Exercise Technique', 'Program Implementation', 'Organization and Administration'],
                get questions() { return PA3_QUESTIONS; }
            }
        }
    }
};

function currentSections() { return EXAMS[state.examId].sections; }

const MODES = {
    full: {
        title: 'Full Exam',
        sectionIds: ['scientific-foundations', 'practical-applied']
    },
    'scientific-foundations': {
        title: 'Scientific Foundations',
        sectionIds: ['scientific-foundations']
    },
    'practical-applied': {
        title: 'Practical/Applied',
        sectionIds: ['practical-applied']
    }
};

// ===================================
// Application State
// ===================================
const state = {
    examId: 'exam1',
    modeId: 'full',
    sectionIds: [],           // ordered list of section ids for this run
    sectionIndex: 0,          // which section (in sectionIds) is currently active
    questions: [],            // questions for the CURRENT section
    userAnswers: {},          // keyed by question id, for the CURRENT section
    currentQuestionIndex: 0,
    quizStarted: false,
    quizCompleted: false,     // true once the CURRENT section has been submitted
    sectionResults: {},       // sectionId -> { questions, userAnswers, correctCount, percentage, ... }
    timerRemaining: 0,
    timerInterval: null
};

// ===================================
// DOM Elements
// ===================================
const elements = {
    welcomeScreen: document.getElementById('welcomeScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    startQuizBtn: document.getElementById('startQuizBtn'),
    totalQuestions: document.getElementById('totalQuestions'),
    timeLimitDisplay: document.getElementById('timeLimitDisplay'),
    progressIndicator: document.getElementById('progressIndicator'),
    timerDisplay: document.getElementById('timerDisplay'),
    timerText: document.getElementById('timerText'),
    sectionBannerName: document.getElementById('sectionBannerName'),
    sectionBannerSub: document.getElementById('sectionBannerSub'),
    sectionBannerBadge: document.getElementById('sectionBannerBadge'),
    questionNumber: document.getElementById('questionNumber'),
    questionDomainTag: document.getElementById('questionDomainTag'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    questionProgressFill: document.getElementById('questionProgressFill'),
    questionGrid: document.getElementById('questionGrid'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn'),
    resultsContent: document.getElementById('resultsContent'),
    retakeBtn: document.getElementById('retakeBtn'),
    examSelect: document.getElementById('examSelect'),
    examBankSelect: document.getElementById('examBankSelect')
};

// ===================================
// Welcome Screen Setup
// ===================================
function formatMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    if (hours === 0) return `${mins} min`;
    if (mins === 0) return `${hours} hr`;
    return `${hours} hr ${mins} min`;
}

function updateWelcomeStats() {
    const mode = MODES[state.modeId];
    const totalQuestions = mode.sectionIds.reduce((sum, id) => sum + currentSections()[id].questions.length, 0);
    const totalMinutes = Math.round((totalQuestions * SECONDS_PER_QUESTION) / 60);

    elements.totalQuestions.textContent = totalQuestions;
    elements.timeLimitDisplay.textContent = formatMinutes(totalMinutes);
}

function handleModeChange(e) {
    state.modeId = e.target.value;
    updateWelcomeStats();
}

function handleExamChange(e) {
    state.examId = e.target.value;
    updateWelcomeStats();
}

// ===================================
// Screen Navigation
// ===================================
function handleHashChange() {
    let hash = window.location.hash.substring(1) || 'welcome';
    if (!document.getElementById(`${hash}Screen`)) {
        hash = 'welcome';
    }
    showScreen(hash);
}

function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    const targetScreen = document.getElementById(`${screenName}Screen`);
    if (targetScreen) {
        targetScreen.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ===================================
// Timer
// ===================================
function startTimer(seconds) {
    stopTimer();
    state.timerRemaining = seconds;
    elements.timerDisplay.classList.add('active');
    renderTimer();
    state.timerInterval = setInterval(() => {
        state.timerRemaining--;
        renderTimer();
        if (state.timerRemaining <= 0) {
            stopTimer();
            autoSubmitOnTimeout();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function renderTimer() {
    const mins = Math.floor(Math.max(0, state.timerRemaining) / 60);
    const secs = Math.max(0, state.timerRemaining) % 60;
    elements.timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    elements.timerDisplay.classList.remove('warning', 'critical');
    if (state.timerRemaining <= 60) {
        elements.timerDisplay.classList.add('critical');
    } else if (state.timerRemaining <= 300) {
        elements.timerDisplay.classList.add('warning');
    }
}

function autoSubmitOnTimeout() {
    if (!state.quizCompleted) {
        submitSection(true);
    }
}

// ===================================
// Exam Flow
// ===================================
function startQuiz() {
    const mode = MODES[state.modeId];
    state.sectionIds = mode.sectionIds.slice();
    state.sectionIndex = 0;
    state.sectionResults = {};
    startSection();
}

function startSection() {
    const sectionId = state.sectionIds[state.sectionIndex];
    const section = currentSections()[sectionId];

    state.questions = section.questions;
    state.userAnswers = {};
    state.currentQuestionIndex = 0;
    state.quizStarted = true;
    state.quizCompleted = false;

    elements.sectionBannerName.textContent = section.title;
    elements.sectionBannerSub.textContent = `Section ${state.sectionIndex + 1} of ${state.sectionIds.length}`;
    elements.sectionBannerBadge.textContent = 'In Progress';
    elements.submitBtn.querySelector('span').textContent =
        state.sectionIndex === state.sectionIds.length - 1 ? 'Submit Section' : 'Submit & Continue';

    buildQuestionNavigator();
    window.location.hash = 'quiz';
    displayQuestion(0);
    updateProgressIndicator();
    startTimer(state.questions.length * SECONDS_PER_QUESTION);
}

function buildQuestionNavigator() {
    elements.questionGrid.innerHTML = '';
    state.questions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'question-nav-btn';
        btn.textContent = index + 1;
        btn.addEventListener('click', () => goToQuestion(index));
        elements.questionGrid.appendChild(btn);
    });
}

function displayQuestion(index) {
    state.currentQuestionIndex = index;
    const question = state.questions[index];

    elements.questionNumber.textContent = `Question ${index + 1} of ${state.questions.length}`;
    elements.questionDomainTag.textContent = question.domain;
    elements.questionText.textContent = question.text;

    const existingExplanation = document.getElementById('answerExplanation');
    if (existingExplanation) existingExplanation.remove();

    const progress = ((index + 1) / state.questions.length) * 100;
    elements.questionProgressFill.style.width = `${progress}%`;

    elements.optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item';
        optionDiv.dataset.option = option.letter;

        const isSelected = state.userAnswers[question.id] === option.letter;
        if (isSelected) optionDiv.classList.add('selected');

        optionDiv.innerHTML = `
            <div class="option-radio"></div>
            <div class="option-label">${option.letter}) ${option.text}</div>
        `;

        optionDiv.addEventListener('click', () => {
            if (!state.quizCompleted) {
                selectOption(question.id, option.letter);
            }
        });
        elements.optionsContainer.appendChild(optionDiv);
    });

    if (state.quizCompleted) {
        showAnswerFeedback(question);
        const explanationDiv = document.createElement('div');
        explanationDiv.id = 'answerExplanation';
        explanationDiv.className = 'explanation-box';
        explanationDiv.innerHTML = `
            <h4><span class="icon">💡</span> Explanation</h4>
            <p>${question.explanation}</p>
        `;
        elements.questionText.parentNode.appendChild(explanationDiv);
    }

    elements.prevBtn.disabled = index === 0;

    if (index === state.questions.length - 1) {
        elements.nextBtn.style.display = 'none';
        elements.submitBtn.style.display = 'inline-flex';
        elements.submitBtn.disabled = !state.quizCompleted && !state.userAnswers[question.id];
    } else {
        elements.nextBtn.style.display = 'inline-flex';
        elements.submitBtn.style.display = 'none';
        elements.nextBtn.disabled = !state.quizCompleted && !state.userAnswers[question.id];
    }

    if (state.quizCompleted) {
        elements.nextBtn.disabled = false;
        elements.submitBtn.disabled = false;
    }

    updateQuestionNavigator();
    updateProgressIndicator();
}

function selectOption(questionId, optionLetter) {
    state.userAnswers[questionId] = optionLetter;

    const optionItems = elements.optionsContainer.querySelectorAll('.option-item');
    optionItems.forEach(item => {
        item.classList.toggle('selected', item.dataset.option === optionLetter);
    });

    if (state.currentQuestionIndex < state.questions.length - 1) {
        elements.nextBtn.disabled = false;
    } else {
        elements.submitBtn.disabled = false;
    }

    updateQuestionNavigator();
}

function updateQuestionNavigator() {
    const navButtons = elements.questionGrid.querySelectorAll('.question-nav-btn');
    navButtons.forEach((btn, index) => {
        btn.classList.remove('current', 'answered', 'correct', 'incorrect');
        const question = state.questions[index];
        if (index === state.currentQuestionIndex) btn.classList.add('current');

        if (state.quizCompleted) {
            const isCorrect = state.userAnswers[question.id] === question.correctAnswer;
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (state.userAnswers[question.id]) {
            btn.classList.add('answered');
        }
    });
}

function updateProgressIndicator() {
    const answeredCount = Object.keys(state.userAnswers).length;
    const totalCount = state.questions.length;
    const textEl = elements.progressIndicator.querySelector('.progress-text');
    textEl.textContent = state.quizCompleted ? 'Review Mode' : `${answeredCount} of ${totalCount} answered`;
}

function goToQuestion(index) { displayQuestion(index); }
function previousQuestion() { if (state.currentQuestionIndex > 0) displayQuestion(state.currentQuestionIndex - 1); }
function nextQuestion() { if (state.currentQuestionIndex < state.questions.length - 1) displayQuestion(state.currentQuestionIndex + 1); }

function handlePrimaryAdvance() {
    if (state.quizCompleted) {
        // Review mode: Submit button on the last question just returns to results.
        window.location.hash = 'results';
        return;
    }
    submitSection(false);
}

function submitSection(fromTimeout) {
    if (!fromTimeout) {
        const unansweredCount = state.questions.length - Object.keys(state.userAnswers).length;
        if (unansweredCount > 0 && !confirm(`You have ${unansweredCount} unanswered question(s) in this section. Submit anyway?`)) {
            return;
        }
    }

    stopTimer();
    state.quizCompleted = true;
    elements.sectionBannerBadge.textContent = 'Submitted';

    const sectionId = state.sectionIds[state.sectionIndex];
    state.sectionResults[sectionId] = computeSectionResult(sectionId, state.questions, state.userAnswers);

    const isLastSection = state.sectionIndex === state.sectionIds.length - 1;
    if (isLastSection) {
        elements.timerDisplay.classList.remove('active', 'warning', 'critical');
        updateProgressIndicator();
        renderResults();
        window.location.hash = 'results';
    } else {
        state.sectionIndex++;
        startSection();
    }
}

// ===================================
// Scoring
// ===================================
function computeSectionResult(sectionId, questions, userAnswers) {
    let correctCount = 0;
    const domainStats = {};
    const levelStats = { Recall: { correct: 0, total: 0 }, Application: { correct: 0, total: 0 }, Analysis: { correct: 0, total: 0 } };

    questions.forEach(q => {
        const isCorrect = userAnswers[q.id] === q.correctAnswer;
        if (isCorrect) correctCount++;

        if (!domainStats[q.domain]) domainStats[q.domain] = { correct: 0, total: 0 };
        domainStats[q.domain].total++;
        if (isCorrect) domainStats[q.domain].correct++;

        levelStats[q.cognitiveLevel].total++;
        if (isCorrect) levelStats[q.cognitiveLevel].correct++;
    });

    const total = questions.length;
    const percentage = total > 0 ? (correctCount / total) * 100 : 0;

    return {
        sectionId,
        title: currentSections()[sectionId].title,
        questions,
        userAnswers: Object.assign({}, userAnswers),
        correctCount,
        incorrectCount: total - correctCount,
        total,
        percentage,
        passed: percentage >= PASSING_SCORE,
        domainStats,
        levelStats
    };
}

// ===================================
// Results Rendering
// ===================================
function renderResults() {
    elements.resultsContent.innerHTML = '';

    state.sectionIds.forEach(sectionId => {
        const result = state.sectionResults[sectionId];
        elements.resultsContent.appendChild(buildSectionResultCard(result));
    });

    if (state.sectionIds.length > 1) {
        elements.resultsContent.appendChild(buildOverallSummaryCard());
    }
}

function buildSectionResultCard(result) {
    const card = document.createElement('div');
    card.className = 'results-card';

    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (result.percentage / 100) * circumference;

    const domainRows = Object.entries(result.domainStats).map(([domain, s]) => {
        const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
        return `<tr>
            <td class="domain-name">${domain}</td>
            <td class="num-cell">${s.correct}/${s.total}</td>
            <td><div class="breakdown-bar-wrap"><div class="breakdown-bar-track"><div class="breakdown-bar-fill" style="width:${pct}%"></div></div><span class="num-cell">${pct}%</span></div></td>
        </tr>`;
    }).join('');

    const levelRows = ['Recall', 'Application', 'Analysis'].map(level => {
        const s = result.levelStats[level];
        if (s.total === 0) return '';
        const pct = Math.round((s.correct / s.total) * 100);
        return `<tr>
            <td class="level-name">${level}</td>
            <td class="num-cell">${s.correct}/${s.total}</td>
            <td><div class="breakdown-bar-wrap"><div class="breakdown-bar-track"><div class="breakdown-bar-fill" style="width:${pct}%"></div></div><span class="num-cell">${pct}%</span></div></td>
        </tr>`;
    }).join('');

    card.innerHTML = `
        <div class="results-section-block">
            <div class="results-section-header">
                <h3>${result.title}</h3>
                <div class="results-header-actions">
                    <span class="pass-badge ${result.passed ? 'pass' : 'fail'}">${result.passed ? '✓ Passed' : '✗ Not Passed'}</span>
                    <button class="btn btn-secondary btn-small review-section-btn" type="button">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" />
                        </svg>
                        <span>Review Answers</span>
                    </button>
                </div>
            </div>
            <div class="results-body">
                <div class="score-display">
                    <div class="score-circle">
                        <svg class="score-ring" viewBox="0 0 200 200">
                            <defs>
                                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="hsl(260,85%,58%)" />
                                    <stop offset="100%" stop-color="hsl(200,90%,55%)" />
                                </linearGradient>
                            </defs>
                            <circle class="score-ring-bg" cx="100" cy="100" r="85" />
                            <circle class="score-ring-fill" cx="100" cy="100" r="85"
                                style="stroke-dashoffset:${offset}" />
                        </svg>
                        <div class="score-content">
                            <div class="score-percentage">${Math.round(result.percentage)}%</div>
                            <div class="score-fraction">${result.correctCount}/${result.total}</div>
                        </div>
                    </div>
                    <div class="pass-line-note">Passing score: ${PASSING_SCORE}%</div>
                    <div class="results-stats-mini">
                        <div class="result-stat correct">
                            <div class="result-stat-icon">✓</div>
                            <div class="result-stat-value">${result.correctCount}</div>
                            <div class="result-stat-label">Correct</div>
                        </div>
                        <div class="result-stat incorrect">
                            <div class="result-stat-icon">✗</div>
                            <div class="result-stat-value">${result.incorrectCount}</div>
                            <div class="result-stat-label">Incorrect</div>
                        </div>
                    </div>
                </div>
                <div class="results-breakdown">
                    <div class="breakdown-group">
                        <h4>By Domain</h4>
                        <table class="breakdown-table">
                            <thead><tr><th>Domain</th><th>Score</th><th></th></tr></thead>
                            <tbody>${domainRows}</tbody>
                        </table>
                    </div>
                    <div class="breakdown-group">
                        <h4>By Cognitive Level</h4>
                        <table class="breakdown-table">
                            <thead><tr><th>Level</th><th>Score</th><th></th></tr></thead>
                            <tbody>${levelRows}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    card.querySelector('.review-section-btn').addEventListener('click', () => reviewAnswers(result.sectionId));
    return card;
}

function buildOverallSummaryCard() {
    const card = document.createElement('div');
    card.className = 'results-card overall-results-card';

    const results = state.sectionIds.map(id => state.sectionResults[id]);
    const totalCorrect = results.reduce((sum, r) => sum + r.correctCount, 0);
    const totalQuestions = results.reduce((sum, r) => sum + r.total, 0);
    const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);
    const allPassed = results.every(r => r.passed);

    card.innerHTML = `
        <div class="results-icon" style="background:${allPassed ? 'var(--gradient-success)' : 'var(--gradient-danger)'}">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <h2>${allPassed ? 'Exam Passed!' : 'Keep Practicing'}</h2>
        <p class="results-message">
            Overall: ${totalCorrect}/${totalQuestions} (${overallPercentage}%). ${allPassed
            ? 'Both sections cleared the 67.5% passing line.'
            : 'The CSCS exam requires passing each section independently — review the section(s) below the 67.5% line.'}
        </p>
    `;
    return card;
}

function reviewAnswers(sectionId) {
    const result = state.sectionResults[sectionId];

    state.sectionIndex = state.sectionIds.indexOf(sectionId);
    state.questions = result.questions;
    state.userAnswers = Object.assign({}, result.userAnswers);
    state.currentQuestionIndex = 0;
    state.quizStarted = true;
    state.quizCompleted = true;

    elements.sectionBannerName.textContent = result.title;
    elements.sectionBannerSub.textContent = `Section ${state.sectionIndex + 1} of ${state.sectionIds.length}`;
    elements.sectionBannerBadge.textContent = 'Submitted';
    elements.submitBtn.querySelector('span').textContent = 'Back to Results';

    buildQuestionNavigator();
    window.location.hash = 'quiz';
    displayQuestion(0);
    updateProgressIndicator();
}

function showAnswerFeedback(question) {
    const userAnswer = state.userAnswers[question.id];
    const optionItems = elements.optionsContainer.querySelectorAll('.option-item');
    optionItems.forEach(item => {
        const optionLetter = item.dataset.option;
        if (optionLetter === question.correctAnswer) {
            item.classList.add('correct');
        } else if (optionLetter === userAnswer) {
            item.classList.add('incorrect');
        }
        item.style.cursor = 'default';
    });
}

function retakeQuiz() {
    startQuiz();
}

// ===================================
// Event Wiring
// ===================================
window.addEventListener('DOMContentLoaded', () => {
    updateWelcomeStats();
    handleHashChange();
});
window.addEventListener('hashchange', handleHashChange);
elements.examSelect.addEventListener('change', handleModeChange);
elements.examBankSelect.addEventListener('change', handleExamChange);
elements.startQuizBtn.addEventListener('click', startQuiz);
elements.prevBtn.addEventListener('click', previousQuestion);
elements.nextBtn.addEventListener('click', nextQuestion);
elements.submitBtn.addEventListener('click', handlePrimaryAdvance);
elements.retakeBtn.addEventListener('click', retakeQuiz);
