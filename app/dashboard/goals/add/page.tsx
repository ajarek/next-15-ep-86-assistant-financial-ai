'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import type { Item } from '@/store/goalsStore'
import { useGoalsStore } from '@/store/goalsStore'

const GoalsAdd = () => {
  const { addItemToGoals } = useGoalsStore()

  return (
    <div className=' w-full  flex flex-col gap-4  rounded-xl shadow-md overflow-hidden px-6'>
      <h1 className='text-2xl font-bold text-center  '>Dodaj Cel Finansowy</h1>
      <form
        className='flex flex-col gap-6 '
        action={async (formData) => {
          const name = formData.get('name')
          const daysLeft = formData.get('daysLeft')
          const currentAmount = formData.get('currentAmount')
          const targetAmount = formData.get('targetAmount')

          const newGoal: Item = {
            id: new Date().getTime(),
            name: String(name || ''),
            daysLeft: Number(daysLeft || 0),
            currentAmount: Number(currentAmount || 0),
            targetAmount: Number(targetAmount || 0),
          }
          await addItemToGoals(newGoal)
        }}
      >
        <div>
          <Label
            htmlFor='name'
            className='mb-2'
          >
            Nazwa
          </Label>
          <Input
            type='text'
            placeholder='Nazwa celu'
            name='name'
            id='name'
          />
        </div>
        <div>
          <Label
            htmlFor='daysLeft'
            className='mb-2'
          >
            Ilość dni do realizacji celu
          </Label>
          <Input
            type='number'
            placeholder='Ilość dni do realizacji celu'
            name='daysLeft'
            id='daysLeft'
          />
        </div>
        <div>
          <Label
            htmlFor='currentAmount'
            className='mb-2'
          >
            Bieżąca Kwota
          </Label>
          <Input
            type='number'
            placeholder='Bieżąca Kwota'
            name='currentAmount'
            id='currentAmount'
            step={'0.01'}
          />
        </div>

        <div>
          <Label
            htmlFor='targetAmount'
            className='mb-2'
          >
            Docelowa Kwota
          </Label>
          <Input
            type='number'
            placeholder='Docelowa Kwota'
            name='targetAmount'
            id='targetAmount'
            step={'0.01'}
          />
        </div>
        <div>
          <Button
            type='submit'
            className='w-full'
          >
            Dodaj Cel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default GoalsAdd
