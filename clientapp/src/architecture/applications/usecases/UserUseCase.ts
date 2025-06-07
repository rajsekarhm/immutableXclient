import AbstractUsecase from "./Interface/AbstractUsecase";

class UserUseCase extends AbstractUsecase {

  create(input: any): any {
    const { userRepository, presenter } =  this.depedencies
    userRepository.createUser(input,(error:string) => {  throw new Error(error)})
  }

  update(input: any): any {
    // const {userRepository, presenter } =  this.depedencies
  }

  delete(input: any): any {
    // const {userRepository, presenter } =  this.depedencies
  }

  get(input: any): any {
    const {userRepository, presenter } =  this.depedencies
    presenter.render(userRepository.getUserById(input,(error:string) => {  throw new Error(error)}))
  }

  addTokenUser(input: any): any {
    const {userRepository, presenter } =  this.depedencies
    const result = userRepository.addTokenToUser(input)
    presenter.render(result)
  }
  addAssetUser(input: any): any {
    const {userRepository, presenter } =  this.depedencies
    const result = userRepository.addAssetToUser(input)
    presenter.render(result)
  }
  changeAssociateUser(input: any): any {
    const {userRepository, presenter } =  this.depedencies
  }
  compensation(inputs: any) {
    const {userRepository, presenter } =  this.depedencies
  }

  execute(inputs: any) {
    const {userRepository, presenter } =  this.depedencies
  }
}

export default UserUseCase;
