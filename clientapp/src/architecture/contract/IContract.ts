interface IContract{
    createContract(abi:any, bytecode:any):any
    interactWithContract(contractAddress:string,abi:any):any
    sign():any
}

export default IContract