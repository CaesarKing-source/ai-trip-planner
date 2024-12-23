import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Heading from './Heading'
import React, { useRef } from 'react'

const placesArr = [
  {
    id: 1,
    name: "Taj Mahal",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
  },
  {
    id: 2,
    name: "Jaipur - Hawa Mahal",
    img: "https://cdn.britannica.com/25/242225-050-72142DF7/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.jpg",
  },
  {
    id: 3,
    name: "Varanasi - Ganges Ghats",
    img: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Fgallery_images%2Ffile7iy6do8m2q8yvt53jl6.jpg",
  },
  {
    id: 4,
    name: "Mysore Palace",
    img: "https://karnatakatourism.org/wp-content/uploads/2020/06/mysore-palace-1.jpg",
  },
  {
    id: 5,
    name: "Goa Beaches",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/05/e1/dd/16/vagator-beach.jpg",
  },
  {
    id: 6,
    name: "Kerala - Backwaters",
    img: "https://thrillingtravel.in/wp-content/uploads/2017/04/IMG_6599-2.jpg",
  },
  {
    id: 7,
    name: "Delhi - India Gate",
    img: "https://cdn.britannica.com/38/189838-050-83C7395E/India-War-Memorial-arch-New-Delhi-Sir.jpg",
  },
];



const Places2Visit = () => {
  const carouselRef = useRef(null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: "-800px", behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: "800px", behavior: 'smooth' });
    }
  };

  return (
    <div className='placesToVisit px-[50px] mb-10 w-full'>
      <Heading heading={'Popular Places to Visit'} para={`Effortless Travel Planning Made Simple: Your Custom Itinerary, Tailored to Your Preferences, Ready for Your Next Adventure, Anytime, Anywhere!`} button={'View Top Places'} />
      
      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">
          <FaChevronLeft size={20} />
        </button>

        <div ref={carouselRef} className="flex gap-5 overflow-x-auto scroll-smooth w-full">
          {placesArr.map((place) => (
            <div key={place.id} className="flex flex-col justify-center gap-2 h-[400px] w-[500px]">
              <img src={place.img} alt={place.name} className='h-[300px] w-[800px] object-cover rounded-[12px]' />
              <p className="text-center font-regular text-md">{place.name}</p>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};


export default Places2Visit
