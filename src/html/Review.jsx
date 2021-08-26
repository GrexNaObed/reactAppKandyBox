import React from 'react'
import Slider from "react-slick";

import MyRewievCard from '../components/Rewevs/MyRewievCard'
import MyPrevArrow from '../components/UI/Buttons/MyPrevArrow'
import ReadMore from '../components/UI/links/ReadMore'

import prev from '../img/prev.svg'
import next from '../img/next.svg'
import MyNextArrow from '../components/UI/Buttons/MyNextArrow'

function Review() {
    const settingsSlider = {
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 3500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,

        centerPadding: '20%',
        arrows: false
    }
    
    return (
        <section className="reviews">
            <h1 className="reviews__title">Почитайте отзывы довольных клиентов</h1>
            <div className="container__inner">
                <div className="slider">
                    <Slider { ...settingsSlider }>
                        <MyRewievCard body={ {
                            btn: <ReadMore body={ {
                                className: 'slider__item-link',
                                text: 'Читать отзыв полностью'
                            } } />,
                            name: 'Ирина Ларионова',
                            city: 'Санкт-Петербург'
                        } } />

                        <MyRewievCard body={ {
                            btn: <ReadMore body={ {
                                className: 'slider__item-link',
                                text: 'Читать отзыв полностью'
                            } } />,
                            name: 'Марина Макдалена',
                            city: 'Владивасток'
                        } } />

                        <MyRewievCard body={ {
                            btn: <ReadMore body={ {
                                className: 'slider__item-link',
                                text: 'Читать отзыв полностью'
                            } } />,
                            name: 'Ирина Ларионова',
                            city: 'Санкт-Петербург'
                        } } />

                        <MyRewievCard body={ {
                            btn: <ReadMore body={ {
                                className: 'slider__item-link',
                                text: 'Читать отзыв полностью'
                            } } />,
                            name: 'Ирина Ларионова',
                            city: 'Санкт-Петербург'
                        } } />
                    </Slider>
                </div>
            </div>

            <div className="slider__btns">
                <MyPrevArrow body={ {
                    img: prev
                } } />
                <MyNextArrow body={ {
                    img: next
                } } />
            </div>
        </section>
    )
}

export default Review
