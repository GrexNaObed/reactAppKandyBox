import React from 'react'
import {item1,item2,item3,item4,item5,item6,item7,item8,item9 } from '../html/importImg'

function Sale() {
    return (
        <section className="sale">
            <div className="photo__quad">
            </div>

            <h2 className="sale__title">Сделали более 3.000 заказов за 2 года</h2>
            <span className="sale__subtext">Посмотрите фото реальных заказов из нашего instagram</span>
            <ul className="sale__gallery-items">

                <li className="sale__gallery-item">
                    <img src={item1} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item2} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item3} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item4} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item5} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item6} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item7} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item8} alt="" className="sale__gallery-img" />
                </li>
                <li className="sale__gallery-item">
                    <img src={item9} alt="" className="sale__gallery-img" />
                </li>
            </ul>
        </section>
    )
}

export default Sale
