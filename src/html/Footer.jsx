import React from 'react'
import MyButton from '../components/UI/Buttons/MyButton'
import MyInput from '../components/UI/inputs/MyInput'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="conatiner">
                    <div className="footer__inner">
                        <div className="footer__item">
                            <h2 className="footer__title">
                                Чтобы сделать заказ, укажите ваш телефон
                            </h2>
                            <span className="footer__subtext">Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</span>
                            <form action="send.php" method="GET" className="footer__form">
                                <MyInput body={{
                                    clsName:'footer__form-tel',
                                    plch:'Номер телефона'
                                }}/>
                            
                                <MyButton body={ {
                                    className: 'footer__form-btn',
                                    classNameSecond: 'btn',
                                    text: "Сделать заказ"
                                } } />

                            </form>
                            <div className="footer__form-check">
                                <span id="checkbox" className="footer__form-checkbox"></span>
                                <span className="footer__form-politics">
                                    Нажамая на кнопку, вы соглашаетесь с условиями обработки персональных данных
                                </span>
                            </div>
                        </div>
                        <div className="breadbox">
                            <span className="breadbox_f">
                                <a href="/accsesToData">
                                    Согласие на обработку данных
                                </a>
                            </span>
                            <span className="breadbox_f">
                                <a href="/help">
                                    Служба поддержки
                                </a>
                            </span>
                            <span className="breadbox_f">
                                <a href="/politics">
                                    Политика конфиденциальности
                                </a>
                            </span>
                            <span className="breadbox_f">
                                © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
