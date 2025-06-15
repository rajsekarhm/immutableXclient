import IService from "../../../applications/interface/services/IService";

abstract class Handler {
    service
    constructor(protected _service : IService){
        this.service = _service
        this.handler = this.handler.bind(this.service)
    }

    abstract handler(request:any):any
}

export default Handler