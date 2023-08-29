import { useFavoritesContext } from "@/app/contexts/FavoriteContext"

export default function FavoritesSideMenu() {
  const {favoriteItems} = useFavoritesContext()

  return (
    <ul className="invisible group-hover:visible  group-focus-within:visible">
      {
        favoriteItems.map((item: {productID: string, productName: string}) => {
          return <li key={item.productID}>
              <span>{item.productID}</span>
              <span>{item.productName}</span>
          </li>
        })
      }
    </ul>
  )
}
