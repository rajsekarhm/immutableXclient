import CustodianEntity from "../../domains/entities/CustodianEntity";
import AbstractUseCase from "./Interface/AbstractUseCase";
import ICustodianRepository from "../../domains/repository/ICustodianRepository";
import CustodianModal from "../../domains/modals/CustodianModal";
class CustodianUseCase implements AbstractUseCase {
  constructor(private repository: ICustodianRepository) {}

  execute(_function: any) {
  }
  
  createCustodian(entity: CustodianModal) {
    this.repository.createCustodian(
      new CustodianEntity(
        entity.securityId,
        entity.firstName,
        entity.lastName,
        entity.email,
        entity.phoneNumber,
        entity.password,
        entity.location,
        entity.governmentID,
        entity.edition,
        entity.isAgent,
        entity.AgentId,
        entity.isAuthForBuyAndSell,
        entity.orgId,
        entity.Authenticated,
        entity.AuthorizationFor
      )
    );
  }
  getAssetByUniqueId(id: string | number): CustodianEntity {
    this.repository.findById(id);
    return new CustodianEntity(
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
  }
  updateAssetByUniqueId(id: string | number): CustodianEntity {
    return new CustodianEntity(
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
  }
}

export default CustodianUseCase;
