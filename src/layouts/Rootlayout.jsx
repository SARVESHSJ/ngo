import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const Rootlayout = () => {
    return (
        <div className="bg-gray-200">
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop/>
        </div>
    )
}
export default Rootlayout