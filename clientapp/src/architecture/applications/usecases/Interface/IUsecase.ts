
interface  IUsecase {
     execute(_function:any): any | Promise<any>
     notify(inputs:any):any
}

export default IUsecase