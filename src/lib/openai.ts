import "server-only";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const defaultModel = "deepseek-v4-flash";

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
    timeout: 25000,
  });

  if (isDeepSeekBaseURL(baseURL)) {
    return addDeepSeekResponsesCompatibility(client);
  }

  return client;
}

export function getOpenAIModel() {
  return process.env.OPENAI_MODEL || defaultModel;
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

      const requestedMaxTokens =
        typeof params.max_output_tokens === "number"
          ? params.max_output_tokens
          : 900;

      const maxTokens = Math.min(requestedMaxTokens, 900);

      const response = await client.chat.completions.create({
        model: params.model || getOpenAIModel(),
        messages,
        temperature:
          typeof params.temperature === "number" ? params.temperature : 0.15,
        max_tokens: maxTokens,
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
      content: "Generate a concise professional assessment memo.",
    });
  }

  return messages;
}

function buildStrictStyleInstructions(originalInstructions: string) {
  return [
    originalInstructions,
    "",
    "MajorProof output standard:",
    "Write as a conservative professional assessment memo for a university student.",
    "Use a rigorous, cautious, analytical, restrained tone.",
    "Do not write like a motivational coach, marketing page, generic AI assistant, or career influencer.",
    "Do not use Markdown.",
    "Do not use asterisks, bold markers, hash headings, bullet symbols, emojis, tables, or decorative separators.",
    "Do not promise admission, employment, internships, grades, scholarships, interview success, or any guaranteed outcome.",
    "Do not fabricate or inflate experience, projects, research, internships, metrics, publications, or resume claims.",
    "Tie every judgement to the student's provided major, year, target goal, existing experience, interested asset direction, and main problem.",
    "If information is insufficient, state the limitation directly.",
    "Prefer concrete evidence requirements over general advice.",
    "Prefer defensibility over ambition.",
    "",
    "Output length control:",
    "Use exactly six numbered sections.",
    "Each section must contain exactly three labelled lines.",
    "Each labelled line must be concise and specific.",
    "Each labelled line must be no more than 35 English words or 70 Chinese characters.",
    "Do not add an introduction before section 1.",
    "Do not add a conclusion after section 6.",
    "",
    "English format:",
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
    "",
    "5. Resume and interview boundary",
    "Defensible expression:",
    "What must not be claimed:",
    "Likely pressure point:",
    "",
    "6. Next action",
    "Immediate action:",
    "Verification needed:",
    "Manual review focus:",
    "",
    "Chinese format:",
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
    "Follow the route language.",
    "Avoid empty abstraction, vague praise, repeated boilerplate, and broad career slogans.",
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