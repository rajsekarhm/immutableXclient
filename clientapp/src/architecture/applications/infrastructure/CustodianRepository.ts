
import server_config from '../../../../server.config';
import REQUEST_API from '../../../requests/api.config';
import { requestAPI } from '../../../requests/core/request';
import CustodianEntity from '../../domains/entities/CustodianEntity';
import ICustodianRepository from '../../domains/repository/ICustodianRepository';

class CustodianRepository implements ICustodianRepository{
    async createCustodian(custodian: CustodianEntity): Promise<void> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(custodian.Custodian);
    // await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.CREATE_CUSTODIAN}`,'POST',raw,myHeaders);
    console.log('repository called')
    }
    async findById(id: number | string): Promise<void> {
    //  await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.GET_CUSTODIAN}`,'GET')
        console.log('repository called')
    }
    
}


export default CustodianRepository