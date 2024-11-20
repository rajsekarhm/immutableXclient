import AbstractUseCase from "./Interface/AbstractUseCase";
import IUserRepository from "../../domains/repository/IUserRepository";
import UserEntity from "../../domains/entities/UserEntity";
import UserModal from "../../domains/modals/UserModal";

class UserUseCase implements AbstractUseCase {
  constructor(private repository: IUserRepository) {
  }
  execute(_function:any) {
    console.log('usecase called')
  }

  createUser(entity: UserModal) {
    this.repository.createUser(new UserEntity(entity.securityId || entity.phoneNumber.toString(),
      entity.firstname,
      entity.lastname,
      entity.email,
      entity.phoneNumber,
      entity.password,
      entity.location,
      entity.governmentId,
      entity.edition  || 'free',
      entity.isAgent || false,
      entity.AgentId || 0,
      entity.isAuthForBuyAndSell || "false",
      entity.assetHolding || undefined));
  }
  getUserByUniqueId(id: string | number): UserEntity {
    console.log('userusecase  get method called')
    return this.repository.findById(id)
  }
  updateUserByUniqueId(id: string | number): UserEntity {
    console.log('userusecase  update method called')
    return new UserEntity("", "", "", "", 1, "", "", 1, "", true, 1, "");
  }
}

export default UserUseCase;
