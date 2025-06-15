import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Take a break, we'll be right back 😄</h2>
      <h3 style={{ fontFamily: "monospace" }}>
        Not registered yet? Please sign up below.
      </h3>
      <button
        onClick={() => navigate("/sign-in/users")}
        style={{
          background: "white",
          fontFamily: "monospace",
          padding: "0.5rem 1rem",
          marginTop: "1rem",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        Register Now
      </button>
    </div>
  );
}
