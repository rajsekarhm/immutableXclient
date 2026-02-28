import IUserRepository from '../../domains/repository/IUserRepository';
import IUserUseCase from './Interface/IUserUseCase';

class UserUseCase implements IUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async createUser(userDetails: any) {
    if (!userDetails.email || !userDetails.firstName) {
      throw new Error('Email and first name are required');
    }
    return this.userRepository.createUser(userDetails);
  }

  async getUser(id: string) {
    if (!id || id === 'undefined') {
      throw new Error('Valid user ID is required');
    }
    return this.userRepository.getUserById(id);
  }

  async authUser(credentials: { username: string; password: string; securityId: string }) {
    if (!credentials.username || !credentials.password) {
      throw new Error('Username and password are required');
    }
    return this.userRepository.authUser(
      credentials.username, credentials.password, credentials.securityId
    );
  }

  async addAssetToUser(assetId: string, userId: string) {
    if (!assetId || !userId) {
      throw new Error('Asset ID and User ID are required');
    }
    return this.userRepository.addAssetToUser(assetId, userId);
  }

  async addTokenToUser(tokenId: string, userId: string) {
    if (!tokenId || !userId) {
      throw new Error('Token ID and User ID are required');
    }
    return this.userRepository.addTokenToUser(tokenId, userId);
  }

  async removeAssetFromUser(assetId: string, userId: string) {
    if (!assetId || !userId) {
      throw new Error('Asset ID and User ID are required');
    }
    return this.userRepository.removeAssetFromUser(assetId, userId);
  }

  async changeAssociateUser(assetId: string, userId: string) {
    if (!assetId || !userId) {
      throw new Error('Asset ID and User ID are required');
    }
    return this.userRepository.changeAssociateUser(assetId, userId);
  }
}

export default UserUseCase;
