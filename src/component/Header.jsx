import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <header className="bg-blackColor text-whiteColor font-poppins py-3">
       <div className="container ">
       <div className="flex justify-center relative">
       <Marquee>
            <h3 className="text-sm font-normal leading-5">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="#">ShopNow</Link></h3>
           </Marquee>
            <select className="text-blackColor absolute right-0 top-[-3px]">
                <option>EN</option>
                <option>BN</option>
            </select>
           </div>
       </div>
        </header>
    );
};

export default Header;