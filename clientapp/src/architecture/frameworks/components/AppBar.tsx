import { useNavigate } from "react-router-dom";
import AppBar from "./shadcn/AppBard";

export default function PrimarySearchAppBar({actionEvents,authDetails}:any) {
  const {  isAuth } = authDetails
  const navigate =  useNavigate()
  return (
    <div>
       <AppBar/>
    </div>
  );
}


