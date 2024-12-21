import axiosClient from './axios-client';

export const authApi = {
  login(params) {
    const url = '/auth/login';
    return axiosClient.post(url, params);
  },
  register(params) {
    const url = '/auth/register';
    return axiosClient.post(url, params);
  },
  forgot_password(email) {
    const url = '/auth/forgot-password';
    return axiosClient.post(url, { email });
  },
  reset_password(newPassword, confirm_password, token) {
    const url = '/auth/reset-password';
    return axiosClient.put(
      url,
      { newPassword, token, confirm_password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  verify_email(email, verificationCode) {
    const url = '/auth/verify-email';
    return axiosClient.post(url, { email, verificationCode });
  },
  changePassword(current_password, password, confirm_password) {
    const url = '/auth/change-password';
    return axiosClient.put(url, { current_password, password, confirm_password });
  },
};
