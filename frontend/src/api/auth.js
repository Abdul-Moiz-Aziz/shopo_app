import axiosInstance from './axios';

export const authAPI = {
      register: async (userData) => {
            return axiosInstance.post('/auth/register', userData);
      },
      login: async (credentials) => {
            return axiosInstance.post('/auth/login', credentials);
      },
      logout: async () => {
            return axiosInstance.post('/auth/logout');
      },
      getProfile: async () => {
            return axiosInstance.get('/auth/profile');
      },
};