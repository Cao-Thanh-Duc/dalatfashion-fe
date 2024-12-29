import axiosClient from './axios-client';

export const UserApi = {
  getUsers: () => {
    const url = '/user';
    return axiosClient.get(url);
  },
  addUser: (data) => {
    const url = '/user';
    return axiosClient.post(url, data);
  },
  updateUser: (data) => {
    const url = `/user/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteUser: (id) => {
    const url = `/user/${id}`;
    return axiosClient.delete(url);
  },
  getMe: () => {
    const url = '/user/me';
    return axiosClient.get(url);
  },
};
