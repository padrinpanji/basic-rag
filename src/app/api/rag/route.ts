import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
});

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  const contexts = [
    "Padrin Panji is a fullstack engineer in Rumah123 | 99 group is a Top Property Portal in Indonesia.",
    "Padrin have experience in building web applications using React, Next.js, and Node.js.",
    "Padrin is a project manager in Smooets and WGS. An enterprise software development company in Indonesia.",
    "If you have any questions about Padrin, feel free to ask.",
  ];

  const combinedContext = contexts
    .map((c, i) => `Chunk ${i + 1}: ${c}`)
    .join("\n\n");

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || "",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Use the following context to answer the question:\n\nContext: ${combinedContext}\n\nQuestion: ${question}`,
      },
    ],
  });

  const answer = response.choices[0]?.message?.content ?? "No answer available";
  return NextResponse.json({ answer });
}
