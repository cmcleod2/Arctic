import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ProductCard (props) {
    return(
        <bs.Col md="3" style={{paddingLeft: '2rem', paddingBottom: '2rem'}}>                    
            <bs.Card bg="light" className="text-center" style={{ width: '12rem', height: '18rem' }}>
                <bs.Card.Img variant="top" src={`${process.env.PUBLIC_URL}/media/products/${props.p.filename.toLowerCase()}-1.png`}/>
                <bs.Card.Body >
                    <bs.Card.Title>{props.p.name}</bs.Card.Title>
                    <bs.Card.Text>${props.p.price}</bs.Card.Text>
                    <Link to={`/product/${props.p.id}`} className="btn btn-dark position-absolute" style={{top: 0, right: 0}}>Details</Link>
                </bs.Card.Body>
            </bs.Card>                                      
        </bs.Col>
    )
}
export default ProductCard
