import FAQ from '@/components/custom/FAQ';
import Hotels from '@/components/custom/Hotels';
import InformationSection from '@/components/custom/InformationSection';
import ItineraryList from '@/components/custom/ItineraryList';
import { db } from '@/config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TripDetails = () => {
  const { tripId } = useParams();
  const [tripDetails, setTripDetails] = useState({});
  const [loading, setLoading] = useState(true); // Added loading state
  const [tab, setTab] = useState("itinerary");
  
  useEffect(() => {
    if (tripId) {
      getTripDetails();
    }
  }, [tripId]);

  const getTripDetails = async () => {
    const docRef = doc(db, "AITrips", tripId);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("docSnap data:", docSnap.data());
        setTripDetails(docSnap.data());
      } else {
        console.log("Trip data not found");
      }
    } catch (error) {
      console.error("Error fetching trip details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("tripDetails updated:", JSON.stringify(tripDetails, null, 2));
  }, [tripDetails]);

  if (loading) {
    return (
      <div className='px-[50px] mt-10'>
          <p>Loading trip details... Kindly wait for some time</p>
      </div>
    );
  }

  if (!tripId || Object.keys(tripDetails).length === 0) {
    return (
      <div className='px-[50px] mt-10'>
          <p>Trip details not found or invalid trip ID.</p>
      </div>
    );
  }

  return (
    <div className='px-[50px] mt-10'>
      <InformationSection tripDetails={tripDetails} />
      <div className="tabSection flex gap-5 mt-10">
        <button className={`${tab === 'itinerary' ? 'text-lg font-medium text-[#0D0560] border-b-[2px] border-[#0D0560]' : 'text-lg font-regular'}`} onClick={() => setTab('itinerary')}>Itinerary</button>
        <button className={`${tab === 'hotels' ? 'text-lg font-medium text-[#0D0560] border-b-[2px] border-[#0D0560]' : 'text-lg font-regular'}`} onClick={() => setTab('hotels')}>Hotels</button>
        <button className={`${tab === 'faq' ? 'text-lg font-medium text-[#0D0560] border-b-[2px] border-[#0D0560]' : 'text-lg font-regular'}`} onClick={() => setTab('faq')}>FAQ</button>
      </div>
      <hr />
      {tab === 'itinerary' && <ItineraryList tripDetails={tripDetails}/>}
      {tab === 'hotels' && <Hotels tripDetails={tripDetails} />}
      {tab === 'faq' && <FAQ />}
    </div>
  )
}

export default TripDetails
