'use client'

import Image from "next/image"
import productImage from "../../../public/images/product_placeholder.jpg"
import { useCartContext } from "@/contexts/CartContext"
import { useFavoritesContext } from "@/contexts/FavoriteContext"
import { useEffect, useState } from "react"
import Link from "next/link"

type ItemType = {
  productID: string,
  productName: string,
  productPrice: string,
  quantity: number
}

export default function ProductCard({productInfo}: {productInfo: ItemType}) {
  const {productID, productName, productPrice} = productInfo
  const {dispatchCartItems}: any = useCartContext()
  const {favoriteItems, dispatchFavoriteItems}: any = useFavoritesContext()
  const [favButtonState, setFavButtonState] = useState('notFav')

  useEffect(() => {
    const thisFavIndex = favoriteItems.findIndex((el: ItemType) => el.productID === productID)

    if (thisFavIndex !== -1) {
      setFavButtonState('fav')
    } else {
      setFavButtonState('notFav')
    }

  }, [favoriteItems])
  
  function handleAddCart() {
    dispatchCartItems({type: 'ADD', cartItem: {productID, productName, productPrice}})
  }

  function handleAddFavorites() {
    dispatchFavoriteItems({favoriteItem: {productID, productName, productPrice}})
  }

  return (
    <li className="group/product-card bg-slate-400 relative border-solid border-4">
      <button 
        onClick={handleAddFavorites} 
        className={`absolute flex justify-center items-center top-2 right-2 rounded-full w-8 h-8 invisible group-hover/product-card:visible
        ${favButtonState === 'fav' ? 'bg-red-400' : 'bg-white'}`}>
          H
        </button>
      <div id="image" className="flex flex-col justify-center w-full h-3/4 bg-slate-500 overflow-clip">
        <Image
          src={productImage}
          alt="product image"
          priority={false}
          placeholder="blur"
          />
      </div>
      <div id="description" className="w-full h-1/4 flex flex-col flex-nowrap justify-between px-1 py-2">
        <Link
          href={{
          pathname: `/products/${productID}`,
          query: {productName}
          }}>
          <h3>{productName}</h3>
        </Link>
        <div>
          <span>{productPrice}</span>
        </div>
        <div>
          <button onClick={handleAddCart} className="w-full text-center invisible bg-green-600 group-hover/product-card:visible">Add to Cart</button>
        </div>
      </div>
    </li>
  )
}
