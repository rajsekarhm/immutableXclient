import TokenEntity from "architecture/domains/entities/TokenEntity";
import ITokenRepository from "architecture/domains/repository/ITokenRepository";

class TokenRepository implements ITokenRepository{
    createCustodian(token: TokenEntity): void {
        throw new Error("Method not implemented.");
    }
    findById(id: number | string): void {
        throw new Error("Method not implemented.");
    }

}