import React, { useEffect, useState } from 'react'
import { Header, Products, Buy, Master, Review, Sale, Footer } from '../pages/index'
function Home() {
    const [keks, setkeks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(body => setkeks(body.keks))
    }, [])
    return (
        <div>
            <Header />
            <Products state={keks} />
            <Buy />
            <Master />
            <Review />
            <Sale />
            <Footer />
        </div>
    )
}

export default Home
