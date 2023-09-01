import ProductCard from "./ProductCard"


export default function ProductGrid() {
  const categoryProducts = {
    products: [
      {productID: '1', productName: 'Product 1', productPrice: '23', quantity: 20},
      {productID: '2', productName: 'Product 2', productPrice: '54', quantity: 20},
      {productID: '3', productName: 'Product 3', productPrice: '55', quantity: 20},
      {productID: '4', productName: 'Product 4', productPrice: '12', quantity: 20},
      {productID: '5', productName: 'Product 5', productPrice: '56', quantity: 20},
      {productID: '6', productName: 'Product 6', productPrice: '88', quantity: 20}
    ]
  }
  return (
    <div className="w-full">
        <ul className="grid gap-4 p-2 justify-center

          max-sm:grid-cols-[repeat(2,minmax(0,1fr))]
          max-sm:grid-rows-[repeat(4,minmax(150px,300px))]

          max-md:grid-cols-[repeat(3,minmax(0,1fr))] 

          max-lg:grid-cols-[repeat(3,minmax(0,1fr))] 

          max-xl:grid-cols-[repeat(4,minmax(0,1fr))]

          grid-cols-[repeat(5,minmax(0,1fr))] 
          auto-rows-[minmax(300px,375px)]"
          >
          {
            categoryProducts.products.map((productInfo: any) => {
              return (
                <ProductCard productInfo={productInfo} key={productInfo.productID} />
              )
            })
          }
        </ul>
    </div>
  )
}
