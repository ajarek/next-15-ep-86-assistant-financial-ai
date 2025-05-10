import { auth } from '@/app/api/auth/auth'
import { TrendingUp } from 'lucide-react'
import Image from 'next/image'

const DashboardHeader = async () => {
  const session = await auth()
  return (
    <div className='w-full flex flex-col items-start justify-center gap-4 bg-primary p-4 rounded-xl'>
      <div className='w-full relative flex flex-col'>
        <h1 className='text-2xl font-semibold'>
          Witaj z powrotem{' '}
          <span className='font-semibold capitalize'>
            {session?.user?.name || ''}
          </span>
          !
        </h1>
        <p>Oto Twój przegląd finansowy.</p>
        <div className=' absolute top-1/2 right-4 transform -translate-y-[40%] w-[45px] h-[45px] rounded-full flex items-center justify-center bg-amber-400'>
          <Image
            src='/images/hero-image.png'
            
            alt='hero image'
            width={60}
            height={60}
            className=''
          />
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3  gap-4'>
        <div className='w-full flex flex-col items-center  py-2 rounded-lg bg-violet-500'>
          <p>Przychody</p>
          <h2 className='font-bold'>$50,711.40</h2>
         
        </div>
        <div className='w-full flex flex-col items-center  py-2 rounded-lg bg-violet-500'>
          <p>Wydatki</p>
          <h2 className='font-bold'>$1,250.67</h2>
         
        </div>
        <div className='w-full flex flex-col items-center  py-2 rounded-lg bg-violet-500'>
          <p>Saldo</p>
          <h2 className='font-bold'>$49,460.73</h2>
         
        </div>
        
      </div>
    </div>
  )
}

export default DashboardHeader
