import  Image  from "next/image"
import  Link  from "next/link"
export default function Logo(): React.ReactElement {
  return (
    <div className="flex justify-center items-center h-full">
    <Link href="/">
        <Image  src="/icons/logo.svg"
                width={200}
                height={1}
                sizes=""
                alt="logo"
                >
        </Image>
    </Link>
    </div>
  )
} 
