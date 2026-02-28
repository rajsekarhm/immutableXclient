import { useMemo } from 'react';
import store from '../../../adapters/store';
import UserRepository from '../../../applications/infrastructure/UserRepository';
import UserUseCase from '../../../applications/usecases/UserUseCase';
import UserController from '../../../adapters/controller/UserHandler';

function useUserController() {
  const controller = useMemo(() => {
    const repo = new UserRepository(store);
    const service = new UserUseCase(repo);
    return new UserController(service);
  }, []);
  return controller;
}

export default useUserController;
