import React from 'react'
import { Progress } from "@/components/ui/progress"
import { ChartPie } from '@/components/ChartPie'

const income=4200.00
const expenses=3100.25


const Budget = () => {
  return (
    <div className='min-h-screen w-full  flex flex-col gap-4  rounded-xl shadow-md overflow-hidden px-6'>
       <h1 className="text-2xl font-bold mb-4">Zarządzanie Budżetem</h1>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='p-4 border-2 border-primary rounded-lg space-y-4'>
          <p className='flex items-center justify-between'>Dochód <span>{income.toFixed(2)}zł</span></p>
          <p className='flex items-center justify-between'>Wydatki <span>{expenses.toFixed(2)}zł</span></p>
          <p className='flex items-center justify-between text-xl'>Saldo <span className={income-expenses>0?'text-green-500':'text-red-500'}>{(income-expenses).toFixed(2)}zł</span></p>
          <p>Stopień wykorzystania zasobów: <span>{(expenses/income*100).toFixed(2)}%</span></p>
           <Progress value={expenses/income*100} max={income} />

        </div>
        <div className='p-4 border-2 border-primary rounded-lg space-y-4'>
          <ChartPie title='Struktura Wydatków' description='' text1='' text2=''/>
        </div>
       </div>
    </div>
  )
}

export default Budget