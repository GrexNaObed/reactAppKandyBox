import React from 'react'
import MyButton from '../components/UI/Buttons/MyButton'

function Buy() {
    return (
        <section className="buy">
            <div className="buy__wrapper">
                <div className="container">
                    <div className="buy__inner">

                        <div className="buy__inner-right">
                            <span className="helpers">Не нашли то что нужно?</span>
                            <h1 className="buy__inner-title">Приготовим заказ любой сложности по фото или эскизу
                            </h1>
                            <p className="buy__inner-text">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30
                                минут</p>
                            <MyButton body={ {
                                className: 'buy__inner-button',
                                classNameSecond: 'btn',
                                text: 'Загрузить фотографию'
                            } } />
                            {/* <input accept='.jpg' className='buy__inner-button btn' type="file" name="" id="" /> */}
                        </div>

                    </div>
                </div>

            </div>


        </section>
    )
}

export default Buy
