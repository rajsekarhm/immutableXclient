import AbstractUsecase from "./Interface/AbstractUsecase";

class TokenUseCase extends AbstractUsecase {
  create(input: any): any {
    const { tokenRepository, presenter} =  this.depedencies
    const  output = tokenRepository.createToken(input)
    tokenRepository.createTokenOnChain(input)

     presenter.render(output)
  }

  update(input: any): any {
    // const { tokenRepository, presenter} =  this.depedencies
  }

  delete(input: any): any {
    // const { tokenRepository, presenter} =  this.depedencies
  }

  get(input: any): any {
    const { tokenRepository, presenter} =  this.depedencies
    presenter.render(tokenRepository.getTokenById(input))
  }

  compensation(inputs: any) {
    // const { tokenRepository, presenter} =  this.depedencies
  }

  execute(inputs: any) {
    // const { tokenRepository, presenter} =  this.depedencies
  }
}

export default TokenUseCase;
