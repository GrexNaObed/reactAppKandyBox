import React from 'react'
import { Link } from "react-router-dom";

function Mylink({body}) {
    return (
        <Link to='/mapstreet' className={body.className}> {body.textBefore}, <br /> {body.textAfter}</Link>
    )
}

export default Mylink
