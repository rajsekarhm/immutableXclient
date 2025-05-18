import UserRepository from "architecture/applications/infrastructure/UserRepository"
import UserHandler from "../controller/UserHandler"
import Presenter from "../gateways/Presenter"
import Service from "../gateways/Service"


class UserFactory { 
    static create() { 
        const repository = UserRepository
        const presenter = new Presenter()
        const service = new Service({repository:repository,presenter:presenter})
        return new UserHandler(service)
    }
}

export default UserFactory