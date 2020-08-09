import API from 'api/api';
import { PostObject, GetNewKey, ReturnObject, CreatePassword, CreatePasswordSalt, IsHasValue } from 'api/Shared/Util';

let AddTemplate = (template_id, template, callback) => {
    let filter = {};
    filter["id"] = template_id;
    filter["template"] = template;
    return API.post('/AddTemplate', filter)
    .then(res => {
       return  ReturnObject(callback, null, res.data, 'AddTemplate');
    });
};

export { AddTemplate };