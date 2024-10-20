
import CustodianEntity from "../../domains/entities/CustodianEntity";
import AbstractUseCase from "./Interface/AbstractUseCase";
import ICustodianRepository from '../../domains/repository/ICustodianRepository';
class CustodianUseCase implements AbstractUseCase {
  constructor (private repository:ICustodianRepository) { 
  }

  execute(_function:any) {
    console.log('usecase called')
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