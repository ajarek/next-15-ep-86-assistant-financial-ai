import React from 'react';
import { ModeToggle } from './ModeToggle';

const Information = () => {
  return (
    <div className='flex flex-col  items-start gap-4 py-10 px-20 bg-primary text-white'>
        <h1 className='text-3xl font-semibold '>
          Wolność finansowa zaczyna się tutaj
        </h1>
        <p>
          Przejmij kontrolę nad swoimi finansami dzięki analizom opartym na
          sztucznej inteligencji i spersonalizowanym rekomendacjom
        </p>
        <div className='w-full flex items-center gap-4'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-300 '>
            01
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>
              Zarządzaj swoimi finansami
            </h2>
            <p>
              Uzyskaj pełny obraz swoich finansów dzięki
              <br /> naszym zaawansowanym narzędziom analitycznym.
            </p>
          </div>
        </div>
        <div className='w-full flex items-center gap-4'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-300 '>
            02
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>
              Spersonalizowane cele finansowe
            </h2>
            <p>
              Ustalaj i osiągaj swoje cele finansowe dzięki <br /> planom
              wspomaganym przez sztuczną inteligencję
            </p>
          </div>
        </div>
        <div className='w-full flex items-center gap-4'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-300 '>
            03
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>
              Inteligentne śledzenie budżetu
            </h2>
            <p>
              Monitoruj swoje wydatki i oszczędzaj więcej dzięki <br />{' '}
              inteligentnym narzędziom do budżetowania
            </p>
          </div>
        </div>
        <div className='w-full flex items-center justify-start gap-4'>

        <ModeToggle />
        </div>
      </div>
  );
}
export default Information;