import React from 'react'
import { Link } from "react-router-dom";
import MyButton from "../UI/Buttons/MyButton";

function MyCard({ title, sybTitle, price, imgPath, id }) {
    return (    
        <li className="items__inner-item">
            <div className="items__item-photo">
                <img src={ imgPath } alt="" className="items__inner-img" />
            </div>
            <div className="items__item-wrapper">
                <h2 className="items__item-title">{ title }</h2>
                <p className="items__item-text">{ sybTitle }</p>
                <span className="items__item-pice">{ price }₽/шт.</span>
                <Link to={`/${id}`}>
                    <MyButton body={ { className: 'items__item-btn', classNameSecond: '', text: 'Заказать' } } />
                </Link>
            </div>
        </li>
    )
}

export default MyCard
