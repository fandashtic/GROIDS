import API from 'api/api';
import { ReturnObject } from 'api/Shared/Util';

let SendEmail = async (filter, callback) => {
    return API.post('/SendEmail', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'SendEmail');
        });
};

export { SendEmail };