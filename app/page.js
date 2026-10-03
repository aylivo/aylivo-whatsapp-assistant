export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071a17",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
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

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#d6e5e1",
          }}
        >
          Automate customer enquiries, bookings and sales through
          WhatsApp — 24/7.
        </p>

        <div
          style={{
            marginTop: "35px",
            padding: "20px",
            border: "1px solid #1f6f5e",
            borderRadius: "16px",
          }}
        >
          <strong>AYLIVO WhatsApp Assistant</strong>
          <p>English • Bahasa Malaysia • العربية</p>
        </div>
      </div>
    </main>
  );
}
