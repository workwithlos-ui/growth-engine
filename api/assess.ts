import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const openai = new OpenAI();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { businessData } = req.body;

    const systemPrompt = `You are PAID (Performance Analysis & Intelligence Diagnostic), an elite AI business assessment engine. You analyze businesses and produce a GRIP score — Growth, Revenue, Infrastructure, Performance.

You MUST return ONLY valid JSON with this exact structure (no markdown, no code blocks, no extra text):
{
  "overallScore": <number 0-100>,
  "gripScores": {
    "growth": { "score": <number 0-100>, "label": "Growth", "insight": "<1-2 sentence insight>", "priority": "<high|medium|low>" },
    "revenue": { "score": <number 0-100>, "label": "Revenue", "insight": "<1-2 sentence insight>", "priority": "<high|medium|low>" },
    "infrastructure": { "score": <number 0-100>, "label": "Infrastructure", "insight": "<1-2 sentence insight>", "priority": "<high|medium|low>" },
    "performance": { "score": <number 0-100>, "label": "Performance", "insight": "<1-2 sentence insight>", "priority": "<high|medium|low>" }
  },
  "verdict": "<2-3 sentence overall business verdict>",
  "topBottleneck": "<the single biggest issue holding this business back>",
  "quickWins": ["<actionable win 1>", "<actionable win 2>", "<actionable win 3>"],
  "thirtyDayPlan": "<specific 30-day action plan in 2-3 sentences>",
  "sixtyDayPlan": "<specific 60-day action plan in 2-3 sentences>",
  "ninetyDayPlan": "<specific 90-day action plan in 2-3 sentences>",
  "benchmarkComparison": "<how this business compares to industry peers in 1-2 sentences>",
  "revenueAtRisk": "<estimated annual revenue at risk due to identified issues>"
}

Be specific, data-driven, and actionable. Reference the actual numbers provided. Scores should reflect real analysis — don't inflate scores. Be honest and direct. The scores should be calibrated: 90+ is exceptional, 70-89 is good, 50-69 needs work, below 50 is critical.`;

    const userPrompt = `Analyze this business and produce a GRIP score:

Business Name: ${businessData.businessName}
Industry: ${businessData.industry}
Monthly Revenue: $${businessData.monthlyRevenue}
Monthly Expenses: $${businessData.monthlyExpenses}
Number of Employees: ${businessData.employees}
Customer Count: ${businessData.customerCount}
Monthly New Customers: ${businessData.newCustomersPerMonth}
Monthly Churn Rate: ${businessData.churnRate}%
Customer Acquisition Cost: $${businessData.cac}
Average Customer Lifetime Value: $${businessData.ltv}
Primary Growth Challenge: ${businessData.growthChallenge}
Current Marketing Channels: ${businessData.marketingChannels}
Years in Business: ${businessData.yearsInBusiness}
Business Model: ${businessData.businessModel}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = completion.choices[0]?.message?.content || "";

    // Parse JSON from response, handling potential markdown wrapping
    let jsonStr = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    const assessment = JSON.parse(jsonStr);
    return res.status(200).json({ success: true, assessment });
  } catch (error: any) {
    console.error("Assessment error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to generate assessment. Please try again.",
    });
  }
}
