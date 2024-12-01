import TokenEntity from "../entities/TokenEntity";
import TokenModal from "../modals/TokenModal";

interface ITokenRepository {
    createToken(token:TokenModal | TokenEntity | any,errorHandler?:any):any
    getTokenById(id:string|any,errorHandler?:any):any
    createTokenOnChain(token:TokenModal | TokenEntity | any,errorHandler?:any):any
    getTokenOnChain(tokenId: any,errorHandler?:any): any;
}

export default ITokenRepository;
