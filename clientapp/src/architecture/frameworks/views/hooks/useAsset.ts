import { useMemo } from 'react';
import store from '../../../adapters/store';
import AssetRepository from '../../../applications/infrastructure/AssetRepository';
import UserRepository from '../../../applications/infrastructure/UserRepository';
import AssetUseCase from '../../../applications/usecases/AssetUseCase';
import AssetController from '../../../adapters/controller/AssetHandler';

function useAssetController() {
  const controller = useMemo(() => {
    const assetRepo = new AssetRepository(store);
    const userRepo = new UserRepository(store);
    const service = new AssetUseCase(assetRepo, userRepo);
    return new AssetController(service);
  }, []);
  return controller;
}

export default useAssetController;
