import React from 'react';
import Product from './Product';
import Pagination from './Pagination';

const Allproduct = () => {
    return (
        <aside>
            <div className='grid grid-cols-3 gap-3'>
                {/* <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/> */}
                <Pagination itemsPerPage={6}/>
            </div>
        </aside>
    );
};

export default Allproduct;