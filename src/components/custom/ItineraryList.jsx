import { React, reduce, useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

const ItineraryList = ({ tripDetails }) => {
  const itineraryData = tripDetails?.tripData?.itinerary;
  console.log(itineraryData);

  return (
    <div className="mt-5 mb-20">
      {itineraryData?.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex justify-between items-center mb-5 bg-[#0D0560] p-4 rounded-lg text-white">
              <h2>Day {item.day}</h2>
              <FaGreaterThan />
            </div>
            
            {item.plan.map((place) => {
              return (
                <div className="h-[200px] border-[2px] border-zinc-400 rounded-lg p-[20px] flex justify-between gap-2 items-start hover:scale-[102%] transition-all ease-in-out cursor-pointer"
                >
                  <div className="content flex flex-col justify-around">
                    <div className="header">
                      <h2 className="text-xl font-medium">{place.placeName}</h2>
                      <p className="text-md mt-[5px] text-gray-800">
                        {place.placeDetails}
                      </p>
                    </div>

                    <div className="flex gap-2 items-center mt-10">
                      <span className="text-sm flex items-center gap-2 text-gray-800 p-1 px-3 rounded-full bg-gray-200">
                        <FaRegClock />
                        {place.time}
                      </span>
                      <span className="text-sm flex items-center text-gray-800 p-1 px-3 rounded-full bg-gray-200">
                        ₹ {place.ticketPricing}
                      </span>
                      <a
                        className="text-sm flex items-center text-gray-800 p-1 px-3 rounded-full bg-gray-200"
                        href={`https://www.google.com/maps?q=${place.placeName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaMapPin /> Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="img">
                    <img
                      className="object-fit object-cover h-[150px] w-[150px] rounded-lg"
                      src="https://placehold.co/300x200"
                      alt="place img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ItineraryList;
