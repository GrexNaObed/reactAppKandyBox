import React from 'react'

function MyPrevArrow({body}) {
    return (
        <button className="slider__btn-prev">
            <img src={body.img} alt="" className="slider__btn-img" />
        </button>
    )
}

export default MyPrevArrow
