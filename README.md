# Basic RAG — Retrieval-Augmented Generation with Next.js

This project implements a basic Retrieval-Augmented Generation (RAG) system using Next.js. It allows users to ask questions and receive AI-generated answers grounded in custom documents.

## ⚙️ Built using:

- Next.js (React + Node.js)
- OpenAI API for natural language generation
- TailwindCSS for UI styling (if applicable)

## 📌 Purpose

This repository demonstrates how to build an AI assistant that can:

- Ingest and index custom documents
- Retrieve relevant context based on user queries
- Generate accurate, grounded responses using a large language model
- It follows the RAG (Retrieval-Augmented Generation) pattern, enhancing LLM output with factual context.

## 📁 Project Structure

    src/
    ├── app/
    │ ├── page.tsx # Main UI
    │ └── api/
    │   └── rag/
    │       └── route.ts        # API route
    ├── .env.example            # Template for environment variables
    ├── .gitignore              # Ignores .env and node_modules
    ├── package.json            # Project metadata & scripts
    └── README.md               # You're reading this!

## 🚀 Running The App

#### Clone the repository

```bash
git clone https://github.com/padrinpanji/basic-rag.git
cd basic-rag
```

#### Clone env file

```bash
cp .env.example .env.local
```

- Fill `OPENAI_API_BASE_URL` with Open AI Host. Ex: https://openrouter.ai/api/v1
- Fill `OPENAI_API_KEY` with Open AI Token. Or can use the free version on https://openrouter.ai/settings/keys
- Fill `OPENAI_MODEL` with AI Model. For free version you can use `openai/gpt-3.5-turbo` or `anthropic/claude-3-haiku`

#### Running the App

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
