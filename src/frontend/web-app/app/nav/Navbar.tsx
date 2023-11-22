import React from 'react'
import {AiOutlineCar} from 'react-icons/ai'
import Search from './Search'
import Logo from './Logo'
import LoginButton from './LoginButton'

export default function Navbar() {
  return (
    <header className='
    sticky top-0 z-50 flex justify-between bg-white p-5 item-center text-gray-800 shadow-md
    '>
        <Logo />
        <Search />
        <LoginButton />
    </header>
  )
}
