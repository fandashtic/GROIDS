import { Edit } from 'api/Shared/Reposidery';

const _tableName = 'sessionlog';
const _primaryKey = 'session_id';

let InsertLog = async (key, session, callback) => { 
    return await Edit(_tableName, _primaryKey, key, session, callback);
}

export { InsertLog };