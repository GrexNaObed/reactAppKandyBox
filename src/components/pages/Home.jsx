import React from 'react'
import { Header, Products, Buy, Master, Review, Sale, Footer } from '../pages/index'


function Home({states}) {

    return (
        <div>
            <Header />
            <Products state={states} />
            <Buy />
            <Master />
            <Review />
            <Sale />
            <Footer />
        </div>
    )
}

export default Home
