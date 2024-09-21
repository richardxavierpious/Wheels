import { Button } from '@/components/ui/button';
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";

function Pricing({sellingPrice}) {
    console.log(sellingPrice);
  return (
    <div className='p-5 rounded-xl border border-slate-200 shadow-md'>
        <h2>Asking Price</h2>
        <h2 className='font-bold text-3xl'>Rs. {sellingPrice}</h2>

        <Button className='w-full my-5 bg-slate-100 text-slate-700'>
            <MdOutlineLocalOffer className='text-lg mr-2'/>
            Make an Offer
        </Button>
    </div>
  )
}

export default Pricing