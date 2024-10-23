import UserEntity from "../entities/UserEntity"

interface IUserRepository  { 
    createUser(entity:UserEntity) : any| void
    findById(id:number| string):any| void
}

export default IUserRepository