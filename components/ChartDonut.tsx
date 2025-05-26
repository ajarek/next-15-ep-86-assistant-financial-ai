'use client'

import * as React from 'react'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'

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
import { useIncomeStore } from '@/store/incomeStore'

const chartConfig = {
  procent: {
    label: 'Oprocentowanie',
    color: 'var(--chart-1)',
  },
  credit: {
    label: 'Kredyt',
    color: 'var(--chart-2)',
  },
  income: {
    label: 'Wypłata',
    color: 'var(--chart-3)',
  },
  invest: {
    label: 'Inwestycje',
    color: 'var(--chart-4)',
  },
  other: {
    label: 'Other',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig

export function ChartDonut() {
  const { items } = useIncomeStore()

  const procentSum = items
    .filter((el) => el.type === 'Oprocentowanie')
    .reduce((acc, item) => acc + item.income, 0)
  console.log(procentSum)
  const creditSum = items
    .filter((el) => el.type === 'Kredyt')
    .reduce((acc, item) => acc + item.income, 0)
  const incomeSum = items
    .filter((el) => el.type === 'Wypłata')
    .reduce((acc, item) => acc + item.income, 0)
  const investSum = items
    .filter((el) => el.type === 'Inwestycje')
    .reduce((acc, item) => acc + item.income, 0)
  const otherSum = items
    .filter((el) => el.type === 'Inne')
    .reduce((acc, item) => acc + item.income, 0)

  const chartData = [
    procentSum
      ? {
          browser: 'Oprocentowanie',
          visitors: procentSum,
          fill: 'var(--color-procent)',
        }
      : null,
    creditSum
      ? { browser: 'Kredyt', visitors: creditSum, fill: 'var(--color-credit)' }
      : null,
    incomeSum
      ? { browser: 'Wypłata', visitors: incomeSum, fill: 'var(--color-income)' }
      : null,
    investSum
      ? {
          browser: 'Inwestycje',
          visitors: investSum,
          fill: 'var(--color-invest)',
        }
      : null,
    otherSum
      ? { browser: 'Inne', visitors: otherSum, fill: 'var(--color-other)' }
      : null,
  ]
  const totalVisitors = chartData.reduce(
    (acc, curr) => acc + (curr?.visitors || 0),
    0
  )

  return (
    <Card className='w-full  flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Wykres kołowy Przychodów</CardTitle>
        <CardDescription>Styczeń - Lipiec 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='visitors'
              nameKey='browser'
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
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
