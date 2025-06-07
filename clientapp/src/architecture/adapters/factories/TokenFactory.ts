import TokenHandler from "../controller/TokenHandler"
import Presenter from "../gateways/Presenter"
import Service from "../gateways/Service"
import { repositoryFactory } from "./Factory"


class TokenFactory{
    static create(){
        const presenter = new Presenter()
        const service = new Service({...repositoryFactory(),presenter:presenter})
        return new TokenHandler(service)
    }
}

export default TokenFactory