import Account from "@/components/Navbar/Account"
import CartButton from "@/components/Navbar/CartButton"
import FavoritesButton from "@/components/Navbar/FavoritesButton"
import CartFavoriteSideMenuWrapper from "./CartFavoriteDrawerWrapper"


export default function NavbarUserSection(): React.ReactElement {
  return (
      <ul className="flex flex-row flex-nowrap [&>*]:w-24 h-[--navbar-h]">
        <CartButton/>
        <FavoritesButton/>
        <Account/>
      </ul>
  )
}
