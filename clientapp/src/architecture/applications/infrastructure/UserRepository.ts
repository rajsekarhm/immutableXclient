import { IUserRepository, UserEntity } from "../../domains/Index";
class UserRepository implements IUserRepository{
    createUser(entity: UserEntity): void {
        // external interaction
        throw new Error("Method not implemented.");
    }
    findById(id: number | string): void {
        // external interaction
        throw new Error("Method not implemented.");
    }

}


export default UserRepository