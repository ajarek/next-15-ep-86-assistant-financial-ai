import UpdatePassword from '@/components/UpdatePassword'
import React from 'react'

const ChangePassword = async ({
  searchParams,
}: {
  searchParams: { id: string }
}) => {
  const { id } = await searchParams
  return (
    <div className=' flex flex-col items-center justify-center h-screen gap-4 px-4'>
      <h1 className='text-2xl font-semibold'>Change Password</h1>
      <UpdatePassword id={id} />
    </div>
  )
}

export default ChangePassword
