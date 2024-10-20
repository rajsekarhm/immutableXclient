import CustodianUseCase from "../../applications/usecases/CustodianUseCase";
import CustodianEntity from "../../domains/entities/CustodianEntity";
import IHandler from "./interface/IHandler";
class CustodainHandler implements IHandler{
  constructor(private usecase: CustodianUseCase) {}

  create(request: any) {
    const entity = new CustodianEntity(
      "",
      "",
      "",
      "",
      1,
      "",
      "",
      1,
      "",
      true,
      1,
      "",
      "",
      "",
      ""
    );
    this.usecase.createCustodian(entity);
  }

  updateById(id: string | number) {
    this.usecase.updateAssetByUniqueId(id);
  }

  getById(id: string | number) {
    return this.usecase.getAssetByUniqueId(id);
  }
}

export default CustodainHandler;
