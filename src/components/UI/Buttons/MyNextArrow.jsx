import React from 'react'

function MyNextArrow({ body }) {
    return (
        <button  className="slider__btn-next">
            <img src={body.img} alt="" className="slider__btn-img" />
        </button>
    )
}

export default MyNextArrow
