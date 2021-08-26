import React from 'react'
import HeaderTop from '../../html/HeaderTop'


function ProductP({ title, sybTitle, price, imgPath,text }) {
    return (
        <div>
            <HeaderTop />
            <div className="product__page">
                <div className="product__container">
                    <div className="product__page-inner">
                        <div className="product__page-left">
                            <div className="product__page-photo">
                                <img src={ imgPath} alt="" className="product__page-img" />
                            </div>
                            <div className="product__page-info">
                                <h2 className="product__page-title">{title}</h2>
                                <span className="product__page-text">{sybTitle}</span>
                                <span className="product__page-price">{price} ₽/шт. </span>
                            </div>
                            <button className='product__page-btn'>Заказать</button>
                        </div>
                        <div className="product__page-right">
                            <div className="product__right-text">
                                <h2 className="product__right-title">{title}</h2>
                                <p className="product__right-sub"><strong>{title}</strong> {text}</p>
                            </div>
                            <div className="product__right-photoes">
                                <img src={ imgPath } alt="" className="product__right-img" />
                                <img src={ imgPath } alt="" className="product__right-img" />
                                <img src={ imgPath } alt="" className="product__right-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductP
