import React from 'react'
import Heading from './Heading'
import TripCard from './TripCard'

const TopTrips = () => {
  return (
    <div className="featureTrips px-[50px] w-full mb-20">
        <Heading heading={'Featured Trips'} para={'Make your trips the most memorable with us.'} button={'View All Trips'} />
        <div className="tripCardContainer flex items-center gap-5 flex-nowrap overflow-x-auto">
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
        </div>
      
    </div>
  )
}

export default TopTrips
