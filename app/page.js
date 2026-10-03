"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setReply(data.reply || data.error || "No response");
    } catch (error) {
      setReply("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071a17",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
          AYLIVO
        </h1>

        <p
          style={{
            color: "#57d6b0",
            fontSize: "18px",
            letterSpacing: "2px",
          }}
        >
          SMARTER BUSINESS THROUGH AI
        </p>

        <h2 style={{ fontSize: "30px", marginTop: "45px" }}>
          Your AI Business Assistant
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#d6e5e1" }}>
          Automate customer enquiries, bookings and sales through WhatsApp — 24/7.
        </p>

        <div
          style={{
            marginTop: "35px",
            padding: "20px",
            border: "1px solid #1f6f5e",
            borderRadius: "16px",
          }}
        >
          <strong>Try AYLIVO Assistant</strong>

          <p>English • Bahasa Malaysia • العربية</p>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              marginTop: "15px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            style={{
              marginTop: "12px",
              padding: "13px 28px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {reply && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                background: "#0d2a24",
                borderRadius: "10px",
              }}
            >
              <strong>AYLIVO:</strong>
              <p>{reply}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
