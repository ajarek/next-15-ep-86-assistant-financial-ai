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

export function ChartPie({title, description, text1, text2}: {description:string, title:string, text1:string, text2:string}) {
  return (
    <Card className="w-full  flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
      <CardFooter className="w-full flex flex-col items-start gap-2 text-sm">
        <div className="font-medium leading-none">
          {text1}
        </div>
        <div className="leading-none text-muted-foreground">
         {text2}
        </div>
      </CardFooter>
    </Card>
  )
}
