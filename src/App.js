import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askGroq = async (customPrompt) => {
    const finalPrompt = customPrompt || input;
    if (!finalPrompt.trim()) return;

    setLoading(true);
    setReply("");

    try {
      // Backend 5000 portunda, React 3005 portunda çalışıyor
      const res = await axios.post("http://localhost:5000/api/chat", {
        prompt: finalPrompt
      });
      setReply(res.data.reply);
    } catch (err) {
      setReply("❌ Connection Error: Make sure backend is running on port 5000");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <header>
        <h1>🎓 English Grammar Tutor</h1>
        <p className="subtitle">Unit 7.2: Adverb Clauses of Cause & Effect</p>
      </header>

      <div className="quick-topics">
        <button onClick={() => askGroq("Explain 'Because' vs 'Because of'")}>Because vs Because of</button>
        <button onClick={() => askGroq("Give me 5 examples with 'Since' and 'As'")}>Examples with Since/As</button>
        <button onClick={() => askGroq("Create a short quiz about Cause and Effect clauses")}>Practice Quiz</button>
      </div>

      <div className="input-box">
        <textarea
          placeholder="Ask your teacher anything about cause and effect..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="send-btn" onClick={() => askGroq()} disabled={loading}>
          {loading ? "Teaching..." : "Send to Groq AI"}
        </button>
      </div>

      {reply && (
        <div className="response-card">
          <div className="card-header">Teacher's Explanation:</div>
          <div className="card-body">
            {reply}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;