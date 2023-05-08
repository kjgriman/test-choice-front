import { EXTERNAL_API_BASE_URL } from '../config';
import { fetchWrapper } from '../utils/fetchWrapper';

function getFiles() {
    return fetchWrapper.get(`${EXTERNAL_API_BASE_URL('/files/data')}`)
        .then((data) => {
            return data
        })
        .catch((err) => {
            throw new Error(err.message)
        });
}

export const filesService = {
    getFiles,
};