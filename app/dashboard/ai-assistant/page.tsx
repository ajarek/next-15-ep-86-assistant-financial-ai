import React from 'react'
import CardAiAssistant from '@/components/CardAiAssistant'
import Link from 'next/link'
import { Plus } from 'lucide-react'

const aiAssistant = () => {
  return (
    <div className=' flex flex-col items-center justify-start h-screen gap-4 px-4 '>
      <div className='flex items-center justify-between w-full'>
      <h1 className='text-2xl font-semibold'>Porady AI</h1>
      <Link
              href={'/dashboard/ai-advisor'}
              className=' flex items-center gap-2 bg-primary px-4 py-2 rounded-md text-white hover:bg-primary/90  transition-all delay-200 duration-300'
            >
              <Plus   size={24}
                strokeWidth={2}
                color='white' />
              <span className='text-white'>Nowa Porada</span>
            </Link>
      </div>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pb-6'>
        <CardAiAssistant
          title='AI optymalizuje fundusz awaryjny'
          description='Średni wpływ'
          content='Twój fundusz awaryjny jest prawie kompletny. Rozważ przeniesienie 5000 USD na konto oszczędnościowe o wysokim oprocentowaniu, aby
            zarabiać 3,5% APY zamiast obecnego 0,5%'
          color='green'
        />

        <CardAiAssistant
          title='Rebalansuj portfel inwestycyjny.'
          description='Średni wpływ'
          content='Twoja alokacja technologiczna jest o 5% wyższa niż Twój Rozważ
            rebalansowanie, aby zmniejszyć ryzyko i dostosować się do swojej
            długoterminowej strategii, to proces dostosowywania alokacji aktywów
            w portfelu. '
          color='purple'
        />
        <CardAiAssistant
          title='Zoptymalizuj spłatę zadłużenia.'
          description='Wysoki wpływ'
          content='Masz kartę kredytową z oprocentowaniem 18% APR. Rozważ konsolidację zadłużenia lub przeniesienie salda na kartę z 0% APR, aby zaoszczędzić na odsetkach. Zapytaj o propozycje w Twoim banku.'
          color='red '
        />
        <CardAiAssistant
          title='Przejrzyj składki emerytalne.'
          description='Niski wpływ'
          content='Twoje obecne składki na plan emerytalny są poniżej zalecanego poziomu. Zwiększenie składek nawet o niewielki procent może znacząco wpłynąć na Twoje oszczędności emerytalne.'
          color='teal'
        />

        <CardAiAssistant
          title='Analiza wydatków miesięcznych.'
          description='Średni wpływ'
          content='W ostatnim miesiącu wydatki na rozrywkę przekroczyły Twój budżet o 15%. Rozważ ustalenie limitów wydatków w tej kategorii lub poszukaj tańszych alternatyw.'
          color='blue'
        />
        <CardAiAssistant
          title='Sprawdź ubezpieczenie na życie.'
          description='Wysoki wpływ'
          content='Twoja obecna polisa ubezpieczeniowa na życie może nie pokrywać w pełni Twoich potrzeb. Skonsultuj się z doradcą, aby ocenić, czy potrzebujesz dodatkowego ubezpieczenia'
          color='yellow'
        />
      </div>
    </div>
  )
}

export default aiAssistant
