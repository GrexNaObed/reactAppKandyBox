import React from 'react'

import { Link } from 'react-router-dom'
import MyCard from '../components/cards/MyCard'

import MyButton from '../components/UI/Buttons/MyButton'
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
                                state.map((item) => <MyCard key={item.id}  {...item} />)
                            }
                            {/* <MyCard body={ {
                                img: item1,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />

                            <MyCard body={ {
                                img: item2,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />

                            <MyCard body={ {
                                img: item3,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />
                            <MyCard body={ {
                                img: item4,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />
                            <MyCard body={ {
                                img: item5,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />
                            <MyCard body={ {
                                img: item6,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />
                            <MyCard body={ {
                                img: item7,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />
                            <MyCard body={ {
                                img: item8,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } />
                            <MyCard body={ {
                                img: item9,
                                name: 'Кремовый замок',
                                title: 'Нежный крем любого цвета на выбор, вафельная основа',
                                price: '150 ₽/шт.',
                                btn: <Link to='/buy'><MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } /></Link>
                            } } /> */}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
