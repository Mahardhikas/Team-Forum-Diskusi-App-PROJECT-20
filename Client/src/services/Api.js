import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8081', // URL backend
    withCredentials: true,
    timeout: 10000,
});

// Menambahkan interceptor untuk menyertakan token dalam setiap permintaan
api.interceptors.request.use(config => {
const token = localStorage.getItem('token');
if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
}
return config;
});

export default api;
