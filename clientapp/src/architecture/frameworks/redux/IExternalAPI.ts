
interface IExternalAPI{
    createAsyncAction(type:string,actionFunction:any):any
    createSyncAction():any
}

export default IExternalAPI