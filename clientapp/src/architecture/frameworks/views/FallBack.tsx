function FallBackComponent() {
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
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Oops!
      </h2>
      <p style={{ color: "#a1a1aa", fontSize: "1rem" }}>
        Sorry, something went wrong. Please try refreshing the page.
      </p>
    </div>
  );
}

export { FallBackComponent };
