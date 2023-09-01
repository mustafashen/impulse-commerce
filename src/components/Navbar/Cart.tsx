"use client"
import { useCartContext } from "@/contexts/CartContext"
import { useCartFavViewContext } from "@/contexts/CartFavViewContext"

export default function Cart() {
  const {cartFavView, setCartFavView} = useCartFavViewContext()
  const {cartItems} = useCartContext()

  function handleCartToggle() {
    if (cartFavView !== 'cart')
      setCartFavView('cart')
    else 
      setCartFavView('closed')
  }
  return (
    <li className="group w-24">
        <button
          onClick={handleCartToggle} 
          className="h-[--navbar-h] flex flex-col justify-center w-full relative">
          <span className="absolute top-4 right-4 bg-red-400 rounded-full w-6 h-6 flex justify-center items-center box-border">{cartItems.length}</span>
          Cart
        </button>
    </li>
  )
}
