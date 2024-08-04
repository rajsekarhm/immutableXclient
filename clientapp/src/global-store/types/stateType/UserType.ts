type requiredType = {
    email:boolean,
    name:boolean,
    password:boolean
}

export interface userContractType  {
    name:string,
    email:string,
    phoneNumber:number | any,
    password:string | any,
    location:string | any,
    governmentId:number | any,
    edition:string,
    required:requiredType ,
    isAgent:boolean,
    AgentId:number |  any,
    isAuthForBuyAndSell:string
}

export const userContract : userContractType = {
    name:'',
    email:'',
    phoneNumber:null,
    password:'',
    location:null,
    governmentId:null,
    edition:'free',
    required: {
        email:false,
        name:false,
        password:false
    },
    isAgent:false,
    AgentId:null,
    isAuthForBuyAndSell:''
}