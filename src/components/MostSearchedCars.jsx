import React, { useEffect, useState } from 'react'
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { CarImages, CarListing } from './../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import { db } from './../../configs';
import Service from '@/Shared/Service';
  

function MostSearchedCars() {

  const [carList, setCarList] = useState([]);

  useEffect(()=>{
    GetPopularCatList();
  }, [])

    const GetPopularCatList=async ()=>{
      const result = await db.select().from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
      .orderBy(desc(CarListing.id))
      .limit(6)

      const resp = Service.FormatResult(result)
      setCarList(resp);
    };

  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mb-7 mt-10'> Most searched cars </h2>
      
        <Carousel>
        <CarouselContent>

           {carList.map((car, index)=>(

             <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                 <CarItem car= {car}/> 
              </CarouselItem>

            ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        
    </div>
  )
}

export default MostSearchedCars