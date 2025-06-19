import Handler from "./interface/Handler";
class UserHandler extends Handler {
  handler(request: any) {
    const { userUsecase } = this.service 
    return userUsecase.create(request);
  }
  create(request: any) {
    const { userUsecase } = this.service
    return userUsecase.create(request);
  }

  updateById(request: any) {
    const { userUsecase } = this.service;
    userUsecase.update(request);
  }

  getById(request: any) {
    const { userUsecase } = this.service;
    userUsecase.get(request);
  }

  addTokenUser(request: any) {
    const { userUsecase } = this.service;
    userUsecase.addTokenUser(request);
  }

  addAssetUser(request: any) {
    const { userUsecase } = this.service;
    userUsecase.addAssetUser(request);
  }
  changeAssociateUser(request: any) {
    const { userUsecase } = this.service;
    userUsecase.changeAssociateUser(request);
  }
}

export default UserHandler;
