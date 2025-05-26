import React from 'react'
import { auth } from '@/app/api/auth/auth'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import Subscription from '@/components/Subscription'

const Setup = async () => {
  const session = await auth()

  return (
    <div className=' flex flex-col items-start justify-start h-screen gap-4 px-4'>
      <h1 className='text-2xl font-semibold'>Ustawienia</h1>
      <div className='w-full flex flex-col gap-4 border-2 border-primary rounded-lg p-4 shadow-xl'>
        <h2 className='text-xl font-semibold'>Ustawienia konta</h2>
        <div className='w-full flex  items-center justify-between'>
          <div className='flex items-center gap-4 '>
            <Image
              src={session?.user?.image || 'https://github.com/shadcn.png'}
              alt='user image'
              width={40}
              height={40}
              className='rounded-full'
            />
            <div>
              <div> {session?.user?.email || ''}</div>
            </div>
          </div>

          <Link
            href={`/dashboard/updateUser?id=${session?.user?.id}&name=${session?.user?.name}&email=${session?.user?.email}&image=${session?.user?.image}`}
            className='bg-primary text-primary-foreground py-1 px-4 rounded-sm '
          >
            Edytuj Profil
          </Link>
        </div>
        <Subscription />
        <div className='w-full flex  items-center justify-between'>
          <div className='flex items-center gap-4 '>
            <div>
              <div>Hasło</div>
              <div>Zmieniono 3 m-ce temu</div>
            </div>
          </div>
          <Link
            href={`/dashboard/changePassword?id=${session?.user?.id}`}
            className='bg-primary text-primary-foreground py-1 px-4 rounded-sm '
          >
            Zmień Hasło
          </Link>
        </div>
        <div className='w-full flex  items-center justify-between'>
          <div className='flex items-center gap-4 '>
            <div>
              <div>Wybierz Motyw</div>
              <div>Ciemny lub Jasny</div>
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Setup
