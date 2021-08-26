import React from 'react'
import HeaderTop from '../../html/HeaderTop'
import Products from '../../html/Products'

function Product() {
    return (
        <div>
            <HeaderTop />
            <div className="product__page">
                <div className="product__container">
                    <div className="product__page-inner">
                        <div className="product__page-left">
                            <div className="product__page-photo">
                                <img src="" alt="" className="product__page-img" />
                            </div>
                            <div className="product__page-info">
                                <h2 className="product__page-title">Кремовый замок</h2>
                                <span className="product__page-text">Воздушный крем, темная основа и ягода малины</span>
                                <span className="product__page-price">150 ₽/шт. </span>
                            </div>
                            <button className='product__page-btn'>Заказать</button>
                        </div>
                        <div className="product__page-right">
                            <div className="product__rigth-text">
                                <h2 className="product__right-title">Кремовый замок</h2>
                                <p className="product__right-text">Кремовый замок is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                    a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting, remaining essentially u
                                    nchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    , and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="product__right-photoes">
                                <img src="" alt="" className="product__rigth-img" />
                                <img src="" alt="" className="product__rigth-img" />
                                <img src="" alt="" className="product__rigth-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
