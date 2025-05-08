import Link from 'next/link'
import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h1>Panel Użytkownika</h1>

      <div>userEmail={session?.user?.email || ''}</div>

      <Link href='/'></Link>
    </div>
  )
}

export default Dashboard
