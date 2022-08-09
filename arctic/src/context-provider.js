import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import produce from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            // Functions Here
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            getCartTotal: this.getCartTotal,
            clearCart: this.clearCart,
        }
        this.state = {
            categories: [],
            products: [],
            cart: {},
            cartCount: 0,
        }
        // Do not load data (the categories) here or else it would freeze the system
    }

    getCartTotal() {
        let cartTotal = 0
        Object.entries(this.cart).map(([prod, idx]) => {
            let p = []
            p = this.products.find(x => x.id.toString() === prod)

            return cartTotal = cartTotal + (p.price * idx)
        })
        
        return cartTotal
    }

    clearCart = () => {
        this.setState(state => produce(state, draft => {
            draft.cart = {}
            draft.cartCount = 0
        }))
    }

    addToCart = (pid) => {
        //const currentQty = ....
        // Inside here draft is the state
        this.setState(state => produce(state, draft => {
            if (pid in draft.cart) {
                draft.cart[pid]++
            }
            else (
                draft.cart[pid] = 1
            )            
            draft.cartCount++
        }))
    }

    removeFromCart = (pid) => {
        this.setState(state => produce(state, draft => {
            delete draft.cart[pid]

            draft.cartCount = 0
            for (const p in draft.cart) {
                let i
                i = i + p
                draft.cartCount++
            }
        }))
    }
  
    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}> 
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const resp = await axios.get('/api/category/')
        //console.log(resp.data)
            // TURN ARRAY TO A DICTIONARY
            // const cats = {}
            // for (const c of resp.data) {
            //     cats[c.id] = c
            // }
            // console.log(cats)

        const resp2 = await axios.get('/api/product/')
        //console.log(resp2.data)
            // TURN ARRAY TO A DICTIONARY
            // const prods = {}
            // for (const p of resp2.data) {
            //     prods[p.id] = p
            // }
            // console.log(prods)

        this.setState({
            categories: resp.data,  // This Data Type is an array
            //categories: cats,
            products: resp2.data,
        })
    }

}