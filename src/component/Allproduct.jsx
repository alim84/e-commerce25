import React from 'react';
import Product from './Product';

const Allproduct = () => {
    return (
        <aside>
            <div className='grid grid-cols-3 gap-3'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </aside>
    );
};

export default Allproduct;