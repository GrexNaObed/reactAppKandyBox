import React from 'react'

function MyInput({body}) {
    return (
        <input className={body.clsName} type="number" name="num" id="" placeholder={body.plch} />
    )
}

export default MyInput
