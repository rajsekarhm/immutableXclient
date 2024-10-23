
import UserEntity from '../../domains/entities/UserEntity';
import IUserRepository from '../../domains/repository/IUserRepository';
class UserRepository implements IUserRepository{
    entities!:UserEntity
    createUser(entity: UserEntity): void {
        console.log('userrepository create method called')
        this.entities = entity
    }
    findById(id: number | string): any {
        console.log('userrepository get method called')
        console.log(this.entities)
        return this.entities
    }

}


export default UserRepository