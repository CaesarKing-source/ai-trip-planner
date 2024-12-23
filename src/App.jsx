import { Outlet } from "react-router-dom";
import Footer from "./components/custom/Footer";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <Header />
        <Toaster />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
