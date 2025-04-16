import { Outlet } from "react-router-dom"

// importing fixed components
import Navbar from "./components/Navbar"
import Footer from "./pages/Footer"

const Layout = () => {
  return (
    <div className="bg-sky-100 min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout