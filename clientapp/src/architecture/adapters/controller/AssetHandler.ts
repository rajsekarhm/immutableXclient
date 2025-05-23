import IHandler from "./interface/IHandler";
import IService from "../../applications/interface/services/IService";

class AssetHandler implements IHandler {
  constructor(private service:IService) {}

  create(request: any) {
    const {assetUsecase } =  this.service
    assetUsecase.create(request)
  }

  updateById(request: any) {
    const {assetUsecase } =  this.service
    assetUsecase.update(request)

  }

  getById(request: any): any {
    const {assetUsecase } =  this.service
    assetUsecase.get(request)
  }
}



export default AssetHandler