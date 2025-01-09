import { Outlet } from "react-router-dom";
import  {EcommerceNavbar}  from "../Navbar";
import Header from "../Header";
import { Footer } from "../Footer";



const Rootlayout = () => {
    return (
        <>
        <Header/>
        <EcommerceNavbar/>
            <Outlet/>
           <Footer/>
        </>
    );
};

export default Rootlayout;