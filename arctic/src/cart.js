import React from 'react'
import * as bs from 'react-bootstrap'
//import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import { Link } from 'react-router-dom'

function Cart(props) {
    let context = React.useContext(AppContext)
    let total = 0 //parseInt('0.00').toFixed(2)

    //console.log(context.cart)
    //console.log(context.cartCount)

    //if (Object.keys(context.cart).length === 0)

    
    return(
        <bs.Container>
            <div>
                <h1 className='text-center'>Shopping Cart</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Extended</th>
                            <th></th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(context.cart).map(([prod, idx]) => {
                            
                            let p = []
                            p = context.products.find(x => x.id.toString() === prod)
                            //console.log(p)

                            total = parseFloat(total) + parseFloat(p.price * idx)
                            
                            return (
                                <tr key={p.id}>
                                    <td>
                                        <img src={`${process.env.PUBLIC_URL}/media/products/${p.filename.toLowerCase()}-1.png`} alt={`${p.name}`} style={{ height: "100px", width: "100px"}}></img>
                                    </td>
                                    <td>{p.name}</td>
                                    <td>{idx}</td>
                                    <td>${p.price}</td>
                                    <td>${(p.price * idx).toFixed(2)}</td>
                                    <td>
                                        <bs.Button onClick={() => context.removeFromCart(p.id)} variant="outline-dark">Remove</bs.Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total</th>
                            <th></th>
                            <th>${total.toFixed(2)}</th>
                            <th></th>
                        </tr>                        
                    </thead>
                </table>
            </div>
            <bs.Container className="text-center">
                <p className="text-danger" hidden={context.cartCount > 0}>Must Add Items to Cart to Checkout</p>
                <Link to={`/checkout`} className="btn btn-dark m-2" hidden={context.cartCount === 0}>Checkout</Link>
            </bs.Container>                   
        </bs.Container>
    )    
}
export default Cart