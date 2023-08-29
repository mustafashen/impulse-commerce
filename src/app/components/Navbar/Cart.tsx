"use client"
import { useCartContext } from "@/app/contexts/CartContext"

export default function Cart() {
  const {cartItems} = useCartContext()
  return (
    <li className="group w-24">
        <button className="h-[--navbar-h] flex flex-col justify-center w-full relative">
          <span className="absolute top-4 right-4 bg-red-400 rounded-full w-6 h-6 flex justify-center items-center box-border">{cartItems.length}</span>
          Cart
        </button>
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
