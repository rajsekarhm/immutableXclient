import Handler from "./interface/Handler";
import IService from "../../applications/interface/services/IService";
class CustodainHandler extends Handler {
  handler(request: any) {
    throw new Error("Method not implemented.");
  }

  create(request: any) {
   const {custodianUsecase} = this.service 
   custodianUsecase.create(request)
  }

  updateById(request: any) {
    const {custodianUsecase} = this.service 
    custodianUsecase.update(request)
  }

  getById(request: any) {
    const {custodianUsecase} = this.service 
    custodianUsecase.get(request)
  }
}

export default CustodainHandler;
