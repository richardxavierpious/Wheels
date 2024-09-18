import fakedata from '@/Shared/fakedata'
import React from 'react'
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function MostSearchedCars() {
    console.log(fakedata.carList);
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mb-7 mt-10'> Most searched cars </h2>
      
        <Carousel>
        <CarouselContent>

           {fakedata.carList.map((car, index)=>(

             <CarouselItem className="basis-1/2 md:basis-1/4">
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