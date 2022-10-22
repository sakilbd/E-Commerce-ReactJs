import React from 'react';
import { useParams } from 'react-router-dom';

function Products() {
    const {id} = useParams();
  return (
    <div>
      Products Something ID : {id}
    </div>
  )
}

export default Products
