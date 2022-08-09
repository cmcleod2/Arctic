import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Receipt() {
    return(
        <bs.Container className="text-center">
            <h1>Thank You</h1>
            <Link to={`/`} className="btn btn-dark">Return to Home</Link>
        </bs.Container>
    )
}
export default Receipt