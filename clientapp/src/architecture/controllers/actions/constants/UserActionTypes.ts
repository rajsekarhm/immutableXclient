const UserActionTypes = {
  CREATEUSER: "user/create",
  FINDBYID: "user/get",
  UPDATEUSER: "user/update",
  DELETEUSERBYID: {
    NAME:"user/delete",
    STATUS:{
        SUCCESS:"SUCCESS",
        FULLFILED:"FULLFILED",
        FAILED:"FAILED"
    }
  },
};

export default UserActionTypes;
