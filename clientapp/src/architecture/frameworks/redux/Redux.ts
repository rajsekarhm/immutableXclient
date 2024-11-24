import IExternalAPI from "./IExternalAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
class Redux implements IExternalAPI {
    createAsyncAction(type:string,actionFunction:any,...parms:any[]){
        return createAsyncThunk<any>(type,actionFunction(parms))
    }

    createSyncAction() {
    }
}

const  ActionCreater = new  Redux()
export default  ActionCreater;