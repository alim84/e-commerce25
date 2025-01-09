

import Image from "./layout/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";




const Banner = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
           
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px", position:"absolute", bottom:"40px", gap:"10px", left:"50%", display:"flex", transform:"translateX-(-50%)" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
               background: "",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color: "white",
               
               
              
              }}
            >
              {i + 1}
            </div>
          )
      };
      

      const Images=[
        {
image: "https://img.lazcdn.com/us/domino/9cedb4c8-a393-4517-a912-e39cef9d6d88_BD-1976-688.jpg_2200x2200q80.jpg"
        },
        {
          image: "https://img.lazcdn.com/us/domino/b0581c6d-601e-42cd-9919-1d7353dca426_BD-1976-688.jpg_2200x2200q80.jpg"
                  },
                  {
          image: "https://img.lazcdn.com/us/domino/9e83f1b3-36e0-4b25-b358-40aad3ebe90e_BD-1976-688.jpg_2200x2200q80.jpg"
                  },
      ]
    return (
        <div className="mt-2">
        

          {Images.length>1?
          
        
          <Slider {...settings}>
  
  {Images.map((item, index)=>(
      <Image src={item.image} alt={"banner Image"} />
  ))}
          </Slider>
          :
          <Image src={Images[0].image} alt={"banner Image"} />
          }
       
       
         
        </div>
    );
};

export default Banner;

