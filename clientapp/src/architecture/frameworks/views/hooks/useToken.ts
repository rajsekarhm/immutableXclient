import { useMemo } from 'react';
import store from '../../../adapters/store';
import TokenRepository from '../../../applications/infrastructure/TokenRepository';
import TokenUseCase from '../../../applications/usecases/TokenUseCase';
import TokenController from '../../../adapters/controller/TokenHandler';

function useTokenController() {
  const controller = useMemo(() => {
    const repo = new TokenRepository(store);
    const service = new TokenUseCase(repo);
    return new TokenController(service);
  }, []);
  return controller;
}

export default useTokenController;
