import React from 'react'
import qouts from '../../img/qouts.svg'
import rewievs from '../../img/rewivsIMg.jpg'
import ReadMore from '../UI/links/ReadMore'
function MyRewievCard({body}) {
    return (
        <div className="slider__item">
            <div className="slider__item-inner">
                <div className="slider__item-left">
                    <span className="slider__item-qouts"><img src={qouts } alt="" /></span>
                    <h2 className="slider__item-title">
                        «Результат дико порадовал, друзья были в восторге»
                    </h2>
                    <p className="slider__item-text">«Заказала капкейки, как подарок на новый год. Делать заказ было
                        легко и
                        приятно, ну а результат
                        дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто
                        замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все
                        начинки.
                        Они восхитительны!) Даже кушать было жалко, такая красота!)
                    </p>
                    <ReadMore body={{
                        className:'slider__item-link',
                        text:'Читать отзыв полностью'
                    }}/>
                    {/* <a className="slider__item-link" href="/readmore">Читать отзыв полностью</a> */}
                </div>
                <div className="slider__item-right">
                    <div className="slider__item-photo">
                        <img src={ rewievs } alt="" className="slider__item-img" />
                    </div>
                    <span className="slider__item-nm">{body.name}</span>
                    <span className="slider__item-city">{body.city}</span>
                </div>
            </div>
        </div>
    )
}

export default MyRewievCard
