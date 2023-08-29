import Logo from "@/app/components/Navbar/Logo"
import HamburgerMenu from "@/app/components/Navbar/HamburgerMenu"
import NavbarUserSection from "@/app/components/Navbar/NavbarUserSection"
import NavbarCategories from "@/app/components/Navbar/NavbarCategories"
import { CategoriesContextProvider } from "./context/CategoriesContext"


export default function Navbar({logoInMiddle = false, verticalMenu= false, categoryInMiddle= false}): React.ReactElement {
  
  const VerticalMenuLayout: JSX.Element = <>
      <HamburgerMenu/>
      <li id="logo-middle" className={`absolute w-full top-[--logo-top] left-0 flex justify-center h-0`}><Logo/></li>
      <li id="navbar-user-section"><NavbarUserSection/></li>
  </>

  const LogoInMiddleLayout: JSX.Element = <>
    <li id="navbar-categories" className="navbar-categories"><NavbarCategories/></li>
    <li id="logo-middle" className={`absolute w-full top-[--logo-top] left-0 flex justify-center h-0`}><Logo/></li>
    <li id="navbar-user-section"><NavbarUserSection/></li>
  </>

  const LogoInLeftLayout: JSX.Element = <>
    <div className="flex flex-row flex-nowrap">
        <li id="logo-left" className={`flex justify-center items-center`}><Logo/></li>
        <li id="navbar-categories" className="navbar-categories"><NavbarCategories/></li>
    </div>
    <li id="navbar-user-section"><NavbarUserSection/></li>
  </>

  const MobileLayout: JSX.Element = <>
    <HamburgerMenu/>
    <li id="logo-middle" className={`absolute w-full top-[--logo-top] left-0 flex justify-center h-0`}><Logo/></li>
  </>

  const CategoryMiddleLayout: JSX.Element = <>
    <li id="logo-left" className={`flex justify-center items-center`}><Logo/></li>
    <li id="navbar-categories-middle" className={`absolute w-full left-0 flex justify-center h-0`}><NavbarCategories/></li>
    <li id="navbar-user-section"><NavbarUserSection/></li>
  </>

  function LayoutSelection(): JSX.Element {
    if (verticalMenu) {
      return VerticalMenuLayout
    } else if (logoInMiddle) {
      return LogoInMiddleLayout
    } else if(categoryInMiddle) {
      return CategoryMiddleLayout
    } else return LogoInLeftLayout
  }

  return (
    <CategoriesContextProvider>
      <nav className={`h-[--navbar-h] w-screen border-solid border-4 border-stone-900 top-0 overflow-visible box-border z-40 fixed`}>
          <ul className={"flex flex-row flex-nowrap w-full h-full justify-between max-lg:hidden"}>
                {LayoutSelection()}
          </ul>
          <ul className={"flex-row flex-nowrap w-full h-full justify-between hidden max-lg:flex"}>
              {MobileLayout}
          </ul>
      </nav>   
    </CategoriesContextProvider>
  )
}
