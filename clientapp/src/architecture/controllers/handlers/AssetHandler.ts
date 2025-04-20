import Service from "../../applications/services/IService";
import AssetUseCase from "../../applications/usecases/AssetUseCase";
import AssetModal from "../../domains/modals/AssetModal";
import IHandler from "./interface/IHandler";
import IUserRepository from "../../domains/repository/IUserRepository";

class AssetHandler implements IHandler {
  constructor(private usecase: AssetUseCase,private repo: IUserRepository) {}

  create(request: AssetModal) {
    const service = new Service(request,this.repo)
    this.usecase.create(service)
  }

  updateById(id: string | number) {
    const service = new Service(id,this.repo)
    this.usecase.update(service);
  }

  getById(id: string | number): any {
    const service = new Service(id,this.repo)
    return this.usecase.get(service);
  }
}



export default AssetHandler