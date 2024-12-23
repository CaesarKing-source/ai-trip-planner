import { db } from "@/config/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const userProfile = JSON.parse(localStorage.getItem('userInfo-aiTrip'));
  const [userTrips, setUserTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile?.email) {
      getUserTrips();
    }
  }, [userProfile?.email]);

  const getUserTrips = async () => {
    try {
      setUserTrips([]);

      const q = query(collection(db, 'AITrips'), where('userEmail', '==', userProfile?.email));
      const querySnapshot = await getDocs(q);

      const trips = [];
      querySnapshot.forEach((doc) => {
        trips.push(doc.data());
      });

      setUserTrips(trips);
    } catch (error) {
      console.error("Error fetching user trips:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo-aiTrip'); // Clear user data from localStorage
    navigate('/');
  };

  console.log(userTrips)

  return (
    <div className='px-[50px] mt-10'>
      <h2 className='text-2xl text-[#0D0560] font-medium'>User Profile</h2>
      <div className="mt-2 mb-5">
        <div className="flex justify-between items-center border-[2px] border-[#0D0560] rounded-lg p-3">
          <div className='userProfileInfo'>
            <h2>Display Name: <span>{userProfile?.displayName}</span></h2>
            <h2>Email: <span>{userProfile?.email}</span></h2>

            <button
              onClick={handleLogout}
              className='bg-[#0D0560] poppins-regular text-white px-5 py-3 rounded-lg flex items-center gap-2 mt-5'
            >
              Logout <IoLogOutOutline />
            </button>
          </div>
          <img
            src={userProfile?.photoURL}
            alt="profile picture"
            className="w-100 h-100 object-center object-fill rounded-full"
          />
        </div>
      </div>

      <div>
        <h2 className='text-2xl text-[#0D0560] font-medium'>Previous Trips</h2>
        <div className="grid grid-cols-5 gap-4">
        {userTrips.length > 0 ? (
          userTrips.map((trip, index) => (
            <Link to={`/trip-details/${trip.id}`}>
              <div key={index} className="trip-item border-[1px] rounded-lg p-3 mb-2 cursor-pointer" >
                <img src="https://placehold.co/300x200" alt="tripImg" />
                <h3 className="text-xl font-semibold">{trip.userSelection?.location?.label}</h3>
                <p>Days: {trip.userSelection?.days}</p>
                <p>Budget: {trip.userSelection?.budget}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No trips available...</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
