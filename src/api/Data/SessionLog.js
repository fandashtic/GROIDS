import { Edit } from 'api/Shared/Reposidery';
import { UpdateDetaultValues } from 'api/Shared/Util';

const _tableName = 'sessionlog';
const _primaryKey = 'session_id';

let InsertLog = async (key, session, callback) => { 
    session = UpdateDetaultValues(session, session.modified_by);
    return await Edit(_tableName, _primaryKey, key, session, callback);
}

export { InsertLog };