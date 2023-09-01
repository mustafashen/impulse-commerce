import Carousel from '@/components/Carousels/FadeInCarousel/Carousel'
import { Metadata } from 'next'

export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  return {
    title: searchParams.productName
  }
}

export default function page(props: any) {
  const {searchParams} = props
  const {productName} = searchParams
  return (
    <div className='grid grid-cols-2 w-screen h-[50vh]'>
      <div>
        <Carousel/>
      </div>
      <div>
        <h1>{productName}</h1>
      </div>
    </div>
  )
}
