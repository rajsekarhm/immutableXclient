import { CustodianEntity, ICustodianRepository } from "../../domains/Index";

class CustodianRepository implements ICustodianRepository{
    createCustodian(custodian: CustodianEntity): void {
        throw new Error("Method not implemented.");
    }
    findById(id: number | string): void {
        throw new Error("Method not implemented.");
    }
    
}