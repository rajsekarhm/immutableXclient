
import server_config from '../../../../server.config';
import REQUEST_API from '../../../requests/api.config';
import { requestAPI } from '../../../requests/core/request';
import UserEntity from '../../domains/entities/UserEntity';
import IUserRepository from '../../domains/repository/IUserRepository';
class UserRepository implements IUserRepository{
    entities!:UserEntity
    async createUser(entity: UserEntity): Promise<void> {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(UserEntity.toPlainObject(entity.User));
        await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.CREATE_USER}`,'POST',raw,myHeaders);
    }
    async findById(id: number | string): Promise<any> {
        const userInfo =  await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.GET_USER}?governmentId=${id}`,'GET')
        return userInfo;
    }

}


export default UserRepository