import { createContext, useContext, useReducer } from "react"

type ItemType = {
    productID: string,
    productName: string,
    productPrice: string
}

type ItemsType = ItemType[]

type FavoritesContextType = {
    favoriteItems: ItemsType,
    dispatchFavoriteItems?: (action: {favoriteItem: ItemType}) => void
}

function favoritesReducer(state: ItemType[], action: {favoriteItem: ItemType}) {
    let stateCopy = [...state]
    let {favoriteItem} = action
    const {productID} = favoriteItem

    const existingIndex = stateCopy.findIndex((el: ItemType) => el.productID === productID)

    if (existingIndex === -1) {
        stateCopy = [...stateCopy, favoriteItem]
    } else {
        stateCopy.splice(existingIndex, 1)
    }

    return stateCopy
}

const FavoritesContext = createContext({})

export function FavoritesContextProvider({children} : {children: React.ReactElement}) {
    

  const [favoriteItems, dispatchFavoriteItems] = useReducer(favoritesReducer, [])


    const FavoritesContextStore: FavoritesContextType = {
        favoriteItems,
        dispatchFavoriteItems
    }
    
    return (
        <FavoritesContext.Provider value={FavoritesContextStore}>
            {children}
        </FavoritesContext.Provider>
    )
    

}

export const useFavoritesContext = () => useContext(FavoritesContext)