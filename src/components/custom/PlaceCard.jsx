import React, { useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

const PlaceCard = ({place}) => {
  return (
    <div className="h-[200px] border-[2px] border-zinc-400 rounded-lg p-[20px] 
    flex justify-between gap-2 items-start hover:scale-[102%] transition-all ease-in-out cursor-pointer">
        <div className="content flex flex-col justify-around">
            <div className="header">
                <h2 className="text-xl font-medium">{PlaceName}</h2>
                <p className="text-md mt-[5px] text-gray-800">{PlaceDetails}</p>
            </div>

            <div className="flex gap-2 items-center mt-10">
                <span className='text-sm flex items-center gap-2 text-gray-800 p-1 px-3 rounded-full bg-gray-200'>
                    <FaRegClock />{Time}</span>
                <span className='text-sm flex items-center text-gray-800 p-1 px-3 rounded-full bg-gray-200'>
                    ₹ {place.ticketPricing}</span>
                <a className='text-sm flex items-center text-gray-800 p-1 px-3 rounded-full bg-gray-200' 
                href={`https://www.google.com/maps?q=${place.placeName}`} target="_blank" rel="noopener noreferrer">
                <FaMapPin /> Get Directions</a>
            </div>
        </div>

        <div className="img">
            <img className="object-fit object-cover h-[150px] w-[150px] rounded-lg" 
            src={place.PlaceImageUrl} alt="place img" />
        </div>
    </div>
  );
};

export default PlaceCard;
