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
      return redirectTo(requestUrl, "/ai-roadmap-preview?error=invalid-code");
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
      return redirectTo(requestUrl, "/ai-roadmap-preview?error=missing-fields");
    }

    const aiResult = isMockModeEnabled()
      ? buildMockRoadmap(input)
      : await generateRoadmapWithOpenAI(requestUrl, input);

    if (!aiResult) {
      return redirectTo(requestUrl, "/ai-roadmap-preview?error=generate-failed");
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
        ai_result: aiResult,
      })
      .select("id")
      .single();

    if (error || !data) {
      console.error("Failed to save AI roadmap preview:", {
        message: error?.message,
        code: error?.code,
        details: error?.details,
        hint: error?.hint,
      });

      return redirectTo(requestUrl, "/ai-roadmap-preview?error=save-failed");
    }

    return redirectTo(requestUrl, `/ai-roadmap-preview/result/${data.id}`);
  } catch (error) {
    console.error("AI roadmap preview failed:", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return redirectTo(requestUrl, "/ai-roadmap-preview?error=generate-failed");
  }
}

async function generateRoadmapWithOpenAI(
  requestUrl: URL,
  input: RoadmapPreviewInput
) {
  const client = await getOpenAIClient();

  if (!client) {
    return redirectTo(requestUrl, "/ai-roadmap-preview?error=missing-openai-key");
  }

  const response = await client.responses.create({
    model: getOpenAIModel(),
    input: [
      {
        role: "system",
        content:
          "You are MajorProof's AI Asset Roadmap assistant. MajorProof creates evidence-based professional asset systems for students. Generate a structured, realistic, academically honest roadmap. Use Chinese. Do not promise admissions, jobs, internships, grades, scholarships, or guaranteed outcomes. Do not help with homework ghostwriting or fake experience.",
      },
      {
        role: "user",
        content: buildRoadmapPrompt(input),
      },
    ],
  });

  return (
    response.output_text?.trim() ||
    "AI 未能生成有效路线。请补充更具体的专业、目标和已有经历后重试。"
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

Output in Chinese with this exact structure:

## 推荐资产方向
State the best-fit category and explain why.

## 适合做的项目
Suggest 1 realistic project direction. It must be suitable for the user's major and target.

## 最终成果应该长什么样
Describe the concrete deliverables.

## 需要保留的过程证据
List the evidence the student should collect while building.

## 简历可以怎么写
Give 2 restrained resume bullet drafts. Do not exaggerate.

## 面试会被问什么
List likely interview questions and what the student should prepare.

## 下一步扩展路线
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
## 推荐资产方向

推荐方向：${assetDirection}

根据你填写的专业背景「${input.currentMajor}」和目标「${input.targetGoal}」，当前最适合先做一个边界清晰、可以展示成果、可以解释过程的 Proof Asset。你的主要问题是「${input.primaryNeed}」，这说明你现在最需要的不是继续堆概念，而是把已有课程、技能和目标转化成一个能被简历和面试使用的具体资产。

这是一份本地 Mock 模式生成的路线预览，用于测试产品链路。正式版本会调用 AI 模型生成更个性化的分析。

## 适合做的项目

建议项目方向：${projectDirection}

这个方向适合用作早期 Proof Asset，因为它既能体现专业能力，也能形成明确交付物。项目不应该追求复杂炫技，而应该优先做到：

1. 有明确使用场景
2. 有可运行或可展示的成果
3. 有过程证据
4. 有方法解释
5. 有简历和面试可防守的表达

## 最终成果应该长什么样

建议最终成果包括：

1. 一个项目说明文档，解释项目背景、目标用户、核心问题和解决方案
2. 一个功能结构说明，展示系统由哪些模块组成
3. 一个可展示的 demo、截图、README 或页面原型
4. 一份技术栈说明，解释为什么选择这些工具
5. 一份简历 bullet 草案
6. 一份面试防守材料，提前准备可能被追问的问题

如果你后续做 TechProof Starter Pack，最终交付不应该只是“项目想法”，而应该是一套能展示、能解释、能追溯的项目资产。

## 需要保留的过程证据

建议保留这些证据：

1. 项目需求草稿
2. 功能拆分草图
3. 技术选型记录
4. Git commit 记录
5. 关键页面或功能截图
6. 遇到的问题和解决过程
7. 测试样例或演示记录
8. README 修改记录
9. 简历表达的修改版本

这些证据的作用是让项目看起来不是临时包装出来的，而是有真实构建过程。

## 简历可以怎么写

下面是两条克制版简历表达草案：

1. Designed a structured ${assetDirection} project roadmap with clear deliverables, process evidence, and interview-defense materials based on academic background and target application goals.

2. Developed a project asset plan covering problem context, functional modules, technical stack, evidence checklist, resume positioning, and future extension path.

如果最终项目真正做出来，简历 bullet 应该进一步加入具体技术、功能、数据、部署方式或项目结果。现在这两条只能作为路线阶段表达，不能夸大成已完成项目。

## 面试会被问什么

你需要准备这些问题：

1. 这个项目解决什么具体问题？
2. 为什么这个方向和你的专业背景相关？
3. 你在项目中具体负责什么？
4. 技术栈为什么这样选？
5. 项目的最小可行版本是什么？
6. 你如何证明这个项目不是临时包装？
7. 项目有哪些局限？
8. 如果继续扩展，你下一步会做什么？
9. 你从这个项目中学到了什么？
10. 这个项目和你的目标申请或实习方向有什么关系？

## 下一步扩展路线

第一步：做 Starter Version  
先明确项目背景、功能模块、最终成果和过程证据，不要急着做复杂系统。

第二步：做 Evidence Version  
开始保留截图、commit、README、设计说明、测试记录和修改过程，让项目具备可追溯性。

第三步：做 Personalized Version  
结合你的专业、目标岗位或申请方向，把项目扩展成更个性化的 Proof Asset，包括简历表达、面试防守和后续项目路线。
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
    combinedText.includes("金融") ||
    combinedText.includes("估值") ||
    combinedText.includes("投资")
  ) {
    return "FinanceProof";
  }

  if (
    combinedText.includes("business") ||
    combinedText.includes("商业") ||
    combinedText.includes("市场") ||
    combinedText.includes("咨询") ||
    combinedText.includes("strategy")
  ) {
    return "BusinessProof";
  }

  if (
    combinedText.includes("research") ||
    combinedText.includes("研究") ||
    combinedText.includes("论文") ||
    combinedText.includes("literature")
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