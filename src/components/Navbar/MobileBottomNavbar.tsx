
export default function MobileBottomNavbar(): React.ReactElement {
  return (
    <div className="fixed bottom-0 w-full hidden max-lg:block z-30">
        <ul className="flex flex-row flex-nowrap justify-between items-center h-full w-full m-auto">
            <li>Home</li>
            <li>Cart</li>
            <li>Favorite</li>
            <li>Accounts</li>
        </ul>
    </div>
  )
}
