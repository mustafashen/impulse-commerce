
export default function Account() {
  
  function logInCheck(): boolean {
    return true
  }
  // TODO: Make these two lists individual components
  const loggedIn = <ul className="invisible group-hover:visible group-focus-within:visible">
    <li>__name__</li>
    <li>Orders</li>
    <li>Favorites</li>
    <li>Account Settings</li>
    <li>Logout</li>
  </ul>

  const notLoggedIn = <ul className="invisible group-hover:visible group-focus-within:visible">
    <li>Login</li>
    <li>Sign Up</li>
  </ul>

  return (
    <li className="group w-24">
        <button className="h-[--navbar-h] flex flex-col justify-center w-full">Account</button>
        {logInCheck() ? loggedIn : notLoggedIn}
    </li>
  )
}
