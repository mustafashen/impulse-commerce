import ProductGrid from '@/components/ProductGrid/ProductGrid'
import Slider from '@/components/Slider/Slider'
import { Metadata } from 'next'

export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  return {
    title: searchParams.categoryName
  }
}

export default async function page(props: any) {
  const {searchParams} = props
  const {categoryName} = searchParams
  return (
    <div>
      <h1>{categoryName}</h1>
      <Slider/>
      <ProductGrid/>
    </div>
  )
}
