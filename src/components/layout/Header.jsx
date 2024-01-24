import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <nav className="flex items-center text-gray-500 font-semibold gap-8">
        <Link className="text-primary font-semibold text-2xl" href={'/'}>
          ST PIZZA
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/#about'}>About</Link>
        <Link href={'/#contact'}>Contact</Link>
      </nav>

      <nav className='flex items-center gap-4 text-gray-400'>
        <Link href={'/login'} className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">Register</Link>
      </nav>
    </header>
  )
}

export default Header
