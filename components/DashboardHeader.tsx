import { auth } from '@/app/api/auth/auth'
import { ChartPie, TrendingDown, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const DashboardHeader = async () => {
  const session = await auth()
  return (
    <div className='w-full flex flex-col items-start justify-center  p-2 rounded-xl gap-4'>
      <div className='w-full flex flex-col items-start justify-center bg-primary text-white p-4 rounded-xl gap-4'>
        <div className='w-full relative flex flex-col'>
          <h1 className='text-2xl font-semibold'>
            Witaj z powrotem{' '}
            <span className='font-semibold capitalize'>
              {session?.user?.name || ''}
            </span>
            !
          </h1>
          <p>Oto Twój przegląd finansowy.</p>
          <div className=' absolute top-1/2 right-4 transform -translate-y-[40%] w-[45px] h-[45px] rounded-full flex items-center justify-center bg-violet-400'>
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
          <div className='w-full flex flex-col items-center  py-2 rounded-lg bg-violet-400'>
            <p>Przychody</p>
            <h2 className='font-bold'>$50,711.40</h2>
          </div>
          <div className='w-full flex flex-col items-center  py-2 rounded-lg bg-violet-400'>
            <p>Wydatki</p>
            <h2 className='font-bold'>$1,250.67</h2>
          </div>
          <div className='w-full flex flex-col items-center  py-2 rounded-lg bg-violet-400'>
            <p>Saldo</p>
            <h2 className='font-bold'>$49,460.73</h2>
          </div>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3  gap-4'>
        <div className='flex items-center gap-2 shadow-lg border-2 rounded-xl p-2'>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-green-200'>
            <TrendingUp color='green' />
          </div>
          <div>
            <h2 className='font-semibold'>Wartość netto</h2>
            <p>
              Twoja wartość netto wzrosła
              <br /> o 2,3% w tym miesiącu
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 shadow-lg border-2 rounded-xl p-2'>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-200'>
            <TrendingDown color='blue' />
          </div>
          <div>
            <h2 className='font-semibold'>Wydatki</h2>
            <p>
              Wydałeś o 12% mniej niż
              <br /> w zeszłym miesiącu
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 shadow-lg border-2 rounded-xl p-2'>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-violet-200'>
            <ChartPie color='violet' />
          </div>
          <div>
            <h2 className='font-semibold'>Stopa oszczędności</h2>
            <p>
              Oszczędzasz 22% swojego
              <br />
              dochodu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
