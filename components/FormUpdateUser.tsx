'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { updateUser } from '@/lib/action'

type FormUpdateUserProps = {
  idUpdate: string
  usernameUpdate: string
  emailUpdate: string
  imageUpdate: string
}

export default function FormUpdateUser({
  idUpdate,
  usernameUpdate,
  emailUpdate,
  imageUpdate,
}: FormUpdateUserProps) {
  const handleSubmit = async (data: FormData) => {
    try {
      const response = await updateUser(data)
      console.log('Response:', response)
    } catch (error) {
      console.error('Error:', error)
      alert('Wystąpił błąd podczas dodawania użytkownika')
    }
  }

  return (
    <form
      action={handleSubmit}
      className='w-full space-y-4 px-4'
    >
      <h2 className='text-2xl font-semibold'>Uaktualnij konto</h2>

      <div>
        <Label htmlFor='username'>Imię i Nazwisko</Label>
        <Input
          id='username'
          type='text'
          name='username'
          className='mt-1'
          defaultValue={usernameUpdate}
        />
      </div>

      <div>
        <Label htmlFor='image'>Foto</Label>
        <Input
          id='image'
          type='text'
          name='image'
          className='mt-1'
          defaultValue={imageUpdate}
        />
      </div>
      <div>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          name='email'
          className='mt-1'
          defaultValue={emailUpdate}
        />
      </div>
      <div>
        <Input
          id='id'
          type='hidden'
          name='id'
          className='mt-1'
          value={idUpdate}
        />
      </div>

      <Button
        className='w-full cursor-pointer'
        type='submit'
      >
        Uaktualnij konto
      </Button>
    </form>
  )
}
