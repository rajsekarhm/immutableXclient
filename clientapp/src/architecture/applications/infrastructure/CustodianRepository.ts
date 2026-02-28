import { Store } from 'redux';
import ICustodianRepository from '../../domains/repository/ICustodianRepository';
import { setCustodianLoading, setCustodianData, setCustodianError } from '../../adapters/actions/CustodianActions';
import requestAPI from '../../../requests/core/request';
import BASE_ENDPOINT_V1 from '../../../../server.config';
import REQUEST_API from '../../../requests/api.config';

class CustodianRepository implements ICustodianRepository {
  constructor(private store: Store) {}

  getCustodianState() {
    return this.store.getState().custodian;
  }

  async createCustodian(custodianDetails: any) {
    this.store.dispatch(setCustodianLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.AGENT.CREATE_CUSTODIAN}`,
        'POST', custodianDetails, 'application/json'
      );
      this.store.dispatch(setCustodianData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setCustodianError(error.message || 'Failed to create custodian'));
      throw error;
    }
  }

  async getCustodianById(id: string) {
    this.store.dispatch(setCustodianLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.AGENT.GET_CUSTODIAN}?id=${id}`,
        'GET', {}, 'application/json'
      );
      this.store.dispatch(setCustodianData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setCustodianError(error.message || 'Failed to get custodian'));
      throw error;
    }
  }
}

export default CustodianRepository;
