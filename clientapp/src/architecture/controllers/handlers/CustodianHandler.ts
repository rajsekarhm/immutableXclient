import CustodianUseCase from "../../applications/usecases/CustodianUseCase";
import CustodianEntity from "../../domains/entities/CustodianEntity";
import CustodianModal from "../../domains/modals/CustodianModal";
import IHandler from "./interface/IHandler";
class CustodainHandler implements IHandler{
  constructor(private usecase: CustodianUseCase) {}

  create(request: CustodianModal) {
    this.usecase.createCustodian(request);
  }

  updateById(id: string | number) {
    this.usecase.updateAssetByUniqueId(id);
  }

  getById(id: string | number) {
    return this.usecase.getAssetByUniqueId(id);
  }
}

export default CustodainHandler;
