import AssetUseCase from "../applications/usecases/AssetUseCase";
import { AssetEntity } from "../domains/Index";


class AssetController { 
    constructor(private usecase:AssetUseCase){}

    create(request:any) {
        const entity = new AssetEntity("", true, "", "", "");
        this.usecase.createAsset(entity)
    }

    updateById(id:string|number){
       this.usecase.updateAssetByUniqueId(id)
    }

    getById(id:string|number){
        return this.usecase.getAssetByUniqueId(id)
    }
}