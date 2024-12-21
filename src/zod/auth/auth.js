import { z } from 'zod';

const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

export const LoginSchema = z.object({
  email: z.string().min(2, {
    message: 'Email is valid.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export const RegisterSchema = z.object({
  fullname: z.string().min(2, {
    message: 'Name is valid.',
  }),
  email: z.string().min(2, {
    message: 'Email is valid.',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});
