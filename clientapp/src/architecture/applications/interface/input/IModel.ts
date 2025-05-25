import IAssetRepository from "architecture/domains/repository/IAssetRepository"
import IPresenter from "../output/IPresenter"
import IUserRepository from "architecture/domains/repository/IUserRepository"
import ICustodianRepository from "architecture/domains/repository/ICustodianRepository"
import ITokenRepository from "architecture/domains/repository/ITokenRepository";

interface IModel {
    assetRepository: IAssetRepository;
    userRepository: IUserRepository;
    custodianRepository: ICustodianRepository;
    tokenRepository: ITokenRepository;
    presenter: IPresenter;
}
export default IModel