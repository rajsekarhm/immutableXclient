import { useNavigate } from "react-router-dom";
export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{textAlign:'center', fontFamily:'initial'}}> Virtual Asset Management </h1>
    </div>  
  );
};
