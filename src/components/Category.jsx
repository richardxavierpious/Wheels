import categorydata from '@/Shared/categorydata'
import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='mt-48'>
        <h2 className='font-bold text-3xl text-center mb-10'> Browse by type </h2>

        <div className=' grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-20 '>
            {categorydata.Categories.map((category, index)=>(

              <Link to={'search/'+category.name}>
                <div key={index} className='border-rounded-full gap-2 p-3 items-center flex flex-col hover:shadow-md scale-125 cursor-pointer'>
                    <img src = {category.icon} width={100} height = {100}/>
                    <h2 className='text-black'>{category.name}</h2>
                </div>
              </Link>
            )
        )}
        </div>
    </div>
  )
}

export default Category