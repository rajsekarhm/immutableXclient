import CustodianEntity from "architecture/domains/entities/CustodianEntity";
import ICustodianRepository from "../../domains/repository/ICustodianRepository";

class CustodianRepository implements ICustodianRepository {
    createCustodian(custodian: CustodianEntity): void {
        throw new Error("Method not implemented.");
    }
    getCustodian(id: number | string): void {
        throw new Error("Method not implemented.");
    }

}

export default new CustodianRepository();
