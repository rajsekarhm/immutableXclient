import IModel from "architecture/applications/interface/input/IModel"

 abstract class IUsecase {
     constructor(protected depedencies:IModel){
          this.compensation = this.compensation.bind(this)
          this.execute = this.execute.bind(this)
     }
     abstract execute(input:any): any | Promise<any>
     abstract compensation(inputs: any):any
}

export default IUsecase