import IUsecase from "./Interface/IUsecase";

class TokenUseCase extends IUsecase {
  create(input: any): any {
    const { repository, presenter} =  this.depedencies
  }

  update(input: any): any {
    const { repository, presenter} =  this.depedencies
  }

  delete(input: any): any {
    const { repository, presenter} =  this.depedencies
  }

  get(input: any): any {
    const { repository, presenter} =  this.depedencies
  }

  compensation(inputs: any) {
    const { repository, presenter} =  this.depedencies
  }

  execute(inputs: any) {
    const { repository, presenter} =  this.depedencies
  }
}

export default TokenUseCase;
