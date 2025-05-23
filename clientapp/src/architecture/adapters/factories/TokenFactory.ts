import TokenRepository from "architecture/applications/infrastructure/TokenRepository"
import TokenHandler from "../controller/TokenHandler"
import Presenter from "../gateways/Presenter"
import Service from "../gateways/Service"


class TokenFactory{
    static create(){
        const repository = TokenRepository
        const presenter = new Presenter()
        const service = new Service({repository:repository,presenter:presenter})
        return new TokenHandler(service)
    }
}

export default TokenFactory