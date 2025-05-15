import FormUpdateUser from '@/components/FormUpdateUser'
import React from 'react'

const UpdateUser = async ({
  searchParams,
}: {
  searchParams: Promise<{
    id: string
    name: string
    email: string
    image: string
  }>
}) => {
  const { id, name, email, image } = await searchParams
  return (
    <div className=' flex flex-col items-center justify-start h-screen gap-4 px-4'>
      <FormUpdateUser
        idUpdate={id}
        usernameUpdate={name}
        emailUpdate={email}
        imageUpdate={image}
      />
    </div>
  )
}

export default UpdateUser
