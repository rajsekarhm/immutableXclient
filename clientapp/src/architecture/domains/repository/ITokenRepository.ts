import TokenEntity from "../entities/TokenEntity"


interface ITokenRepository { 
    createCustodian(token:TokenEntity):void
    findById(id:number| string):void
}

export default ITokenRepository