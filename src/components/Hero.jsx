import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
        <h2 className='text-lg'>Find cars for sale near you</h2>
        <h2 className='text-[60px] font-bold'>Buy your dream car now!</h2>
      
        <Search/>
      
        <img src='car2.png' className='mt-3'/>
      </div>
    </div>
  )
}

export default Hero