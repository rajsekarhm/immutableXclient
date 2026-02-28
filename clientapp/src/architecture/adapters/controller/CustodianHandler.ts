import IController from './interface/Handler';
import ICustodianUseCase from '../../applications/usecases/Interface/ICustodianUseCase';

class CustodianController implements IController {
  constructor(private custodianUseCase: ICustodianUseCase) {}

  execute(command: string, payload?: any) {
    switch (command) {
      case 'createCustodian':
        return this.custodianUseCase.createCustodian(payload);
      case 'getCustodian':
        return this.custodianUseCase.getCustodian(payload);
      default:
        throw new Error(`Unknown custodian command: ${command}`);
    }
  }
}

export default CustodianController;
