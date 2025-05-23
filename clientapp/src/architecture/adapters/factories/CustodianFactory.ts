import CustodianRepository from "architecture/applications/infrastructure/CustodianRepository"
import CustodainHandler from "../controller/CustodianHandler"
import Presenter from "../gateways/Presenter"
import Service from "../gateways/Service"


class CustodianFactory {
    static create(){
        const repository = CustodianRepository
        const presenter = new Presenter()
        const service = new Service({repository:repository,presenter:presenter})
        return new CustodainHandler(service)
    }
}

export default CustodianFactory