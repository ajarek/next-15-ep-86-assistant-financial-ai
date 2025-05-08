import AppSidebar from '@/components/AppSidebar'
import React from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
const LayoutDashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full'>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  )
}

export default LayoutDashboard
