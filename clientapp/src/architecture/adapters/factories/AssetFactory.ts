import AssetRepository from "architecture/applications/infrastructure/AssetRepository"
import AssetHandler from "../controller/AssetHandler"
import Service from "../gateways/Service"
import Presenter from "../gateways/Presenter"


class AssetFactory {
    static create(){
        const repository = AssetRepository
        const presenter = new Presenter()
        const service = new Service({repository:repository,presenter:presenter})
        return new AssetHandler(service)
    }
}

export default AssetFactory