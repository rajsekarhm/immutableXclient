import UserEntity from "../entities/UserEntity";
import UserModal from "../modals/UserModal";

interface IUserRepository {
  createUser(entity: UserModal | UserEntity, errorHandler?: any): any;
  getUserById(id: number | string, errorHandler?: any): any;
  addAssetToUser(addAssetDetails: any, errorHandler?: any): any;
  addTokenToUser(addTokenDetails: any, errorHandler?: any): any;
}

export default IUserRepository;
