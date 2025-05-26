import UpdatePassword from '@/components/UpdatePassword'
import React from 'react'



const ChangePassword =async ({ searchParams }: { searchParams:  Promise<{ id: string }> }) => {
  const { id } = await searchParams

  if (!id) {
    return (
      <div className='flex flex-col items-center justify-center h-screen gap-4 px-4'>
        <h1 className='text-2xl font-semibold text-red-500'>
          Błąd: Nie podano identyfikatora użytkownika.
        </h1>
        <p>Upewnij się, że posiadasz ważny link umożliwiający zmianę hasła.</p>
      </div>
    )
  }
  return (
    <div className=' flex flex-col items-center justify-center h-screen gap-4 px-4'>
      <h1 className='text-2xl font-semibold'>Zmień hasło</h1>
      <UpdatePassword id={id} />
    </div>
  )
}

export default ChangePassword
