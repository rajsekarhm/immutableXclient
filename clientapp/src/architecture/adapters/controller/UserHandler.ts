import IHandler from "./interface/IHandler";
import IService from "../../applications/interface/services/IService";
class UserHandler implements IHandler {
  constructor(private serivce: IService) {}

  create(request: any) {
    const { userUsecase } = this.serivce;
    userUsecase.create(request);
  }

  updateById(request: any) {
    const { userUsecase } = this.serivce;
    userUsecase.update(request);
  }

  getById(request: any) {
    const { userUsecase } = this.serivce;
    userUsecase.get(request);
  }

  addTokenUser(request: any) {
    const { userUsecase } = this.serivce;
    userUsecase.addTokenUser(request);
  }

  addAssetUser(request: any) {
    const { userUsecase } = this.serivce;
    userUsecase.addAssetUser(request);
  }
  changeAssociateUser(request: any) {
    const { userUsecase } = this.serivce;
    userUsecase.changeAssociateUser(request);
  }
}

export default UserHandler;
