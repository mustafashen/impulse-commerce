import { useCartContext } from "@/app/contexts/CartContext"


export default function CartSideMenu() {
  const {cartItems} = useCartContext()
  return (
    <ul className="invisible group-hover:visible group-focus-within:visible">
      {
        cartItems.map((item: {productID: string, productName: string}) => {
          return <li key={item.productID}>
            <span>{item.productID}</span>
            <span>{item.productName}</span>
          </li>
        })
      }
    </ul>
  )
}
