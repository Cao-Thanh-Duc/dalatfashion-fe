import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authApi } from '../../apis/auth.api';
import bgLogin from '../../assets/images/anh.png.png';
import { setAccessTokenToLS, setRefreshTokenToLS, setUserToLS } from '../../utils/storage';
import { LoginSchema } from '../../zod/auth/auth';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const mutationLogin = useMutation({
    mutationKey: ['login'],
    mutationFn: (data) => authApi.login(data),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    mutationLogin.mutate(data, {
      onSuccess: (response) => {
        setAccessTokenToLS(response.access_token);
        setRefreshTokenToLS(response.refresh_token);
        setUserToLS(response.user);
        navigate('/');
        toast.success('Đăng nhập thành công! 🚀');
      },
      onError: () => {
        toast.error('Đăng nhập thất bại!');
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <div className='form-login-main'>
      <img src={bgLogin} alt='bg-login' className='image-login' />
      <div className='right-section'>
        <h2 className='form-title'>Đăng nhập</h2>
        <p className='form-login-desc'>Hãy nhập thông tin của bạn vào các ô dưới đây</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type='email'
              placeholder='Email hoặc Số điện thoại'
              {...register('email')}
              required
            />
            {errors.email && <p className='error-message'>{errors.email.message}</p>}
          </div>
          <div>
            <input type='password' placeholder='Mật khẩu' {...register('password')} required />
            {errors.password && <p className='error-message'>{errors.password.message}</p>}
          </div>
          <div className='form-login-footer'>
            <button type='submit' className='btn-login' disabled={isLoading}>
              {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
            </button>
            <a href='#' className='forgot-password'>
              Quên mật khẩu?
            </a>
          </div>
          <Link to='/register'>
            <p className='form-footer'>Bạn chưa có tài khoản?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
