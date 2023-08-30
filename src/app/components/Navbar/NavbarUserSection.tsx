import Account from "@/app/components/Navbar/Account"
import Cart from "@/app/components/Navbar/Cart"
import Favorites from "@/app/components/Navbar/Favorites"
import CartFavoriteSideMenuWrapper from "./CartFavoriteSideMenuWrapper"


export default function NavbarUserSection(): React.ReactElement {
  return (
      <ul className="flex flex-row flex-nowrap [&>*]:w-24 h-[--navbar-h]">
        <Cart/>
        <Favorites/>
        <Account/>
      </ul>
  )
}
