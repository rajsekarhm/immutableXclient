import IController from './interface/Handler';
import IUserUseCase from '../../applications/usecases/Interface/IUserUseCase';

class UserController implements IController {
  constructor(private userUseCase: IUserUseCase) {}

  execute(command: string, payload?: any) {
    switch (command) {
      case 'createUser':
        return this.userUseCase.createUser(payload);
      case 'getUser':
        return this.userUseCase.getUser(payload);
      case 'authUser':
        return this.userUseCase.authUser(payload);
      case 'addAsset':
        return this.userUseCase.addAssetToUser(payload.assetId, payload.userId);
      case 'addToken':
        return this.userUseCase.addTokenToUser(payload.tokenId, payload.userId);
      case 'removeAsset':
        return this.userUseCase.removeAssetFromUser(payload.assetId, payload.userId);
      case 'changeAssociateUser':
        return this.userUseCase.changeAssociateUser(payload.assetId, payload.userId);
      default:
        throw new Error(`Unknown user command: ${command}`);
    }
  }
}

export default UserController;
