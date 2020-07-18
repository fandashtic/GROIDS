import { v4 as uuidv4 } from 'uuid';

let GetUpdateExpressionAndAttributeValuesAndNames = (obj, type) => {
    let result = {};
    result.expression = 'set ';
    result.names = {};
    result.attributeValues = {};
    if (IsHasValue(obj)) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (i === 0) result.expression = (type === 0 ? '' : 'set ');
            result.expression = result.expression + (type === 0 ? '#' : '') + keys[i] + ' = :' + keys[i];

            result.attributeValues[':' + keys[i]] = obj[keys[i]];
            result.names['#' + keys[i]] = keys[i];
            
            if (i < keys.length - 1) result.expression = result.expression + ', ';
        }
    }
    return result;
};

let GetKey = (key, value) => {
    let _key = {};
    _key[key] = value;
    return _key;
};

let GetNewKey = (type) => {
    let _key = uuidv4();
    let buff = new Buffer(_key);
    let base64data = buff.toString('base64');
    if(IsHasValue(type)){
        base64data = type + '#' + base64data;
    }
    return base64data;
};

let ReturnObject = (callback, err, data, methodName) => {
    if (err) {
        callback(null, 'Error on ' + methodName + ': '+ JSON.stringify(err));
    } else {            
        if(IsHasValue(data)){
            if(IsHasValue(data.Item)) { return callback(data.Item, null); }
            if(IsHasValue(data.Attributes)) { return callback(data.Attributes, null); }
            if(IsHasValue(data)) { return callback(data, null); }
        }else{
            return callback(null,'Error on ' + methodName);
        }
    }
};

let IsHasValue = (data) =>
{
    if(data !== null && data !== undefined && data !== ''){
        return true;
    }
    return false;
};

export{ IsHasValue, GetUpdateExpressionAndAttributeValuesAndNames, ReturnObject, GetKey, GetNewKey };