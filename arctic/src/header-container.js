import React from 'react';
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import AppContext from './context'

function HeaderContainer (props) {
    let context = React.useContext(AppContext)

    return (
        <bs.Navbar variant="dark" expand="lg">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img src={logo} className="App-logo" alt="Site Icon" />
                    Arctic
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <bs.Navbar.Collapse>
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/help" className="nav-link">Help</Link>
                </bs.Nav>
                <Link to="/cart">
                    <bs.Navbar.Brand>
                        <i className="fas fa-shopping-cart m-2"></i>
                        {context.cartCount}
                    </bs.Navbar.Brand>
                </Link>
                <bs.Nav>
                    <bs.NavDropdown title="Welcome, Chris" alignRight>
                        <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}
export default HeaderContainer