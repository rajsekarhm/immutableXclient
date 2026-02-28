import ICustodianRepository from '../../domains/repository/ICustodianRepository';
import ICustodianUseCase from './Interface/ICustodianUseCase';

class CustodianUseCase implements ICustodianUseCase {
  constructor(private custodianRepository: ICustodianRepository) {}

  async createCustodian(custodianDetails: any) {
    if (!custodianDetails.email || !custodianDetails.orgId) {
      throw new Error('Email and organization ID are required');
    }
    return this.custodianRepository.createCustodian(custodianDetails);
  }

  async getCustodian(id: string) {
    if (!id) {
      throw new Error('Custodian ID is required');
    }
    return this.custodianRepository.getCustodianById(id);
  }
}

export default CustodianUseCase;
