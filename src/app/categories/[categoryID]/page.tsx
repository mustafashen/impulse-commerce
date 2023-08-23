import { Metadata } from 'next'

export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  return {
    title: searchParams.name
  }
}

export default async function page(props: any) {
  const {searchParams} = props
  const {name} = searchParams
  return (
    <div>
      {/* {name} */}
    </div>
  )
}
