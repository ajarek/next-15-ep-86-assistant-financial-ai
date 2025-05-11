import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { ChartBar } from '@/components/ChartBar'
import { ChartDonut } from '@/components/ChartDonut'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {  Dot, Sparkles } from 'lucide-react'
import DashboardHeader from '@/components/DashboardHeader'
import { ChartLinear } from '@/components/ChartLinear'
import { ChartPie } from '@/components/ChartPie'

const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div className=' flex flex-col items-center justify-start h-screen gap-4 px-4'>
      <h1 className='text-2xl font-semibold'>Panel Użytkownika</h1>
      <DashboardHeader />
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        <ChartBar />
        <ChartDonut />
        <ChartPie/>
        <ChartLinear />
      </div>

      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        <Card>
          <CardHeader className='flex items-center gap-2'>
            <Sparkles
              size={24}
              color='green'
              strokeWidth={2}
            />
            <CardTitle>
              AI optymalizuje fundusz awaryjny
              <CardDescription className='flex items-center'>
                <Dot
                  size={40}
                  color='orange'
                />
                Średni wpływ
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Twój fundusz awaryjny jest prawie kompletny. Rozważ przeniesienie
              5000 USD na konto oszczędnościowe o wysokim oprocentowaniu, aby
              zarabiać 3,5% APY zamiast obecnego 0,5%
            </p>
          </CardContent>
          <CardFooter className='w-full flex justify-end'>
            <Button>Podejmij działanie</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className='flex items-center gap-2'>
            <Sparkles
              size={24}
              color='blue'
              strokeWidth={2}
            />
            <CardTitle>
              Rebalansuj portfel inwestycyjny.
              <CardDescription className='flex items-center'>
                <Dot
                  size={40}
                  color='orange'
                />
                Średni wpływ
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Twoja alokacja technologiczna jest o 5% wyższa niż Twój cel.
              Rozważ rebalansowanie, aby zmniejszyć ryzyko i dostosować się do
              swojej długoterminowej strategii, to proces dostosowywania
              alokacji aktywów w portfelu.
            </p>
          </CardContent>
          <CardFooter className='w-full flex justify-end'>
            <Button>Podejmij działanie</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
