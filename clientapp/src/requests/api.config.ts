const REQUEST_API = {
  USER: {
    CREATE_USER: "/user/createUser",
    GET_USER: "/user/getUser",
    UPDATE_USER: "/user/updateUser",
    DELETE_USER: "/user/deleteUser",
    ADD_TOKEN: "/user/addToken?securityId=",
    AUTH_USER:"/user/auth"
  },
  AGENT: {
    CREATE_CUSTODIAN: "/agents/createCustodian",
    GET_CUSTODIAN: "/agents/getCustodian",
    UPDATE_CUSTODIAN: "/agents/updateCustodian",
    DELETE_CUSTODIAN: "/agents/deleteCustodian",
  },
  ASSET: {
    CREATE_ASSET: "/asset/createAsset",
    GET_ASSET: "/asset/getAsset",
    UPDATE_ASSET: "/asset/updateAsset",
    DELTE_ASSET: "/asset/deleteAsset",
    ADD_ASSET: "/user/addAsset?securityId=",
    REMOVE_ASSET: "/user/removeAsset?securityId=",
    CHANGE_ASSOCIATE_USER: "/asset/changeAssociateUser?assetId=",
  },
  TOKEN: {
    CREATE_TOKEN: "/token/createToken",
    GET_TOKEN: "/token/getToken?tokenId=",
  },
};

export default REQUEST_API;
