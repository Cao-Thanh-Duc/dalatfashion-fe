import axiosClient from './axios-client';

export const SupplierApi = {
  getSuppliers: () => {
    const url = '/supplier';
    return axiosClient.get(url);
  },
  addSupplider: (data) => {
    const url = '/supplier';
    return axiosClient.post(url, data);
  },
  updateSupplier: (data) => {
    const url = `/supplier/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteSupplier: (id) => {
    const url = `/supplier/${id}`;
    return axiosClient.delete(url);
  },
};
