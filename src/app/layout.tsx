'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar/Navbar'
import MobileBottomNavbar from './components/Navbar/MobileBottomNavbar'
import { CartContextProvider } from "@/app/contexts/CartContext"
import { FavoritesContextProvider } from "@/app/contexts/FavoriteContext"
import CartFavoriteSideMenuWrapper from './components/Navbar/CartFavoriteSideMenuWrapper'
import { CartFavViewContextProvider } from './contexts/CartFavViewContext'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Impulse Commerce',
//   description: 'Commerce Platform',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CartContextProvider>
      <FavoritesContextProvider>
      <CartFavViewContextProvider>
       <body className={inter.className}>
          <header className='mb-[--navbar-h] z-50'>
            <Navbar logoInMiddle={false} verticalMenu={false} categoryInMiddle={true}/>
            <MobileBottomNavbar/>
            <CartFavoriteSideMenuWrapper/>
          </header>
          <main>
            {children}
          </main>
          <footer>
          </footer>
        </body>
      </CartFavViewContextProvider>
      </FavoritesContextProvider>
      </CartContextProvider>
    </html>
  )
}
