import React from 'react'
import { Link } from "react-router-dom";

import Mylink from '../components/UI/links/Mylink'
import MylinkSpan from '../components/UI/links/MylinkSpan'

function HeaderTop() {
    return (
        <div className="container">
            <div className="header__top">
                <Link to='/' className="header__logo">Сладкий сундук</Link>
                <div className="header__nav">
                    <Mylink body={ { className: 'header__top-address', textBefore: 'Санкт Петербург', textAfter: 'ул. Куйбышева 31' } } />
                    <MylinkSpan body={ { className: 'header__top-phone', textBefore: '8 (812) 844-95-49', textAfter: 'Ежедневно с 9:00 до 20:00' } } />
                </div>
            </div>
        </div>


    )
}

export default HeaderTop
