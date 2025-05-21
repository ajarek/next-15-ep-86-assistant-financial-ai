'use client'
import React from 'react'
import { Progress } from '@/components/ui/progress'
import { ChartPie } from '@/components/ChartPie'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useIncomeStore } from '@/store/incomeStore'

const expenses = 3100.25

const Budget = () => {
  const { items } = useIncomeStore()
  const income = items.reduce((acc, item) => acc + item.income, 0)

  return (
    <div className='min-h-screen w-full  flex flex-col gap-4  rounded-xl shadow-md overflow-hidden px-6'>
      <h1 className='text-2xl font-bold mb-4'>Zarządzanie Budżetem</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='p-4 border-2 border-primary rounded-lg space-y-4'>
          <p className='flex items-center justify-between'>
            Dochód <span>{income.toFixed(2)}zł</span>
          </p>
          <p className='flex items-center justify-between'>
            Wydatki <span>{expenses.toFixed(2)}zł</span>
          </p>
          <p className='flex items-center justify-between text-xl'>
            Saldo{' '}
            <span
              className={
                income - expenses > 0 ? 'text-green-500' : 'text-red-500'
              }
            >
              {(income - expenses).toFixed(2)}zł
            </span>
          </p>
          <p>
            Stopień wykorzystania zasobów:{' '}
            <span>
              {(income > 0 ? (expenses / income) * 100 : 100).toFixed(2)}%
            </span>
          </p>
          <Progress
            value={income > 0 ? (expenses / income) * 100 : 100}
            max={income > 0 ? income : 100}
          />
          <div>
            <h1>Ostatnie operacje:</h1>
            <div>
              {items
                .filter((item, index) => index < 2)

                .map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center justify-between mb-2'
                  >
                    <div>
                      {item.date.split('T')[0]}{' '}
                      {item.date.split('T')[1].split('.')[0]}
                    </div>
                    <div>{item.name}</div>
                    <div>{item.income.toFixed(2)}PLN</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='relative p-4 border-2 border-primary rounded-lg'>
          <ChartPie
            title='Struktura Wydatków'
            description=''
            text1=''
            text2=''
          />
          <div className='absolute right-5 bottom-5 flex flex-col items-center  '>
            <Link
              href='/dashboard/add-expense'
              className='flex items-center justify-center w-8 h-8 rounded-full border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 delay-300'
            >
              <Plus />
            </Link>
            <span>Dodaj wydatek</span>
          </div>
          <div className='absolute left-5 bottom-5 flex flex-col items-center '>
            <Link
              href='/dashboard/add-income'
              className='flex items-center justify-center w-8 h-8 rounded-full border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 delay-300 '
            >
              <Plus />
            </Link>
            <span>Dodaj dochód</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Budget
