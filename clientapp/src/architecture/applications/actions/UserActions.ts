import UserHandler from "../../controllers/handlers/UserHandler";
import UserRepository from "../infrastructure/UserRepository";
import UserUseCase from "../usecases/UserUseCase";
import IAction from "./interface/Action";
class UserAction implements IAction {
   userRepository:any
   userUseCase :any
   userController :any
  constructor() {}
  actions() {
    return {
      users_create: (state:any, action:any) => this._create(state, action),
      users_get: (state:any, action:any) => this._get(state, action),
      users_update: (state:any, action:any) => this._update(state, action),
      users_delete: (state:any, action:any) => this._delete(state, action),
      users_login: (state:any, action:any) => this._login(state, action),
    };
  }
  _create(state: any, action: any) {
     this.userRepository = new UserRepository();
     this.userUseCase = new UserUseCase(this.userRepository);
     this.userController = new UserHandler(this.userUseCase);
     this.userController.create({ ...state, ...action.payload })
    return { ...state, ...action.payload };
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
    console.log("login user");
  }
}
export { UserAction };
