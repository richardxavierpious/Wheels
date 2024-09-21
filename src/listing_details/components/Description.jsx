import React from 'react'

function Description({carDetails}) {

  return (
    <div>
        {carDetails?.listingDescription ? 
        <div className='p-5 mt-5 rounded-xl bg-white shadow-md border border-slate-200'>
            <h2 className='font-medium mb-4 text-2xl'>
                Description
            </h2>
            <p>
                {carDetails?.listingDescription}
            </p>
        </div>

        :<div className='w-full h-[250px bg-slate-300] animate-pulse rounded-xl'>

        </div>}
    </div>
  )
}

export default Description