'use client'
import { useRef } from "react";
import ProductCard from "@/components/ProductGrid/ProductCard";

export default function Slider() {
  const arbitaryData = {
    products: [
      {productID: '1', productName: 'Product 1', productPrice: '23', quantity: 20},
      {productID: '2', productName: 'Product 2', productPrice: '54', quantity: 20},
      {productID: '3', productName: 'Product 3', productPrice: '55', quantity: 20},
      {productID: '4', productName: 'Product 4', productPrice: '12', quantity: 20},
      {productID: '5', productName: 'Product 5', productPrice: '56', quantity: 20},
      {productID: '6', productName: 'Product 6', productPrice: '88', quantity: 20}
    ]
  }

  const scrollRef = useRef<null | HTMLUListElement>(null)

  function scroll(scrollOffset: number) {
    if (scrollRef.current)
      scrollRef.current.scrollLeft += scrollOffset
  }

  function next() {
    console.log('left')
    scroll(300)
  }

  function prev() {
    console.log('right')
    scroll(-300)
  }
  return (
    <div className="w-full h-full relative border-solid border-2">
      <div className="max-lg:hidden w-full h-0 max-h-0 z-10 overflow-visible absolute top-1/2 flex flex-row justify-between items-center">
        <button className="h-24" 
          onClick={() => prev()}
        >
          Back
        </button>
        <button className="h-24" 
          onClick={() => next()}
        >
          Forward
        </button>
      </div>
      <ul ref={scrollRef} className="overflow-x-scroll scroll-smooth snap-x overflow-y-hidden flex flex-row justify-center flex-nowrap items-center w-full h-full [&>*]:w-[160px] [&>*]:min-w-[160px] [&>*]:h-full gap-x-4 ">
        {
          arbitaryData.products.map((el) => {
            return <ProductCard key={el.productID} productInfo={el}/>
          })
        }
      </ul>
    </div>
  )
}
