/**
 * The Flourish Assessment: Custom Next Steps Report Engine
 * Generates a personalized, HTML-formatted action plan based on user profile and survey data.
 */

function generateNextStepReport(userProfile) {
    const {
        name = "Participant",
        currentStage = "Growing in Christ",
        growthPace = "Moderate",
        scriptureEngagementDaysPerWeek = 2,
        sectionScores = {},
        flaggedObstacles = []
    } = userProfile;

    // --- SECTION A: WHERE YOU ARE RIGHT NOW (Empathy & Validation) ---
    let stageDescription = "";
    if (currentStage === "Exploring Christ") {
        stageDescription = "You are currently in the initial search phase, exploring foundational questions about God and spiritual truth. Wherever you are starting from, your journey is valued and welcomed here.";
    } else if (currentStage === "Growing in Christ") {
        stageDescription = "You are actively establishing personal roots, learning what a daily relationship with Jesus means, and building foundational habits.";
    } else if (currentStage === "Close to Christ") {
        stageDescription = "You have established consistent spiritual disciplines and depend on Christ routinely for guidance in your day-to-day decisions.";
    } else if (currentStage === "Christ-Centered") {
        stageDescription = "Your life is marked by full surrender and outward impact, with a deep desire to mentor others and expand God's kingdom.";
    }

    const sectionAHtml = `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
            <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Section A: Your Current Journey</span>
            <h3 class="text-xl font-extrabold text-slate-900 mt-1">Welcome, ${name}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                <strong>Growth Stage:</strong> ${currentStage} (${growthPace} Pace)<br>
                ${stageDescription}
            </p>
            <p class="text-xs text-slate-500 mt-3 italic">
                Remember: spiritual growth is a relational journey of closeness with God, not a corporate ladder of performance or worth.
            </p>
        </div>
    `;

    // --- SECTION B: THE UNIVERSAL ENGINE (Scripture Engagement) ---
    let scriptureHtml = "";
    if (scriptureEngagementDaysPerWeek < 4) {
        scriptureHtml = `
            <div class="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-200 mb-6">
                <span class="text-xs font-bold text-amber-700 uppercase tracking-wider">Section B: The Core Catalyst (Scripture Engagement)</span>
                <h4 class="text-lg font-bold text-amber-900 mt-1">Unlocking Your Weekly Rhythm</h4>
                <p class="text-xs text-amber-800 mt-2 leading-relaxed">
                    You currently engage with Scripture <strong>${scriptureEngagementDaysPerWeek} days a week</strong>. Research indicates that interacting with God's Word 4 or more days a week serves as the single most powerful catalyst for spiritual transformation—significantly lowering vulnerability to anxiety and stagnation while boosting proactive faith.
                </p>
                <div class="mt-4 text-xs text-amber-900 font-semibold">3 Actionable Steps to Reach Your 4+ Day Rhythm:</div>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-xs text-amber-800">
                    <li><strong>Anchor to an existing habit:</strong> Read a brief passage while having your morning coffee or tea.</li>
                    <li><strong>Utilize audio formats:</strong> Listen to a chapter of Scripture during your daily commute or walk.</li>
                    <li><strong>Start small:</strong> Commit to just 10 minutes in a single sitting rather than waiting for an hour-long block.</li>
                </ul>
            </div>
        `;
    } else {
        scriptureHtml = `
            <div class="bg-emerald-50 p-6 rounded-2xl shadow-sm border border-emerald-200 mb-6">
                <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Section B: The Core Catalyst (Scripture Engagement)</span>
                <h4 class="text-lg font-bold text-emerald-900 mt-1">Sustaining Your Flourishing Rhythm</h4>
                <p class="text-xs text-emerald-800 mt-2 leading-relaxed">
                    Fantastic! You are engaging with Scripture <strong>${scriptureEngagementDaysPerWeek} days a week</strong>, successfully crossing the threshold proven to drive deep transformation. 
                </p>
                <div class="mt-3 text-xs text-emerald-900 font-semibold">Next-Level Challenge:</div>
                <p class="text-xs text-emerald-800 mt-1">
                    Transition from simple reading to contemplative journaling and personal application, asking God how specific passages apply directly to your daily decisions.
                </p>
            </div>
        `;
    }

    // --- SECTION C: STAGE-SPECIFIC CATALYSTS ---
    let actionStepsHtml = "";
    let stageFocus = "";

    if (currentStage === "Exploring Christ") {
        stageFocus = "Building Christian Fundamentals";
        actionStepsHtml = `
            <li>Attend weekend worship services regularly to experience community.</li>
            <li>Join an introductory seeker or Alpha-style small group.</li>
            <li>Begin praying daily for personal guidance and reading short Gospel passages.</li>
            <li>Volunteer in a church ministry team once a month.</li>
        `;
    } else if (currentStage === "Growing in Christ") {
        stageFocus = "Developing Personal Intimacy & Daily Habits";
        actionStepsHtml = `
            <li>Establish a consistent 15-minute daily routine combining Scripture reflection and quiet solitude.</li>
            <li>Transition prayer from occasional crisis requests into a running dialogue with God throughout your workday.</li>
            <li>Take personal ownership of your spiritual growth rather than relying solely on church programming.</li>
            <li>Initiate spontaneous acts of kindness and casual spiritual conversations with neighbors or colleagues.</li>
        `;
    } else if (currentStage === "Close to Christ") {
        stageFocus = "Full Surrender & Self-Sacrificing Love";
        actionStepsHtml = `
            <li>Deepen your daily Scripture immersion, focusing on biblical authority and letting Christ drive your major life decisions.</li>
            <li>Practice intentional stewardship and sacrificial giving (tithing 10%+).</li>
            <li>Serve vulnerable members of your community independently outside of structured church events.</li>
            <li>Engage in active evangelism and intentional mentoring relationships.</li>
        `;
    } else {
        stageFocus = "Kingdom Impact, Stewardship & Mentorship";
        actionStepsHtml = `
            <li>Pour your mature faith directly into discipling newer believers.</li>
            <li>Take public leadership risks to expand local outreach and mercy ministries.</li>
            <li>Maintain a daily posture of personal resurrender and deep listening prayer.</li>
        `;
    }

    const sectionCHtml = `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
            <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Section C: Customized Next Steps</span>
            <h4 class="text-lg font-extrabold text-slate-900 mt-1">Focus Area: ${stageFocus}</h4>
            <p class="text-xs text-slate-500 mt-1 mb-4">Tailored action catalysts to bridge your current stage toward your next milestone:</p>
            <ul class="list-disc pl-5 space-y-2 text-xs text-slate-700 leading-relaxed">
                ${actionStepsHtml}
            </ul>
        </div>
    `;

    // --- SECTION D: OVERCOMING HURDLES (Conditional) ---
    let sectionDHtml = "";
    if (flaggedObstacles && flaggedObstacles.length > 0) {
        let obstacleListItems = flaggedObstacles.map(obstacle => {
            if (obstacle.toLowerCase().includes("anxiety") || obstacle.toLowerCase().includes("fear")) {
                return `<li><strong>${obstacle}:</strong> Empirical data shows that consistent daily Scripture reflection measurably reduces fear and anxiety by fostering inner peace and trust.</li>`;
            } else if (obstacle.toLowerCase().includes("loneliness")) {
                return `<li><strong>${obstacle}:</strong> Combat isolation by plugging into a small group or finding an accountability partner to share struggles openly.</li>`;
            } else if (obstacle.toLowerCase().includes("distractions")) {
                return `<li><strong>${obstacle}:</strong> Protect your mental space by carving out 15 minutes of device-free solitude each morning.</li>`;
            } else {
                return `<li><strong>${obstacle}:</strong> Bring this barrier into your prayer life and discuss it with a trusted mentor or small group leader for pastoral support.</li>`;
            }
        }).join("");

        sectionDHtml = `
            <div class="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
                <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Section D: Navigating Your Current Hurdles</span>
                <h4 class="text-lg font-extrabold text-slate-900 mt-1">Addressing Friction Points</h4>
                <p class="text-xs text-slate-500 mt-1 mb-3">You flagged specific burdens or barriers. Here is targeted guidance to help you un-stall:</p>
                <ul class="space-y-2 text-xs text-slate-700 leading-relaxed">
                    ${obstacleListItems}
                </ul>
            </div>
        `;
    }

    // Combine into final wrapper
    return `
        <div class="max-w-2xl mx-auto font-sans">
            ${sectionAHtml}
            ${scriptureHtml}
            ${sectionCHtml}
            ${sectionDHtml}
        </div>
    `;
}


// ==========================================
// MOCK TEST CASES (For Engine Validation)
// ==========================================

const testCase1 = {
    name: "Sarah Jenkins",
    currentStage: "Exploring Christ",
    growthPace: "Slow",
    scriptureEngagementDaysPerWeek: 1,
    sectionScores: { beliefs: 45, dailyHabits: 30, outwardAction: 20, churchConnection: 50, barriers: 60 },
    flaggedObstacles: ["Fear/Anxiety", "Distractions"]
};

const testCase2 = {
    name: "Michael Davies",
    currentStage: "Growing in Christ",
    growthPace: "Moderate",
    scriptureEngagementDaysPerWeek: 5,
    sectionScores: { beliefs: 75, dailyHabits: 70, outwardAction: 60, churchConnection: 80, barriers: 20 },
    flaggedObstacles: []
};

// Example execution for testing in Node.js or console:
// console.log("--- TEST CASE 1 REPORT ---");
// console.log(generateNextStepReport(testCase1));
// 
// console.log("--- TEST CASE 2 REPORT ---");
// console.log(generateNextStepReport(testCase2));
