import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon } from 'lucide-react'

const Navbar = () => {
    return(
    <div className='fixed top-0 left-0 z-50 w-full items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
    <Link to='/' className='max-md:flex-1'>

    <img src={assets.logo} alt="" className='w-36 h-auto'/>
    </Link>
    <div>
      <XIcon/>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
      <Link to='/'>Theaters</Link>
      <Link to='/'>Realeases</Link>
      <Link to='/favorites'>Favorites</Link>
    </div>
      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer'/>
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full'>Login</button>
      </div>
      <MenuIcon className='max-md:ml-4 md-hidden w-8 h-8 cursor-pointer/>  
    </div>
  )

  }
export default Navbar