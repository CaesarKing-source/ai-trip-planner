
import React from 'react'
import Heading from './Heading'
import { Star } from 'lucide-react'

const customersReview = [
  {
    id: 1,
    name: 'Akshay Giri',
    img: 'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Delhi, India',
    rating: 5,
    bgColor: 'black-800',
    review: 'This is a great product.',
    description: "Absolutely thrilled with my experience using TravelCraft! This website  helped me plan a fantastic trip to Rishikesh and Varanasi. The personalized itinerary suggestions were spot-on, ensuring I didn't miss any must-see attractions. Thanks to TravelCraft, my journey was smooth and unforgettable!"
  },
  {
    id: 2,
    name: 'Priya Garg',
    img: 'https://images.pexels.com/photos/1185617/pexels-photo-1185617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Mumbai, India',
    rating: 4.8,
    bgColor: 'brown-600',
    review: 'Efficient and Honest',
    description: "TravelCraft is a game-changer for travel planning! I recently used it to organize a trip to Jaipur and Udaipur, and I couldn't be happier."
  },
  {
    id: 3,
    name: 'Rahul Kumar',
    img: 'https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Kolkata, India',
    rating: 4.9,
    bgColor: 'blue-500',
    review: 'Excellent Service',
    description: "TravelCraft is a must-have for anyone planning a trip! I used it for my recent vacation to Goa and Hampi, and it exceeded my expectations. The itinerary suggestions were tailored perfectly to my interests, and the website’s user-friendly interface made planning a breeze. Thanks to TravelCraft, I had a fantastic and stress-free vacation!"
  }
]

const CustomerReview = () => {
  return (
    <div className="featureTrips px-[50px] w-full mb-20">
      <Heading heading={'Adventures Speak: Stories from our Travelers'} 
      para={"Discover why travelers love our intuitive trip planning tools and personalized itinerary suggestions."} 
      button={'View More'}/>

      <div className="tripCardContainer flex justify-between items-center flex-nowrap overflow-x-auto">
        {
          customersReview.map((review) => {
            return (
              <div className={`bg-slate-900 h-[500px] w-[450px] flex flex-col items-center justify-between px-5 py-10 rounded-lg`}>
              <div className="flex text-yellow-400 gap-5">
                <Star/><Star/><Star/><Star/><Star/> {review.rating}/5
              </div>
              <div className="review mt-10 text-white">
                  <h2 className='text-2xl font-regular mb-5'>{review.review}</h2>
                  <p className='italic'>"{review.description}" </p>

                  <div className="customerInfo mt-10">
                    <img src={review.img} alt="Customer Image" className="w-[60px] h-[60px] object-cover rounded-full" />
                    <p className='text-md'>{review.name}</p>
                    <span className='text-sm font-thin text-gray-400'>{review.place}</span>
                  </div>
              </div>
            </div>
            );
          })
        }
      </div>
      
    </div>
  )
}

export default CustomerReview
