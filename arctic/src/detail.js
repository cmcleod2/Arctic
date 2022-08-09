import React, { useState } from 'react'
import * as bs from 'react-bootstrap'
//import PRODUCTS from './products'
import { Link, useRouteMatch } from 'react-router-dom'
import AppContext from './context'

function Detail(props) {
    let context = React.useContext(AppContext)
    let match = useRouteMatch('/product/:id')

    let product = []
    product = context.products.find(x => x.id.toString() === match.params.id)
    let [pic, setPic] = useState(`-1`)

    if (!product) {
        return (
            <bs.Container className="text-center" style={{ padding: "3rem 0"}}>
                <h1>Not Found</h1>
            </bs.Container>            
        )
    }
    else {
        return (
        
            <bs.Container>            
                <bs.Row style={{ padding: "3rem 0"}}>
                    <bs.Col md='8'>
                        <h1>{product.name}</h1>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                    </bs.Col>
                    <bs.Col md='4'>
                        <img src={`${process.env.PUBLIC_URL}/media/products/${product.filename.toLowerCase()}${pic}.png`} alt={`${product.name}`} style={{ height: "300px", width: "300px"}}></img>
                    </bs.Col>
                </bs.Row>
                <bs.Row style={{ padding: "0rem 0"}}>
                    <bs.Col md='8'>
                    <Link to={`/`} className="btn btn-dark m-2">Back to List</Link>                
                    <Link to={`/cart`} onClick={() => context.addToCart(product.id)} className="btn btn-dark">Add to Cart</Link>
                    </bs.Col>
                    <bs.Col md='4'>
                        <img 
                            onMouseEnter={() => setPic(`-1`)} 
                            src={`${process.env.PUBLIC_URL}/media/products/${product.filename.toLowerCase()}-1.png`} 
                            alt={`${product.name}`} 
                            style={{ height: "30px", width: "30px"}}>
                        </img> &nbsp;
                        <img 
                            onMouseEnter={() => setPic(`-2`)}
                            src={`${process.env.PUBLIC_URL}/media/products/${product.filename.toLowerCase()}-2.png`} 
                            alt={`${product.name}2`} 
                            style={{ height: "30px", width: "30px"}}>
                        </img> &nbsp;
                        <img 
                            onMouseEnter={() => setPic(`-3`)}
                            src={`${process.env.PUBLIC_URL}/media/products/${product.filename.toLowerCase()}-3.png`} 
                            alt={`${product.name}3`} 
                            style={{ height: "30px", width: "30px"}}>
                        </img> &nbsp;
                        <img 
                            onMouseEnter={() => setPic(`-4`)}
                            src={`${process.env.PUBLIC_URL}/media/products/${product.filename.toLowerCase()}-4.png`} 
                            alt={`${product.name}4`} 
                            style={{ height: "30px", width: "30px"}}>
                        </img>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        )
    }

    
}
export default Detail