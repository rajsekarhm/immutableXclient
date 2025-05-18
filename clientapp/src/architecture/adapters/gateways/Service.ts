import IModel from "architecture/applications/interface/input/IModel";
import IService from "architecture/applications/interface/services/IService";
import AssetUseCase from "architecture/applications/usecases/AssetUseCase";
import CustodianUseCase from "architecture/applications/usecases/CustodianUseCase";
import TokenUseCase from "architecture/applications/usecases/TokenUseCase";
import UserUseCase from "architecture/applications/usecases/UserUseCase";

class Service implements IService{
    assetUsecase!:AssetUseCase
    userUsecase!:UserUseCase
    tokenUsecase!:TokenUseCase
    custodianUsecase!:CustodianUseCase
    constructor(dependencies:IModel){
        this.tokenUsecase = new TokenUseCase(dependencies);
        this.assetUsecase = new AssetUseCase(dependencies);
        this.custodianUsecase = new CustodianUseCase(dependencies);
        this.userUsecase = new UserUseCase(dependencies);
    }
}

export default Service