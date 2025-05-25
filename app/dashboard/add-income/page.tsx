'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import type { Item } from '@/store/incomeStore'
import { useIncomeStore } from '@/store/incomeStore'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const AddIncome = () => {
  const { addItemToIncome, items, removeItemFromIncome } = useIncomeStore()

  return (
    <div className=' w-full  flex flex-col gap-4  rounded-xl shadow-md overflow-hidden px-6 pb-4'>
      <h1 className='text-2xl font-bold text-center  '>Dodaj Przychód</h1>
      <form
        className='flex flex-col gap-6 '
        action={async (formData) => {
          const name = formData.get('name')
          const income = formData.get('income')
          const type = formData.get('type')

          const newIncome: Item = {
            id: new Date().getTime(),
            name: String(name || ''),
            income: Number(income || 0),
            date: new Date().toISOString(),
            type: String(type || ''),
          }
          await addItemToIncome(newIncome)
        }}
      >
        <div>
          <Label
            htmlFor='name'
            className='mb-2'
          >
            Nazwa Przychodu
          </Label>
          <Input
            type='text'
            placeholder='Przychód  '
            name='name'
            id='name'
          />
        </div>
        <div>
          <Label
            htmlFor='income'
            className='mb-2'
          >
            Wartość Przychodu
          </Label>
          <Input
            type='number'
            placeholder='6400'
            name='income'
            id='income'
            step={'0.01'}
            min={'0'}
          />
        </div>
        <Select name='type'>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Typ Przychodu' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Wypłata'>Wypłata</SelectItem>
            <SelectItem value='Oprocentowanie'>Oprocentowanie</SelectItem>
            <SelectItem value='Kredyt'>Kredyt</SelectItem>
            <SelectItem value='Inwestycje'>Inwestycje</SelectItem>
            <SelectItem value='Inne'>Inne</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <Button
            type='submit'
            className='w-full'
          >
            Dodaj Przychód
          </Button>
        </div>
      </form>
      <div>
        <h1 className='text-xl font-bold text-left  '>Dodane Przychody</h1>
        <Table>
          <TableCaption>
            Suma: {items.reduce((acc, item) => acc + item.income, 0).toFixed(2)}{' '}
            PLN
          </TableCaption>
          <TableHeader className='border-b-2 border-primary'>
            <TableRow>
              <TableHead className=''>Data</TableHead>
              <TableHead>Operacja</TableHead>
              <TableHead className='max-lg:hidden'>Typ</TableHead>
              <TableHead className='text-right'>Kwota</TableHead>
              <TableHead className='text-center w-[200px]'>Usuń</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className='font-medium'>
                  {item.date.split('T')[0]}{' '}
                  {item.date.split('T')[1].split('.')[0]}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className='max-lg:hidden'>{item.type}</TableCell>
                <TableCell className='text-right'>
                  {item.income.toFixed(2)}
                </TableCell>
                <TableCell className='text-center w-[200px]'>
                  <Button
                    size={'icon'}
                    className='bg-transparent hover:bg-transparent hover:text-xl transition-all delay-200 ease-in-out cursor-pointer'
                    onClick={() => removeItemFromIncome(item.id)}
                  >
                    ❌
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AddIncome
