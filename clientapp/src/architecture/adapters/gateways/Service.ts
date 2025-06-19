import IModel from "../../applications/interface/input/IModel";
import IService from "../../applications/interface/services/IService";
import AssetUseCase from "../../applications/usecases/AssetUseCase";
import CustodianUseCase from "../../applications/usecases/CustodianUseCase";
import TokenUseCase from "../../applications/usecases/TokenUseCase";
import UserUseCase from "../../applications/usecases/UserUseCase";

class Service implements IService{
    assetUsecase:AssetUseCase
    userUsecase:UserUseCase
    tokenUsecase:TokenUseCase
    custodianUsecase:CustodianUseCase
    constructor(dependencies:IModel){
        this.tokenUsecase = new TokenUseCase(dependencies);
        this.assetUsecase = new AssetUseCase(dependencies);
        this.custodianUsecase = new CustodianUseCase(dependencies);
        this.userUsecase = new UserUseCase(dependencies);
    }
}

export default Service