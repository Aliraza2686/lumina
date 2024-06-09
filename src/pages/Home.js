import React from 'react'
import Fetures from '../components/molecules/Fetures'
import Products from '../components/molecules/Products'
import Blogs from '../components/molecules/Blogs'
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'

export const Home = () => {
  return (
    <div>
    <Header />
    <Fetures />
    <Products />
    <Blogs />
    <Footer />
    </div>
  )
}
