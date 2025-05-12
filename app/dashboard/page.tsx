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
import {
  ChartSpline,
  CreditCard,
  DollarSign,
  Dot,
  PiggyBank,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
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
        <ChartPie />
        <ChartLinear />
      </div>

      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        <Card className='w-full'>
          <CardHeader className='flex items-center gap-2'>
            <CardTitle>Twoje Konto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <DollarSign
                  size={40}
                  color='green'
                />
                <div>
                  <h2 className='font-semibold'>Główne konto czekowe</h2>
                  <p>książka czekowa</p>
                </div>
              </div>
              <div>5280.22 PLN</div>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <PiggyBank
                  size={40}
                  color='blue'
                />
                <div>
                  <h2 className='font-semibold'>Oszczędności</h2>
                  <p>Lokaty</p>
                </div>
              </div>
              <div>8280.22 PLN</div>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <CreditCard
                  size={40}
                  color='violet'
                />
                <div>
                  <h2 className='font-semibold'>Karta kredytowa</h2>
                  <p>Visa</p>
                </div>
              </div>
              <div>2412.42 PLN</div>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <ChartSpline
                  size={40}
                  color='red'
                />
                <div>
                  <h2 className='font-semibold'>Portfel inwestycyjny</h2>
                  <p>Giełda</p>
                </div>
              </div>
              <div>3180.33 PLN</div>
            </div>
          </CardContent>
        </Card>

        <Card className='w-full'>
          <CardHeader className='flex items-center gap-2'>
            <CardTitle>Ostatnie transakcje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-red-200'>
                  <TrendingDown color='red' />
                </div>
                <div>
                  <h2 className='font-semibold'>Sklep spożywczy</h2>
                  <p>Zakupy</p>
                </div>
              </div>
              <div>
                <p className='text-red-500'>-280.22 PLN</p>
                <p>12-05-2025</p>
              </div>
            </div>

            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-green-200'>
                  <TrendingUp color='green' />
                </div>
                <div>
                  <h2 className='font-semibold'>Depozyt na pensję</h2>
                  <p>Dochód</p>
                </div>
              </div>
              <div>
                <p className='text-green-500'>5000.00 PLN</p>
                <p>05-05-2025</p>
              </div>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-red-200'>
                  <TrendingDown color='red' />
                </div>
                <div>
                  <h2 className='font-semibold'>Rachunek za prąd</h2>
                  <p>Media</p>
                </div>
              </div>
              <div>

                <p className='text-red-500'>-470.25 PLN</p>
                <p>12-05-2025</p>
              </div>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  gap-4'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-green-200'>
                  <TrendingUp color='green' />
                </div>
                <div>
                  <h2 className='font-semibold'>Automatyczny transfer</h2>
                  <p>Oszczędności</p>
                </div>
              </div>
              <div>

                <p className='text-green-500'>1000.00 PLN</p>
                <p>12-05-2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

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
