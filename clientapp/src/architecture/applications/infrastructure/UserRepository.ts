
import UserEntity from '../../domains/entities/UserEntity';
import IUserRepository from '../../domains/repository/IUserRepository';
class UserRepository implements IUserRepository{
    createUser(entity: UserEntity): void {
        // external interaction
        console.log(entity)
        console.log('repository called')
    }
    findById(id: number | string): void {
        // external interaction
        console.log('repository called')
    }

}


export default UserRepository