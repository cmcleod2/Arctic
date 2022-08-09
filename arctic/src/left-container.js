import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import PRODUCTS from './products'
import AppContext from './context'

function LeftContainer (props) {

    // This is the OLD way.
        // const categories = {}
        // let count = 0

        // for (const p of Object.values(PRODUCTS)) {
            
        //     categories[p.category] = (categories[p.category] || 0) + 1
        //     count++
        // }
    
        // console.log(categories)
    
    let context = React.useContext(AppContext)    

    return (
        <bs.Container>
            <h2>Filters</h2>
            <hr />            
            <bs.Nav defaultActiveKey="/" className="flex-column">
                <Link to="/" className="nav-link">All Products ({context.products.length})</Link>
                
                {context.categories.map(cat => (
                    
                    <Link to={`/category/${cat.id}`} key={cat.id} className="nav-link">{cat.title} ({context.products.filter(x => x.category === cat.id).length})</Link>
                                            
                ))}
                
            </bs.Nav>
        </bs.Container>  
    )
}
export default LeftContainer