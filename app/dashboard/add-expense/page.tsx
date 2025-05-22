'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import type { Item } from '@/store/expenseStore'
import { useExpenseStore } from '@/store/expenseStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const AddExpense = () => {
  const { addItemToExpense, itemsExpense: items, removeItemFromExpense } = useExpenseStore()

  return (
    <div className=' w-full  flex flex-col gap-4  rounded-xl shadow-md overflow-hidden px-6'>
      <h1 className='text-2xl font-bold text-center  '>Dodaj Wydatek</h1>
      <form
        className='flex flex-col gap-6 '
        action={async (formData) => {
          const name = formData.get('name')
          const expense = formData.get('expense')
          const type = formData.get('type')

          const newExpense: Item = {
            id: new Date().getTime(),
            name: String(name || ''),
            type: String(type || ''),
            expense: Number(expense || 0),
            date: new Date().toISOString(),
          }
          await addItemToExpense(newExpense)
        }}
      >
        <div>
          <Label
            htmlFor='name'
            className='mb-2'
          >
            Nazwa Wydatku
          </Label>
          <Input
            type='text'
            placeholder='Wypłata '
            name='name'
            id='name'
          />
        </div>
        <div>
          <Label
            htmlFor='income'
            className='mb-2'
          >
            Wartość Wydatku
          </Label>
          <Input
            type='number'
            placeholder='6400'
            name='expense'
            id='expense'
            step={'0.01'}
            min={0}
          />
        </div>
<Select name='type' >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Typ Wydatku" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Żywność">Żywność</SelectItem>
    <SelectItem value="Transport">Transport</SelectItem>
    <SelectItem value="Rozrywka">Rozrywka</SelectItem>
    <SelectItem value="Opłaty">Opłaty</SelectItem>
    <SelectItem value="Inne">Inne</SelectItem>
  </SelectContent>
</Select>
        <div>
          <Button
            type='submit'
            className='w-full'
          >
            Dodaj Wydatek
          </Button>
        </div>
      </form>
      <div>
        <h1 className='text-xl font-bold text-left  '>Dodane Wydatki</h1>
          <Table>
  <TableCaption>Suma: {items.reduce((acc, item) => acc + item.expense, 0).toFixed(2)} PLN</TableCaption>
  <TableHeader className='border-b-2 border-primary'>
    <TableRow>
      <TableHead className="">Data</TableHead>
      <TableHead>Operacja</TableHead>
      <TableHead>Type</TableHead>
      <TableHead className="text-right">Kwota</TableHead>
      <TableHead className="text-center w-[200px]">Usuń</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {items.map((item) => (
    <TableRow key={item.id}>     
      <TableCell className="font-medium">{item.date.split('T')[0]}{' '}{item.date.split('T')[1].split('.')[0]}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.type}</TableCell>
      <TableCell className="text-right">{item.expense.toFixed(2)}</TableCell>
      <TableCell className="text-center w-[200px]">
      <Button size={'icon'} className='bg-transparent hover:bg-transparent hover:text-xl transition-all delay-200 ease-in-out cursor-pointer' onClick={() => removeItemFromExpense(item.id)}>❌</Button>
      </TableCell>
    </TableRow>
    )
    )}
  </TableBody>
</Table>

      </div>
    </div>
  )
}

export default AddExpense
