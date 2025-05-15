'use client'

import { Button } from '@/components/ui/button'
import { resetPassword } from '@/lib/action'
import { Label } from './ui/label'
import { Input } from './ui/input'


const UpdatePassword = ({ id }: { id: string }) => {
  return (
    
      <form
        action={async (formData) => { await resetPassword(formData) }}
        className='flex flex-col gap-8 p-8 border-2 rounded-lg shadow-lg'
      >
        <input
          type='hidden'
          name='id'
          value={id}
        />
        <div>
               <Label htmlFor='password'>Password</Label>
               <Input
                 id='password'
                 type='password'
                 name='password'
                 className='mt-1'
                 placeholder='*********'
               />
               
             </div>
        <Button
          
          className=''
          type='submit'
        >
         Zmień Hasło
        </Button>
      </form>
   
  )
}
export default UpdatePassword