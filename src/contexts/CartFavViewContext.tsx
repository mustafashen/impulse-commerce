import { useContext, createContext, useState } from "react";

type CartFavViewType = string

type CartFavViewContextType = {
  cartFavView: CartFavViewType
  setCartFavView: (cartFavView: CartFavViewType) => void
}

const CartFavViewContext = createContext<CartFavViewContextType | null>(null)

export function CartFavViewContextProvider({children}: {children: React.ReactElement}) {
  
  const [cartFavView, setCartFavView] = useState('closed')

  const CartFavViewContextStore = {
    cartFavView,
    setCartFavView
  }

  return (
    <CartFavViewContext.Provider value={CartFavViewContextStore}>
      {children}
    </CartFavViewContext.Provider>
  )
}

export const useCartFavViewContext = () => useContext(CartFavViewContext)