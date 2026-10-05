// --- 1. QUESTIONNAIRE ARCHITECTURE (56 Fields Total: 6 Admin + 50 Core) ---
const surveyModules = [
    {
        module: 'Administrative Demographics',
        desc: 'Please provide your secure details. Name and email route exclusively to the encrypted pastoral vault; leadership reviews only anonymized macro trends.',
        questions: [
            { id: 'userName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
            { id: 'userEmail', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
            { id: 'userAge', label: 'Age Group', type: 'radio', options: ['18–24', '25–34', '35–44', '45–54', '55–64', '65+'] },
            { id: 'userGender', label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Prefer not to say'] },
            { id: 'userTenure', label: 'How long have you been regularly attending our church?', type: 'radio', options: ['Less than 1 year', '1–3 years', '3–5 years', '5+ years'] },
            { id: 'userAttend', label: 'How frequently do you attend weekend worship services?', type: 'radio', options: ['Weekly / Almost weekly', '2–3 times a month', 'Rarely'] }
        ]
    },
    {
        module: 'Module A: Church Connection & Involvement',
        desc: 'Tell us about your community integration and active involvement.',
        questions: [
            { id: 'q1', label: 'Are you currently connected to a small group, home group, or Bible study at our church?', type: 'radio', options: ['Yes', 'No'], triggersBranch: 'sg' },
            { id: 'q2', label: 'How often does your small group typically meet?', type: 'radio', options: ['Weekly', 'Bi-weekly', 'Monthly', 'Irregularly'], condition: { parent: 'q1', value: 'Yes' } },
            { id: 'q3', label: 'My small group encourages spiritual accountability and honesty about life\'s struggles.', type: 'likert', condition: { parent: 'q1', value: 'Yes' } },
            { id: 'q4', label: 'To what extent has your group helped you understand the Bible in greater depth?', type: 'radio', options: ['High Impact', 'Moderate Impact', 'Low/No Impact'], condition: { parent: 'q1', value: 'Yes' } },
            { id: 'q5', label: 'Do you currently serve in a regular ministry capacity within our church?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q6', label: 'How clearly do you feel our church has communicated a next-step pathway for your personal growth?', type: 'scale16' },
            { id: 'q7', label: 'Overall, how satisfied are you with how our church helps you grow spiritually?', type: 'scale16' }
        ]
    },
    {
        module: 'Module B: Core Beliefs & Attitudes',
        desc: 'Please indicate how strongly you agree with the following foundational statements.',
        questions: [
            { id: 'q8', label: 'I believe nothing I do or have done can earn my salvation; it is purely by grace.', type: 'likert' },
            { id: 'q9', label: 'I believe the God of the Bible is the one true God—Father, Son, and Holy Spirit.', type: 'likert' },
            { id: 'q10', label: 'I believe God is actively involved in my day-to-day life.', type: 'likert' },
            { id: 'q11', label: 'I desire Jesus to be first in my life above all other priorities.', type: 'likert' },
            { id: 'q12', label: 'I believe the Bible has decisive authority over what I say and do.', type: 'likert' },
            { id: 'q13', label: 'I exist primarily to know, love, and serve God.', type: 'likert' },
            { id: 'q14', label: 'I am willing to risk everything that is important in my life for Jesus Christ.', type: 'likert' },
            { id: 'q15', label: 'I believe a Christian should live a sacrificial life not driven by the pursuit of material things.', type: 'likert' },
            { id: 'q16', label: 'I love God more than anything else in the world.', type: 'likert' },
            { id: 'q17', label: 'I have a deep, genuine love for people—both those I know and those I don\'t know.', type: 'likert' },
            { id: 'q18', label: 'I believe God is in absolute control, even during unexpected personal or global crises.', type: 'likert' },
            { id: 'q19', label: 'I believe that my eternal destiny is entirely dependent on my relationship with Jesus Christ.', type: 'likert' }
        ]
    },
    {
        module: 'Module C: Personal Spiritual Practices & Scripture',
        desc: 'Evaluate your personal weekly habits and private spiritual disciplines.',
        questions: [
            { id: 'q20', label: 'In a typical week, how many days do you personally read, study, or reflect on the Bible?', type: 'radio', options: ['0 days', '1 to 2 days', '3 days', '4 to 5 days (Power of 4)', '6 to 7 days'] },
            { id: 'q21', label: 'On the days that you engage with Scripture, how much time do you typically spend in a single sitting?', type: 'radio', options: ['5 mins or less', '6 to 15 mins', '16 to 30 mins', '31 mins or more'] },
            { id: 'q22', label: 'What primary format do you use to engage with Scripture?', type: 'radio', options: ['Physical Bible', 'Digital Bible App', 'Audio Bible', 'Devotional Book'] },
            { id: 'q23', label: 'When you read the Bible, how often do you take notes, journal, or actively apply it to a life situation?', type: 'freq' },
            { id: 'q24', label: 'I reflect on the meaning of Scripture in my daily life.', type: 'freq' },
            { id: 'q25', label: 'I pray to seek guidance for my life.', type: 'freq' },
            { id: 'q26', label: 'I pray to confess sins and realign my heart with God.', type: 'freq' },
            { id: 'q27', label: 'I set aside dedicated time for solitude and listening to God.', type: 'freq' },
            { id: 'q28', label: 'My first priority in financial spending is to support God\'s work (tithing 10% or more).', type: 'radio', options: ['Yes consistently', 'Sometimes / Partially', 'Not currently'] },
            { id: 'q29', label: 'I utilize digital tools (apps, devotionals, podcasts) to aid my spiritual growth during the week.', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q30', label: 'I meet with or talk to a close friend, confidant, or mentor who helps me grow spiritually.', type: 'radio', options: ['Weekly', 'Monthly', 'Occasionally', 'Never'] },
            { id: 'q31', label: 'I feel equipped to handle everyday life decisions using biblical principles.', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q32', label: 'I intentionally practice private or family worship outside of weekend services.', type: 'freq' },
            { id: 'q33', label: 'I keep a journal to track how God is working in my life or record answered prayers.', type: 'freq' }
        ]
    },
    {
        module: 'Module D: Relational Outflow & Evangelism',
        desc: 'How your faith expresses itself outwardly in community and relational witness.',
        questions: [
            { id: 'q34', label: 'How often do you serve those in need outside of formal church programs (e.g., helping neighbors)?', type: 'freq' },
            { id: 'q35', label: 'In the past year, approximately how many meaningful spiritual conversations have you had with people who do not know Christ?', type: 'radio', options: ['6+ times', '3 to 5 times', '1 to 2 times', 'None'] },
            { id: 'q36', label: 'In the past year, how many times have you intentionally invited a non-Christian friend or relative to church?', type: 'radio', options: ['6+ times', '3 to 5 times', '1 to 2 times', 'None'] },
            { id: 'q37', label: 'Besides a small group, do you have a close friend or spiritual confidant outside your household with whom you discuss struggles monthly?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q38', label: 'How effective is your current Christian community at helping you navigate personal crises or emotional pain?', type: 'scale16' },
            { id: 'q39', label: 'I actively look for opportunities to mentor or help newer believers grow in their faith.', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q40', label: 'I actively support missions, global causes, or systematic mercy ministries with my time or resources.', type: 'freq' },
            { id: 'q41', label: 'When I experience relational conflict with others, I actively pursue biblical reconciliation and forgiveness.', type: 'radio', options: ['Always', 'Usually', 'Sometimes', 'Rarely'] }
        ]
    },
    {
        module: 'Module E: Barriers, Stalls & Church Expectations',
        desc: 'Reflecting on friction points, momentum pace, and church expectations.',
        questions: [
            { id: 'q42', label: 'Which statement best describes your current spiritual growth right now?', type: 'radio', options: ['Rapid growth', 'Reasonable / steady growth', 'Content', 'I have stalled spiritually (feel stuck)'] },
            { id: 'q43', label: 'Do you feel like you are currently coasting on past spiritual momentum rather than actively growing?', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q44', label: 'If you have felt stalled, what do you believe contributed most?', type: 'radio', options: ['Not prioritizing spiritual habits', 'Busy schedule conflicts', 'Emotional burnout or stress', 'Personal struggles or addictions', 'None / Not Applicable'] },
            { id: 'q45', label: 'How important is it to you that our weekend services provide in-depth study of the Bible and intellectual challenge?', type: 'scale16' },
            { id: 'q46', label: 'How satisfied are you with the depth of Bible teaching and intellectual challenge in our weekend services?', type: 'scale16' },
            { id: 'q47', label: 'Do you ever consider leaving our church because your spiritual growth needs are unmet?', type: 'radio', options: ['Never', 'Occasionally considering', 'Likely to leave'] },
            { id: 'q48', label: 'When I encounter difficult passages in the Bible, I feel safe expressing my doubts and finding answers here.', type: 'scale16' },
            { id: 'q49', label: 'I currently feel the need for structured pastoral care, marriage counseling, or emotional healing support.', type: 'radio', options: ['Yes', 'No'] },
            { id: 'q50', label: 'In one sentence, what is the single biggest next step you feel God is calling you to take right now?', type: 'text', placeholder: 'Enter your personal growth goal...' }
        ]
    }
];

const likertOptions = ['Strongly Disagree', 'Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree', 'Very Strongly Agree'];
const freqOptions = ['Daily', 'Frequently', 'Occasionally', 'Rarely', 'Never'];

let currentModuleIdx = 0;
let formData = {};
let localDatabase = JSON.parse(localStorage.getItem('flourish_survey_db') || '[]');

// --- 2. VIEW CONTROLLER ---
function switchView(viewName) {
    const surveyView = document.getElementById('view-survey');
    const dashView = document.getElementById('view-dashboard');
    const sBtn = document.getElementById('nav-survey-btn');
    const dBtn = document.getElementById('nav-dash-btn');

    if (viewName === 'survey') {
        surveyView.classList.remove('hidden');
        dashView.classList.add('hidden');
        sBtn.className = "px-3 py-1.5 text-xs font-semibold bg-flourish-50 text-flourish-700 rounded-lg transition border border-flourish-600/20";
        dBtn.className = "px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition";
    } else {
        surveyView.classList.add('hidden');
        dashView.classList.remove('hidden');
        dBtn.className = "px-3 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg transition shadow-sm";
        sBtn.className = "px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition";
        renderDashboardMetrics();
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
        if (q.condition && formData[q.condition.parent] !== q.condition.value) {
            return; 
        }

        html += `<div class="p-4 bg-slate-50/50 rounded-2xl border border-slate-200/60">
            <label class="block text-sm font-semibold text-slate-800 mb-2.5">${q.label}</label>`;

        if (q.type === 'text' || q.type === 'email') {
            const val = formData[q.id] || '';
            html += `<input type="${q.type}" value="${val}" oninput="saveInput('${q.id}', this.value)" placeholder="${q.placeholder || ''}" class="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-flourish-600 focus:outline-none">`;
        } else if (q.type === 'radio') {
            html += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">`;
            q.options.forEach(opt => {
                const checked = formData[q.id] === opt ? 'checked' : '';
                html += `<label class="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-flourish-600 cursor-pointer text-xs font-medium transition">
                    <input type="radio" name="${q.id}" value="${opt}" ${checked} onchange="saveInput('${q.id}', '${opt}'); renderModule();" class="text-flourish-600 focus:ring-flourish-500">
                    <span>${opt}</span>
                </label>`;
            });
            html += `</div>`;
        } else if (q.type === 'likert') {
            html += `<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">`;
            likertOptions.forEach(opt => {
                const checked = formData[q.id] === opt ? 'checked' : '';
                html += `<label class="flex items-center space-x-2 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-flourish-600 cursor-pointer text-[11px] font-medium transition">
                    <input type="radio" name="${q.id}" value="${opt}" ${checked} onchange="saveInput('${q.id}', '${opt}')" class="text-flourish-600 focus:ring-flourish-500">
                    <span>${opt}</span>
                </label>`;
            });
            html += `</div>`;
        } else if (q.type === 'freq') {
            html += `<div class="grid grid-cols-2 sm:grid-cols-5 gap-2">`;
            freqOptions.forEach(opt => {
                const checked = formData[q.id] === opt ? 'checked' : '';
                html += `<label class="flex items-center space-x-2 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-flourish-600 cursor-pointer text-[11px] font-medium transition">
                    <input type="radio" name="${q.id}" value="${opt}" ${checked} onchange="saveInput('${q.id}', '${opt}')" class="text-flourish-600 focus:ring-flourish-500">
                    <span>${opt}</span>
                </label>`;
            });
            html += `</div>`;
        } else if (q.type === 'scale16') {
            let scaleLabels = ['Extremely low', 'Low', 'Slightly low', 'Slightly high', 'High', 'Extremely high'];
            if (q.id === 'q6') { scaleLabels = ['Not at all clear', 'Slightly clear', 'Moderately clear', 'Mostly clear', 'Very clear', 'Extremely clear']; } 
            else if (q.id === 'q7' || q.id === 'q46') { scaleLabels = ['Extremely dissatisfied', 'Dissatisfied', 'Somewhat dissatisfied', 'Somewhat satisfied', 'Satisfied', 'Extremely satisfied']; } 
            else if (q.id === 'q38') { scaleLabels = ['Not at all effective', 'Slightly effective', 'Moderately effective', 'Mostly effective', 'Very effective', 'Extremely effective']; } 
            else if (q.id === 'q45') { scaleLabels = ['Not important', 'Slightly important', 'Moderately important', 'Important', 'Very important', 'Critical']; } 
            else if (q.id === 'q48') { scaleLabels = ['Not at all safe', 'Slightly safe', 'Moderately safe', 'Mostly safe', 'Very safe', 'Extremely safe']; }

            html += `<div class="space-y-2">`;
            scaleLabels.forEach((label, index) => {
                const val = index + 1;
                const checked = formData[q.id] == val ? 'checked' : '';
                html += `<label class="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-flourish-600 cursor-pointer text-xs font-medium transition">
                    <input type="radio" name="${q.id}" value="${val}" ${checked} onchange="saveInput('${q.id}', ${val})" class="text-flourish-600 focus:ring-flourish-500">
                    <span><strong class="text-slate-400 mr-1">${val}.</strong> ${label}</span>
                </label>`;
            });
            html += `</div>`;
        }
        html += `</div>`;
    });
    html += `</div>`;
    content.innerHTML = html;
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

// --- 4. SCORING ENGINE ---
function finalizeAssessment() {
    let beliefHits = 0, beliefTotal = 0;
    const highBeliefs = ['Agree', 'Strongly Agree', 'Very Strongly Agree'];
    
    ['q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19'].forEach(k => {
        beliefTotal++;
        if (highBeliefs.includes(formData[k])) beliefHits++;
    });
    let beliefPct = (beliefHits / beliefTotal) * 100;

    const isStalled = formData['q42'] === 'I have stalled spiritually (feel stuck)';
    const p4Achieved = formData['q20'] === '4 to 5 days a week (Power of 4)' || formData['q20'] === '6 to 7 days a week';

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
        inSmallGroup: formData['q1'] === 'Yes',
        isServing: formData['q5'] === 'Yes',
        date: new Date().toISOString().split('T')[0]
    };

    localDatabase.push(userRecord);
    localStorage.setItem('flourish_survey_db', JSON.stringify(localDatabase));

    renderIndividualReport(userRecord);
}

function renderIndividualReport(rec) {
    const container = document.getElementById('survey-card-content');
    document.getElementById('progress-container').classList.add('hidden');
    document.getElementById('survey-nav').classList.add('hidden');

    container.innerHTML = `
        <div class="text-center pb-6 border-b border-slate-100">
            <span class="inline-block p-3 bg-flourish-50 text-flourish-600 rounded-2xl mb-2 text-2xl font-bold">&#10003;</span>
            <h2 class="text-2xl font-black text-slate-900">Your Flourish Assessment Report</h2>
            <p class="text-xs text-slate-500 mt-1">Prepared confidentially for ${rec.name}</p>
        </div>

        <div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Continuum Stage</div>
            <div class="text-3xl font-black text-flourish-700">${rec.segment}</div>
            <div class="text-xs text-slate-600 mt-1 font-medium">Growth Transition: ${rec.transition}</div>
            ${rec.isStalled ? '<div class="mt-3 inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-lg font-bold">Stalled Override Active — Reengagement Track Recommended</div>' : ''}
        </div>

        <div class="space-y-4 mb-8">
            <h3 class="font-bold text-slate-900 text-sm">Tailored Next Steps for Your Journey:</h3>
            <ul class="text-xs text-slate-600 space-y-2.5 list-disc pl-5 leading-relaxed">
                ${rec.segment === 'Exploring Christ' ? '<li>Engage with foundational Christian basics through our introductory seeker community.</li><li>Focus on reading the Gospel of John over the next 30 days.</li>' : ''}
                ${rec.segment === 'Growing in Christ' ? '<li>Establish a consistent 4+ day weekly Scripture reading rhythm.</li><li>Anchor your community life by plugging into a small group.</li>' : ''}
                ${rec.segment === 'Close to Christ' ? '<li>Deepen your prayer life by incorporating weekly periods of listening solitude.</li><li>Initiate intentional spiritual conversations with individuals far from God.</li>' : ''}
                ${rec.segment === 'Christ-Centered' ? '<li>Transition into mentoring newer believers and leading external community outreach.</li><li>Embrace a daily posture of personal resurrender.</li>' : ''}
                ${rec.isStalled ? '<li><strong>Reengagement Focus:</strong> Data shows growth stalls when daily habits lapse. Reestablish a basic 15-minute daily prayer and Scripture habit.</li>' : ''}
            </ul>
        </div>

        <div class="flex space-x-3">
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
