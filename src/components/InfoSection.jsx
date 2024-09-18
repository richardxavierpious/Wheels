import React from 'react'

function InfoSection() {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://img.freepik.com/premium-photo/happy-indian-man-shaking-hands-with-salesperson-after-buying-new-car-showroom_868783-42007.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Helping people find their dream cars
            </h2>
  
            <p className="mt-4 text-gray-600">
            At Wheels, we’re dedicated to helping people find their dream cars with ease.
             As a trusted online car marketplace, we connect buyers and sellers, offering a wide selection of 
             new and pre-owned vehicles from top brands. Whether you’re purchasing your first 
             car or looking for an upgrade, we strive to make the process simple and stress-free, providing expert 
             support every step of the way.
            </p>
  
            <a
              href="#"
              className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoSection