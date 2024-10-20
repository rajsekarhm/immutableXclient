import { combineReducers, configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
import UserEntity from '../domains/entities/UserEntity';
import { UserAction } from "../applications/actions/UserActions";
import { TestActions } from "../applications/actions/TestActions";
import { CustodainAction } from "../applications/actions/CustodianActions";
import { AssetAction } from "../applications/actions/AssetActions";
import AssetEntity from "../domains/entities/AssetEntity";
import CustodianEntity from "../domains/entities/CustodianEntity";

class store {
  _store: any;
  _reducers: any = {};
  _actions:any = {}
  getStore() {
    this._store = configureStore({
      reducer: this._reducers,
    });
    return this._store;
  }

  getActions() {
    return this._actions;
  }

  createActions(actionName: any, initialState: any, _functions: any) {
    const actionSlice = createSlice({
      name: actionName,
      initialState: initialState,
      reducers: _functions,
    });
    this._actions = {...this._actions,...actionSlice.actions}
    this.combineActions(actionName,actionSlice.reducer);
    return actionSlice
  }

  combineActions(actionName: string,reducer: any) {
    this._reducers = {...this._reducers,[actionName]:reducer}
  }

}


const etore = new store()
etore.createActions("user_actions",UserEntity.initialState(),new UserAction().actions())
etore.createActions("test_actions",{actions:0},new TestActions().actions())
etore.createActions("custodain_actions",CustodianEntity.initialState(),new CustodainAction().actions())
etore.createActions("asset_actions",AssetEntity.initialState(),new AssetAction().actions())
const sstore  = etore.getStore()

export {
    etore,
    sstore
}
export default store;
