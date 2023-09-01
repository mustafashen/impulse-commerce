import CartSideMenu from "./CartDrawer";
import FavoritesSideMenu from "./FavoritesDrawer";
import { useCartFavViewContext } from "@/contexts/CartFavViewContext";

export default function CartFavoritesDrawerWrapper() {
  const {cartFavView, setCartFavView}: any = useCartFavViewContext()

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
