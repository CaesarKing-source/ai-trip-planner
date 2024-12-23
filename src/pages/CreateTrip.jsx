import { Input } from '@/components/ui/input';
import { AI_Prompt, selectBudgetOption, selectTravelList } from '@/constant/option';
import { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";
import FormImg1 from '@/assets/image2.jpg';
import FormImg2 from '@/assets/image19.jpg';
import FormImg3 from '@/assets/image20.jpg';
import FormImg4 from '@/assets/image21.jpg';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Textarea } from '@/components/ui/textarea';
import { Toaster, toast } from 'sonner';
import { chatSession } from '@/service/AIModel';
import { addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '@/config/firebase-config';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
  } from "@/components/ui/dialog";

const initialFormData = {
    location: null,
    days: '',
    budget: '',
    people: '',
    notes: ''
};

  
const CreateTrip = () => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(formData.location && formData.days && formData.budget && formData.people) ) {
        return toast('Please, Enter Proper Details');
    }
    toast('Form Submit Successfully.... 🎉🎉🎊');
    console.log(formData);

    const user = JSON.parse(localStorage.getItem('userInfo-aiTrip'));
    if(!user) {
        setOpenDialog(true);
        return;
    }

    setIsLoading(true);
    const FinalPrompt = AI_Prompt
    .replace('{location}', formData?.location.label)
    .replace('{days}', formData?.days)
    .replace('{people}', formData?.people)
    .replace('{budget}', formData?.budget)
    .replace('{days}', formData?.days)
    console.log(FinalPrompt);

    const result = await chatSession.sendMessage(FinalPrompt);
    console.log(result?.response?.text());
     
    saveTrip(result?.response?.text());
    setFormData(initialFormData);
    setLocation(initialFormData);
    setIsLoading(false);
  }

  const saveTrip = async(TripData) => {
    const user = JSON.parse(localStorage.getItem('userInfo-aiTrip'));
    const docId = Date.now().toString();

    const docRef = doc(db, 'AITrips', docId);
    await setDoc(docRef, {
        userSelection: formData,
        tripData: JSON.parse(TripData),
        userEmail: user?.email,
        id: docId
    });
    await navigate(`/trip-details/${docId}`);
  }
  return (
    <div className='px-[50px] mt-10'>
      <h2 className='text-[2vw] font-semibold'>Tell us your Travel Preferences</h2>
      <p className='text-lg text-gray-600'>
        Just provide us some basic information & we will generate a customized itinerary 
        based on your preferences. 
      </p>

      <div className="grid grid-cols-5 gap-5">
        <form className='trip_form my-10 col-span-3' onSubmit={handleSubmit}>
            <div className="form_group mb-5">
            <label className="form_label text-xl font-medium" htmlFor="destination">
                Where are you planning to Visit:
            </label>
            <GooglePlacesAutocomplete 
                apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                selectProps={{
                    placeholder: "Enter destination",
                    value: location,
                    onChange: (address) => {setLocation(address), handleInputChange('location', address)},
                }} 
            />
            </div>

            <div className="form_group mb-5">
                <label className="form_label text-xl font-medium" htmlFor="people">How many days are traveling:</label>
                <Input placeholder={'Enter days'} onChange={(e) => handleInputChange('days', e.target.value)} />
            </div>

            <div className="form_group mb-5">
                <label className='form_label text-xl font-medium' htmlFor='budget'>What is your budget for the trip:</label>
                <div className="grid grid-cols-3 gap-5">
                {
                    selectBudgetOption.map((item, index) => (
                        <div className={`p-4 border-2 rounded-lg hover:shadow-md cursor-pointer 
                            ${formData.budget === item.title && "border-[#0D0560]"}`} key={index} 
                        onClick={() => handleInputChange('budget', item.title)}>
                            <h2 className='text-[30px]'>{item.icon}</h2>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
                </div>
            </div>

            <div className="form_group mb-5">
                <label className='form_label text-xl font-medium' htmlFor='budget'>How many people are traveling: </label>
                <div className="grid grid-cols-4 gap-5">
                    {
                        selectTravelList.map((people, index) => (
                            <div className={`p-4 border-2 rounded-lg hover:shadow-md cursor-pointer 
                            ${ formData.people === people.title && "border-[#0D0560]"}`} key={index}
                            onClick={() => handleInputChange('people', people.title)}>
                                <h2 className='text-[30px]'>{people.icon}</h2>
                                <h3 className='text-lg font-semibold'>{people.title}</h3>
                                <p>{people.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="form_group mb-5">
                <label htmlFor="instructions">Additional Note of Instructions:</label>
                <Textarea onChange={(e) => handleInputChange('notes', e.target.value)} col={5}  row={10}/>
                
            </div>

            <button type='submit' disabled={isLoading} className='bg-[#0D0560] text-white px-5 py-3 rounded-lg w-full flex justify-center items-center gap-2 mt-5 mb-20'> <IoIosSend /> Plan My Trip</button>
        </form>

        <div className="col-span-2">
            <div className="p-5 grid grid-cols-2 gap-3">
                <img className='object-contain object-center' src={FormImg2} alt="trip form" />
                <img className='object-contain object-center relative top-5' src={FormImg3} alt="trip form" />
                <img className='object-contain object-center' src={FormImg4} alt="trip form" />
                <img className='object-contain object-center relative top-8' src={FormImg1} alt="trip form" />
            </div>
        </div>
      </div>

      <Dialog open={isLoading}>
          <DialogContent>
              <DialogHeader>
                  <DialogDescription className='flex flex-col justify-center gap-4'>
                    <p className='text-center font-medium poppins-regular text-zinc-800 mt-5'>Kindly, wait for some time our AI model is generating the trip for you.... 😊😊😊😊</p>
                  </DialogDescription>
              </DialogHeader>
          </DialogContent>  
        </Dialog>
    </div>

  );
};

export default CreateTrip;
