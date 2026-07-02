import { NextResponse } from "next/server";
import { getOpenAIClient, getOpenAIModel } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

type RoadmapPreviewInput = {
  nameOrAlias: string;
  contactMethod: string;
  currentMajor: string;
  currentYear: string;
  targetGoal: string;
  interestedAsset: string;
  existingExperience: string;
  primaryNeed: string;
};

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);

  try {
    const formData = await request.formData();

    const accessCode = String(formData.get("accessCode") || "").trim();
    const expectedAccessCode = process.env.AI_PREVIEW_ACCESS_CODE;

    if (!expectedAccessCode || accessCode !== expectedAccessCode) {
      return redirectTo(requestUrl, "/en/ai-roadmap-preview?error=invalid-code");
    }

    const input: RoadmapPreviewInput = {
      nameOrAlias: String(formData.get("nameOrAlias") || "").trim(),
      contactMethod: String(formData.get("contactMethod") || "").trim(),
      currentMajor: String(formData.get("currentMajor") || "").trim(),
      currentYear: String(formData.get("currentYear") || "").trim(),
      targetGoal: String(formData.get("targetGoal") || "").trim(),
      interestedAsset: String(formData.get("interestedAsset") || "").trim(),
      existingExperience: String(
        formData.get("existingExperience") || ""
      ).trim(),
      primaryNeed: String(formData.get("primaryNeed") || "").trim(),
    };

    if (!input.currentMajor || !input.targetGoal || !input.primaryNeed) {
      return redirectTo(requestUrl, "/en/ai-roadmap-preview?error=missing-fields");
    }

    const generationResult = isMockModeEnabled()
      ? buildMockRoadmap(input)
      : await generateRoadmapWithOpenAI(requestUrl, input);

    if (generationResult instanceof NextResponse) {
      return generationResult;
    }

    if (!generationResult) {
      return redirectTo(
        requestUrl,
        "/en/ai-roadmap-preview?error=generate-failed"
      );
    }

    const { data, error } = await supabaseAdmin
      .from("majorproof_ai_roadmap_previews")
      .insert({
        name_or_alias: input.nameOrAlias || null,
        contact_method: input.contactMethod || null,
        current_major: input.currentMajor,
        current_year: input.currentYear || null,
        target_goal: input.targetGoal,
        interested_asset: input.interestedAsset || null,
        existing_experience: input.existingExperience || null,
        primary_need: input.primaryNeed,
        ai_result: generationResult,
      })
      .select("id")
      .single();

    if (error || !data) {
      console.error("Failed to save English AI roadmap preview:", {
        message: error?.message,
        code: error?.code,
        details: error?.details,
        hint: error?.hint,
      });

      return redirectTo(requestUrl, "/en/ai-roadmap-preview?error=save-failed");
    }

    return redirectTo(requestUrl, `/en/ai-roadmap-preview/result/${data.id}`);
  } catch (error) {
    console.error("English AI roadmap preview failed:", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return redirectTo(requestUrl, "/en/ai-roadmap-preview?error=generate-failed");
  }
}

async function generateRoadmapWithOpenAI(
  requestUrl: URL,
  input: RoadmapPreviewInput
) {
  const client = await getOpenAIClient();

  if (!client) {
    return redirectTo(
      requestUrl,
      "/en/ai-roadmap-preview?error=missing-openai-key"
    );
  }

  const response = await client.responses.create({
    model: getOpenAIModel(),
    input: [
      {
        role: "system",
        content:
          "You are MajorProof's AI Asset Roadmap assistant. MajorProof creates evidence-based professional asset systems for students. Generate a structured, realistic, academically honest roadmap in English. Do not promise admissions, jobs, internships, grades, scholarships, or guaranteed outcomes. Do not help with homework ghostwriting or fake experience.",
      },
      {
        role: "user",
        content: buildRoadmapPrompt(input),
      },
    ],
  });

  return (
    response.output_text?.trim() ||
    "The AI could not generate a useful roadmap. Please provide a more specific major, target goal, and current problem before trying again."
  );
}

function buildRoadmapPrompt(input: RoadmapPreviewInput) {
  return `
Generate a MajorProof AI Asset Roadmap Preview.

User input:
- Name or alias: ${input.nameOrAlias || "not provided"}
- Contact method: ${input.contactMethod || "not provided"}
- Current major: ${input.currentMajor}
- Current year: ${input.currentYear || "not provided"}
- Target goal: ${input.targetGoal}
- Interested asset direction: ${input.interestedAsset || "not sure"}
- Existing experience: ${input.existingExperience || "not provided"}
- Primary need: ${input.primaryNeed}

MajorProof framework:
A Proof Asset contains:
1. Professional context
2. Final deliverable
3. Process evidence
4. Method explanation
5. Resume language
6. Interview defense
7. Extension roadmap

Available categories:
- TechProof
- FinanceProof
- BusinessProof
- ResearchProof

Current priority product:
- TechProof AI Document Review Platform Starter Pack

Output in English with this exact structure:

## Recommended asset direction
State the best-fit category and explain why.

## Suitable project direction
Suggest 1 realistic project direction. It must be suitable for the user's major and target.

## What the final deliverable should look like
Describe the concrete deliverables.

## Process evidence to preserve
List the evidence the student should collect while building.

## Resume language
Give 2 restrained resume bullet drafts. Do not exaggerate.

## Interview defense
List likely interview questions and what the student should prepare.

## Extension roadmap
Give a 3-step extension path from starter version to personalized version.

Rules:
- Do not fabricate experience.
- Do not write coursework for the user.
- Do not promise outcomes.
- Be specific, practical, and commercially useful.
- If the user is not a good fit for TechProof, recommend another category.
`.trim();
}

