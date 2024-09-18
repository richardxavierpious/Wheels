import categorydata from '@/Shared/categorydata'
import React from 'react'

function Category() {
  return (
    <div className='mt-96'>
        <h2 className='font-bold text-3xl text-center mb-10'> Browse by type </h2>

        <div className=' grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-20 '>
            {categorydata.Categories.map((category, index)=>(
                <div className='border-round-sm gap-2 p-3 items-center flex flex-col hover:shadow-sm scale-125 cursor-pointer'>
                    <img src = {category.icon} width={100} height = {100}/>
                    <h2>{category.name}</h2>
                </div>
            )
        )}
        </div>
    </div>
  )
}

export default Category