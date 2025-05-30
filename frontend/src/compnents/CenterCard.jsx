import React from "react";

const options = [
  {
    title: "Saved Prompt Templates",
    desc: "Users save and reuse prompt templates for faster responses."
  },
  {
    title: "Media Type Selection",
    desc: "Users select media type for tailored interactions."
  },
  {
    title: "Multilingual Support",
    desc: "Choose language for better interaction."
  }
];

const tabs = ["All", "Text", "Image", "Video", "Music", "Analytics"];

const CenterCard = () => (
  <div style={{
    background: "#23272a",
    borderRadius: 24,
    padding: 40,
    minWidth: 440,
    maxWidth: 500,
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    color: "#fff"
  }}>
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <div style={{ fontSize: 40, marginBottom: 8 }}>🤖</div>
      <h2 style={{ margin: 0 }}>How can i help you today?</h2>
      <div style={{ color: "#aaa", marginTop: 8, fontSize: 15 }}>
        This code will display a prompt asking the user for their name, and then it will display a greeting message with the name entered by the user.
      </div>
    </div>
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 24
    }}>
      {options.map(opt => (
        <div key={opt.title} style={{
          background: "#191f22",
          borderRadius: 12,
          padding: 16,
          flex: 1,
          minWidth: 110
        }}>
          <div style={{ fontWeight: "bold", marginBottom: 8 }}>{opt.title}</div>
          <div style={{ fontSize: 13, color: "#aaa" }}>{opt.desc}</div>
        </div>
      ))}
    </div>
    <div style={{
      display: "flex",
      gap: 16,
      marginBottom: 16
    }}>
      {tabs.map(tab => (
        <div key={tab} style={{
          fontWeight: tab === "All" ? "bold" : "normal",
          color: tab === "All" ? "#16c784" : "#aaa",
          cursor: "pointer"
        }}>
          {tab}
        </div>
      ))}
    </div>
    <div style={{
      background: "#181c1f",
      borderRadius: 8,
      padding: "8px 12px",
      display: "flex",
      alignItems: "center"
    }}>
      <span style={{ marginRight: 8 }}>🤖</span>
      <input
        placeholder="Type your message..."
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: 16,
          outline: "none"
        }}
      />
      <button style={{
        background: "#16c784",
        border: "none",
        borderRadius: 6,
        color: "#fff",
        padding: "6px 14px",
        marginLeft: 8,
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        ▶
      </button>
    </div>
    <div style={{ color: "#aaa", fontSize: 12, marginTop: 16, textAlign: "center" }}>
      ChatGPT can make mistakes. Consider checking important information.
    </div>
  </div>
);

export default CenterCard;
