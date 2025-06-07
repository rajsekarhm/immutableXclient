import CustodainHandler from "../controller/CustodianHandler"
import Presenter from "../gateways/Presenter"
import Service from "../gateways/Service"
import { repositoryFactory } from "./Factory"


class CustodianFactory {
    static create(){
        const presenter = new Presenter()
        const service = new Service({...repositoryFactory(),presenter:presenter})
        return new CustodainHandler(service)
    }
}

export default CustodianFactory