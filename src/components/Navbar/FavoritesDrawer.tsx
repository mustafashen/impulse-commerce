import { useFavoritesContext } from "@/contexts/FavoriteContext"

export default function FavoritesDrawer() {
  const {favoriteItems, dispatchFavoriteItems}: any = useFavoritesContext()

  function handleRemoveFav({productID}: {productID: string}) {
    dispatchFavoriteItems({favoriteItem: {productID}})
  }

  return (
    <ul>
      {
        favoriteItems.map((item: {productID: string, productName: string}) => {
          return <li key={item.productID}>
              <button onClick={() => handleRemoveFav({productID: item.productID})}>x</button>
              <span>{item.productName}</span>
          </li>
        })
      }
    </ul>
  )
}
