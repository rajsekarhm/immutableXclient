import Handler from "./interface/Handler";
import IService from "../../applications/interface/services/IService";

class AssetHandler extends Handler {
  handler(request: any) {
    throw new Error("Method not implemented.");
  }

  create(request: any) {
    const { assetUsecase } =  this.service
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