import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateTrip from './pages/CreateTrip.jsx'
import TopPlans from './pages/TopPlans.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthContextProvider } from './context/authContext.jsx'
import UserProfile from './pages/UserProfile.jsx'
import TripDetails from './pages/TripDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create-trip',
        element: <CreateTrip />
      },
      {
        path: '/top-plans',
        element: <TopPlans />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/user',
        element: <UserProfile />
      },
      {
        path: '/trip-details/:tripId',
        element: <TripDetails />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <AuthContextProvider> 
        <RouterProvider router={router} />
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
