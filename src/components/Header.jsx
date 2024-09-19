import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        
        <Link to={'/'}>
        <img src='/logo.png' width={150} height={75} className='rounded-full'/>
        </Link>

        <ul className='hidden md:flex gap-16'>
          <Link to={'/'}>
          <li className='font-medium text-black hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
          </Link>
          <li className='font-medium text-black hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
          <li className='font-medium text-black hover:scale-105 transition-all cursor-pointer hover:text-primary'>About</li>
          <li className='font-medium text-black hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contact</li>
        </ul>
    
        {isSignedIn?
          <div className='flex items-center gap-5'>
            <UserButton/>
            <Link to={'/profile'}>
            <Button>Submit Listing</Button>
            </Link>
           
          </div>
          :
          <div className='flex items-center gap-2'>
            <SignInButton mode="modal" RedirectUrl='/' className="shadow-sm"/>
            <Button>Submit Listing</Button>
          </div>
        }
    </div>
  )
}

export default Header