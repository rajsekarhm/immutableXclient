import AbstractUseCase from "./Interface/AbstractUseCase";
import IUserRepository from "../../domains/repository/IUserRepository";
import UserEntity from "../../domains/entities/UserEntity";
import UserModal from "../../domains/modals/UserModal";

class UserUseCase implements AbstractUseCase {
  constructor(private repository: IUserRepository) {}
  execute(_function: any) {}
}

export default UserUseCase;
