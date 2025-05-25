import IModel from "architecture/applications/interface/input/IModel"

 abstract class AbstractUsecase {
     constructor(protected depedencies:IModel){
          this.compensation = this.compensation.bind(this)
          this.execute = this.execute.bind(this)
     }
     abstract execute(input:any): any | Promise<any>
     abstract compensation(inputs: any):any
}

export default AbstractUsecase