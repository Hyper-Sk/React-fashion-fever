import React,{useEffect} from 'react'
import AllProducts from '../../components/all-products/AllProducts'
import Header from './../../components/header/Header'
import Footer from './../../components/footer/Footer'

const Products = () => {
  useEffect(() => {
    document.title = "Fever - Collection"
  },[])
  return (
    <div className='products-page'>
      <Header />
      <AllProducts />
      <Footer />
    </div>
  )
}

export default Products