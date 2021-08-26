import React from 'react'
import MyCard from '../components/cards/MyCard'

function Products({ state }) {
    return (
        <section className="items">
            <div className="container">
                <div className="items__inner">
                    <h1 className="items__inner-title">Для любых событий и дорогих вам людей </h1>
                    <div className="items__inner-items">
                        <ul className="items__inner-wrapper">
                            {
                                state.map((item) => <MyCard key={item.id} id={item.id}  {...item} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
