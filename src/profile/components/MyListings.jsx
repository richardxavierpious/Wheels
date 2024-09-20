import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { db } from './../../../configs'
import { CarImages, CarListing } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '@/Shared/Service'
import CarItem from './../../components/CarItem'
import { FaTrashCan } from "react-icons/fa6";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

function MyListings() {

    const {user} = useUser();
    const [carList, setCarList] = useState([]);

    useEffect(()=>{
        user&&GetUserCarListing();
    }, [user])

    const GetUserCarListing=async ()=>{
        const result = await db.select().from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
        .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id))

        const resp = Service.FormatResult(result)
        console.log(resp);
        setCarList(resp);

    }

    const DeleteUserCarListing =async ()=>{
        const result = await db.delete().from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
        .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id))

    }

  return (
    <div>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-4xl'>My Listings</h2>
            <Link to = {'/add-listing'}>
                <Button>+ New Listing</Button>
            </Link>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5 '>
        {carList.map((item, index)=>(
            <div key={index}> 
                <CarItem car={item}/>

                <div className='p-2 rounded-lg flex justify-between gap-1'>
                  
                    <Link to={'/add-listing?mode=edit&id='+item?.id} className='w-full'>
                        <Button className='w-full bg-white shadow-sm text-black border-slate-300'> Edit </Button>
                    </Link>
                    <Button className="bg-red-600 text-white">Delete</Button> 

                </div>

            </div>
        ))}
        </div>
    </div>
  )
}

export default MyListings