import { v4 as uuidv4 } from 'uuid';
import generator from 'generate-password';
import config from './../../appConfig.json'
//const {Base64} = require('js-base64');

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
    let newKey = _key;
    if (IsHasValue(type)) {
        newKey = type + '0' + newKey;
    }
    return newKey;
};

let GetKeyNameFromObject = (obj, value) => {
    var keys = Object.keys(obj);
    return keys[value];
}

let ReturnObject = (callback, err, data, methodName) => {
    if (err) {
        callback(null, 'Error on ' + methodName + ': ' + JSON.stringify(err));
    } else {
        if (IsHasValue(data)) {
            if (IsHasValue(data.Item)) { return callback(SortByCreatedOn(data.Item), null); }
            if (IsHasValue(data.Attributes)) { return callback(SortByCreatedOn(data.Attributes), null); }
            if (IsHasValue(data)) { return callback(SortByCreatedOn(data), null); }
        } else {
            return callback(null, 'Error on ' + methodName);
        }
    }
};

let IsHasValue = (data) => {
    if (data !== null && data !== undefined && data !== '') {
        return true;
    }
    return false;
};

let GetLookUpData = (dataList, idCoulmn, dataLabel, dependCol, selectedValue) => {
    let result = { list: [], label: '' };
    let _isSelected = false;
    dataList.forEach(l => {
        _isSelected = ((l[idCoulmn] === selectedValue) ? true : false);
        if (_isSelected === true) {
            result.label = l[dataLabel];
        }

        result.list.push(
            {
                label: l[dataLabel],
                value: l[idCoulmn],
                isSelected: _isSelected,
                depend: IsHasValue(dependCol) ? l[dependCol] : ''
            }
        )
    });
    return result;
}

let GetSessionValue = (key) => {
    let session = GetUserSession();
    if (IsHasValue(session) && IsHasValue(session[key])) {
        return session[key];
    }
    return "";
};

let GetUserSession = async () => {
    let session = await localStorage.getItem('user');
    if (IsHasValue(session)) {
        return JSON.parse(session);
    } else {
        return null;
    }
};

let AddDetaultValues = (tableData, keyColumn, type, created_by) => {
    tableData[keyColumn] = GetNewKey(type);
    if (IsHasValue(created_by)) {
        tableData['created_by'] = created_by;
    }
    tableData['created_on'] = GetDate();
    tableData['status'] = true;
    return tableData;
}

let UpdateDetaultValues = (tableData, modified_by) => {
    if (IsHasValue(modified_by)) {
        tableData['modified_by'] = modified_by;
    }
    tableData['modified_on'] = GetDate();
    return tableData;
}

let SortByCreatedOn = (tableData) => {
    return DeCode(tableData);
}

let AppendLeadingZeroes = (n) => {
    if (n <= 9) {
        return "0" + n;
    }
    return n
}

let GetDate = () => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear() + "-"
        + months[current_datetime.getMonth()] + "-"
        + AppendLeadingZeroes(current_datetime.getDate()) + " "
        + AppendLeadingZeroes(current_datetime.getHours()) + ":"
        + AppendLeadingZeroes(current_datetime.getMinutes()) + ":"
        + AppendLeadingZeroes(current_datetime.getSeconds())
    return formatted_date;
}

let EnCode = (data) => {
    //return Base64.encode(data);
    return (data);
}

let DeCode = (data) => {
    //return Base64.decode(data);
    return (data);
}


let GetFileExtn = (fileName) => {
    return fileName.slice((Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1);
}

let GetObject = (id) => {
    return {
        "id": id
    }
}

let GetObjectByGiven = (obj) => {
    let filter = {};
    Object.keys(obj).map(function (k) {
        console.log("key with value: " + k + " = " + obj[k]);
        filter[k] = k;
    })

    return filter;
}

let GetAllObject = (filter) => {
    return {
        "filter": filter
    }
}

let PostObject = (data) => {
    if (IsHasValue(GetSessionValue('user_id'))) {
        data['created_by'] = GetSessionValue('user_id');
    }
    if (IsHasValue(GetSessionValue('company_id'))) {
        data['company_id'] = GetSessionValue('company_id');
    }
    if (IsHasValue(GetSessionValue('store_id'))) {
        data['store_id'] = GetSessionValue('store_id');
    }
    return {
        "inputmodel": data
    }
}

let PutObject = (id, data) => {
    if (IsHasValue(GetSessionValue('user_id'))) {
        data['modified_by'] = GetSessionValue('user_id');
    }
    return { "id": id, "inputmodel": data };
}

let DeleteObject = (id) => {
    return {
            "id": id
        }
    }

let GetImage = (img) => {
    if(IsHasValue(img)) return img;
    return config.DefaultImage;
}

export {
    GetLookUpData, GetDate, SortByCreatedOn, IsHasValue, GetUpdateExpressionAndAttributeValuesAndNames,
    ReturnObject, GetKey, GetNewKey, AddDetaultValues, UpdateDetaultValues, GetUserSession,
    GetKeyNameFromObject, EnCode, DeCode, GetFileExtn, GetSessionValue, GetImage,
    GetObject, GetAllObject, PostObject, PutObject, DeleteObject, GetObjectByGiven
};