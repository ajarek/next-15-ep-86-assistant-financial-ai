"use client"


import { LabelList, Pie, PieChart } from "recharts"
import { useExpenseStore } from '@/store/expenseStore'
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


const chartConfig = {
 
  food: {
    label: "Żywność",
    color: "var(--chart-1)",
  },
  transport: {
    label: "Transport",
    color: "var(--chart-2)",
  },
  entertainment: {
    label: "Rozrywka",
    color: "var(--chart-3)",
  },
  fees: {
    label: "Opłaty",
    color: "var(--chart-4)",
  },
  other: {
    label: "Inne",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPie({title, description, text1, text2}: {description:string, title:string, text1:string, text2:string}) {
  const {  itemsExpense: items,} = useExpenseStore()
  const foodSum=items.filter(el=>el.type==='Żywność').reduce((acc, item) => acc + item.expense, 0)
  const transportSum=items.filter(el=>el.type==='Transport').reduce((acc, item) => acc + item.expense, 0)
  const entertainmentSum=items.filter(el=>el.type==='Rozrywka').reduce((acc, item) => acc + item.expense, 0)
  const feesSum=items.filter(el=>el.type==='Opłaty').reduce((acc, item) => acc + item.expense, 0)
  const otherSum=items.filter(el=>el.type==='Inne').reduce((acc, item) => acc + item.expense, 0)

  const chartData = [
  foodSum?{ browser: "food", visitors: foodSum, fill: "var(--color-food)" }:null,
  transportSum?{ browser: "transport", visitors: transportSum, fill: "var(--color-transport)" }:null,
  entertainmentSum?{ browser: "entertainment", visitors: entertainmentSum, fill: "var(--color-entertainment)" }:null,
  feesSum?{ browser: "fees", visitors: feesSum, fill: "var(--color-fees)" }:null,
 otherSum? { browser: "other", visitors: otherSum, fill: "var(--color-other)" }:null,
]

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
