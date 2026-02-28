import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Take a break, we'll be right back
      </h2>
      <p
        style={{
          fontFamily: "monospace",
          color: "#a1a1aa",
          fontSize: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        Not registered yet? Please sign up below.
      </p>
      <button
        onClick={() => navigate("/signin/users")}
        style={{
          background: "transparent",
          color: "#fff",
          fontFamily: "monospace",
          padding: "0.65rem 1.5rem",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "0.95rem",
          fontWeight: 600,
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#fff";
        }}
      >
        Register Now
      </button>
    </div>
  );
}
