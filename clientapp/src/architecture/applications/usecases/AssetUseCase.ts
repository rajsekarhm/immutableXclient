import Service from "../services/IService";
import IUsecase from "./Interface/IUsecase";

class AssetUseCase implements IUsecase {
  constructor() {}

  create(service:Service):any{
    const {entities,repository} = service
  }

  update(service:Service):any{
    const {entities,repository} = service

  }

  delete(service:Service):any{
    const {entities,repository} = service
 
  }

  get(service:Service):any{
    const {entities,repository} = service

  }

  notify(inputs: any) { }
  execute(_function: any) { }
}

export default AssetUseCase;