function buildMockRoadmap(input: RoadmapPreviewInput) {
  const assetDirection = input.interestedAsset || inferAssetDirection(input);
  const projectDirection = getMockProjectDirection(assetDirection);

  return `
## Recommended asset direction

Recommended direction: ${assetDirection}

Based on your current major, "${input.currentMajor}", and your target goal, "${input.targetGoal}", the most useful next step is to build a Proof Asset with a clear professional context, concrete deliverables, traceable process evidence, and defensible resume/interview language.

Your main problem is: "${input.primaryNeed}". This suggests that you do not only need another generic project idea. You need a structured asset that can be shown, explained, and defended.

This result was generated in local Mock Mode for product-flow testing. The formal version will use the AI model to generate a more personalized roadmap.

## Suitable project direction

Suggested project direction: ${projectDirection}

This direction is suitable as an early Proof Asset because it can connect your academic background to a concrete professional scenario. The goal is not to build the most complex system possible. The goal is to produce something with clear boundaries, visible output, and explainable reasoning.

A good starter version should have:

1. A clear use case
2. A visible or runnable final output
3. Preserved process evidence
4. A method explanation
5. Resume language that can be defended
6. Interview questions prepared in advance

## What the final deliverable should look like

The final asset should include:

1. A project brief explaining the background, target user, core problem, and proposed solution
2. A functional structure document showing the main modules
3. A demo, screenshots, README, prototype, report, or portfolio page
4. A technical stack or method explanation
5. A resume bullet draft
6. An interview-defense document covering likely follow-up questions

If you later enter the full MajorProof workflow, the deliverable should not remain a vague project idea. It should become a structured asset package that can be shown, explained, and traced.

## Process evidence to preserve

You should preserve:

1. Initial requirement notes
2. Functional breakdown sketches
3. Technology or method selection notes
4. Git commit history or revision history
5. Screenshots of key outputs
6. Problem-solving notes
7. Test cases, sample outputs, or demonstration records
8. README or documentation changes
9. Different versions of resume wording

The purpose of this evidence is to show that the project was genuinely developed and not assembled as a last-minute resume decoration.

## Resume language

Two restrained resume bullet drafts:

1. Designed a structured ${assetDirection} roadmap covering professional context, deliverables, process evidence, method explanation, resume positioning, and interview-defense preparation.

2. Developed an early-stage project asset plan that translates academic background and career/application goals into a concrete, explainable, and extensible professional asset.

These bullets should not be presented as completed project outcomes unless the actual project has been built. Once the final asset exists, the bullets should be updated with specific tools, functions, data, deployment details, or measurable outputs.

## Interview defense

You should prepare for these questions:

1. What specific problem does this project address?
2. Why is this project relevant to your major?
3. What was your personal contribution?
4. Why did you choose this technical stack or method?
5. What is the minimum viable version?
6. How can you prove this was genuinely built by you?
7. What are the limitations of the project?
8. What would you improve next?
9. What did you learn from the process?
10. How does this project support your internship, application, or career goal?

## Extension roadmap

Step 1: Build the starter version  
Clarify the project context, functional modules, final deliverables, and evidence checklist. Do not overbuild at the beginning.

Step 2: Build the evidence version  
Preserve screenshots, commits, README changes, design notes, test records, and revision history so the asset becomes traceable.

Step 3: Build the personalized version  
Connect the project more tightly to your target application, internship, or portfolio goal. Add stronger resume language, interview defense, and a future extension path.
`.trim();
}

function inferAssetDirection(input: RoadmapPreviewInput) {
  const combinedText = [
    input.currentMajor,
    input.targetGoal,
    input.existingExperience,
    input.primaryNeed,
  ]
    .join(" ")
    .toLowerCase();

  if (
    combinedText.includes("finance") ||
    combinedText.includes("valuation") ||
    combinedText.includes("investment") ||
    combinedText.includes("金融") ||
    combinedText.includes("估值") ||
    combinedText.includes("投资")
  ) {
    return "FinanceProof";
  }

  if (
    combinedText.includes("business") ||
    combinedText.includes("market") ||
    combinedText.includes("consulting") ||
    combinedText.includes("strategy") ||
    combinedText.includes("商业") ||
    combinedText.includes("市场") ||
    combinedText.includes("咨询")
  ) {
    return "BusinessProof";
  }

  if (
    combinedText.includes("research") ||
    combinedText.includes("paper") ||
    combinedText.includes("literature") ||
    combinedText.includes("研究") ||
    combinedText.includes("论文") ||
    combinedText.includes("文献")
  ) {
    return "ResearchProof";
  }

  return "TechProof";
}

function getMockProjectDirection(assetDirection: string) {
  if (assetDirection === "FinanceProof") {
    return "Company Research and Valuation Evidence Pack";
  }

  if (assetDirection === "BusinessProof") {
    return "Market Entry Strategy Evidence Pack";
  }

  if (assetDirection === "ResearchProof") {
    return "Research Question and Method Evidence Pack";
  }

  return "AI Document Review Platform Starter Pack";
}

function isMockModeEnabled() {
  return process.env.AI_PREVIEW_MOCK_MODE === "true";
}

function redirectTo(requestUrl: URL, path: string) {
  return NextResponse.redirect(new URL(path, requestUrl.origin), {
    status: 303,
  });
}