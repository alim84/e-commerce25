import { Slider } from "@material-tailwind/react";

const Shopsidebar = () => {
    return (
        <div>
      <div className='shadow-md rounded-md shadow-gray-40 p-4'>
      <h2 className='text-xl font-bold text-primary mb-3'>Categories</h2>
            <ul>
                <li className='text-lg font-medium hover:text-primary cursor-pointer select-none text-black mt-1'>T-Shirt</li>
                <li className='text-lg font-medium hover:text-primary cursor-pointer select-none text-black mt-1'>Shirt</li>
                <li className='text-lg font-medium hover:text-primary cursor-pointer select-none text-black mt-1'>Sharee</li>
                <li className='text-lg font-medium hover:text-primary cursor-pointer select-none text-black mt-1'>Panjabi</li>
             
            </ul>
      </div>
      <div className='shadow-md rounded-md shadow-gray-40 p-4 mt-4'>
      <h2 className='text-xl font-bold text-primary mb-3'>Price Filter</h2>
      <div>
      <Slider defaultValue={50} color="teal" />
    </div>
       
      </div>
        </div>
    );
};

export default Shopsidebar;