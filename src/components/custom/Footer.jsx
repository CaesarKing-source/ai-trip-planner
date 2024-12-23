import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-1/2 translate-x-[-50%] flex justify-between items-center text-white 
    p-3 px-[50px] bg-[#0D0560] w-full'>
      <div className="footerContent">
        <span className='text-sm'>@2024 TravelCraft. All Rights Reserved.</span>
        <span className='text-sm mx-5'>Terms & Condition</span>
      </div>
      <div className="footerIcons flex items-center gap-2">
        <FaFacebookF size={25} className="bg-white text-[#0D0560] rounded-full p-[4px]" />
        <FaInstagram size={25} className="bg-white text-[#0D0560] rounded-full p-[4px]" />
        <FaLinkedin  size={25} className="bg-white text-[#0D0560] rounded-full p-[4px]"/>
        <FaYoutube  size={25} className="bg-white text-[#0D0560] rounded-full p-[4px]"/>
      </div>
    </div>
  )
}

export default Footer
