import IController from './interface/Handler';
import ITokenUseCase from '../../applications/usecases/Interface/ITokenUseCase';

class TokenController implements IController {
  constructor(private tokenUseCase: ITokenUseCase) {}

  execute(command: string, payload?: any) {
    switch (command) {
      case 'createToken':
        return this.tokenUseCase.createToken(payload);
      case 'getToken':
        return this.tokenUseCase.getToken(payload);
      case 'createTokenBlockchain':
        return this.tokenUseCase.createTokenOnBlockchain(payload);
      case 'getTokenBlockchain':
        return this.tokenUseCase.getTokenFromBlockchain(payload.tokenAddress, payload.tokenId);
      default:
        throw new Error(`Unknown token command: ${command}`);
    }
  }
}

export default TokenController;
