import CustodainHandler from "../../controllers/handlers/CustodianHandler";
import CustodianRepository from "../infrastructure/CustodianRepository";
import CustodianUseCase from "../usecases/CustodianUseCase";
import IAction from "./interface/Action";
class CustodainAction implements IAction {
  constructor() {}
  actions() {
    return {
        custodain_create: this._create,
        custodain_get:this._get,
        custodain_update:this._update,
        custodain_deleteL:this._delete
      };
  }
  _create(state: any, action: any) {
    console.log('create custodain')
    // return { ...state, ...action.payload };
  }
  _get(state: any, action: any) {
    console.log('get custodain')
    // return { ...state, ...action.payload };
  }
  _update(state: any, action: any) {
    console.log('update custodain')
    // return { ...state, ...action.payload };
  }
  _delete(state: any, action: any) {
    console.log('delete custodain')
    // return { ...state, ...action.payload };
  }
}
export { CustodainAction };
