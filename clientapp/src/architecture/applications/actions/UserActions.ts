import IAction from "./interface/Action";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import UserEntity from '../../domains/entities/UserEntity';
class UserAction implements IAction {
    constructor (private UserState:UserEntity){}
    reducer() {
        return createSlice({
              name: "user_actions",
              initialState:this.UserState,
              reducers: {
                create: (state: any, action) => {
                  Object.assign(state, action.payload);
                },
              },
            });
    }
}



export const _userActions = new UserAction(UserEntity.initialState()).reducer();
export default _userActions.reducer;
export const { create } =  _userActions.actions
export {
    UserAction
}