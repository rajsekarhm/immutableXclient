// import REQUEST_API from "requests/api.config";
// import server_config from "../../../../server.config";
import IAction from "./interface/Action";
// import { requestAPI } from "requests/core/request";
// import UserActionTypes from "./constants/UserActionType";
// import { createAsyncThunk } from "@reduxjs/toolkit";
class UserAction implements IAction {
  userRepository: any;
  userUseCase: any;
  userController: any;
  constructor() {}
  actions() {}

   createUser(userDetails:any) {
    // return createAsyncThunk(UserActionTypes.CREATEUSER,async()=>{
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   var raw = JSON.stringify(userDetails);
    //   return  await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.CREATE_USER}`,'POST',raw,myHeaders)
    // })
  }
  findById(id: any) {
  //  return createAsyncThunk(UserActionTypes.FINDBYID,async()=>{
  //   return await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.GET_USER}?governmentId=${id}`,'GET')
  //  })
  }
  updateUser(state: any, action: any) {
    // return createAsyncThunk(UserActionTypes.UPDATEUSER,async() => {})
  }
  deleteUser(state: any, action: any) {
    // return createAsyncThunk(UserActionTypes.DELETEUSER,async() => {})
  }
}

export { UserAction };
