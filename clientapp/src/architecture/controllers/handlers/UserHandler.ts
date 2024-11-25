import { useDispatch } from "react-redux";
import UserUseCase from "../../applications/usecases/UserUseCase";
import IHandler from "./interface/IHandler";
import UserEntity from "../../domains/entities/UserEntity";
import UserModal from "../../domains/modals/UserModal";
class UserHandler implements IHandler{
  constructor(private usecase: UserUseCase) {}

  create(request: UserModal) {
     this.usecase.createUser(request);
  }

  updateById(id: string | number) {
    this.usecase.updateUserByUniqueId(id);
  }

  getById(id: string | number) {
    return this.usecase.getUserByUniqueId(id);
  }

  disptach(_function: any,...args:any) {
    const _dispatch = useDispatch();
    return _dispatch(_function(args));
  }
}

export default UserHandler;
