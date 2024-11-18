import AssetRepository from "./applications/infrastructure/AssetRepository";
import AssetUseCase from "./applications/usecases/AssetUseCase";
import AssetHandler from "./controllers/handlers/AssetHandler";
import AssetModal from "./domains/modals/AssetModal";


const asset:AssetModal = {
    walletAddress: "",
    isValidated: false,
    assetType: "",
    documentUrl: "",
    status: false,
    isForSale: false
}

const repo = new AssetRepository()
const usecase = new AssetUseCase(repo)
const control = new AssetHandler(usecase)

control.create(asset)