import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { environment } from '../../environments/environment'

const app = initializeApp(environment.firebase);
const storage = getStorage(app);

const getAllFilesInDirectory = async (directoryPath) => {

    try {

        const directoryRef = ref(storage, directoryPath);
        const { items } = await listAll(directoryRef);
        const resolvedValues = [];

        const pathFilesPromises = items.map(async (item) => {
                return {
                    name: item.name.split('.')[0],
                    fullName:item.name,
                    path: await getDownloadURL(item)
                }
            }
        );
       return Promise.all(pathFilesPromises.map(promise =>
            promise.then(result => {
              resolvedValues.push(result);
              return result;
            })
        )).then(() => resolvedValues)
        .catch(error => {
            console.error(error);
        });
        
    } catch (error) {
        console.error("Error al obtener archivos:", error);
    }
}

const getDataFileCloudStorage = async (namePath) => {
    try {
        const fileRef = ref(storage, namePath);
        const metaDataFile = await getMetadata(fileRef);
        return metaDataFile;
        
    } catch (error) {
        console.error(error)
    }
}

const getUrlFileDownload = async (namePath) => {

    try {
        const fileRef = ref(storage, namePath);
        const url = await getDownloadURL(fileRef);
        return url;
        
    } catch (error) {
        console.error(error)
    }
}

export default {
    getAllFilesInDirectory,
    getDataFileCloudStorage,
    getUrlFileDownload
}