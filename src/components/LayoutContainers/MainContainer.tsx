'use client'

import Navbar from '@/components/Navbar/Navbar'
import MobileBottomNavbar from '@/components/Navbar/MobileBottomNavbar'
import { CartContextProvider } from "@/contexts/CartContext"
import { FavoritesContextProvider } from "@/contexts/FavoriteContext"
import CartFavoriteSideMenuWrapper from '@/components/Navbar/CartFavoriteDrawerWrapper'
import { CartFavViewContextProvider } from '@/contexts/CartFavViewContext'

export default function MainContainer({children}: {children: React.ReactNode}) {
  return (
    <CartContextProvider>
    <FavoritesContextProvider>
    <CartFavViewContextProvider>
    <>
        <header className='mb-[--navbar-h] z-50'>
          <Navbar logoInMiddle={false} verticalMenu={true} categoryInMiddle={true}/>
          <MobileBottomNavbar/>
          <CartFavoriteSideMenuWrapper/>
        </header>
        <main>
          {children}
        </main>
        <footer>
        </footer>
    </>
    </CartFavViewContextProvider>
    </FavoritesContextProvider>
    </CartContextProvider>
  )
}
