import React ,{useState}from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../globalComponents/sidebar/Sidebar';
import ProductDetails from './ProductDetails';

function Products() {
    const {id} = useParams();
    const [open, setOpen] = useState(false);
    return (
    <div className='flex'>
    
   <Sidebar/>
   <ProductDetails/>

    </div>
  )
}

export default Products
