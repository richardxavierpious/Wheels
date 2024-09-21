import IconField from '@/add_listing/components/IconField'
import CarSpecification from '@/Shared/CarSpecification'
import React from 'react'

function Specifications({carDetails}) {

    console.log(carDetails);
  return (
    <div className='p-5 rounded-xl shadow-md border border-slate-200 mt-5'>
        <h2 className="font-medium mb-6 text-2xl">Specifications</h2>
        {CarSpecification.map((item, index)=>(
            <div className='mt-5 flex items-center justify-between'>
                <h2 className='flex gap-2'>
                    <IconField icon={item?.icon}/>
                    {item?.label}
                </h2>
                <h2>
                    {carDetails && carDetails[item.name] ? carDetails[item.name] : 'N/A'}
                </h2>
            </div>
        ))}


       {/* {carDetails?.length>0&&carDetails.map((carItem, index)=>(
            <div>

                <IconField icon={CarSpecification[index].icon}/>
            </div>
        ))} */}


    </div>
  )
}

export default Specifications