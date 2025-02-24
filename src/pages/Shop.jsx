import  { useEffect, useState } from 'react';
import Container from '../component/layout/Container';
import Shopsidebar from '../component/Shopsidebar';
import Allproduct from '../component/Allproduct';
import { FaFilter } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";

const Shop = () => {
    const [filtermodal, setFilterModal]=useState(true);

    useEffect(()=>{
        function ResizeScreen(){
           if(window.innerWidth<1024){
            setFilterModal(false)
           }else{
            setFilterModal(true)
           }
        }
        ResizeScreen()
        window.addEventListener("resize", ResizeScreen)
    },[])
    return (
        <section className='mt-10'>
            <Container>
            <FaFilter onClick={()=>setFilterModal(!filtermodal)} className='lg:hidden text-xl select-none cursor-pointer  text-primary  ml-auto  px-1' />
        <div className='grid grid-cols-3 gap-4'>
            {filtermodal && (

                <div className='fixed w-full z-50 bg-white lg:w-auto lg:static top-5 col-span-12  lg:col-span-3'>
        <MdCloseFullscreen onClick={()=>setFilterModal(!filtermodal)} className='lg:hidden text-xl select-none cursor-pointer  text-primary  ml-auto  px-1'  />
        <Shopsidebar/>
            </div>
            ) }

<Allproduct/>
            <div className='col-span-9'>
    </div>
        </div>
            </Container>
            
        </section>
    );
};

export default Shop;