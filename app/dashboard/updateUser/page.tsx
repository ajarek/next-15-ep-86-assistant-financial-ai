import FormUpdateUser from '@/components/FormUpdateUser';
import React,{use} from 'react'

const UpdateUser = ({searchParams}: {searchParams: Promise<{ id: string; name: string; email: string;image: string }>}) => {
 const { id, name, email,image } = use(searchParams)
  return (
    <div className=' flex flex-col items-center justify-start h-screen gap-4 px-4'>
      <FormUpdateUser idUpdate={id} usernameUpdate={name} emailUpdate={email} imageUpdate={image}/>
      </div>
  )
}

export default UpdateUser