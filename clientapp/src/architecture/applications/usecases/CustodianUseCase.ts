import AbstractUsecase from "./Interface/AbstractUsecase";
class CustodianUseCase extends AbstractUsecase {
  create(input: any): any {
    const { custodianRepository, presenter} =  this.depedencies
    presenter.render(custodianRepository.createCustodian(input))
  }

  update(input: any): any {
    const { custodianRepository, presenter} =  this.depedencies
  }

  delete(input: any): any {
    const { custodianRepository, presenter} =  this.depedencies
  }

  get(input: any): any {
    const { custodianRepository, presenter} =  this.depedencies
    presenter.render(custodianRepository.getCustodian(input))
  }

  compensation(inputs: any) {
    const { custodianRepository, presenter} =  this.depedencies
  }

  execute(inputs: any) {
    const { custodianRepository, presenter} =  this.depedencies
  }
}

export default CustodianUseCase;
