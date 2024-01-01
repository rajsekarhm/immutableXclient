import { useNavigate } from "react-router-dom"

export default function ErrorPage(){
    const navigate = useNavigate()
    return(
        <><h3 style={{fontFamily:"monospace"}}  > Your Not Register Yet Kindly Register </h3>
        <button onClick={() => navigate('/register')} style={{background:'white',fontFamily:"monospace"}}> Kindly register </button>
        </>
    )
}