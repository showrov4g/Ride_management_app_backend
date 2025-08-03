import { z } from 'zod';

export const registerZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z
      .string()
      .email('Invalid email address')
      .min(1, { message: 'Email is required' }),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .min(1, { message: 'Password is required' }),
    role: z.enum(['admin', 'rider', 'driver'], {
      message: 'Role must be one of admin, rider, or driver', 
    }),
  }),
});

export const loginZodSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email('Invalid email')
      .min(1, { message: 'Email is required' }),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .min(1, { message: 'Password is required' }),
  }),
});
