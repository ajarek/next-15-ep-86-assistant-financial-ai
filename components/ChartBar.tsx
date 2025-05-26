'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { month: 'Styczeń', income: 186, expense: 80 },
  { month: 'Luty', income: 305, expense: 200 },
  { month: 'Marzec', income: 237, expense: 120 },
  { month: 'Kwiecień', income: 73, expense: 190 },
  { month: 'Maj', income: 209, expense: 130 },
  { month: 'Lipiec', income: 214, expense: 140 },
]

const chartConfig = {
  income: {
    label: 'Przychody',
    color: 'var(--chart-1)',
  },
  expense: {
    label: 'Koszty',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

export function ChartBar() {
  return (
    <Card className='w-full '>
      <CardHeader>
        <CardTitle>Wykres Przychód/Koszty</CardTitle>
        <CardDescription>Styczeń - Lipiec 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dashed' />}
            />
            <Bar
              dataKey='income'
              fill='var(--color-income)'
              radius={4}
            />
            <Bar
              dataKey='expense'
              fill='var(--color-expense)'
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          W tym miesiącu odnotowano wzrost o 5,2%{' '}
          <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Wyświetlanie liczby odwiedzających w ciągu 6 miesięcy.
        </div>
      </CardFooter>
    </Card>
  )
}
