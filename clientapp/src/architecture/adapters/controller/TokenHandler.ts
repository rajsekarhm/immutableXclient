import IHandler from "./interface/IHandler";
import IService from "../../applications/interface/services/IService";

class TokenHandler implements IHandler {
  constructor(private serivce: IService) {}

  create(request: any) {
    const {tokenUsecase} = this.serivce
    tokenUsecase.create(request)
  }

  updateById(request: any) {
    const {tokenUsecase} = this.serivce
    tokenUsecase.update(request)
  }

  getById(request: any) {
    const {tokenUsecase} = this.serivce
    tokenUsecase.get(request)
  }
}

export default TokenHandler;
