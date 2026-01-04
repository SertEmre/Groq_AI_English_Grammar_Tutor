require("dotenv").config(); // En üstte olmalı
const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();
app.use(cors());
app.use(express.json());

// API Key kontrolü
if (!process.env.GROQ_API_KEY) {
  console.error("❌ ERROR: GROQ_API_KEY is not defined in .env file!");
  process.exit(1);
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { 
          role: "system", 
          content: "You are an English teacher. Focus on 'Adverb Clauses: Cause and Effect'. Help users understand 'because, since, as, due to' etc." 
        },
        { role: "user", content: prompt }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend: http://localhost:5000");
});