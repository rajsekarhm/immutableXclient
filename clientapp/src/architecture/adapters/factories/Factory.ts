

import AssetRepository from "../../applications/infrastructure/AssetRepository"
import TokenRepository from "../../applications/infrastructure/TokenRepository"
import CustodianRepository from "../../applications/infrastructure/CustodianRepository"
import UserRepository from "../../applications/infrastructure/UserRepository"



export  function repositoryFactory(){
    return { 
        assetRepository: AssetRepository,
        userRepository: UserRepository,
        custodianRepository: CustodianRepository,
        tokenRepository: TokenRepository
    }
}