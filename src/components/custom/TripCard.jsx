import React from 'react'

const TripCard = () => {
  return (
    <div className='border-[1px] border-zinc-600 rounded-lg p-[30px] w-[!450px] flex flex-col flex-shrink-0 gap-6 items-start mb-5'>
      <img className='w-[400px] h-[250px] object-cover object-center rounded-lg' 
      src="https://media-cdn.tripadvisor.com/media/photo-s/17/de/0e/d7/img-20190609-200007-largejpg.jpg" alt="trip-card-img" />
      <div className="content">
        <h2 className='text-2xl text-[#0D0560]'>Shimla, Himachal Pradesh</h2>  
        <p>Christ Church, Mall Road, Shimla</p>
      </div>
      <button className='bg-[#0D0560] poppins-regular text-white w-full px-5 py-3 rounded-lg cursor-pointer'>
        View Trip Details</button>
    </div>
  )
}

export default TripCard
