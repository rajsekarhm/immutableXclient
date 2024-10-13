import { CustodianEntity, ICustodianRepository } from "../../domains/Index";
import AbstractUseCase from "./Interface/AbstractUseCase";
class CustodianUseCase extends AbstractUseCase {
  constructor (private repository:ICustodianRepository) { 
    super()
  }

  createCustodian(entity: CustodianEntity) {
    this.repository.createCustodian(entity);
  }
  getAssetByUniqueId(id: string | number): CustodianEntity {
    this.repository.findById(id);
    return new CustodianEntity("", "", "", "", 1, "", "", 1, "", true, 1, "","","","");
  }
  updateAssetByUniqueId(id: string | number): CustodianEntity {
    return new CustodianEntity("", "", "", "", 1, "", "", 1, "", true, 1, "","","","");
  }
}

export default CustodianUseCase