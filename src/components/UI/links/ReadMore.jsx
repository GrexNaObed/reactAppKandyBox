import React from 'react'

function ReadMore({body}) {
    return (
        <div className="wrapper__for-btn">
            <a className={body.className} href="/readmore">{body.text}</a>
        </div>
    )
}

export default ReadMore
