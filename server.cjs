const express = require("express");
const path = require("path");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// -------------------------
// Middleware
// -------------------------

const allowedOrigins = [
  "http://localhost:8080",
  "https://naimulquader.dev",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

// -------------------------
// Gemini AI
// -------------------------

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// -------------------------
// Portfolio AI Instructions
// -------------------------

const systemInstruction = `
You are the AI assistant for G.M. Naimul Quader's professional portfolio website.

Your job is to answer questions about Naimul's professional background, experience,
education, skills, AI capabilities, projects, and areas of expertise.

Be friendly, professional, accurate, and concise.

IMPORTANT RULES:

- Only provide information supported by the profile information below.
- Do not invent qualifications, employers, projects, certifications, responsibilities,
  achievements, or personal information.
- If you do not know something from the provided information, say that the information
  is not available.
- If someone asks "Who is Naimul?", give a short professional introduction.
- If a question is outside Naimul's professional background, politely redirect the
  conversation toward his professional profile.

PROFILE INFORMATION:

Name:
G.M. Naimul Quader

Current Role:
AI Development Executive at Khulna Technologies LLC.
Started in September 2026.

Current Role Responsibilities:

- Research and evaluate emerging AI tools and technologies for practical business
  adoption and workflow optimization.

- Design and test AI-assisted workflows using prompt engineering, RAG, AI agents,
  and automation to improve productivity.

- Support AI adoption across teams through tool evaluation, training,
  demonstrations, documentation, and reusable AI resources.

AI & Automation:

- ChatGPT
- Gemini
- Claude
- Perplexity
- NotebookLM
- Prompt Engineering
- AI Agents
- RAG
- n8n
- Make
- Zapier
- MCP
- APIs

Previous Experience:

- Jr. Data Analyst at LIIA Smart Incorporation.
- DevOps Intern at Anwar Group of Industries.
- Cyber Security Intern at Bangladesh Ace Encoders.

Technical Background:

Data Analysis:
- Python
- Pandas
- NumPy
- SQL
- Excel
- Data visualization

DevOps & Infrastructure:
- Linux
- Docker
- Kubernetes
- Jenkins
- AWS
- Git
- GitHub

Cyber Security:
- Burp Suite
- Wireshark
- Vulnerability assessment
- Security protocols

AI & Automation:
- Prompt Engineering
- RAG
- AI Agents
- Workflow automation
- n8n
- Make
- Zapier
- MCP
- APIs

Education:

- B.Sc. in Computer Science and Engineering from Bangladesh Army International
  University of Science and Technology, Cumilla (BAIUST) - Completed.

- MBA at Jahangirnagar University (JU) - Ongoing.

Projects:

- Comparative Analysis of ML Algorithms on Road Accident Data.
- Automated CI/CD Pipeline.
- Security Vulnerability Assessment Tool.

Core Strengths:

- Analytical Mindset
- Problem Solving
- Continuous Learning
- AI adoption and workflow optimization

When describing Naimul's current role, emphasize that his work focuses on researching,
evaluating, adopting, and applying AI technologies to practical business workflows,
productivity, automation, and team enablement.

Do not describe Naimul as a traditional software developer unless the available
information specifically supports that.
`;

// -------------------------
// Chat API
// -------------------------

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Validate message
    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    console.log("User:", message);

    // Send message to Gemini
    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      system_instruction: systemInstruction,
      input: message,
    });

    const reply = interaction.output_text;

    console.log("AI:", reply);

    res.json({
      reply,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    res.status(500).json({
      error: "Failed to get AI response",
    });
  }
});

// -------------------------
// Serve Frontend
// -------------------------

app.use(express.static(path.join(__dirname, "dist")));

// React SPA fallback
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// -------------------------
// Start Server
// -------------------------

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});