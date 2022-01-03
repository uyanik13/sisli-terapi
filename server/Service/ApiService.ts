import { useNuxtApp } from '#app'
// const nuxtApp = useNuxtApp();

import axios, {AxiosResponse} from 'axios';

const apiClient = axios.create({
    baseURL: 'https://cortex.hotpot.ai/',
    withCredentials: false,
    responseType: 'arraybuffer',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export function restorePhoto(data): Promise<void> {
    return apiClient.post('/restoration-api-bin',data)
        .then(response => {
            if (response.status !== 200) {
                throw Error('Looks like there was a problem. Status Code: ' + response.status);
            }
            return response.data;
        })
}
export function colorizePhoto(data): Promise<void> {
    return apiClient.post('/colorize-api-bin-mjbcrab',data)
        .then(response => {
            if (response.status !== 200) {
                throw Error('Looks like there was a problem. Status Code: ' + response.status);
            }
            return response.data;
        })
}
export function artMaker(data): Promise<void> {
    return apiClient.post('/art-maker',data)
        .then(response => {
            if (response.status !== 200) {
                throw Error('Looks like there was a problem. Status Code: ' + response.status);
            }
            return response.data;
        })
}

// getEvent(id) {
//     return apiClient.get('/events/' + id)
// }
