import React from 'react'
import { Link } from 'react-router-dom'

const Hotels = ({tripDetails}) => {
    console.log(tripDetails)
    if (!tripDetails || !tripDetails.tripData || !tripDetails.tripData.hotels) {
        return <p>No hotel data available.</p>;
    }
  return (
    <div className='mt-5 mb-20'>
        <h2 className='text-2xl font-medium mb-2'>Hotels</h2>
        <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        { tripDetails?.tripData?.hotels.map((hotel, index) => {
            return (
                <Link key={index} to={`https://www.google.com/maps/search/?api=1&query=${hotel.HotelName}${hotel.HotelAddress}`} target='_blank'>
                    <div className='border-[1px] p-3 rounded-lg hover:scale-[102%] transition-all ease-in-out' key={index}>
                    <img className='object-center object-cover rounded-lg' src="https://placehold.co/400x200" alt="hotel image" />
                    <h2 className='text-lg font-medium mt-2'>{hotel.HotelName}</h2>
                    <h3 className='text-md text-gray-800'>📍{hotel.HotelAddress}</h3>
                    <div className='flex justify-between'>
                        <span className='text-md text-gray-800'>💵{hotel.Price}</span>
                        <span className='text-md text-gray-800'>⭐{hotel.Rating}</span>
                    </div>
                    </div>  
                </Link>
            )
        })

        }


        </div>
        
      
    </div>
  )
}

export default Hotels
