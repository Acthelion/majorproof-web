import "server-only";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  const baseURL = process.env.OPENAI_BASE_URL;

  if (!apiKey) {
    return null;
  }

  const { default: OpenAI } = await import("openai");

  const client = new OpenAI({
    apiKey,
    baseURL: baseURL || undefined,
  });

  if (isDeepSeekBaseURL(baseURL)) {
    return addDeepSeekResponsesCompatibility(client);
  }

  return client;
}

export function getOpenAIModel() {
  return process.env.OPENAI_MODEL || "deepseek-v4-flash";
}

export function getAIProviderName() {
  const baseURL = process.env.OPENAI_BASE_URL || "";

  if (isDeepSeekBaseURL(baseURL)) {
    return "DeepSeek";
  }

  return "OpenAI";
}

function isDeepSeekBaseURL(baseURL: string | undefined) {
  return Boolean(baseURL && baseURL.includes("api.deepseek.com"));
}

function addDeepSeekResponsesCompatibility(client: any) {
  client.responses = {
    ...(client.responses || {}),
    create: async (params: any) => {
      const messages = convertResponsesInputToChatMessages(params);

      const response = await client.chat.completions.create({
        model: params.model || getOpenAIModel(),
        messages,
        temperature:
          typeof params.temperature === "number" ? params.temperature : 0.25,
        max_tokens:
          typeof params.max_output_tokens === "number"
            ? params.max_output_tokens
            : undefined,
      });

      const rawOutputText =
        response.choices?.[0]?.message?.content?.trim() || "";

      const outputText = sanitizeGeneratedRoadmapText(rawOutputText);

      return {
        output_text: outputText,
        choices: response.choices,
        usage: response.usage,
        raw_response: response,
      };
    },
  };

  return client;
}

function convertResponsesInputToChatMessages(params: any): ChatMessage[] {
  const messages: ChatMessage[] = [];

  const originalInstructions =
    typeof params.instructions === "string" ? params.instructions.trim() : "";

  messages.push({
    role: "system",
    content: buildStrictStyleInstructions(originalInstructions),
  });

  const input = params.input;

  if (typeof input === "string" && input.trim()) {
    messages.push({
      role: "user",
      content: input.trim(),
    });
  }

  if (Array.isArray(input)) {
    for (const item of input) {
      const message = convertInputItemToMessage(item);

      if (message) {
        messages.push(message);
      }
    }
  }

  if (messages.length === 1) {
    messages.push({
      role: "user",
      content: "Generate a concise professional roadmap preview.",
    });
  }

  return messages;
}

