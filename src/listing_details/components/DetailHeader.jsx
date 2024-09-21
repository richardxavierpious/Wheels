import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";

function DetailHeader({carDetails}) {
  return (
    <div>
        {carDetails?.listingTitle ?
        <div>
            <h2 className='font-bold text-3xl'>{carDetails?.listingTitle}</h2>

            <div className='flex gap-2 mt-3'>
                <div className='flex gap-2 p-1 items-center bg-slate-100 rounded-xl'>
                    <FaCalendarAlt className='h-4 w-4 text-slate-500'/>
                    <h2 className='text-slate-500'>{carDetails?.year}</h2>
                </div>
                <div className='flex gap-2 p-1 items-center bg-slate-100 rounded-xl'>
                    <BsFillFuelPumpFill className='h-4 w-4 text-slate-500'/>
                    <h2 className='text-slate-500'>{carDetails?.fuelType}</h2>
                </div>
                <div className='flex gap-2 p-1 items-center bg-slate-100 rounded-xl'>
                    <GiGearStickPattern className='h-4 w-4 text-slate-500'/>
                    <h2 className='text-slate-500'>{carDetails?.transmission}</h2>
                </div>
            </div>

        </div>
        :<div className='w-full rounded-xl h-[100px] bg-slate-300 animate-pulse'>

        </div>}

    </div>
  )
}

export default DetailHeader