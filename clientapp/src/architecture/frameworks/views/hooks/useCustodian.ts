import { useMemo } from 'react';
import store from '../../../adapters/store';
import CustodianRepository from '../../../applications/infrastructure/CustodianRepository';
import CustodianUseCase from '../../../applications/usecases/CustodianUseCase';
import CustodianController from '../../../adapters/controller/CustodianHandler';

function useCustodianController() {
  const controller = useMemo(() => {
    const repo = new CustodianRepository(store);
    const service = new CustodianUseCase(repo);
    return new CustodianController(service);
  }, []);
  return controller;
}

export default useCustodianController;
