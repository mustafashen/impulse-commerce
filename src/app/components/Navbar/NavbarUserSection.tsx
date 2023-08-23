import Account from "@/app/components/Navbar/Account"
import Cart from "@/app/components/Navbar/Cart"
import Favorites from "@/app/components/Navbar/Favorites"
import { NavbarUserContextProvider } from "@/app/components/Navbar/context/NavbarUserContext"

export default function NavbarUserSection(): React.ReactElement {
  return (
    <NavbarUserContextProvider>
        <ul className="flex flex-row flex-nowrap [&>*]:w-24">
            <Cart/>
            <Favorites/>
            <Account/>
        </ul>
    </NavbarUserContextProvider>
  )
}
