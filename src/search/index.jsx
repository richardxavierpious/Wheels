import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Search from '@/components/Search'
import { CarImages, CarListing } from './../../configs/schema'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from './../../configs'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'
import CarItem from '@/components/CarItem'

function SearchByCategory() {
  
    const {category} = useParams();
    const [carList, setCarList] = useState([]);

    useEffect(()=>{
        GetCarList();
    }, [])

    const GetCarList = async ()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
        .where(eq(CarListing.category, category))

        const resp = Service.FormatResult(result)
        setCarList(resp);
    
    }


    return (
    <div>
        <Header/>

        <div className='p-10 bg-slate-100 flex justify-center'>
            <Search/>
        </div>

        <div className='p-10 md:p-15'>
            <h2 className='font-bold text-4xl'>{category}</h2>

            {/* Car List */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
            {carList.length>0?  carList.map((item, index)=>(
                <div key={index}>
                    <CarItem car={item}/>
                </div>
            )):
            [1,2,3,4,5,6].map((item, index)=>(
                <div className='h-[300px] rounded-xl bg-slate-200 animate-pulse'>

                </div>
            ))
            } 
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default SearchByCategory