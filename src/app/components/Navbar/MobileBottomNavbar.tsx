
export default function MobileBottomNavbar(): React.ReactElement {
  return (
    <div className="absolute bottom-0 w-full hidden max-lg:block">
        <ul className="flex flex-row flex-nowrap justify-between items-center h-full w-full m-auto">
            <li>Home</li>
            <li>Cart</li>
            <li>Favorite</li>
            <li>Accounts</li>
        </ul>
    </div>
  )
}
