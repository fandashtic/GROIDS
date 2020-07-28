import { storage } from "./firebase";
import { ReturnObject, EnCode } from 'api/Shared/Util';

const FileUpload = async (file, fileName, rootfolder, formFolder, setProgress, setUrl, callback) => {

    var folder = rootfolder;
    if(formFolder)
    {
        folder = folder + '/' + formFolder;
    }

    var blob = new Blob([file], { contentType: file.type });
    const uploadTask = storage.ref(folder + '/' + fileName).put(blob);   

    return await uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            setProgress(progress);

            if (snapshot && snapshot.metadata && progress === 100) {
                console.log(snapshot);
            }
        },
        error => {
            console.log(error);
            ReturnObject(callback, error, null, 'FileUpload');
        },
        () => {
            storage
                .ref(folder)
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                    setUrl(url);
                    ReturnObject(callback, null, EnCode(url), 'FileUpload');
                });
            // .error(err => {
            //     setUrl("http://via.placeholder.com/300");
            //     ReturnObject(callback, err, null, 'FileUpload');
            // })
        }
    );
};

export { FileUpload };