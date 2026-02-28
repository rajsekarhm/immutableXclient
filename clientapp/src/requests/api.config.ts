const REQUEST_API = {
  USER: {
    CREATE_USER: "/user/createuser",
    GET_USER: "/user/getuser",
    UPDATE_USER: "/user/updateuser",
    DELETE_USER: "/user/deleteuser",
    ADD_TOKEN: "/user/addtoken?securityid=",
    AUTH_USER:"/user/auth",
    LOGOUT: "/user/logout",
  },
  AGENT: {
    CREATE_CUSTODIAN: "/agents/createcustodian",
    GET_CUSTODIAN: "/agents/getcustodian",
    UPDATE_CUSTODIAN: "/agents/updatecustodian",
    DELETE_CUSTODIAN: "/agents/deletecustodian",
  },
  ASSET: {
    CREATE_ASSET: "/asset/createasset",
    GET_ASSET: "/asset/getasset",
    UPDATE_ASSET: "/asset/updateasset",
    DELTE_ASSET: "/asset/deleteasset",
    ADD_ASSET: "/user/addasset?securityid=",
    REMOVE_ASSET: "/user/removeasset?securityid=",
    CHANGE_ASSOCIATE_USER: "/asset/changeassociateuser?assetid=",
  },
  TOKEN: {
    CREATE_TOKEN: "/token/createtoken",
    GET_TOKEN: "/token/gettoken?tokenid=",
  },
};

export default REQUEST_API;
