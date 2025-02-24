import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];



function Pagination({ itemsPerPage }) {
    function Items({ currentItems }) {
        return (
          <>
            {currentItems &&
              currentItems.map((item) => (
                <div>
                 <Product/>
                </div>
              ))}
          </>
        );
      }
  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        activeClassName="bg-red-500"
        containerClassName="flex gap-3 items-center"
        nextClassName="bg-primary text-md text-white px-2 py-1 rounded-l-2xl font-bold"
        pageClassName="bg-primary text-md text-white px-2 py-1"
        previousClassName="bg-primary text-md text-white px-2 py-1 rounded-r-2xl font-bold"
      />
    </>
  );
}
export default Pagination;