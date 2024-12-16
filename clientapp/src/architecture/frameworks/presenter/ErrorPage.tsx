import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <h2> take a break we will right back xD .. </h2>
      <h3 style={{ fontFamily: "monospace" }}>
        {" "}
        If Your Not Register Yet Kindly Register{" "}
      </h3>
      <button
        onClick={() => navigate("/sign-in/users")}
        style={{ background: "white", fontFamily: "monospace" }}
      >
        {" "}
        Kindly register{" "}
      </button>
    </>
  );
}
