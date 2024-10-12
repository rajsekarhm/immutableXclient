import { useDispatch } from "react-redux"

abstract class AbstractDispatch { 
   static dispatch(_function:any,payload:any) {
        const dispatch = useDispatch()
        return () => dispatch(_function(payload))
    }
} 

export default AbstractDispatch