'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useGoalsStore } from '@/store/goalsStore'

interface Goal {
  id: number
  name: string
  daysLeft: number
  currentAmount: number
  targetAmount: number
}




const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

const FinancialGoals = () => {
 
  const {items, removeItemFromGoals} = useGoalsStore()

  const calculateProgressPercentage = (current: number, target: number) => {
    return target === 0 ? 0 : Math.min(100, (current / target) * 100)
  }

const overallProgress = items.reduce((acc,goal) =>goal.currentAmount , 0)/items.reduce((acc,goal) =>goal.targetAmount , 0)*100

  

  return (
    <div className='min-h-screen w-full  flex flex-col gap-4  rounded-xl shadow-md overflow-hidden px-6'>
      <h1 className='text-2xl font-bold  '>Cele finansowe</h1>

      <div className='flex flex-col gap-4'>
        {items
          .sort((a, b) => a.daysLeft - b.daysLeft)
          .map((goal) => (
          <div
            key={goal.id}
            className=' flex items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0'
          >
            <div className='flex-1'>
            <div className='flex justify-between items-start mb-2'>
              <h2 className='text-lg font-semibold'>{goal.name}</h2>
              <span className='text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
                zostało dni {goal.daysLeft}
              </span>
            </div>

            <div className='mb-1'>
              <span className=''>
                {formatCurrency(goal.currentAmount)} z{' '}
                {formatCurrency(goal.targetAmount)}
              </span>
            </div>

            <div className='w-full bg-gray-200 rounded-full h-2.5'>
              <div
                className='bg-blue-600 h-2.5 rounded-full'
                style={{
                  width: `${calculateProgressPercentage(
                    goal.currentAmount,
                    goal.targetAmount
                  )}%`,
                }}
              ></div>
            </div>
            </div>
            <Button onClick={() => removeItemFromGoals(goal.id)} size={'icon'} variant={'outline'} className='bg-transparent mx-4  hover:text-xl transition-all duration-300  '>❌</Button>
          </div>
        ))}
      </div>

      <div className='mr-17'>
        <div className='flex justify-between mb-1'>
          <span className='text-sm font-medium '>Ogólny postęp</span>
          <span className='text-sm font-medium '>{overallProgress.toFixed(2)}%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2.5'>
          <div
            className='bg-green-500 h-2.5 rounded-full'
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>

      <Link
        href={'/dashboard/goals/add'}
        className='w-full text-center  px-4 py-2 bg-primary text-white rounded-lg my-6'
      >
        + Dodaj Cel Finansowy
      </Link>
    </div>
  )
}

export default FinancialGoals
