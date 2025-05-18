import IHandler from "./interface/IHandler";
import IService from "../../applications/interface/services/IService";
class CustodainHandler implements IHandler {
  constructor(private serivce: IService) {}

  create(request: any) {
   const {custodianUsecase} = this.serivce 
   custodianUsecase.create(request)
  }

  updateById(request: any) {
    const {custodianUsecase} = this.serivce 
    custodianUsecase.update(request)
  }

  getById(request: any) {
    const {custodianUsecase} = this.serivce 
    custodianUsecase.get(request)
  }
}

export default CustodainHandler;
