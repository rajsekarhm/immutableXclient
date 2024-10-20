import IAction from "./interface/Action";
class TestActions implements IAction {
  constructor() {}
  actions() {
    return {
      test_create: this._create,
    };
  }
  _create(state: any, action: any) {
    console.log("yessss");
    console.log(state)
    console.log(action)
    return { ...state, ...action.payload };
  }
}
export { TestActions };