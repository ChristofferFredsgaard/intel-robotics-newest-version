import React from 'react';
import '../../App.css';
import '../Product.css'
import Footer from '../Footer';
import Product from '../Product';
import Cards from '../Cards'

export default function Products() {
  return (
    <>
      {/* <h1 className='products'>PRODUCTS</h1> */}
      <Product />
      <Cards />
      <Footer />
    </>
);
}