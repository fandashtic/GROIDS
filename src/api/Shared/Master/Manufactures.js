import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let GetManufactures = async (filter, callback) => {
    return API.post('/GetManufactures', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetManufactures');
        });
};

export { GetManufactures };