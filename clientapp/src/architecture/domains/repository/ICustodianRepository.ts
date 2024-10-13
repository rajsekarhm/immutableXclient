import CustodianEntity from '../entities/CustodianEntity'

interface ICustodianRepository { 
    createCustodian(custodian:CustodianEntity):void
    findById(id:number| string):void
}

export default ICustodianRepository