import React from 'react'
import * as bs from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field} from 'formik'
import AppContext from './context'
import axios from 'axios'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_sV16xwnfiCbkbdePDoXKK7hK00j0QWJC96')


function Checkout(props) {
    // we'll add Stripe's Elements component here later
    return (
        <Elements stripe={stripePromise}>
            <CheckoutController />
        </Elements>        
    )
}
export default Checkout


const CheckoutController = props => {
    let context = React.useContext(AppContext)
    const total = context.getCartTotal() 
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory()

    let myError = ''

    return (
        <Formik
            initialValues={{
                name: 'Conrad Fox',
                address1: '1234',
                address2: '5678',
                city: 'Provo',
                state: 'UT',
                zipcode: '84602',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                //console.log('validating', values) // This is not the way
                if (values.name === '') {
                    errors.name = 'Please enter valid name'
                }
                if (values.address1 === '') {
                    errors.address1 = 'Please enter valid address'
                }
                if (values.city === '') {
                    errors.city = 'Please enter valid City'
                }
                if (values.state === '') {
                    errors.state = 'Please enter valid State'
                }
                if (values.zipcode === '') {
                    errors.zipcode = 'Please enter valid zipcode'
                }
                return errors // This is the way
            }}
            onSubmit={async (values, actions) => {
                // console.log('submit', values)
                // Put axios call to API here:
                let stripeResp
                try {
                    stripeResp = await axios.post('/api/sale/', {
                        name: values.name,
                        address1: values.address1,
                        address2: values.address2,
                        city: values.city,
                        state: values.state,
                        zipcode: values.zipcode,
                        total: context.getCartTotal(),
                        items: context.cart,                    
                    })
                } catch(err) {
                    console.log(err)
                    myError = 'Please Enter a Valid Card Number'
                }              
                //console.log(stripeResp.data)
                
                const result = await stripe.confirmCardPayment(stripeResp.data['client_secret'], {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: values.name,
                        },
                    }
                })
                //console.log(result)

                if (result.error) {
                // Show error to your customer (e.g., insufficient funds)
                //alert(result.error.message)
                //console.log(result.error.message)
                myError = result.error.message                
                } 
                else {
                    // The payment has been processed!
                    if (result.paymentIntent.status === 'succeeded') {
                        // Show a success message to your customer
                        context.clearCart()
                        history.push('/receipt')
                    }
                }

                await new Promise(resolve => {
                    setTimeout(() => {  // wait 2 seconds, then set the form as "not submitting"
                        resolve()
                    }, 2000)
                })
                //console.log('after the 2 seconds')
            }}
        >{form => (
            <PaymentForm form={form} total={total} error={myError}/>            
        )}</Formik>
    )
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => (
    <bs.Container>
        <h1>Checkout</h1>
        <br />                   
        <Form>
            <bs.Row>
                <bs.Col md="6">
                    <bs.Card>
                        <bs.Card.Header>
                            <h3>Shipping</h3>
                        </bs.Card.Header>
                        <bs.Card.Body>
                            <Input title="Name:" name="name" type="text" />
                            <Input title="Address 1:" name="address1" type="text" />
                            <Input title="Address 2:" name="address2" type="text" />
                            <Input title="City:" name="city" type="text" />
                            <Input title="State:" name="state" type="text" />
                            <Input title="Zip:" name="zipcode" type="text" />
                        </bs.Card.Body>
                    </bs.Card>
                </bs.Col>
                <bs.Col md="6">
                    <bs.Card>
                        <bs.Card.Header>
                            <h3>Payment</h3>
                        </bs.Card.Header>
                        <bs.Card.Body>
                            <h6 className="text-danger">{props.error}</h6>                            
                            <CardElement />                                                        
                        </bs.Card.Body>
                    </bs.Card>
                    <br/>
                    <p>Your Card will be charged <strong>${props.total.toFixed(2)}</strong></p>
                    <br/> 
                    <bs.Container className="text-center">                 
                        <bs.Button className="btn btn-dark" type="submit" disabled={props.form.isSubmitting}>
                            {props.form.isSubmitting &&
                                <bs.Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />                                
                            } Purchase
                        </bs.Button>
                    </bs.Container> 
                </bs.Col>
            </bs.Row>
        </Form>       
    </bs.Container>
    
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                disabled={rProps.form.isSubmitting}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)