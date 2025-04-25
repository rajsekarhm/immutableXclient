import ICustodianRepository from "../../domains/repository/ICustodianRepository";
import CustodianUseCase from "../../applications/usecases/CustodianUseCase";
import CustodianModal from "../../domains/modals/CustodianModal";
import IHandler from "./interface/IHandler";
import Service from "../../applications/services/IService";
class CustodainHandler implements IHandler{
  constructor(private usecase: CustodianUseCase, private repo:ICustodianRepository) {}

  create(request: CustodianModal) {
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

export default CustodainHandler;
