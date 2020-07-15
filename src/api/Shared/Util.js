exports.GetUpdateExpressionAndAttributeValuesAndNames = (obj, type) => {
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

exports.GetKey = (key, value) => {
    let _key = {};
    _key[key] = value;
    return _key;
};

exports.ReturnObject = (res, err, data, methodName) => {
    if (err) {
        res.json('Error on ' + methodName + ': '+ JSON.stringify(err));
    } else {            
        if(IsHasValue(data)){
            if(IsHasValue(data.Item)) { res.json(data.Item); return; }
            if(IsHasValue(data.Attributes)) { res.json(data.Attributes); return; }
            if(IsHasValue(data)) { res.json(data); return; }
        }else{
            res.json('Error on ' + methodName);
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