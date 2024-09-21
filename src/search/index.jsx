import Service from '@/Shared/Service';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchByOptions() {

    const [searchParams] = useSearchParams();
    const condition = searchParams.get('cars');
    const make = searchParams.get('make');
    const price = searchParams.get('price');

    console.log(condition, make, price);

    useEffect(()=>{
        GetCarList();
    }, [])

    const GetCarList = async ()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
        .where(condition!=null&&eq(CarListing.condition, condition))
        .where(make!=null&&eq(CarListing.make, make))

        const resp=Service.FormatResult(result);
        console.log(resp);
    }

  return (
    <div>SearchByOptions</div>
  )
}

export default SearchByOptions