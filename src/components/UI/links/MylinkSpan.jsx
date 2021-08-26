import React from 'react'

function MylinkSpan({body}) {
    return (
        <a href="tel:880035535" className={body.className}>{body.textBefore}<br /> <span>{body.textAfter}</span></a>
    )
}

export default MylinkSpan
