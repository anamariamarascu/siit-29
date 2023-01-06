import React from 'react'
import Mesaje from '../components/Mesaje'
import Navbar from '../components/Navbar'
import Galerie from '../components/Galerie'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Mesaje />
            <Galerie />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Home
