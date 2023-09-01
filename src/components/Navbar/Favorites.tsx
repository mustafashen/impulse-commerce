"use client"
import { useFavoritesContext } from "@/contexts/FavoriteContext"
import { useCartFavViewContext } from "@/contexts/CartFavViewContext"

export default function Favorites() {
  const {cartFavView, setCartFavView} = useCartFavViewContext()
  const {favoriteItems} = useFavoritesContext()

  function handleFavToggle() {
    if (cartFavView !== 'fav')
      setCartFavView('fav')
    else 
      setCartFavView('closed')
  }

  return (
    <li className="group w-24">
    <button
      onClick={handleFavToggle} 
      className="h-[--navbar-h] flex flex-col justify-center w-full relative">
      <span className="absolute top-4 right-4 bg-red-400 rounded-full w-6 h-6 flex justify-center items-center box-border">{favoriteItems.length}</span>
      Favorites
    </button>
    </li>
  )
}
