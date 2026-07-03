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
          typeof params.temperature === "number" ? params.temperature : 0.4,
        max_tokens:
          typeof params.max_output_tokens === "number"
            ? params.max_output_tokens
            : undefined,
      });

      const outputText =
        response.choices?.[0]?.message?.content?.trim() || "";

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

  if (typeof params.instructions === "string" && params.instructions.trim()) {
    messages.push({
      role: "system",
      content: params.instructions.trim(),
    });
  }

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

  if (messages.length === 0) {
    messages.push({
      role: "user",
      content: "Generate a concise professional roadmap.",
    });
  }

  return messages;
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