import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
      baseURL: 'http://localhost:3000/api',
      withCredentials: true,
      headers: {
            'Content-Type': 'application/json',
      },
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
      (config) => {
            const token = Cookies.get('token');
            if (token) {
                  config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
      },
      (error) => {
            return Promise.reject(error);
      }
);

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
            if (error.response && error.response.status === 401) {
                  // Handle unauthorized access (e.g., redirect to login)
                  Cookies.remove('token');
                  window.location.href = '/auth/login';
            }
            return Promise.reject(error);
      }
);

export default axiosInstance;