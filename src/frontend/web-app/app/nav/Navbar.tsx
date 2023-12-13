import React from 'react'
import Search from './Search'
import Logo from './Logo'
import LoginButton from './LoginButton'
import { getCurrentUser } from '../actions/authActions'
import UserActions from './userActions'

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className='
    sticky top-0 z-50 flex justify-between bg-whiate p-5 item-center text-gray-800 shadow-md
    '>
        <Logo />
        <Search />
        {user ? (
          <UserActions user={user}/>
        ) : (
          <LoginButton />
        )}
    </header>
  )
}
