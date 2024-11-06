import AssetHandler from "../../controllers/handlers/AssetHandler";
import AssetRepository from "../infrastructure/AssetRepository";
import AssetUseCase from "../usecases/AssetUseCase";
import IAction from "./interface/Action";
class AssetAction implements IAction {
  constructor() {}
  actions() {
    return {
        asset_create: this._create,
        asset_get:this._get,
        asset_update:this._update,
        asset_deleteL:this._delete
      };
  }
  _create(state: any, action: any) {
    console.log('create asset')
    // return { ...state, ...action.payload };
  }
  _get(state: any, action: any) {
    console.log('get asset')
    // return { ...state, ...action.payload };
  }
  _update(state: any, action: any) {
    console.log('update asset')
    // return { ...state, ...action.payload };
  }
  _delete(state: any, action: any) {
    console.log('delete asset')
    // return { ...state, ...action.payload };
  }
}
export { AssetAction };
