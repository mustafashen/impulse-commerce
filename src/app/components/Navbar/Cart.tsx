import { useNavbarUserContext } from "./context/NavbarUserContext"

export default function Cart() {
  const {cartItems} = useNavbarUserContext()
  return (
    <li className="group w-24">
        <button className="h-[--navbar-h] flex flex-col justify-center w-full">Cart</button>
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
    </li>
  )
}
