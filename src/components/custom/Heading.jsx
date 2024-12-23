import { WiStars } from "react-icons/wi";

const Heading = ({heading, para, button }) => {
  return (
    <div className='flex justify-between items-center mb-8'>
      <div className="content">
        <h2 className="text-3xl text-[#0D0560] font-medium font poppins-medium flex gap-3 items-center">
            {heading} <WiStars size={40} /></h2>
        <p className="text-lg poppins-regular text-gray-400">{para}</p>
      </div>
      <button className="bg-[#0D0560] poppins-regular text-white px-5 py-3 rounded-lg cursor-pointer">{button}</button>
    </div>
  )
}

export default Heading
