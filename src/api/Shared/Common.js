import API from 'api/api';
import { PostObject, GetNewKey, ReturnObject, CreatePassword, CreatePasswordSalt, IsHasValue } from 'api/Shared/Util';

let AddTemplate = (template_id, template, callback) => {
    let filter = {};
    filter["id"] = template_id;
    filter["template"] = template;
    return API.post('/AddTemplate', filter)
        .then(res => {
            return ReturnObject(callback, null, res.data, 'AddTemplate');
        });
};


let GetTemplate = (template_id, callback) => {
    let filter = {};
    filter["id"] = template_id;
    return API.post('/GetTemplate', filter)
        .then(res => {
            return ReturnObject(callback, null, res.data, 'GetTemplate');
        });
};

export { AddTemplate, GetTemplate };