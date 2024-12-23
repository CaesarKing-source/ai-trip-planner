import { GetPlaceDetails } from '@/service/GlobalAPI';
import React, { useEffect } from 'react'

const InformationSection = ({tripDetails}) => {
  useEffect(() => {
    if (tripDetails) {
        GetPlacePhoto();
    }
}, [tripDetails]);

const GetPlacePhoto = async() => {
    const data = {
      textQuery: tripDetails?.tripData?.userSelection?.label
    }
    const result = await GetPlaceDetails(data).then(res => console.log(res.data));
  }

  return (
    <div className='informationSectionContainer relative'>
        <img src="https://placehold.co/800x400" className='object-center object-cover rounded-lg' alt="main image" />
        <h2 className='text-[2vw] font-semibold absolute bottom-12 left-5 text-gray-800 bg-gray-300 p-1 px-4 rounded-lg'>{tripDetails?.userSelection?.location?.label}</h2>
        <div className='flex gap-2 mt-2'>
          <p className='p-1 px-3 rounded-full bg-gray-200'>📅 {tripDetails?.userSelection?.days} days</p>
          <p className='p-1 px-3 rounded-full bg-gray-200'>💰 {tripDetails?.userSelection?.budget} budget</p>
          <p className='p-1 px-3 rounded-full bg-gray-200'>👯 {tripDetails?.userSelection?.people} people</p>
        </div>
      
    </div>
  )
}

export default InformationSection
