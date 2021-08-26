import React from 'react'
import MyButton from '../components/UI/Buttons/MyButton'
import woman from '../img/woman.png'

function Master() {
    return (
        <section className="shef">
            <div className="container">
                <div className="shef__inner">
                    <div className="shef__left">
                        <span className="helpers">Кто будет готовить?</span>
                        <h1 className="shef__left-title title">Лично приготовлю <br /> и всё красиво упакую для вашего события
                        </h1>
                        <ul className="shef__left-items">
                            <li className="shef__left-item">
                                <p>Проконсультирую по выбору капкейков <br /> и придумаю нестандартную идею</p>
                            </li>
                            <li className="shef__left-item">
                                <p>Приготовлю капкейки для вашего события, которые обязательно всем понравятся </p>
                            </li>
                            <li className="shef__left-item">
                                <p>Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</p>
                            </li>
                        </ul>
                        <MyButton body={{
                            className:'header__screen-button',
                            classNameSecond:'btn',
                            text:'Задать вопрос Юлии'
                        }}/>

                    </div>
                    <div className="shef__right">
                        <div className="shef__right-cirlcle">
                            <img data-lazy="" src={woman} alt="" className="shef__right-woman" />
                        </div>
                        <div className="shef__right-title">
                            <span className="shef__right-name">Юлия Кондратьева</span>
                            <span className="shef__right-proff">ваш кондитер</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Master
