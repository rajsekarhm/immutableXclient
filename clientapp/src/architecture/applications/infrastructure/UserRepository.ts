import { Store } from 'redux';
import IUserRepository from '../../domains/repository/IUserRepository';
import { setUserLoading, setUserData, setUserError } from '../../adapters/actions/UserActions';
import requestAPI from '../../../requests/core/request';
import BASE_ENDPOINT_V1 from '../../../../server.config';
import REQUEST_API from '../../../requests/api.config';

class UserRepository implements IUserRepository {
  constructor(private store: Store) {}

  getUserState() {
    return this.store.getState().user;
  }

  async createUser(userDetails: any) {
    this.store.dispatch(setUserLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.USER.CREATE_USER}`,
        'POST', userDetails, 'application/json'
      );
      this.store.dispatch(setUserData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setUserError(error.message || 'Failed to create user'));
      throw error;
    }
  }

  async getUserById(id: string) {
    this.store.dispatch(setUserLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.USER.GET_USER}?securityId=${id}`,
        'GET', {}, 'application/json'
      );
      if (!result?.data?.user) {
        this.store.dispatch(setUserError('NOT_FOUND'));
        return null;
      }
      this.store.dispatch(setUserData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setUserError(error.message || 'Failed to get user'));
      throw error;
    }
  }

  async addAssetToUser(assetId: string, userId: string) {
    this.store.dispatch(setUserLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.ADD_ASSET}${userId}`,
        'PUT', { assetId }, 'application/json'
      );
      this.store.dispatch(setUserData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setUserError(error.message || 'Failed to add asset'));
      throw error;
    }
  }

  async addTokenToUser(tokenId: string, userId: string) {
    this.store.dispatch(setUserLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.USER.ADD_TOKEN}${userId}`,
        'PUT', { tokenId }, 'application/json'
      );
      this.store.dispatch(setUserData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setUserError(error.message || 'Failed to add token'));
      throw error;
    }
  }

  async removeAssetFromUser(assetId: string, userId: string) {
    this.store.dispatch(setUserLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.REMOVE_ASSET}${userId}`,
        'PUT', { assetId }, 'application/json'
      );
      this.store.dispatch(setUserData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setUserError(error.message || 'Failed to remove asset'));
      throw error;
    }
  }

  async changeAssociateUser(assetId: string, userId: string) {
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.CHANGE_ASSOCIATE_USER}${assetId}`,
        'PUT', { userId }, 'application/json'
      );
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async authUser(username: string, password: string, securityId: string) {
    this.store.dispatch(setUserLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.USER.AUTH_USER}`,
        'PUT', { username, password, securityId }, 'application/json'
      );
      this.store.dispatch(setUserData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setUserError(error.message || 'Authentication failed'));
      throw error;
    }
  }
}

export default UserRepository;
