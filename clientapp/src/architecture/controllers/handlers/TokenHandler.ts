import ITokenRepository from "../../domains/repository/ITokenRepository";
import TokenUseCase from "../../applications/usecases/TokenUseCase";
import IHandler from "./interface/IHandler";
import Service from "../../applications/services/IService";

class TokenHandler implements IHandler {
    constructor(private usecase: TokenUseCase, private repo:ITokenRepository) {}

    create(request: any) {
        const service = new Service(request,this.repo)
        this.usecase.create(service)  
    }
    
      updateById(id: string | number) {
        const service = new Service(id,this.repo)
        this.usecase.update(service);
      }
    
      getById(id: string | number) {
        const service = new Service(id,this.repo)
        return this.usecase.get(service);
      }
}



export default TokenHandler