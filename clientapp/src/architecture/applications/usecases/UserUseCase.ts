import AbstractUseCase from "./Interface/AbstractUseCase";
import IUserRepository from "../../domains/repository/IUserRepository";
import UserEntity from "../../domains/entities/UserEntity";

class UserUseCase extends AbstractUseCase {
  constructor(private repository: IUserRepository) {
    super();
  }
  createUser(entity: UserEntity) {
    this.repository.createUser(entity);
  }
  getUserByUniqueId(id: string | number): UserEntity {
    this.repository.findById(id);
    return new UserEntity("", "", "", "", 1, "", "", 1, "", true, 1, "");
  }
  updateUserByUniqueId(id: string | number): UserEntity {
    return new UserEntity("", "", "", "", 1, "", "", 1, "", true, 1, "");
  }
}

export default UserUseCase;