'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  
  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() =>
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
      }
      className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-300 hover:bg-violet-300 transition-colors duration-200 ease-in-out dark:bg-violet-300 dark:hover:bg-violet-300'
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? (
        <Sun className='text-yellow-700' />
      ) : (
        <Moon className='text-black' />
      )}
    </Button>
  )
}
