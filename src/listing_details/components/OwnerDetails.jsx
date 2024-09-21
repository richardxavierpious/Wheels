import { Button } from '@/components/ui/button'
import React from 'react'

function OwnerDetails({carDetails}) {
  return (
    <div className='p-5 border border-slate-300 mt-5 rounded-xl shadow-md'>
        <h2 className="font-medium mb-2 text-2xl">Owner</h2>
        <img src = {carDetails?.userImageUrl} className='w-[70px] h-[70px] object-cover rounded-full'/>
        <h2 className='mt-2 font-bold text-xl'>{carDetails?.userName}</h2>
        <h2 className='mt-2 text-gray-600'>{carDetails?.createdBy}</h2>
        <Button className='w-full mt-5 bg-slate-100 text-slate-700'>Message Owner</Button>
    </div>
  )
}

export default OwnerDetails