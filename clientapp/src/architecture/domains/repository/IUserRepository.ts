import UserEntity from "../entities/UserEntity"

interface IUserRepository { 
    createUser(entity:UserEntity) : void
    findById(id:number| string):void
}

export default IUserRepository