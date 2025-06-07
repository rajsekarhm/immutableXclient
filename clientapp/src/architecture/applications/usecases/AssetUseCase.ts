import AbstractUsecase from "./Interface/AbstractUsecase";

class AssetUseCase extends AbstractUsecase {
  compensation(inputs: any) { }

  create(inputs: any): any {
    const { assetRepository, presenter} =  this.depedencies
    var outputModal = assetRepository.createAsset(inputs)
    presenter.render(outputModal)
  }

  update(inputs: any): any {
    // const { assetRepository, presenter} =  this.depedencies
    // var outputModal = assetRepository.updateAsset(inputs)
    // presenter.render(outputModal)
  }

  delete(inputs: any): any {
    // const { assetRepository, presenter} =  this.depedencies
    // var outputModal = assetRepository.deleteId(inputs)
    // presenter.render(outputModal)
  }

  get(inputs: any): any {
    const { assetRepository, presenter} =  this.depedencies
    var outputModal = assetRepository.getAssetById(inputs)
    presenter.render(outputModal)
  }

  execute(inputs: any) {
    const { assetRepository, presenter} =  this.depedencies
  }
}

export default AssetUseCase;
