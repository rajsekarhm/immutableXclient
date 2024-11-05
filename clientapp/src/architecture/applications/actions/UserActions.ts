import UserHandler from "../../controllers/handlers/UserHandler";
import UserRepository from "../infrastructure/UserRepository";
import UserUseCase from "../usecases/UserUseCase";
import IAction from "./interface/Action";
class UserAction implements IAction {
  constructor() {}
  actions() {
    return {
      users_create: this._create,
      users_get: this._get,
      users_update: this._update,
      users_delete: this._delete,
      users_login: this._login,
    };
  }
  _create(state: any, action: any) {
    const userRepository = new UserRepository();
    const userUseCase = new UserUseCase(userRepository);
    const userController = new UserHandler(userUseCase);
    console.log(state);
    console.log("create user");
    // return { ...state, ...action.payload };
  }
  _get(state: any, action: any) {
    console.log("get user");
    // return { ...state, ...action.payload };
  }
  _update(state: any, action: any) {
    console.log("update user");
    // return { ...state, ...action.payload };
  }
  _delete(state: any, action: any) {
    console.log("delete user");
    // return { ...state, ...action.payload };
  }
  _login(state: any, action: any) {
    console.log(state);
    console.log("login user");
  }
}
export { UserAction };
