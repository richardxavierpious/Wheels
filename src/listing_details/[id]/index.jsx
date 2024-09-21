import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import ImageGallery from '../components/ImageGallery';
import Description from '../components/Description';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '@/components/Footer';
import Specifications from '../components/Specifications';

function ListingDetail() {

    const {id} = useParams();
    const [carDetails, setCarDetails] = useState();

    useEffect(()=>{
        GetCarDetails();
    }, [])

    const GetCarDetails = async ()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
        .where(eq(CarListing.id, id))

        const resp=Service.FormatResult(result);
        setCarDetails(resp[0]);
    }

  return (
    <div>
        <Header/>

        <div className='mx-10 mt-5 md:mx-17'>

        {/* Header Details Component */}
        <DetailHeader carDetails={carDetails} />
        
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 p-10 w-full gap-5'>
            {/* Left */}
                <div className='md:col-span-2 '>
                    {/* Image Gallery */}
                    <ImageGallery carDetails={carDetails}/>

                    {/* Description */}
                    <Description carDetails={carDetails}/>

                    {/* Features List */}
                    <Features features={carDetails?.features}/>
                </div>

            {/* Right */}
                <div>
                    {/* Pricing */}
                    <Pricing sellingPrice={carDetails?.sellingPrice}/>

                    {/* Car Specifications */}
                    <Specifications/>
                    {/* Owner Details */}
                </div>


        </div>

        <Footer/>
    </div>
  )
}

export default ListingDetail