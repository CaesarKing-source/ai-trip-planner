import cp from '@/assets/cp_delhi.jpg';
import redFort from '@/assets/red_fort_delhi.jpg';
import tomb from '@/assets/humayun_tomb_delhi.jpg';
import lotus from '@/assets/lotus_temple_delhi.jpg';
import gate from '@/assets/india_gate_delhi.jpg';
import court from '@/assets/court_delhi.png';

const Hero = () => {
  return (
    <>
    <div className='hero px-[50px] mt-10 grid grid-cols-5 grid-rows-3 gap-3 h-[500px]'>
        <div className="hero_heading col-span-4 row-span-1">
            <h1 className='text-[4.2vw] leading-[4.8vw]'>Craft, customize, and perfect <br />
            your trips with <span className='text-[#0d0560] font-semibold'>Travel Craft</span></h1>
        </div>

        <div className="hero_img col-span-1 row-span-2 object-cover object-center bg-slate-400 rounded-lg  overflow-hidden hover:scale-[102%] transition-all ease-in-out cursor-pointer">
            <img src={cp} alt="hero_img" />
        </div>
        <div className="hero_img col-span-2 row-span-2 object-cover object-center bg-slate-400 rounded-lg overflow-hidden hover:scale-[102%] transition-all ease-in-out cursor-pointer">
            <img className='object-cover object-center' src={redFort} alt="hero_img" />
        </div>
        <div className="hero_img col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-[102%] transition-all ease-in-out cursor-pointer">
            <img className='object-cover object-center' src={court} alt="" />
        </div>
        <div className="hero_img col-span-1 row-span-2 rounded-lg overflow-hidden hover:scale-[102%] transition-all ease-in-out cursor-pointer">
            <img className='object-cover object-center' src={gate} alt="" />
        </div>
        <div className="hero_img col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-[102%] transition-all ease-in-out cursor-pointer">
            <img className='object-cover object-center' src={lotus} alt="" />
        </div>
        <div className="hero_img col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-[102%] transition-all ease-in-out cursor-pointer">
            <img className='object-cover object-center' src={lotus} alt="" /></div>     
    </div>
    
    </>
  )
}

export default Hero
