import Container from "./layout/Container";
import Image from "./layout/Image";


const Catagories = () => {
const categoris=[
    {
        name:"Shirt",
        image:"https://img.drz.lazcdn.com/static/bd/p/3a8b2c2859bfed6b25c38079306df287.jpg_720x720q80.jpg_.webp",
       
    },
    {
        name:"Polo",
        image:"https://img.drz.lazcdn.com/static/bd/p/3a8b2c2859bfed6b25c38079306df287.jpg_720x720q80.jpg_.webp",
       
    },
    {
        name:"Pant",
        image:"https://img.drz.lazcdn.com/static/bd/p/3a8b2c2859bfed6b25c38079306df287.jpg_720x720q80.jpg_.webp",
       
    },
    {
        name:"Panjabi",
        image:"https://img.drz.lazcdn.com/static/bd/p/3a8b2c2859bfed6b25c38079306df287.jpg_720x720q80.jpg_.webp",
       
    }
]

    return (
        <>
            <section>
                <Container>
                  <div>
                    <h2 className="text-xl lg:text-2xl mb-8 font-bold text-primary font-Nunito">
                        Categories
                    </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
              {categoris.map((item, index)=>(

                    <div className="xl:w-[300px]  p-3 border border-gray-400 text-center ">
                        <Image className="w-full lg:h-[250px] object-contain" src={item.image} alt={item.name}/>
                        <h3 className="font-bangla font-bold text- text-primary mt-1">{item.name}</h3>
                    </div>
                        ))
                    }
              </div>
                  </div>
                </Container>
            </section>
        </>
    );
};

export default Catagories;