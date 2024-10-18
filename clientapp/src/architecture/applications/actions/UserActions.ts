import IAction from "./interface/Action";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import UserEntity from '../../domains/entities/UserEntity';
class UserAction implements IAction {
    constructor (private UserState:UserEntity){}
    reducer() {
        return createSlice({
              name: "user_actions",
              initialState:UserEntity.initialState(),
              reducers: {
                create: (state: any, action) => {
                  console.log('yes',state)
                  return {...state,...action.payload} 
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