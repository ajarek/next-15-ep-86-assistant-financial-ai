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

const AppSidebar = async () => {
  const session = await auth()
  return (
    <Sidebar className=''>

      <SidebarHeader>
      <div className='flex items-center justify-start  '>
        <Image
          src='/images/hero-image.png'
          alt='Pilot Bogactwa'
          width={45}
          height={30}
        />
        <h1 className='text-xl text-primary font-bold mr-2 '>Pilot Bogactwa</h1>
         <Logout session={session} />
      </div>
      <div className='flex items-center   gap-4 '>
        <Image src={session?.user?.image || ''} alt='user image' width={40} height={40} className='rounded-full' />
        <div>
         <div> {session?.user?.email || ''}</div>
         <div> Plan Premium</div>
        </div>
        </div>
      </SidebarHeader>

      <SidebarMenu className='p-2 space-y-4'>

        <SidebarMenuButton
          asChild
          className='bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-500 hover:text-white transition-all delay-200 '
        >
          <Link href={'/dashboard'}>
            <span>Panel Administratora</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuButton
          asChild
          className='bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-500 hover:text-white transition-all delay-200 '
        >
          <Link href={'/financial-goals'}>
            <span>Finansowe Cele</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuButton
          asChild
          className='bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-500 hover:text-white transition-all delay-200 '
        >
          <Link href={'/budget'}>
            <span>Budżet</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuButton
          asChild
          className='bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-500 hover:text-white transition-all delay-200 '
        >
          <Link href={'/ai-assistant'}>
            <span>Doradca AI</span>
          </Link>
        </SidebarMenuButton>

      </SidebarMenu>

      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <div className='flex items-center gap-4 py-4'>
         
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar
