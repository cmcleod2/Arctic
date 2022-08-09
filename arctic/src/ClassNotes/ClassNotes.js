import React from 'react'
import * as bs from 'react-bootstrap'

const NAMES = [
    "Sally",
    "Vijay",
    "Faze",
    "Tommeigh"
]

// If you cahnge this to an object you just cahnge the NAMES.map below to Object.values(Names.map())

export default function Sec1(props) {
    return (
        <div>
            {/* name is what the function returns while idx returns the count of the loop */}
            {NAMES.map((name, idx) => {
                return (
                <bs.Button 
                    key={idx} 
                    variant="outline-success" 
                    size="lg"
                >
                    {name}
                </bs.Button>
                )
            })}    
        </div>
    )
}


/*
const PRODUCTS = [ 1, 2, 3, 4 ]
const PRODUCTS = {
    1: "slkdhflhds",
    2: "ksdhfjhdf",
    3: "kjsdhksdh"
}
Object.values(PRODUCTS).map
Object.keys(PRODUCTS).map


	for (let i = 0; I < PRODUCTS.length; i++) {
	
	}
	// This is the old way


for (let p of PRODUCTS) {
	const p = products[i]
	console.log(p)
}


function printP(p) {
	console.log(p)
}

console.log(p.map(printP))

const st = "My Products are: " + PRODUCTS.map((p, i)  => {
	return p
})

// .map and .filter are friends for this sprint
// As well as bootstrap.card with all its attributes
// aboslute-positon for details link on the card and float-right inside to details link
// use onMouseOver event for the pictures in the detail page

const [imgIdx, setImgIdx] = React.useState(1)
// Use this to change the state of the image
// <img src={ "name-" + imgIdx + ".png" } />

// In home do .map through the products to return a product card
// Something like that

.map(p => { 
    return <Product Card
                    product = {p}>
                        return ({props.product.name})
})
*/
