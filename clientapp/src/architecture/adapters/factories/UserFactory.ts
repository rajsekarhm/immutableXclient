import UserHandler from "../controller/UserHandler"
import Presenter from "../gateways/Presenter"
import Service from "../gateways/Service"
import { repositoryFactory } from "./Factory"


class UserFactory { 
    static create() { 
        const presenter = new Presenter()
        const service = new Service({...repositoryFactory(),presenter:presenter})
        return new UserHandler(service)
    }
}

export default UserFactory