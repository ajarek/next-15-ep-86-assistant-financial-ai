import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { ChartBar } from '@/components/ChartBar'

const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div className=' flex flex-col items-center justify-start h-screen gap-4 px-4'>
      <h1>Panel Użytkownika</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        
          <ChartBar/>
        
           <ChartBar/>
        
      </div>
      

      
    </div>
  )
}

export default Dashboard
