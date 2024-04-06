
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Pages/Product/Product';




const Products = () => {


    const data = useLoaderData();
    console.log(data.products);

    return (
        <div>
            <h1>Products</h1>
            {
               data.products?.map(product => <Product key={product.id} product={product}/>) 
            }
        </div>
    );
};

export default Products;