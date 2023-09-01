import { createContext, useContext, useReducer } from "react"

type ActionType = 'ADD' | 'DELETE' | 'QTY_INC' | 'QTY_DEC'

type ItemType = {
    productID: string,
    productName: string,
    productPrice: string,
    quantity: number
}

type ItemsType = ItemType[]

type CartContextType = {
    cartItems: ItemsType
    dispatchCartItems?: (action: {type: ActionType, cartItem: ItemType}) => void
}

const addCartItem = (state: ItemsType, cartItem: ItemType) => [...state, {...cartItem, quantity: 1}]
const delCartItem = (state: ItemsType, productID: string) => {
    state.map((item: ItemType, idx: number) => {
        if (item.productID === productID) {
            state.splice(idx, 1)
            return
        }
    })
    console.log(state)
}
const qtyIncCartItem = (state: ItemsType, productID: string) => {
    state.map((item: ItemType, idx: number) => {
        if (item.productID === productID) {
            ++item.quantity
            return
        }
    })
    return state
}
const qtyDecCartItem = (state: ItemsType, productID: string) => {
    state.map((item: ItemType, idx: number) => {
        if (item.productID === productID) {
            --item.quantity
            return
        }
    })
    return state
}

function reduceCartItems(state: ItemsType, action: {type: ActionType, cartItem: ItemType}) {
    let stateCopy = [...state]
    let {type, cartItem} = action
    const {productID} = cartItem

    if (type === 'ADD') {
        stateCopy.map((item: ItemType) => {
            if (item.productID === productID) {
                type = 'QTY_INC'
                return
            }
        })
    }

    switch (type) {
        case 'ADD':
            stateCopy = addCartItem(stateCopy, cartItem)
            break;
        case 'DELETE':
            delCartItem(stateCopy, cartItem.productID)
            break;
        case 'QTY_INC':
            qtyIncCartItem(stateCopy, cartItem.productID)
            break;
        case 'QTY_DEC':
            qtyDecCartItem(stateCopy, cartItem.productID)
            break;
        default:
            break;
    }

    if (type === 'QTY_DEC') {
        stateCopy.map((item: ItemType, idx: number) => {
            if (item.productID === productID) {
                if (item.quantity === 0) {
                    stateCopy.splice(idx, 1)
                    return
                }
            }
        })
    }

    return stateCopy
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({children} : {children: React.ReactElement}) {

  const [cartItems, dispatchCartItems] = useReducer(reduceCartItems, [])

    
    const CartContextStore: CartContextType = {
        cartItems,
        dispatchCartItems
    }
    
    return (
        <CartContext.Provider value={CartContextStore}>
            {children}
        </CartContext.Provider>
    )
    

}

export const useCartContext = () => useContext(CartContext)