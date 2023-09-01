import Account from "@/components/Navbar/Account"
import Cart from "@/components/Navbar/Cart"
import Favorites from "@/components/Navbar/Favorites"
import CartFavoriteSideMenuWrapper from "./CartFavoriteDrawerWrapper"


export default function NavbarUserSection(): React.ReactElement {
  return (
      <ul className="flex flex-row flex-nowrap [&>*]:w-24 h-[--navbar-h]">
        <Cart/>
        <Favorites/>
        <Account/>
      </ul>
  )
}
