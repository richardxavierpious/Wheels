import React from 'react'
import { Separator } from './ui/separator'
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';

function CarItem({car}) {

  return (
    <Link to={'/listing_details/'+car?.id} className='text-black'>
    <div className='rounded-xl bg-white border hover:shadow-lg cursor-pointer'>

        <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm pb-0.5 text-white'>New</h2>

        <img src={car?.images[0]?.imageUrl} width={'100%'} height={'100%'}
        className='rounded-t-xl h-[180px] object-cover'/>

        <div className='p-6'>

            <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>

            <Separator />

            <div className='grid grid-cols-3 mt-5'>

                <div className='flex flex-col items-center mb-2'>
                <BsFuelPump className='text-lg'/>
                <h2>{car.fuelType}</h2>
                </div>

                <div className='flex flex-col items-center mb-2'>
                <SlSpeedometer className='text-lg'/>
                <h2>{car.mileage}</h2>
                </div>

                <div className='flex flex-col items-center mb-2'>
                <GiGearStickPattern className='text-lg'/>
                <h2>{car.transmission}</h2>
                </div>

            </div>

            <Separator className='my-2'/>

            <div className='flex items-center justify-between'>

                <h2 className='font-bold text-lg'>Rs. {car.sellingPrice}</h2>
                <h2 className='text-sky-800 text-sm flex items-center'>View Details <IoMdOpen/></h2>

            </div>
        </div>

    </div>
    </Link>
  )
}

export default CarItem