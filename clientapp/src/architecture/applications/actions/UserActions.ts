import IAction from "./interface/Action";
class UserAction implements IAction {
  constructor() {}
  actions() {
    return {
      users_create: this._create,
    };
  }
  _create(state: any, action: any) {
    console.log("yessss", state);
    console.log(action);
    return { ...state, ...action.payload };
  }
}
export { UserAction };
