import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar/Navbar'
import MobileBottomNavbar from './components/Navbar/MobileBottomNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impulse Commerce',
  description: 'Commerce Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='mb-[--navbar-h]'>
          <Navbar logoInMiddle={false} verticalMenu={true} categoryInMiddle={true}/>
          <MobileBottomNavbar/>
        </header>
        <main>
          {children}
        </main>
        <footer>
        </footer>
      </body>
    </html>
  )
}
