import Handler from "./interface/Handler";
import IService from "../../applications/interface/services/IService";

class TokenHandler extends Handler {
  handler(request: any) {
    throw new Error("Method not implemented.");
  }

  create(request: any) {
    const {tokenUsecase} = this.service
    tokenUsecase.create(request)
  }

  updateById(request: any) {
    const {tokenUsecase} = this.service
    tokenUsecase.update(request)
  }

  getById(request: any) {
    const {tokenUsecase} = this.service
    tokenUsecase.get(request)
  }
}

export default TokenHandler;
