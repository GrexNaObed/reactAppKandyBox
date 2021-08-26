import React from 'react'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import MyCard from '../components/cards/MyCard'
// eslint-disable-next-line
import MyButton from '../components/UI/Buttons/MyButton'
// eslint-disable-next-line
import { item1, item2, item3, item4, item5, item6, item7, item8, item9 } from '../html/importImg'

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
