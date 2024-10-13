import { useDispatch } from "react-redux";
import UserUseCase from "../../applications/usecases/UserUseCase";
import { UserEntity } from "../../domains/Index";
class UserHandler {
  constructor(private usecase: UserUseCase) {}

  create(request: any) {
    const entity = new UserEntity(
      "",
      "",
      "",
      "",
      1,
      "",
      "",
      1,
      "",
      true,
      1,
      ""
    );
    this.usecase.createUser(entity);
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