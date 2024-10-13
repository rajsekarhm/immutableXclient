import { UserEntity } from "../Index"
interface IUserRepository { 
    createUser(entity:UserEntity) : void
    findById(id:number| string):void
}

export default IUserRepository