import { useDispatch } from "react-redux";
import UserUseCase from "../../applications/usecases/UserUseCase";
import IHandler from "./interface/IHandler";
import UserEntity from "../../domains/entities/UserEntity";
import UserModal from "../../domains/modals/UserModal";
class UserHandler implements IHandler{
  constructor(private usecase: UserUseCase) {}

  create(request: UserModal) {
    console.log('userhandler create methods called')
     this.usecase.createUser(request);
  }

  updateById(id: string | number) {
    console.log('userhandler update methods called')
    this.usecase.updateUserByUniqueId(id);
  }

  getById(id: string | number) {
    console.log('userhandler get methods called')
    return this.usecase.getUserByUniqueId(id);
  }

  disptach(_function: any,...args:any) {
    const _dispatch = useDispatch();
    return _dispatch(_function(args));
  }
}

export default UserHandler;