function buildStrictStyleInstructions(originalInstructions: string) {
  return [
    originalInstructions,
    "",
    "MajorProof writing standard:",
    "",
    "You are not a motivational career coach.",
    "You are an academic and professional evidence advisor evaluating whether a university student can build a defensible Proof Asset.",
    "Write as if preparing a conservative assessment memo for manual review.",
    "",
    "Required tone:",
    "Rigorous, cautious, analytical, restrained, and logically explicit.",
    "The writing should sound like an evidence assessment, not a marketing page, career coaching script, or generic AI roadmap.",
    "Avoid motivational, promotional, exaggerated, optimistic, or emotionally persuasive language.",
    "",
    "Forbidden style:",
    "Do not use Markdown formatting.",
    "Do not use asterisks, bold markers, hash headings, bullet symbols, emojis, tables, or decorative separators.",
    "Do not use phrases such as unlock your potential, stand out from the crowd, boost competitiveness, quickly improve, high-impact project, perfect portfolio, transform your future, or similar expressions.",
    "Do not use vague praise such as strong potential, excellent fit, impressive background, or great opportunity unless clearly supported by the supplied information.",
    "",
    "Integrity requirements:",
    "Do not promise admission, employment, internships, grades, scholarships, interviews, or any guaranteed outcome.",
    "Do not fabricate experience, projects, research, internships, achievements, metrics, publications, supervisor relationships, or resume claims.",
    "Do not suggest exaggerating weak evidence into strong evidence.",
    "If information is insufficient, state the limitation directly.",
    "",
    "Reasoning requirements:",
    "Every major judgement must be tied to the student's provided major, year, target goal, existing experience, interested asset direction, and main problem.",
    "Do not infer unstated experience.",
    "Do not assume the student has technical, financial, business, or research skills unless they are explicitly provided.",
    "When a judgement is uncertain, use cautious language such as: appears more defensible, may be suitable, currently cannot be determined, based on the available information, this would need to be verified.",
    "",
    "Output format:",
    "Write as a professional assessment memo.",
    "Use exactly six numbered sections.",
    "Do not add an introduction before section 1.",
    "Do not add a conclusion after section 6.",
    "Each section must have a numbered title, followed by 2 to 4 labelled lines.",
    "Each labelled line should be concise but specific.",
    "Do not use bullet symbols.",
    "",
    "English section structure:",
    "1. Initial assessment",
    "Judgement:",
    "Basis:",
    "Boundary:",
    "",
    "2. Evidence gap",
    "Observed gap:",
    "Why it matters:",
    "Minimum defensible output:",
    "",
    "3. Recommended Proof Asset direction",
    "Direction:",
    "Reasoning:",
    "Alternative if uncertain:",
    "",
    "4. Asset construction route",
    "Core route:",
    "Required deliverable:",
    "Process evidence:",
    "Method explanation:",
    "",
    "5. Resume and interview boundary",
    "Defensible expression:",
    "What must not be claimed:",
    "Likely interview pressure point:",
    "",
    "6. Next action",
    "Immediate action:",
    "Verification needed:",
    "Manual review focus:",
    "",
    "Chinese section structure:",
    "1. 初步判断",
    "判断：",
    "依据：",
    "边界：",
    "",
    "2. 证据缺口",
    "已观察到的缺口：",
    "为什么重要：",
    "最低可防守产出：",
    "",
    "3. 推荐的 Proof Asset 方向",
    "方向：",
    "理由：",
    "不确定时的替代方向：",
    "",
    "4. 资产构建路线",
    "核心路线：",
    "必须产出的成果：",
    "过程证据：",
    "方法解释：",
    "",
    "5. 简历与面试表达边界",
    "可防守表达：",
    "不能声称的内容：",
    "可能被追问的压力点：",
    "",
    "6. 下一步行动",
    "立即行动：",
    "需要验证的信息：",
    "人工 review 重点：",
    "",
    "Language rule:",
    "Use English for English routes and Chinese for Chinese routes.",
    "If the user's form language is mixed, follow the route language.",
    "",
    "Quality bar:",
    "The output should feel like a restrained professional memo written for evaluating evidence quality.",
    "Prefer precise limitations over broad encouragement.",
    "Prefer concrete evidence requirements over general advice.",
    "Prefer defensibility over ambition.",
  ]
    .filter(Boolean)
    .join("\n");
}

function convertInputItemToMessage(item: any): ChatMessage | null {
  if (typeof item === "string") {
    return {
      role: "user",
      content: item,
    };
  }

  if (!item || typeof item !== "object") {
    return null;
  }

  const role = normalizeRole(item.role);
  const content = extractTextContent(item.content);

  if (!content.trim()) {
    return null;
  }

  return {
    role,
    content: content.trim(),
  };
}

function normalizeRole(role: unknown): "system" | "user" | "assistant" {
  if (role === "system" || role === "assistant" || role === "user") {
    return role;
  }

  if (role === "developer") {
    return "system";
  }

  return "user";
}

function extractTextContent(content: unknown): string {
  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => extractTextFromContentPart(part))
      .filter(Boolean)
      .join("\n");
  }

  if (content && typeof content === "object") {
    return JSON.stringify(content);
  }

  return "";
}

function extractTextFromContentPart(part: any): string {
  if (!part || typeof part !== "object") {
    return "";
  }

  if (typeof part.text === "string") {
    return part.text;
  }

  if (typeof part.content === "string") {
    return part.content;
  }

  if (part.type === "input_text" && typeof part.text === "string") {
    return part.text;
  }

  if (part.type === "output_text" && typeof part.text === "string") {
    return part.text;
  }

  return "";
}

function sanitizeGeneratedRoadmapText(value: string) {
  return value
    .split(/\r?\n/)
    .map((line) => sanitizeGeneratedLine(line))
    .filter((line) => line.trim().length > 0)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function sanitizeGeneratedLine(line: string) {
  return line
    .replace(/```/g, "")
    .replace(/\*\*/g, "")
    .replace(/__/g, "")
    .replace(/^#{1,6}\s*/g, "")
    .replace(/^\s*[-*•]\s+/g, "")
    .replace(/^\s*[-–—]{3,}\s*$/g, "")
    .replace(/\s+$/g, "")
    .trim();
}