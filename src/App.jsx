import { useEffect, useState } from 'react'
import './App.css'

function formatTime(timestamp){
  return new Date(timestamp).toLocaleDateString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function App() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");

  const maxLength = 500;

  const bannedWords = [
  "suicide",
  "kill myself",
  "kys",
  "hate you",
  "worthless",
  "stupid",
  "idiot",
  ];

  const prompts = [
    "Today I'm worried about...",
    "I miss home because...",
    "I wish more people understood that...",
    "Lately I've felt most alone when...",
    "Something small that hurt more than I expected was...",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("vent-messages");
    if(!saved) return; 
    
    try{
      const parsed = JSON.parse(saved);
      if(Array.isArray(parsed)) {
        setMessages(parsed);
      }
    } catch (err){
      console.error("Failed to parse saved messages", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("vent-messages", JSON.stringify(messages));
  }, [messages]);

  function containsAbusiveLanguage(message) {
    const lower = message.toLowerCase();
    return bannedWords.some((word) => lower.includes(word));
  }

  function handlePromptClick() {
    const random = prompts[Math.floor(Math.random() * prompts.length)];
  // always replace whatever is there
    setText(random + " ");
    setStatus("");
  }

  function handleSubmit(e){
    e.preventDefault();
    setStatus("");

    const trimmed = text.trim();
    if(!trimmed){
      setStatus("Your message is empty. Try writing even one sentence");
      return;
    }

    if (containsAbusiveLanguage(trimmed)) {
      setStatus(
        "We gently block harmful language. Try sharing how you feel without attacking yourself or others."
      );
      return;
    }

    const newMessage = {
      id: crypto.randomUUID(),
      text: trimmed,
      createdAt: Date.now(),
    };

    setMessages((prev) => [newMessage, ...prev]);
    setText("");
    setStatus("Thank you for sharing. Your message ahs been posted.")
    console.log("New vent message: ", trimmed);
}


  return (
    <main className="app">
      <section className='left-pane'>
        <p className='badge'>Safe Venting Space</p>

        <h1>Share what&apos;s on your mind 💬</h1>
        <p className='subtitle'>
          Anonymous space to vent about exams, homesickness, friendships, or anything else.
        </p>

        <form onSubmit={handleSubmit} className='vent-form'>
          <label htmlFor='vent-text' className='label-row'>
            <span>What would you like to share?</span>
            <span className='hint'>No login, no names, just your words.</span>
          </label>

          <textarea
            id="vent-text"
            value={text}
            onChange={(e) => setText(e.target.value) }
            maxLength={maxLength}
            placeholder='You can vent about your day, worries about home, or anything else. Emojis are welcome 💙'
          />

          <div className='form-footer'>
            <span className='char-count'>
              {text.length}/{maxLength}
            </span>
            <div className='btn-row'>
              <button
                type="button"
                className='ghost-btn'
                onClick={handlePromptClick}>
                I don&apos;t know what to say
              </button>
              <button type='submit' className='primary-btn'>
                Send to the circle
              </button>
            </div>
          </div>

        </form>
        {/*FORM ENDS HERE */}
        {status && <p className='status'>{status}</p>}
      </section>

      <section className='right-pane'>
        <header className='feed-header'>
          <div>
            <h2>Live anonymous messages</h2>
            <p className='feed-subtitle'>
              These are thoughts from others who might feel like you. Read gently.
            </p>
          </div>
        </header>

        <div className='feed'>
          {messages.length === 0 ? (
            <p className='empty-feed'>
              No messages yet. Be the first to share how you&apos;re really doing today.
            </p>
          ) : (
            messages.map((msg) => (
              <article key={msg.id} className='message-card'>
                <div className='message-meta'>
                  <span className='author'>Someone in this circle</span>
                  <time className='time'>
                    Today {formatTime(msg.createdAt)}
                  </time>
                </div>
                <p className='message-body'>{msg.text}</p>
              </article>
            ))
          )}
        </div>
      </section> 
    </main>    
  );
}

export default App
