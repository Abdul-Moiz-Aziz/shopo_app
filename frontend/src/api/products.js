import axiosInstance from './axios';

export const productAPI = {
      getAllProducts: async () => {
            return axiosInstance.get('/products');
      },
      getProductById: async (id) => {
            return axiosInstance.get(`/products/${id}`);
      },
      createProduct: async (productData) => {
            return axiosInstance.post('/add-product', productData);
      },
      updateProduct: async (id, productData) => {
            return axiosInstance.put(`/edit-product/${id}`, productData);
      },
      deleteProduct: async (id) => {
            return axiosInstance.delete(`/delete-product/${id}`);
      },
};