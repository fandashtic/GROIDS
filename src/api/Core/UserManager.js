import { GetById, GetAll, Save, Update, Delete } from 'api/Data/User';
import { InsertLog } from 'api/Data/SessionLog';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, IsHasValue, GetDate } from 'api/Shared/Util';

let IsUserValid = async (userName, password, callback) => {
    let filter = {
        'user_name': userName
    };
    
    return await GetAll(filter, async (users) => {
        let userExists = users.filter(function (o) { return o.user_name === userName; });
        if (IsHasValue(userExists) && userExists.length > 0 && userExists[0].password === password) {
            let _session = {                
                session_token: GetNewKey(),
                session_date: GetDate()
            }
            AddSessionLog(userExists[0].user_id + GetNewKey() , _session);           
            return await callback({
                'data': {
                    UserName: userExists[0].userName,
                    UserDisplayName: userExists[0].firstName + ' ' + userExists[0].lastName,
                    UserType: userExists[0].userType,
                    CompanyId: userExists[0].companyId,
                    store_id: userExists[0].store_id,
                    UserProfileImage: userExists[0].profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let AddSessionLog = (session_id, session) => {
    InsertLog(session_id, session, async (session) => {
               
    });
}

let AddUser = async (user, callback) => {
    return await Save(user, async (user) => {
        if (user) {
            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let UpdateUser = async (key, user, callback) => {
    return await Update(key, user, async (user) => {
        if (user) {
            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let DeleteUser = async (key, callback) => {
    return await Delete(key, async (user) => {
        if (user) {
            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let GetUser = async (userName, callback) => {
    return await GetById(userName, async (user) => {
        if (user) {
            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let GetAllUsers = async (filter, callback) => {
    return await GetAll(filter, async (users) => {
        if (users) {
            return await callback({
                'data': users,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

export { IsUserValid, AddUser, UpdateUser, DeleteUser, GetUser, GetAllUsers };