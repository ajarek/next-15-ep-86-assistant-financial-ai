"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "Styczeń", desktop: 186, mobile: 80 },
  { month: "Luty", desktop: 305, mobile: 200 },
  { month: "Marzec", desktop: 237, mobile: 120 },
  { month: "Kwiecień", desktop: 73, mobile: 190 },
  { month: "Maj", desktop: 209, mobile: 130 },
  { month: "Lipiec", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBar() {
  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>Wykres słupkowy - wielokrotny</CardTitle>
        <CardDescription>Styczeń - Lipiec 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          W tym miesiącu odnotowano wzrost o 5,2% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Wyświetlanie  liczby odwiedzających w ciągu  6 miesięcy.
        </div>
      </CardFooter>
    </Card>
  )
}
