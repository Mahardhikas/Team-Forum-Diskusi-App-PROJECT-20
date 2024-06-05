import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081', // Sesuaikan dengan URL backend Anda
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default apiClient;
