import axios from 'axios'

export const ApiService = axios.create({
    // baseURL: window.location.origin + '/',
    baseURL: window.location.hostname == 'localhost' ? 'http://127.0.0.1:5000' : 'https://192.168.10.150:8080',
    headers: {
        'who': window.localStorage.getItem('who'),
    }
})
