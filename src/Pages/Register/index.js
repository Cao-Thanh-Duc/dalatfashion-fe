import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authApi } from '../../apis/auth.api';
import Logo from '../../assets/images/DALAT.png';
import { RegisterSchema } from '../../zod/auth/auth';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      fullname: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const mutationRegister = useMutation({
    mutationKey: ['register'],
    mutationFn: (data) => authApi.register(data),
  });

  const onSubmit = (data) => {
    console.log('data:', data);
    setIsLoading(true);
    mutationRegister.mutate(data, {
      onSuccess: () => {
        navigate('/login');
        toast.success('Register success 🚀🚀⚡⚡');
      },
      onError: () => {
        toast.error('Register failed!');
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <section className='section loginPage'>
      <div className='shape-bottom'></div>
      <div className='container'>
        <div className='box card p-3 shadow border-0'>
          <div className='text-center'>
            <Link to='/'>
              <img src={Logo} className='logo_login' />
            </Link>
          </div>

          <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center mb-3'>ĐĂNG KÝ</h2>

            <div className='form-group'>
              <TextField
                {...register('fullname')}
                label='Họ và tên'
                type='text'
                required
                variant='standard'
                className='w-100'
                error={!!errors.fullname}
                helperText={errors.fullname?.message}
              />
            </div>

            <div className='form-group'>
              <TextField
                {...register('email')}
                label='Email hoặc số điện thoại'
                type='email'
                required
                variant='standard'
                className='w-100'
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>

            <div className='form-group'>
              <TextField
                {...register('password')}
                label='Mật khẩu'
                type='password'
                required
                variant='standard'
                className='w-100'
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>

            <div className='d-flex align-items-center'>
              <Button
                className='btn-blue btn-lg btn-big w-100 mt-3 mb-3'
                variant='outlined'
                type='submit'
                disabled={isLoading}
              >
                {isLoading ? 'Đang xử lý...' : 'ĐĂNG KÝ'}
              </Button>
            </div>

            <p className='txt'>
              Bạn đã có tài khoản?{' '}
              <Link to='/login' className='border-effect'>
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
