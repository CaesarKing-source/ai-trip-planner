import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className='flex justify-between items-center mt-10 mb-20 px-[50px]'>
        <h2 className='text-[2vw] italic'>"Discover, Plan, and Embark on Your Ultimate <br /> Adventure!"</h2>
        <Link to={'/create-trip'} className='bg-[#C1E004] poppins-regular rounded-full px-4 py-5 capitalize flex gap-2 items-center text-[1.2vw]'>
           <MdOutlinePlayCircleFilled size={40} /> Start your trip</Link>
    </div>
  )
}

export default CTA
