
import CustodianEntity from '../../domains/entities/CustodianEntity';
import ICustodianRepository from '../../domains/repository/ICustodianRepository';

class CustodianRepository implements ICustodianRepository{
    createCustodian(custodian: CustodianEntity): void {
        console.log('repository called')
    }
    findById(id: number | string): void {
        console.log('repository called')
    }
    
}


export default CustodianRepository