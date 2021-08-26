import React from 'react'

function MyButton({ body, click }) {
    return (
        <button onClick={ click } className={ body.className + ' ' + body.classNameSecond }>{ body.text }</button>
    )

}

export default MyButton
