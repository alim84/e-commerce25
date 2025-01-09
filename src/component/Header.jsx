import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <header className="bg-primary text-primaryWhite font-poppins py-3">
       <div className="container ">
       <div className="flex justify-center relative">
       <Marquee pauseOnHover={true}>
        <div>
        <h3 className="text-sm font-normal leading-5 font-bangla">আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +8801717986768 | হট লাইন: 01717986768 <Link to="#">ShopNow</Link></h3>
        </div>
         
           </Marquee>
           <div>

            <select className="text-blackColor absolute bg-primary right-0 top-[-3px]">
                <option>EN</option>
                <option>BN</option>
            </select>
           </div>
           </div>
       </div>
        </header>
    );
};

export default Header;