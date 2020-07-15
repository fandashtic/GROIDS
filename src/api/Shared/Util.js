exports.GetUpdateExpressionAndAttributeValuesAndNames = (obj, type) => {
    let callbackult = {};
    callbackult.expcallbacksion = 'set ';
    callbackult.names = {};
    callbackult.attributeValues = {};
    if (IsHasValue(obj)) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (i === 0) callbackult.expcallbacksion = (type === 0 ? '' : 'set ');
            callbackult.expcallbacksion = callbackult.expcallbacksion + (type === 0 ? '#' : '') + keys[i] + ' = :' + keys[i];

            callbackult.attributeValues[':' + keys[i]] = obj[keys[i]];
            callbackult.names['#' + keys[i]] = keys[i];
            
            if (i < keys.length - 1) callbackult.expcallbacksion = callbackult.expcallbacksion + ', ';
        }
    }
    return callbackult;
};

exports.GetKey = (key, value) => {
    let _key = {};
    _key[key] = value;
    return _key;
};

exports.ReturnObject = (callback, err, data, methodName) => {
    debugger;
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

exports.IsHasValue = IsHasValue;