import React from 'react'

function MyCard({body}) {
    return (
        <li className="items__inner-item">
            <img src={ body.img } alt="" className="items__inner-img" />
            <div className="items__item-wrapper">
                <h2 className="items__item-title">{body.name}</h2>
                <p className="items__item-text">{body.title}</p>
                <span className="items__item-pice">{body.price}</span>
                {body.btn}
            </div>
        </li>
    )
}

export default MyCard
