import React from 'react'
import * as bs from 'react-bootstrap'
//import PRODUCTS from './products'
import ProductCard from './productcard'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'


function Home(props) {    
    let context = React.useContext(AppContext)
    
    let match = useRouteMatch('/category/:id')
    let newObject = []
    if (match != null) {
        context.products.map((p) => {
            if (p.category.toString() === match.params.id) {
                newObject.push(p)
            }
            return newObject
        })
    }
    else {
        newObject = context.products
    }
    
        
    return (
        <bs.Container fluid className="p-0">            
            <bs.Row noGutters style={{ padding: "2rem 0"}}>
                
                {newObject.map((p) => {
                    return (
                        <ProductCard key={p.id} p={p}/>                        
                    )                    
                })}                

            </bs.Row>

            <bs.Row noGutters style={{ padding: "4rem 0" }} className="bg-info shadow">
                <bs.Col>
                    <div className="px-5 text-center text-white" sytle={{ fontSize: "1.5rem" }}>
                        Et incididunt duis fugiat consequat et duis eiusmod nostrud ex aliquip pariatur irure.
                    </div>
                </bs.Col>
            </bs.Row>
        </bs.Container>
        
    )
}
export default Home