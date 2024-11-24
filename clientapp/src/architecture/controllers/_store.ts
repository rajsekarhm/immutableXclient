import { configureStore, createSlice, nanoid,compose,applyMiddleware } from "@reduxjs/toolkit";
import UserEntity from '../domains/entities/UserEntity';
import { UserAction } from "../applications/actions/UserActions";
import {thunk } from 'redux-thunk'

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


const actions_store = new store()
actions_store.createActions("user_actions",UserEntity.initialState(),new UserAction().actions())
const global_store  = actions_store.getStore()

export {
  actions_store,
  global_store
}
export default store;
