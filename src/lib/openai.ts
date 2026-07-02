import "server-only";

export async function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  const { default: OpenAI } = await import("openai");

  return new OpenAI({
    apiKey,
  });
}

export function getOpenAIModel() {
  return process.env.OPENAI_MODEL || "gpt-5.5";
}