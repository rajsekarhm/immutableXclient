import AssetUseCase from "architecture/applications/usecases/AssetUseCase";
import CustodianUseCase from "architecture/applications/usecases/CustodianUseCase";
import TokenUseCase from "architecture/applications/usecases/TokenUseCase";
import UserUseCase from "architecture/applications/usecases/UserUseCase";

interface IService{
    assetUsecase:AssetUseCase
    userUsecase:UserUseCase
    tokenUsecase:TokenUseCase
    custodianUsecase:CustodianUseCase
}

export default IService