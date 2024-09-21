import Service from '@/Shared/Service';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { between, eq, gte, lte } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarItem from '@/components/CarItem';
import Search from '@/components/Search';

function SearchByOptions() {

    const [searchParams] = useSearchParams();
    const condition = searchParams.get('condition');
    const make = searchParams.get('make');
    const price = searchParams.get('price');
    const [carList, setCarList] = useState([]);

    console.log(condition, make, price);

    useEffect(()=>{
        GetCarList();
    }, [])

    const GetCarList = async () => {
        let query = db.select().from(CarListing)
            .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId));
    
        if (condition != null && condition !== '') {
            query = query.where(eq(CarListing.condition, condition));
        }
    
        if (make != null && make !== '') {
            query = query.where(eq(CarListing.make, make));
        }

        if  (price != null && price !== ''){

            if (price == 'Less than 10L'){
                console.log('q1');
                query = query.where(lte(CarListing.sellingPrice, 1000000));
            }
            
            if (price == '10 to 20L'){
                console.log('q2');
                query = query.where(between(CarListing.sellingPrice, 1000000, 2000000));
            }

            if (price == 'More than 20L'){
                console.log('q3');
                query = query.where(gte(CarListing.sellingPrice, 2000000));
            }
    }

        const result = await query;
        const resp = Service.FormatResult(result);
        console.log(resp);
        setCarList(resp);
    };
    

  return (
    <div>
        <Header/>

        <div className='p-10 bg-slate-100 flex justify-center'>
            <Search/>
        </div>

        <div className='p-10 md:p-15'>
            <h2 className='font-bold text-4xl'>Search Results</h2>

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

export default SearchByOptions