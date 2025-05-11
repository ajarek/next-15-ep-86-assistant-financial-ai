"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

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
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Koszt",
  },
  chrome: {
    label: "Żywność",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Transport",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Rozrywka",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Opłaty",
    color: "var(--chart-4)",
  },
  other: {
    label: "Inne",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPie() {
  return (
    <Card className="w-full  flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Wykres kołowy Przychodów</CardTitle>
        <CardDescription>Styczeń - Czerwiec 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          W tym miesiącu odnotowano wzrost o 5,2% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Wyświetlanie wartości kosztów w ciągu 6 miesięcy.
        </div>
      </CardFooter>
    </Card>
  )
}
