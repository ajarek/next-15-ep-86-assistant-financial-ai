'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { addUser } from '@/lib/action'
import { UserWithoutId } from '@/lib/models'

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  username: z.string().min(1, 'Name is required'),
})

type SignInFormValues = z.infer<typeof signInSchema>

export default function SignUp() {
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
      const userData: UserWithoutId = {
        ...data,
        img: 'https://ui.shadcn.com/avatars/shadcn.jpg',
        isAdmin: false,
      }
      const response = await addUser(userData) // Ensure addUser returns an object with a status property
      console.log('Response:', response)
      if (response?.status === 200) {
        alert('Użytkownik został dodany pomyślnie')
      } else {
        alert('Wystąpił błąd podczas dodawania użytkownika')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Wystąpił błąd podczas dodawania użytkownika')
    }
    // Reset the form after submission
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full space-y-4 px-4'
    >
      <h2 className='text-2xl font-semibold'>Utwórz konto</h2>
      <p className='text-sm text-gray-500'>
        Dołącz, aby przejąć kontrolę nad swoją finansową przyszłością.
      </p>
      <div>
        <Label htmlFor='name'>Imię i Nazwisko</Label>
        <Input
          id='username'
          type='text'
          {...register('username')}
          className='mt-1'
          placeholder='Jan Nowak'
        />
        {errors.username && (
          <p className='text-red-500 text-sm'>{errors.username.message}</p>
        )}
      </div>
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
      <p>
        Zgadzam się z warunkami korzystania z{' '}
        <span className='text-primary'> usługi i polityką prywatności</span>.
      </p>
      <Button
        className='w-full cursor-pointer'
        type='submit'
      >
        Utwórz konto
      </Button>
      <p className='text-sm text-gray-500'>
        Masz już konto?
        <Link
          href='/'
          className='text-blue-500 hover:underline'
        >
          Zaloguj się
        </Link>
      </p>
    </form>
  )
}
