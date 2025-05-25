

import AssetRepository from "architecture/applications/infrastructure/AssetRepository"
import TokenRepository from "architecture/applications/infrastructure/TokenRepository"
import CustodianRepository from "architecture/applications/infrastructure/CustodianRepository"
import UserRepository from "architecture/applications/infrastructure/UserRepository"



export  function repositoryFactory(){
    return { 
        assetRepository: AssetRepository,
        userRepository: UserRepository,
        custodianRepository: CustodianRepository,
        tokenRepository: TokenRepository
    }
}