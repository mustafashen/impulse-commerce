import { useCartContext } from "@/contexts/CartContext"

type ItemType = {
  productID: string,
  productName: string,
  productPrice: string,
  quantity: number
}

export default function CartDrawer() {
  const {cartItems, dispatchCartItems}: any = useCartContext()

  function handleCartItemDelete(item: ItemType) {
    dispatchCartItems({type: 'DELETE', cartItem: {productID: item.productID}})
  }

  function handleCartItemInc(item: ItemType) {
    dispatchCartItems({type: 'QTY_INC', cartItem: {productID: item.productID}})
  }

  function handleCartItemDec(item: ItemType) {
    dispatchCartItems({type: 'QTY_DEC', cartItem: {productID: item.productID}})
  }

  return (
    <ul>
      {
        cartItems.map((item: ItemType) => {
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
