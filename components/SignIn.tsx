'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type SignInFormValues = z.infer<typeof signInSchema>

export default function SignIn() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInFormValues) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      })
      console.log(result)
      if (result?.error) {
        console.error(result.error)
      }
      if (result?.ok) {
       
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    }
     reset()
    
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full space-y-4 px-4'
    >
      <h2 className='text-2xl font-semibold'>Witamy ponownie</h2>
      <p className='text-sm text-gray-500'>Zaloguj się na swoje konto</p>
      <div>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          {...register('email')}
          className='mt-1'
          placeholder='ajarek@poczta.onet.pl'
        />
        {errors.email && (
          <p className='text-red-500 text-sm'>{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor='password'>Hasło</Label>
        <Input
          id='password'
          type='password'
          {...register('password')}
          className='mt-1'
          placeholder='********'
          current-password='true'
          autoComplete='current-password'
          autoCorrect='off'
        />
        {errors.password && (
          <p className='text-red-500 text-sm'>{errors.password.message}</p>
        )}
      </div>
      <Button
        className='w-full cursor-pointer'
        type='submit'
      >
        Zaloguj się
      </Button>
      <p className='text-sm text-gray-500'>
        Nie masz jeszcze konta?{' '}
        <Link
          href='/register'
          className='text-blue-500 hover:underline'
        >
          Zarejestruj się
        </Link>
      </p>
    </form>
  )
}
