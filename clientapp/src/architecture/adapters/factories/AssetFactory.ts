import AssetHandler from "../controller/AssetHandler"
import Service from "../gateways/Service"
import Presenter from "../gateways/Presenter"
import { repositoryFactory } from "./Factory"


class AssetFactory {
    static create(){
        const presenter = new Presenter()
        const service = new Service({...repositoryFactory(),presenter:presenter})
        return new AssetHandler(service)
    }
}

export default AssetFactory