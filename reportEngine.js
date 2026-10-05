/**
 * The Flourish Assessment: Holistic Personal Report Engine
 * Generates a unified, narrative-driven spiritual progress and action report.
 */

function generateNextStepReport(userProfile) {
    const {
        name = "Friend",
        currentStage = "Growing in Christ",
        growthPace = "Moderate",
        scriptureEngagementDaysPerWeek = 2,
        flaggedObstacles = []
    } = userProfile;

    // --- 1. NARRATIVE CONTINUUM MAPPING ---
    let stageNarrative = "";
    let primaryCatalyst = "";

    if (currentStage === "Exploring Christ") {
        stageNarrative = `You are currently in an exploratory season, asking honest questions about God and investigating what faith means. Wherever you are starting from, your journey is valued and welcomed here.`;
        primaryCatalyst = `Focus on discovering the basics of grace through regular weekend service attendance and exploring a seeker-friendly environment.`;
    } else if (currentStage === "Growing in Christ") {
        stageNarrative = `You are actively laying down personal roots, learning what a daily relationship with Jesus looks like, and building consistent spiritual habits.`;
        primaryCatalyst = `Establish a stable 15-minute daily routine combining scripture reflection and quiet prayer, letting your connection with God shape your everyday decisions.`;
    } else if (currentStage === "Close to Christ") {
        stageNarrative = `You have built solid spiritual disciplines and depend on Christ routinely for guidance and strength in your day-to-day life.`;
        primaryCatalyst = `Deepen your walk by incorporating weekly periods of listening solitude and moving outward into intentional conversations with people far from God.`;
    } else if (currentStage === "Christ-Centered") {
        stageNarrative = `Your life is marked by deep surrender and outward impact, with a strong desire to pour your mature faith into others and expand God's kingdom.`;
        primaryCatalyst = `Focus on active mentorship, discipling developing leaders, and embracing public servant leadership in your community.`;
    }

    // --- 2. SCRIPTURE RHYTHM INTEGRATION ---
    let scriptureNarrative = "";
    if (scriptureEngagementDaysPerWeek < 4) {
        scriptureNarrative = `Data highlights that interacting with God's Word four or more days a week acts as a powerful catalyst for personal transformation—measurably lowering stress and stagnation while supercharging proactive faith. Right now, you are engaging with scripture about ${scriptureEngagementDaysPerWeek} days a week. Building up to a consistent 4+ day rhythm by tying a brief 10-minute reading habit to your morning routine or listening to audio passages during your commute will provide a massive boost to your spiritual momentum.`;
    } else {
        scriptureNarrative = `You have successfully crossed the vital 4+ day weekly threshold of engaging with scripture. Research confirms this rhythm is the strongest predictor of lifelong spiritual vitality. Your next growth edge is to transition from simple reading into deeper personal journaling and contemplative application.`;
    }

    // --- 3. OBSTACLES & HURDLES INTEGRATION ---
    let hurdlesNarrative = "";
    if (flaggedObstacles && flaggedObstacles.length > 0) {
        const hurdleText = flaggedObstacles.join(", ");
        hurdlesNarrative = `As you walk this path, it is completely normal to face friction. You noted navigating challenges around (${hurdlesText}). Growth often slows when these burdens go unaddressed. Rather than carrying them in isolation, bring these specific hurdles into your prayer life and lean on a trusted small group leader or accountability partner for pastoral support.`;
    } else {
        hurdlesNarrative = `You reported experiencing a relatively clear season free from major roadblocks, providing a wonderful window of opportunity to press deeper into active discipleship and community serving.`;
    }

    // --- 4. UNIFIED HOLISTIC REPORT CONTAINER ---
    return `
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-2xl mx-auto space-y-6 text-slate-700 leading-relaxed text-sm">
            
            <div class="border-b border-slate-100 pb-4">
                <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Personal Spiritual Progress Review</span>
                <h3 class="text-2xl font-black text-slate-900 mt-1">Your Holistic Growth Plan, ${name}</h3>
                <p class="text-xs text-slate-400 mt-0.5">Current Growth Stage: <strong class="text-slate-700">${currentStage}</strong> (${growthPace} Pace)</p>
            </div>

            <p>
                Dear ${name}, thank you for taking the time to complete the Flourish Assessment. Spiritual growth is never about checking boxes or climbing a corporate ladder of religious performance; it is an intimate, unfolding journey of relational closeness with God. 
            </p>

            <p>
                ${stageNarrative} Looking at your overall rhythm, ${scriptureNarrative}
            </p>

            <p>
                ${hurdlesNarrative}
            </p>

            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-3">
                <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Your Practical Personal Pathway</h4>
                <p class="text-xs text-slate-600">
                    To help you transition smoothly toward your next milestone, your primary action focus right now is to <strong>${primaryCatalyst}</strong> Keep anchoring your daily decisions in grace, and remember that your church community is here to walk alongside you every step of the way.
                </p>
            </div>

        </div>
    `;
}
