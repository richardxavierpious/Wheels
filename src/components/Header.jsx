import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';

function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>

        <img src='/logo.png' width={100} height={75}/>
      
        <ul className='hidden md:flex gap-16'>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>About</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contact</li>
        </ul>
    
        {isSignedIn?
          <div className='flex items-center gap-5'>
            <UserButton/>
            <Button>  Submit Listing</Button>
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