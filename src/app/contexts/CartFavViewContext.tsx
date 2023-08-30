import { useContext, createContext, useState } from "react";

const CartFavViewContext = createContext({})

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