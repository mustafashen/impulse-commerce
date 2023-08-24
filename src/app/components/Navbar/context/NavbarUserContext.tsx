import { createServerContext, useContext, useState } from "react"

type ItemsType = {
      productID: string,
      productName: string
}[]

type NavbarUserContextType = {
    cartItems: ItemsType,
    favoriteItems: ItemsType,
    setCartItems?: React.Dispatch<React.SetStateAction<ItemsType>>
}

const NavbarUserContext = createServerContext('NavbarUserContext',{cartItems: [{productID: "", productName: ""}], favoriteItems: [{productID: "", productName: ""}]})

export function NavbarUserContextProvider({children} : {children: React.ReactElement}) {
    
  const cartItems = [{productID: "123", productName: "Gloves"}, {productID: "343", productName: "Shoelace"}, {productID: "456", productName: "Shoes"}]
  const favoriteItems = [{productID: "123", productName: "Gloves"}, {productID: "343", productName: "Shoelace"}, {productID: "456", productName: "Shoes"}]


    const NavbarUserContextStore: NavbarUserContextType = {
        cartItems,
        favoriteItems
    }
    
    return (
        <NavbarUserContext.Provider value={NavbarUserContextStore}>
            {children}
        </NavbarUserContext.Provider>
    )
    

}

export const useNavbarUserContext = () => useContext(NavbarUserContext)