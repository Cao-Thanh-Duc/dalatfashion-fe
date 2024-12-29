import axiosClient from './axios-client';

export const CategoryApi = {
  getCategory: () => {
    const url = '/category-product';
    return axiosClient.get(url);
  },
  addCategory: (data) => {
    const url = '/category-product';
    return axiosClient.post(url, data);
  },
  updateCategory: (data) => {
    const url = `/category-product/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteCategory: (id) => {
    const url = `/category-product/${id}`;
    return axiosClient.delete(url);
  },
};
