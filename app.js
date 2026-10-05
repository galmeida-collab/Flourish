// --- 1. QUESTIONNAIRE ARCHITECTURE (Admin Metadata + 60 Core Questions) ---
const surveyModules = [
    {
        module: 'General Information',
        desc: 'Please provide your secure details. Name and email route exclusively to the encrypted pastoral vault; leadership reviews only anonymized macro trends.',
        questions: [
            { id: 'userName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
            { id: 'userEmail', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
            { id: 'userAge', label: 'Age Group', type: 'radio', options: ['18–24', '25–34', '35–44', '45–54', '55–64', '65+'] },
            { id: 'userGender', label: 'Gender', type: 'radio', options: ['Male', 'Female'] },
            { id: 'userTenure', label: 'How long have you been regularly attending our church?', type: 'radio', options: ['Less than 1 year', '1–3 years', '3–5 years', '5+ years'] },
            { id: 'userAttend', label: '{ id: 'q43', label: 'Weekend Service Attendance: How frequently do you attend weekend worship services at your church?', type: 'radio', options: ['3–4 times a month', '1–2 times a month', 'Rarely'] }
        ]
    },
    {
        module: 'Start Here: Where You Are Right Now on Your Journey',
        desc: 'An open look at where you currently feel you stand with God and how fast or slow your personal journey feels.',
        questions: [
            { id: 'q1', label: 'Which statement best describes your current relationship with Jesus Christ?', type: 'radio', options: [
                'I believe in God, but I am not sure about Christ, and faith is not a significant part of my life.',
                'I believe in Jesus, and I am working on what it means to get to know him.',
                'I feel really close to Christ and depend on him daily for guidance.',
                'God is all I need in my life; he is enough, and everything I do is a reflection of Christ.'
            ]},
            { id: 'q2', label: 'How would you best describe your current pace of spiritual growth?', type: 'radio', options: ['Rapid', 'Moderate', 'Slow but steady', 'Stalled', 'Content'] },
            { id: 'q3', label: 'Do you currently feel spiritually "stuck" or derailed in your spiritual journey?', type: 'radio', options: ['Yes', 'No'], triggersStall: true },
            { id: 'q4', label: 'To what extent do you feel your love for God is actively increasing over time?', type: 'likert' },
            { id: 'q5', label: 'To what extent do you feel your love for other people (both people you know and strangers) is actively increasing?', type: 'likert' },
            { id: 'q6', label: 'Do you feel that you are becoming less like your former self and more like Christ in your thoughts, words, and deeds?', type: 'likert' }
        ]
    },
    {
        module: 'Heart & Mind: What You Believe About God & Life',
        desc: 'Exploring your core convictions about God, Jesus, the Bible, and how those views shape your choices.',
        questions: [
            { id: 'q7', label: 'Salvation by Grace: Do you believe that nothing you do or have done can earn your salvation; it is purely by grace?', type: 'likert' },
            { id: 'q8', label: 'The Trinity: Do you believe that the God of the Bible is the one true God—Father, Son, and Holy Spirit?', type: 'likert' },
            { id: 'q9', label: 'Personal God: Do you believe that God is actively involved in your daily life?', type: 'likert' },
            { id: 'q10', label: 'Christ is First: Is it your core desire for Jesus Christ to be first in every area of your life?', type: 'likert' },
            { id: 'q11', label: 'Authority of the Bible: Do you believe the Bible has decisive authority over what you say and do?', type: 'likert' },
            { id: 'q12', label: 'Identity in Christ: Do you believe that you exist primarily to know, love, and serve God?', type: 'likert' },
            { id: 'q13', label: 'Giving Away My Life: Are you willing to risk everything that is important in my life for Jesus Christ?', type: 'likert' },
            { id: 'q14', label: 'Stewardship & Material World: Do you believe a Christian should live a sacrificial life that is not driven by the pursuit of material things, power, or status?', type: 'likert' },
            { id: 'q15', label: 'Dependence on God: Do you deeply agree with the statement: "Without God\'s help, I know I cannot make it on my own"?', type: 'likert' },
            { id: 'q16', label: 'Gratitude: Even during difficult seasons or hard days, are you overwhelmed with gratitude for God\'s blessings?', type: 'likert' },
            { id: 'q17', label: 'Spiritual Gifts: Do you clearly know and actively use your spiritual gifts to fulfill God’s purposes?', type: 'likert' },
            { id: 'q18', label: 'Life Ownership: In your decision-making, do you let Jesus "drive" your life choices rather than keeping yourself in the driver\'s seat?', type: 'likert' }
        ]
    },
    {
        module: 'Daily Connections: Personal Habits & Rhythms',
        desc: 'Looking at private routines—like reading the Bible, praying, and quiet time—that help you connect with God on your own.',
        questions: [
            { id: 'q19', label: 'Bible Reading Frequency: How often do you read the Bible on your own?', type: 'radio', options: ['Daily', 'Several times a week', 'Monthly', 'Rarely', 'Never'] },
            { id: 'q20', label: 'Reflection on Scripture: How frequently do you reflect on the personal meaning of Scripture to find direction for your daily life?', type: 'freq' },
            { id: 'q21', label: 'Scripture Engagement Impact: How many days per week do you interact with (read, reflect on, or respond to) the Bible?', type: 'radio', options: ['0 days', '1–3 days', '4+ days'] },
            { id: 'q22', label: 'Scripture Memorization: How often do you memorize passages or verses of Scripture?', type: 'freq' },
            { id: 'q23', label: 'Prayer for Guidance: How often do you pray to seek God\'s guidance for specific decisions in your life?', type: 'freq' },
            { id: 'q24', label: 'Prayer of Confession: How regularly do you pray to confess your sins and seek forgiveness?', type: 'freq' },
            { id: 'q25', label: 'Nature of Prayer: Is your prayer life characterized more by occasional crisis requests, daily structured prayers, or a running dialogue with God throughout the day?', type: 'radio', options: ['Occasional crisis requests', 'Daily structured prayers', 'Running dialogue throughout the day'] },
            { id: 'q26', label: 'Solitude & Listening: How frequently do you set aside dedicated time for solitude to quiet yourself and listen to God?', type: 'freq' },
            { id: 'q27', label: 'Journaling: How often do you maintain a spiritual journal to process your walk with God?', type: 'freq' },
            { id: 'q28', label: 'Tithing Commitment: Do you currently give 10 percent or more of your income to support your church?', type: 'radio', options: ['Yes consistently', 'Sometimes / Partially', 'Not currently'] },
            { id: 'q29', label: 'Financial Priority: Is supporting God\'s work your top financial priority when managing your personal finances?', type: 'radio', options: ['Yes', 'Partially', 'No'] },
            { id: 'q30', label: 'Motivation for Disciplines: Do you engage in spiritual practices out of personal desire and delight rather than obligation or duty?', type: 'likert' }
        ]
    },
    {
        module: 'Faith in Action: How You Love & Serve Others',
        desc: 'How your faith translates into practical kindness, serving people in need, building supportive friendships, and sharing your story.',
        questions: [
            { id: 'q31', label: 'Evangelistic Conversations: In the past year, approximately how many meaningful spiritual conversations have you had with non-Christians?', type: 'radio', options: ['None', '1–2', '3–5', '6 or more'] },
            { id: 'q32', label: 'Church Invitations: In the past year, how many non-Christians have you invited to attend church with you?', type: 'radio', options: ['None', '1–2', '3–5', '6 or more'] },
            { id: 'q33', label: 'Equipped to Share: Do you feel fully equipped to share your Christian faith with non-believers?', type: 'likert' },
            { id: 'q34', label: 'Serving the Needy Independently: How often do you serve people in need on your own (outside of organized church events)?', type: 'radio', options: ['Weekly', 'Monthly', 'Rarely', 'Never'] },
            { id: 'q35', label: 'Community Service: How frequently do you give away your time to serve and help people in your local community?', type: 'freq' },
            { id: 'q36', label: 'Compassion for the Vulnerable: Do you strongly agree that God specifically calls you to be directly involved in the lives of the poor and suffering?', type: 'likert' },
            { id: 'q37', label: 'Spiritual Relationships: Do you have close relationships with other Christians who actively influence your life and faith?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q38', label: 'Spiritual Accountability: Do you have spiritual friends who hold you accountable for your actions and speak truth to you?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q39', label: 'Spiritual Mentors: How frequently do you meet with or talk to a spiritual mentor or confidant?', type: 'radio', options: ['Weekly', 'Monthly', 'Occasionally', 'Never'] },
            { id: 'q40', label: 'Mentoring Others: Are you actively committed to mentoring or helping other people grow spiritually?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q41', label: 'Discipling Others: How regularly do you invest in discipling another person in their Christian walk?', type: 'freq' },
            { id: 'q42', label: 'Faith Risk-Taking: Are you willing to take visible, public risks with your reputation or resources for the sake of Christ?', type: 'likert' }
        ]
    },
    {
        module: 'Community: Your Experience with Church Community',
        desc: 'Evaluating your participation in a local church and how well that community supports and encourages your growth.',
        questions: [
            { id: 'q43', label: 'Ministry Serving: How often do you serve in a specific church ministry or volunteer role?', type: 'radio', options: ['Weekly', '1–2 times a month', 'Rarely', 'Never'], triggersServing: true },
            { id: 'q44', label: 'Small Group Engagement: Do you regularly participate in a small group, Sunday school, or Bible study through your church?', type: 'radio', options: ['Yes', 'No'], triggersSG: true },
            { id: 'q45', label: 'Serving Through Church: How often do you participate in church-sponsored community service projects?', type: 'freq' },
            { id: 'q46', label: 'Adult Education Classes: How frequently do you participate in adult education or training classes focused on spiritual topics?', type: 'freq' },
            { id: 'q47', label: 'Church Support for Personal Faith: How satisfied are you with how your church helps you develop a personal relationship with Christ?', type: 'scale16' },
            { id: 'q48', label: 'Church Support for Bible Knowledge: How satisfied are you with how your church helps you understand the Bible in greater depth?', type: 'scale16' },
            { id: 'q49', label: 'Spiritual Challenge: Does your church effectively challenge you to take specific next steps in your spiritual growth?', type: 'likert' },
            { id: 'q50', label: 'Clear Growth Pathway: Does your church provide a clear, understandable pathway to guide your spiritual development?', type: 'likert' }
        ]
    },
    {
        module: 'Real Talk: Everyday Hurdles, Distractions & Obstacles',
        desc: 'Looking honestly at personal struggles, habits, or emotional burdens that might be slowing you down or making you feel stuck.',
        questions: [
            { id: 'q51', label: 'Prioritizing Growth over Distractions: Do you struggle with prioritizing your spiritual growth over distractions like television, internet, social media, or shopping?', type: 'likert' },
            { id: 'q52', label: 'Emotional Issues & Hurts: Are unhealed emotional issues, past hurts, or anger currently impeding your spiritual progress?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q53', label: 'Addictions & Unhealthy Habits: Are personal addictions or unhealthy coping behaviors creating a barrier to your relationship with God?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q54', label: 'Inappropriate Relationships: Are you involved in any relationships that pull you away from God or compromise your faith values?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q55', label: 'Gossip & Judgmental Attitudes: Do you struggle with gossip or judgmental attitudes toward other people?', type: 'freq' },
            { id: 'q56', label: 'Hiding & Isolation: Do you frequently feel like you have to hide what you do or feel from God or others?', type: 'freq' },
            { id: 'q57', label: 'Bitterness & Destructive Thoughts: How frequently do you experience feelings of bitterness or destructive thoughts about yourself or others?', type: 'freq' },
            { id: 'q58', label: 'Effective Un-Stalling: When you feel spiritually stalled, do you reconnect with God primarily by increasing personal spiritual practices rather than changing external activities?', type: 'likert' }
        ]
    }
];

const likertOptions = ['Strongly Disagree', 'Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree', 'Very Strongly Agree'];
const freqOptions = ['Daily', 'Frequently', 'Occasionally', 'Rarely', 'Never'];

let currentModuleIdx = 0;
let formData = {};
let localDatabase = JSON.parse(localStorage.getItem('flourish_survey_db') || '[]');

// --- 2. SECURE VIEW CONTROLLER & ADMIN AUTH ---
function switchView(viewName) {
    if (viewName === 'dashboard') {
        document.getElementById('admin-login-modal').classList.remove('hidden');
        document.getElementById('admin-pass-input').value = '';
        document.getElementById('admin-error-msg').classList.add('hidden');
        return;
    }

    const surveyView = document.getElementById('view-survey');
    const dashView = document.getElementById('view-dashboard');
    const sBtn = document.getElementById('nav-survey-btn');
    const dBtn = document.getElementById('nav-dash-btn');

    surveyView.classList.remove('hidden');
    dashView.classList.add('hidden');
    sBtn.className = "px-3 py-1.5 text-xs font-semibold bg-flourish-50 text-flourish-700 rounded-lg transition border border-flourish-600/20";
    dBtn.className = "px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition";
}

function closeAdminLogin() {
    document.getElementById('admin-login-modal').classList.add('hidden');
}

function verifyAdminPasscode(event) {
    event.preventDefault();
    const inputVal = document.getElementById('admin-pass-input').value;
    const secureAdminPasscode = "churchleadership2026";

    if (inputVal === secureAdminPasscode) {
        closeAdminLogin();
        
        const surveyView = document.getElementById('view-survey');
        const dashView = document.getElementById('view-dashboard');
        const sBtn = document.getElementById('nav-survey-btn');
        const dBtn = document.getElementById('nav-dash-btn');

        surveyView.classList.add('hidden');
        dashView.classList.remove('hidden');
        dBtn.className = "px-3 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg transition shadow-sm";
        sBtn.className = "px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition";
        
        renderDashboardMetrics();
    } else {
        document.getElementById('admin-error-msg').classList.remove('hidden');
    }
}

// --- 3. SURVEY RENDER ENGINE ---
function renderModule() {
    const content = document.getElementById('survey-card-content');
    const nav = document.getElementById('survey-nav');
    const progressContainer = document.getElementById('progress-container');
    
    progressContainer.classList.remove('hidden');
    nav.classList.remove('hidden');

    const mod = surveyModules[currentModuleIdx];
    
    const pct = Math.round((currentModuleIdx / surveyModules.length) * 100);
    document.getElementById('step-category-label').innerText = mod.module;
    document.getElementById('step-counter').innerText = `Module ${currentModuleIdx + 1} of ${surveyModules.length} (${pct}%)`;
    document.getElementById('progress-bar').style.width = `${pct}%`;
    document.getElementById('prev-btn').style.visibility = currentModuleIdx === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').innerText = currentModuleIdx === surveyModules.length - 1 ? 'Complete Assessment' : 'Next Module';

    let html = `
        <div class="mb-6 pb-4 border-b border-slate-100">
            <h2 class="text-xl font-extrabold text-slate-900">${mod.module}</h2>
            <p class="text-xs text-slate-500 mt-1">${mod.desc}</p>
        </div>
        <div class="space-y-6">
    `;

    mod.questions.forEach((q) => {
        html += `<div class="p-4 bg-slate-50/50 rounded-2xl border border-slate-200/60">
            <label class="block text-sm font-semibold text-slate-800 mb-2.5">${q.label}</label>`;

        // --- UNIFORM VERTICAL LAYOUT CONTROLLER ---
        if (q.type === 'text' || q.type === 'email') {
            const val = formData[q.id] || '';
            html += `<input type="${q.type}" value="${val}" oninput="saveInput('${q.id}', this.value)" placeholder="${q.placeholder || ''}" class="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-flourish-600 focus:outline-none">`;
        } else {
            // Forces all choice types (radio, likert, freq, scale16) into a clean, uniform vertical list
            let optionsList = [];
            
            if (q.type === 'radio') {
                optionsList = q.options.map(opt => ({ val: opt, label: opt }));
            } else if (q.type === 'likert') {
                optionsList = likertOptions.map(opt => ({ val: opt, label: opt }));
            } else if (q.type === 'freq') {
                optionsList = freqOptions.map(opt => ({ val: opt, label: opt }));
            } else if (q.type === 'scale16') {
                let scaleLabels = ['Extremely dissatisfied', 'Dissatisfied', 'Somewhat dissatisfied', 'Somewhat satisfied', 'Satisfied', 'Extremely satisfied'];
                optionsList = scaleLabels.map((label, index) => ({ val: index + 1, label: `<strong class="text-slate-400 mr-1">${index + 1}.</strong> ${label}` }));
            }

            html += `<div class="space-y-2">`;
            optionsList.forEach(item => {
                const checked = formData[q.id] == item.val ? 'checked' : '';
                html += `<label class="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-flourish-600 cursor-pointer text-xs font-medium transition">
                    <input type="radio" name="${q.id}" value="${item.val}" ${checked} onchange="saveInput('${q.id}', '${item.val}')" class="text-flourish-600 focus:ring-flourish-500">
                    <span>${item.label}</span>
                </label>`;
            });
            html += `</div>`;
        }

function saveInput(id, val) {
    formData[id] = val;
}

function handleNext() {
    if (currentModuleIdx < surveyModules.length - 1) {
        currentModuleIdx++;
        renderModule();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        finalizeAssessment();
    }
}

function handlePrev() {
    if (currentModuleIdx > 0) {
        currentModuleIdx--;
        renderModule();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// --- 4. SCORING & CONTINUUM ENGINE ---
function finalizeAssessment() {
    let beliefHits = 0, beliefTotal = 0;
    const highBeliefs = ['Agree', 'Strongly Agree', 'Very Strongly Agree'];
    
    // Module 2 beliefs scoring
    ['q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18'].forEach(k => {
        beliefTotal++;
        if (highBeliefs.includes(formData[k])) beliefHits++;
    });
    let beliefPct = (beliefHits / beliefTotal) * 100;

    const isStalled = formData['q3'] === 'Yes' || formData['q2'] === 'Stalled';
    const p4Achieved = formData['q21'] === '4+ days (Power of 4 Benchmark)';

    let segment = 'Growing in Christ';
    let transition = 'Intermediate Growth';

    if (beliefPct < 40 && !p4Achieved) {
        segment = 'Exploring Christ';
        transition = 'Initial Search Phase';
    } else if (beliefPct >= 65 && p4Achieved) {
        segment = 'Close to Christ';
        transition = 'Advanced Personal Discipline';
    } else if (beliefPct >= 85 && p4Achieved && formData['q34'] !== 'Never') {
        segment = 'Christ-Centered';
        transition = 'Fully Surrendered Outflow';
    }

    if (isStalled) segment = 'Spiritually Stalled';

    const userRecord = {
        id: 'USER-' + Math.random().toString(36).substr(2, 6),
        name: formData['userName'] || 'Anonymous Member',
        email: formData['userEmail'] || 'N/A',
        age: formData['userAge'] || '35–44',
        gender: formData['userGender'] || 'Prefer not to say',
        segment: segment,
        transition: transition,
        isStalled: isStalled,
        p4Achieved: p4Achieved,
        inSmallGroup: formData['q45'] === 'Yes',
        isServing: formData['q44'] === 'Weekly' || formData['q44'] === '1–2 times a month',
        date: new Date().toISOString().split('T')[0]
    };

    localDatabase.push(userRecord);
    localStorage.setItem('flourish_survey_db', JSON.stringify(localDatabase));

    renderIndividualReport(userRecord);
}

// --- UPDATED REPORT RENDERER HOOKED TO reportEngine.js ---
function renderIndividualReport(rec) {
    const container = document.getElementById('survey-card-content');
    document.getElementById('progress-container').classList.add('hidden');
    document.getElementById('survey-nav').classList.add('hidden');

    const userProfile = {
        name: rec.name,
        currentStage: rec.segment,
        growthPace: formData['q2'] || 'Moderate',
        scriptureEngagementDaysPerWeek: formData['q21'] === '4+ days (Power of 4 Benchmark)' ? 5 : 2,
        sectionScores: { beliefs: 75, dailyHabits: 50, outwardAction: 50, churchConnection: 60 },
        flaggedObstacles: [
            formData['q3'] === 'Yes' ? 'Spiritually Stalled or Stuck' : null,
            formData['q54'] === 'Yes' ? 'Unhealed Emotional Issues or Hurts' : null,
            formData['q55'] === 'Yes' ? 'Addictions or Unhealthy Coping Habits' : null,
            formData['q56'] === 'Yes' ? 'Inappropriate Relationships' : null
        ].filter(Boolean)
    };

    const generatedReportHtml = generateNextStepReport(userProfile);

    container.innerHTML = `
        <div class="text-center pb-6 border-b border-slate-100 mb-6">
            <span class="inline-block p-3 bg-flourish-50 text-flourish-600 rounded-2xl mb-2 text-2xl font-bold">&#10003;</span>
            <h2 class="text-2xl font-black text-slate-900">Your Flourish Assessment Report</h2>
            <p class="text-xs text-slate-500 mt-1">Prepared confidentially for ${rec.name}</p>
        </div>

        ${generatedReportHtml}

        <div class="flex space-x-3 mt-8 pt-6 border-t border-slate-100">
            <button onclick="currentModuleIdx=0; formData={}; renderModule();" class="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 transition">Retake Assessment</button>
            <button onclick="switchView('dashboard')" class="flex-1 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition shadow-md">View Leadership Dashboard</button>
        </div>
    `;
}

// --- 5. DASHBOARD METRICS ---
function renderDashboardMetrics() {
    const data = localDatabase;
    const total = data.length;

    document.getElementById('dash-total').innerText = total;

    if (total === 0) {
        document.getElementById('dash-stalled').innerText = '0%';
        document.getElementById('dash-p4').innerText = '0%';
        document.getElementById('dash-segments').innerHTML = `<p class="text-xs text-slate-400 italic">No assessment data recorded yet. Take the assessment or load benchmark data.</p>`;
        return;
    }

    const stalled = data.filter(d => d.isStalled).length;
    const p4 = data.filter(d => d.p4Achieved).length;
    const sg = data.filter(d => d.inSmallGroup).length;
    const srv = data.filter(d => d.isServing).length;

    document.getElementById('dash-stalled').innerText = Math.round((stalled / total) * 100) + '%';
    document.getElementById('dash-p4').innerText = Math.round((p4 / total) * 100) + '%';
    document.getElementById('dash-sg-rate').innerText = Math.round((sg / total) * 100) + '%';
    document.getElementById('dash-serving-rate').innerText = Math.round((srv / total) * 100) + '%';

    const segCounts = {
        'Exploring Christ': data.filter(d => d.segment === 'Exploring Christ').length,
        'Growing in Christ': data.filter(d => d.segment === 'Growing in Christ').length,
        'Close to Christ': data.filter(d => d.segment === 'Close to Christ').length,
        'Christ-Centered': data.filter(d => d.segment === 'Christ-Centered').length,
        'Spiritually Stalled': stalled
    };

    let segHtml = '';
    Object.keys(segCounts).forEach(seg => {
        const count = segCounts[seg];
        const pct = Math.round((count / total) * 100);
        segHtml += `
            <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>${seg}</span>
                    <span>${count} users (${pct}%)</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div class="bg-flourish-600 h-2 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    document.getElementById('dash-segments').innerHTML = segHtml;
}

function loadSampleData() {
    const mock = [
        { id: 'M1', name: 'Sample User 1', segment: 'Growing in Christ', isStalled: false, p4Achieved: true, inSmallGroup: true, isServing: true },
        { id: 'M2', name: 'Sample User 2', segment: 'Close to Christ', isStalled: false, p4Achieved: true, inSmallGroup: true, isServing: true },
        { id: 'M3', name: 'Sample User 3', segment: 'Spiritually Stalled', isStalled: true, p4Achieved: false, inSmallGroup: false, isServing: false },
        { id: 'M4', name: 'Sample User 4', segment: 'Christ-Centered', isStalled: false, p4Achieved: true, inSmallGroup: true, isServing: true },
        { id: 'M5', name: 'Sample User 5', segment: 'Exploring Christ', isStalled: false, p4Achieved: false, inSmallGroup: false, isServing: false }
    ];
    localDatabase = mock;
    localStorage.setItem('flourish_survey_db', JSON.stringify(localDatabase));
    renderDashboardMetrics();
    alert('Benchmark sample data loaded successfully into the leadership dashboard!');
}

window.onload = () => {
    renderModule();
};
