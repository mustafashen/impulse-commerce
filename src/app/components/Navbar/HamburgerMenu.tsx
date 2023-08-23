"use client"

import Image from "next/image"
import { useState } from "react"
import MobileHamburgerMenuCategories from "@/app/components/Navbar/MobileHamburgerMenuCategories"
import HamburgerMenuCategories from "@/app/components/Navbar/HamburgerMenuCategories"


export default function HamburgerMenu(): React.ReactElement {
  const [menuVisible, setMenuVisible] = useState<{isVisible: string}>({isVisible: "invisible"})


  const handleMouseEnter = () => setMenuVisible({isVisible: "visible"})
  
  function handleMouseLeave() {
    setMenuVisible({isVisible: "invisible [&>*]:outline-none"})

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  function handleClick() {
    if (menuVisible.isVisible === "invisible") setMenuVisible({isVisible: "visible"})
    else {
      setMenuVisible({isVisible: "invisible"})
      
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    }
  }


  return (
      <li id="hamburger-menu" className="h-48 w-48 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div id="hm-icon-wrap" className={`flex flex-col justify-center items-center h-[--navbar-h] w-12`} onClick={handleClick}>
              <Image  src="/icons/hamburger.svg"
                      width={30}
                      height={1}
                      sizes=""
                      alt="hamburger menu icon"
                      >
              </Image>
        </div>
        <ul id="hm-ctg-wrap" className = {`h-[--vertical-menu-h] w-[--vertical-menu-w] pt-[--vertical-menu-pt] z-40 max-lg:hidden ${menuVisible.isVisible}`}>
          <HamburgerMenuCategories/>
        </ul>
        <div id="mhm-ctg-wrap" className={`${menuVisible.isVisible}`}>
          <MobileHamburgerMenuCategories/>
        </div>
      </li>
  )
}
