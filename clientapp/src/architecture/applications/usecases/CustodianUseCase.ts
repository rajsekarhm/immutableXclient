import CustodianEntity from "../../domains/entities/CustodianEntity";
import AbstractUseCase from "./Interface/AbstractUseCase";
import ICustodianRepository from "../../domains/repository/ICustodianRepository";
import CustodianModal from "../../domains/modals/CustodianModal";
class CustodianUseCase implements AbstractUseCase {
  constructor(private repository: ICustodianRepository) {}
  execute(_function: any) {}
}

export default CustodianUseCase;
