import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const API_URL = 'https://tripzy-multi-agent-travel.onrender.com';

function App() {
  // Form fields
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('');
  const [style, setStyle] = useState('');

  // Chat messages: { sender: 'user' | 'assistant', text: string }
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  // Build initial query from form fields
  const buildInitialQuery = () => {
    let parts = [];
    if (from.trim()) parts.push(`I am travelling from ${from.trim()}`);
    if (to.trim()) parts.push(`to ${to.trim()}`);
    if (days.trim()) parts.push(`for ${days.trim()} days`);
    if (budget.trim()) parts.push(`with a budget of ${budget.trim()}`);
    if (style.trim()) parts.push(`My preferences: ${style.trim()}`);
    else parts.push('Help me plan my trip.');
    return parts.join(', ') + '.';
  };

  // Send a message to the API (the whole history + new user message)
  const sendMessage = async (userText) => {
  if (!userText.trim()) return;
  const newMessages = [...messages, { sender: 'user', text: userText }];
  setMessages(newMessages);
  setLoading(true);

  // Build the prompt with a clear instruction to focus on the latest question
  let prompt = '';
  if (newMessages.length > 1) {
    // We have previous messages – include them as context
    const context = newMessages.slice(0, -1)  // all except the latest
      .map(m => `${m.sender === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
      .join('\n');
    const latest = newMessages[newMessages.length - 1].text;
    prompt = `Previous conversation:\n${context}\n\nLatest user query: ${latest}\n\nAssistant, please answer ONLY the latest query. Use the context if relevant, but do NOT repeat the entire trip plan. Answer concisely.`;
  } else {
    // First message – send as is
    prompt = userText;
  }

  try {
    const res = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: prompt }),
    });
    if (!res.ok) throw new Error('Server error');
    const data = await res.json();
    setMessages([...newMessages, { sender: 'assistant', text: data.response }]);
  } catch (err) {
    setMessages([...newMessages, { sender: 'assistant', text: '❌ Sorry, something went wrong.' }]);
  }
  setLoading(false);
};

  // Handle initial trip request
  const handlePlanTrip = (e) => {
    e.preventDefault();
    const query = buildInitialQuery();
    sendMessage(query);
  };

  // Handle follow-up chat
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    sendMessage(chatInput);
    setChatInput('');
  };

  // Simple Markdown to HTML
  const formatText = (text) => {
    return text
      .replace(/### (.*)/g, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌍 Tripzy</h1>
        <p>Your AI travel assistant</p>
      </header>

      <div className="main-container">
        {/* Left panel: trip form (hidden after first message sent) */}
        {messages.length === 0 && (
          <div className="trip-form-panel">
            <h2>Plan Your Trip</h2>
            <form onSubmit={handlePlanTrip}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="From (e.g. Bengaluru)"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="To (e.g. Switzerland)"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
              <div className="form-row">
                <input
                  type="number"
                  placeholder="Number of days"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Budget (e.g. ₹3,00,000)"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <textarea
                placeholder="What type of vacation do you have in mind? (Adventure, Arts & Culture, Wildlife & Safari, etc.)"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                rows={3}
              />
              <button type="submit" className="primary-btn">✨ Plan My Trip</button>
            </form>
          </div>
        )}

        {/* Right panel: chat window */}
        <div className={`chat-panel ${messages.length === 0 ? 'hidden' : ''}`}>
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                <div className="bubble" dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
              </div>
            ))}
            {loading && <div className="message assistant"><div className="bubble typing">Tripzy is typing…</div></div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input (visible after first response) */}
          {messages.length > 0 && (
            <form className="chat-input-form" onSubmit={handleChatSubmit}>
              <input
                type="text"
                placeholder="Ask a follow‑up question…"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={loading}
              />
              <button type="submit" disabled={loading}>➤</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;