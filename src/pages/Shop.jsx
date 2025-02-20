import React from 'react';
import Container from '../component/layout/Container';
import Shopsidebar from '../component/Shopsidebar';
import Allproduct from '../component/Allproduct';

const Shop = () => {
    return (
        <section className='mt-10'>
            <Container>
        <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-3'>

<Shopsidebar/>
    </div>
    <div className='col-span-9'>

<Allproduct/>
    </div>
        </div>
            </Container>
            
        </section>
    );
};

export default Shop;