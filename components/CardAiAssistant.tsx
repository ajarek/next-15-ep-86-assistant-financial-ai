import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dot, Sparkles } from 'lucide-react'
import Link from 'next/link'
type PropsCardAiAssistant = {
 title: string
 description: string
 content: string
 color: string
}

export

const CardAiAssistant = ({title, description, content, color}:PropsCardAiAssistant) => {
  return (
     <Card>
        <CardHeader className='flex items-center gap-2'>
          <Sparkles
            size={24}
            color={color}
            strokeWidth={2}
          />
          <CardTitle>
            {title}
            <CardDescription className='flex items-center'>
              <Dot
                size={40}
                color='orange'
              />
              {description}
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {content}
          </p>
        </CardContent>
        <CardFooter className='w-full flex justify-end'>
          <Link href='/dashboard/goals' className='bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-all delay-200'>Podejmij działanie</Link>
        </CardFooter>
      </Card>
  )
}

export default CardAiAssistant