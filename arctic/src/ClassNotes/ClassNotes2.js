import ProductCard from "../productcard";
import { bsClass } from "react-bootstrap/lib/utils/bootstrapUtils";
import AppContext from "../context";

// Imutability: you cant change it

//Child component

function child(props) {

    //const context = ....

    return(
        <Container>
            <div>{Product.name}</div>
            <bsClass.Button
                variant = 'warning'
                onClick = {e => {context.addToCart(product.id)}}
            >
                Add to Cart
            </bsClass.Button>
        </Container>               
    )
}