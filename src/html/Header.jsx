import React from 'react'
import MyButton from '../components/UI/Buttons/MyButton'
import { Link } from "react-router-dom";

import HeaderTop from './HeaderTop'

function Header() {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="header__inner">
                        <HeaderTop />
                        <div className="header__screen">
                            <span className="helpers">вкуснейшие</span>
                            <h1 className="header__screen-title title">Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
                            </h1>
                            <p className="header__screen-text">Приготовим за 3 часа в день заказа.
                                Доставка на авто в холодильнике.</p>
                            <div className="header__screen-btn">
                                <Link to='/catalog'>
                                    <MyButton body={ { className: 'header__screen-button', classNameSecond: 'btn', text: 'Перейти в каталог' } } />
                                </Link>

                                <span>9 различных  <br /> видов на выбор</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
