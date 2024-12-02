import CustodianEntity from '../entities/CustodianEntity'

interface ICustodianRepository { 
    createCustodian(custodian:CustodianEntity):void
    getCustodian(id:number| string):void
}

export default ICustodianRepository