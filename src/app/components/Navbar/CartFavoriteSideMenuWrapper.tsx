import CartSideMenu from "./CartSideMenu";
import FavoritesSideMenu from "./FavoritesSideMenu";
import { useCartFavViewContext } from "@/app/contexts/CartFavViewContext";

export default function CartFavoriteSideMenuWrapper() {
  const {cartFavView, setCartFavView} = useCartFavViewContext()

  function menuSelection(view: string) {
    switch (view) {
      case 'closed':
        return false
      case 'cart':
        return (    
            <CartSideMenu/>
        )
      case 'fav':
        return (    
          <FavoritesSideMenu/>
        )
      default:
        break;
    }
  }

  function handleClose() {
    setCartFavView('closed')
  }

  return (
    <div className={`fixed transition-all top-[--navbar-h] z-50 ${cartFavView === 'closed' ? '-right-[100%]' : 'right-0'}`}>
      <div>
        <button onClick={handleClose}>Close</button>
      </div>
      {menuSelection(cartFavView)}
    </div>
  )
}
