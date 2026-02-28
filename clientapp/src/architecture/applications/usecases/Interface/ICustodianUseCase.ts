/**
 * ICustodianUseCase — contract for custodian business logic.
 */
export default interface ICustodianUseCase {
  createCustodian(custodianDetails: any): Promise<any>;
  getCustodian(id: string): Promise<any>;
}
