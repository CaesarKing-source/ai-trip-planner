import logo from '@/assets/logo.svg'
import { useContext, useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaGoogle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { AuthContext } from '@/context/authContext';
import { signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, googleProvider } from '@/config/firebase-config';

const Header = () => {
  const [ active, setActive ] = useState('/');
  const handleNavClick = (path) => setActive(path);
  const [ openDialog, setOpenDialog ] = useState(false);

  const { currentUser ,dispatch } = useContext(AuthContext);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Top Plans', path: '/top-plans' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

//   const login = useGoogleLogin({
//     onSuccess: (user) => getUserProfile(user),
//     onError: (err) => console.log(err)
//   });

//   const getUserProfile = async (tokenInfo) => {
//     const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Cross-Origin-Opener-Policy': 'same-origin',
//         'Cross-Origin-Embedder-Policy': 'require-corp',
//         'Authorization': `Bearer ${tokenInfo?.access_token}`
//       }
//     });
    
//     const userData = response.data;
//     dispatch({
//       type: 'LOGIN',
//       payload: userData,
//     });
    
//     setOpenDialog(false);
// };

  const login = async() => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const userData = userCredential.user;
      console.log("User data:", userData);

      dispatch({
        type: 'LOGIN',
        payload: userData,
      });
      setOpenDialog(false);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className='flex justify-between items-center p-3 px-[50px] shadow-md'>
      <Link to='/'><img src={logo} className='w-[250px] h-[auto]' alt="logo" /></Link>

      <div className="nav_links flex gap-2 items-center poppins-regular">
        { navLinks.map((navItem, index) => (
            <Link key={index} to={navItem.path} onClick={() => handleNavClick(navItem.path)} 
            className={active === navItem.path ? 'bg-[#0D0560] px-5 py-3 rounded-lg text-white' : 'text-[#0D0560] px-5 py-3 rounded-lg'} >{navItem.name}</Link>
        ))}
      </div>

      {
        currentUser ? <Link to='/user' className='bg-[#0D0560] poppins-regular text-white px-5 py-3 rounded-lg flex items-center gap-2'>User Profile <FaUser /></Link> : <button onClick={() => setOpenDialog(true)} className='bg-[#0D0560] poppins-regular text-white px-5 py-3 rounded-lg flex items-center gap-2'>
        Sign In <GoArrowUpRight /></button>
      }
  
        <Dialog open={openDialog}>
          <DialogContent>
              <DialogHeader>
                  <DialogTitle><img src={logo} className='w-[250px] h-[auto]' alt="logo" /></DialogTitle>
                  <DialogDescription className='flex flex-col justify-center gap-4'>
                    <p className='text-center font-medium poppins-regular text-zinc-800 mt-5'>Sign In using google authentication in order to access the application.</p>
                    <button onClick={login} className='bg-[#0D0560] poppins-regular text-white px-5 py-3 rounded-lg flex justify-center items-center gap-2'>
                    <FaGoogle/> Sign In using Google</button>
                  </DialogDescription>
              </DialogHeader>
          </DialogContent>  
        </Dialog>
    </div>
  )
}

export default Header
