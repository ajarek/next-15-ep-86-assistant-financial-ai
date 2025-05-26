import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-center gap-4 p-2'>
      <h1 className='text-center text-3xl font-semibold tracking-widest '>
        404 Nie znaleziono strony
      </h1>
      <p className='text-center'>
        Twoja odwiedzona strona nie została znaleziona. Możesz przejść na stronę
        główną.
      </p>
      <div className=''>
        <Link
          href='/dashboard'
          className='w-full rounded-sm px-4 py-2 bg-primary hover:bg-violet-400 '
        >
          Powrót do panelu
        </Link>
      </div>
    </div>
  )
}
export default NotFoundPage
