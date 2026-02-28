/**
 * ICustodianRepository — contract for custodian data access.
 * Implementations handle Redux store dispatch + API calls.
 */
export default interface ICustodianRepository {
  getCustodianState(): any;
  createCustodian(custodianDetails: any): Promise<any>;
  getCustodianById(id: string): Promise<any>;
}
