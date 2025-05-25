"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Styczeń", income: 50 },
  { month: "Luty", income:60 },
  { month: "Marzec", income: 65 },
  { month: "Kwiecień", income: 72 },
  { month: "Maj", income: 75 },
  { month: "Czerwiec", income: 80 },
]

const chartConfig = {
  income: {
    label: "Przychód",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartLinear() {
  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>Trend wartości przychodów</CardTitle>
        <CardDescription>
          Śledzenie wartości przychodów w ciągu 6 miesięcy
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="income"
              type="linear"
              fill="var(--chart-4)"
              fillOpacity={0.4}
              stroke="var(--chart-4)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              W tym miesiącu odnotowano wzrost o 5,2% <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
             Styczeń - Czerwiec 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
