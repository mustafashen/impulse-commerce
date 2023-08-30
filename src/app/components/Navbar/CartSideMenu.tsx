import { useCartContext } from "@/app/contexts/CartContext"


export default function CartSideMenu() {
  const {cartItems, dispatchCartItems} = useCartContext()

  function handleCartItemDelete(item) {
    dispatchCartItems({type: 'DELETE', cartItem: {productID: item.productID}})
  }

  function handleCartItemInc(item) {
    dispatchCartItems({type: 'QTY_INC', cartItem: {productID: item.productID}})
  }

  function handleCartItemDec(item) {
    dispatchCartItems({type: 'QTY_DEC', cartItem: {productID: item.productID}})
  }

  return (
    <ul>
      {
        cartItems.map((item: {productID: string, productName: string, quantity: number}) => {
          return <li key={item.productID}>
            <button onClick={() => handleCartItemDelete(item)}>x</button>
            <span>{`(${item.quantity})`}</span>
            <span>{item.productName}</span>
            <button onClick={() => handleCartItemDec(item)}>Dec</button>
            <button onClick={() => handleCartItemInc(item)}>Inc</button>
          </li>
        })
      }
    </ul>
  )
}
