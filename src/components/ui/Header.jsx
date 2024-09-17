import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './button';

function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className='flex justify-end w-full'>
      
        <img src='/logo.png' width={200} height={100}/>
      <SignInButton mode='modal'></SignInButton>
        <ul className='hidden md:flex gap-16'>
          <li>Home</li>
          <li>Search</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
  
        {isSignedIn?
          <div className='flex items-center gap-5'>
            <UserButton/>
            <Button>Submit Listing</Button>
          </div>
          :
            <Button>Submit Listing</Button>
        }
    </div>
  )
}

export default Header