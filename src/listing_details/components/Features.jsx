import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

function Features({features}) {
    console.log(features);
  return (
    
        <div className="p-5 mt-5 rounded-xl bg-white shadow-md border border-slate-300">
        <h2 className="font-medium mb-6 text-2xl">Features</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {features ? (
            Object.entries(features).map(([feature, value]) => (
            <div key={feature} className='flex gap-2 items-center'>
                <FaRegCircleCheck className='text-md text-slate-700'/>
                <h2>{feature}</h2>
            </div>
            ))
        ) : (
            <div>No features available</div>
        )}
        </div>
    </div>

);
}

export default Features