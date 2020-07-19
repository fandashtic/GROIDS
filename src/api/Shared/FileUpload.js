import { S3FileUpload } from 'react-s3';
import { IsHasValue } from 'api/Shared/Util';
var config = require('appConfig.json');

const s3_config = {
    bucketName: config.s3.bucketName,
    dirName: config.s3.dirName,
    region: config.s3.region,
    accessKeyId: config.db.ACCESS_KEY_ID,
    secretAccessKey: config.db.SECRET_ACCESS_KEY,
}

let UploadFile = async (file, callback) => {
    S3FileUpload
        .uploadFile(file, s3_config)
        .then(async (data) => {
            if (IsHasValue(data)) {
                console.log(data)
                return await callback({
                    'data': data,
                    'Status': 200
                });
            }
            else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        })

        .catch(async (err) => {
            console.error(err);
            return await callback({
                'data': null,
                'Status': 401
            })
        })
};

export { UploadFile };