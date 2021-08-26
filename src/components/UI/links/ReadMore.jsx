import React from 'react'

function ReadMore({body}) {
    return (
        <a className={body.className} href="/readmore">{body.text}</a>
    )
}

export default ReadMore
