import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { auth } from '@/app/api/auth/auth'
import Link from 'next/link'
import Logout from './Logout'
import Image from 'next/image'
import {
  ChartColumn,
  Goal,
  MessageCircleQuestion,
  MessageSquare,
  Settings,
  Sparkles,
  Wallet,
} from 'lucide-react'

const AppSidebar = async () => {
  const session = await auth()
  return (
    <Sidebar className=''>
      <SidebarHeader>
        <div className='flex items-center justify-start'>
          <Image
            src='/images/hero-image.png'
            alt='Pilot Bogactwa'
            width={45}
            height={30}
          />
          <h1 className='text-xl text-primary font-bold mr-2 '>
            Pilot Bogactwa
          </h1>
          <Logout />
        </div>
        <div className='flex items-center   gap-4 '>
          <Image
            src={session?.user?.image || 'https://github.com/shadcn.png'}
            alt='user image'
            width={40}
            height={40}
            className='rounded-full'
          />
          <div>
            <div> {session?.user?.email || ''}</div>
            <div> Plan Premium</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarMenu className='p-2 space-y-2'>
        <SidebarMenuButton
          asChild
          className='bg-transparent  flex items-center justify-start hover:bg-primary hover:text-white transition-all delay-200 pl-2 '
        >
          <Link
            href={'/dashboard'}
            className='flex items-center gap-2 font-semibold'
          >
            <ChartColumn
              size={24}
              strokeWidth={2}
            />
            <span>Panel Administratora</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuButton
          asChild
          className='bg-transparent flex items-center justify-start hover:bg-primary hover:text-white transition-all delay-200 '
        >
          <Link
            href={'/dashboard/goals'}
            className='flex items-center gap-2 font-semibold'
          >
            <Goal
              size={24}
              strokeWidth={2}
            />
            <span>Finansowe Cele</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuButton
          asChild
          className='bg-transparent flex items-center justify-start hover:bg-primary hover:text-white transition-all delay-200 '
        >
          <Link
            href={'/budget'}
            className='flex items-center gap-2 font-semibold'
          >
            <Wallet
              size={24}
              strokeWidth={2}
            />
            <span>Budżet</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuButton
          asChild
          className='bg-transparent flex items-center justify-start hover:bg-primary hover:text-white transition-all delay-200 '
        >
          <Link
            href={'/ai-assistant'}
            className='flex items-center gap-2 font-semibold'
          >
            <Sparkles
              size={24}
              strokeWidth={2}
            />
            <span>Doradca AI</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuButton
          asChild
          className='bg-transparent flex items-center justify-start hover:bg-primary hover:text-white transition-all delay-200 '
        >
          <Link
            href={'/dashboard/setup'}
            className='flex items-center gap-2 font-semibold'
          >
            <Settings
              size={24}
              strokeWidth={2}
            />
            <span>Ustawienia</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenu>

      <SidebarContent className='p-2 '>
        <div className='bg-sky-300 text-black border-2 border-primary rounded-lg p-2 shadow-xl space-y-2'>
          <div className='flex items-center gap-2 font-semibold'>
            <Sparkles
              size={24}
              strokeWidth={2}
            />
            <h2>Doradca AI</h2>
          </div>
          <p>
            Uzyskaj natychmiastowe odpowiedzi na swoje pytania finansowe i
            spersonalizowaną poradę.
          </p>
          <SidebarMenuButton
            asChild
            className='bg-primary text-white flex items-center justify-center hover:bg-violet-500   transition-all delay-200 '
          >
            <Link
              href={'/ai-assistant'}
              className='flex items-center gap-2 font-semibold'
            >
              <MessageSquare
                size={24}
                strokeWidth={2}
              />
              <span>Start Chat</span>
            </Link>
          </SidebarMenuButton>
        </div>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenuButton
          asChild
          className='bg-transparent flex items-center justify-start hover:bg-primary hover:text-white transition-all delay-200 mb-2 '
        >
          <Link
            href={'/help'}
            className='flex items-center gap-2 font-semibold'
          >
            <MessageCircleQuestion
              size={24}
              strokeWidth={2}
            />
            <span>Pomoc i wsparcie</span>
          </Link>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar
