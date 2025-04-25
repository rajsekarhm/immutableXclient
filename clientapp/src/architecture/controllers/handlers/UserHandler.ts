import Service from "../../applications/services/IService";
import UserUseCase from "../../applications/usecases/UserUseCase";
import IHandler from "./interface/IHandler";
import IUserRepository from "../../domains/repository/IUserRepository";
class UserHandler implements IHandler{
  constructor(private usecase: UserUseCase, private repo:IUserRepository) {}

  create(request: any) {
    const service = new Service(request,this.repo)
    this.usecase.create(service)  }

  updateById(id: string | number) {
    const service = new Service(id,this.repo)
    this.usecase.update(service);
  }

  getById(id: string | number) {
    const service = new Service(id,this.repo)
    return this.usecase.get(service);
  }
}

export default UserHandler;
