import React from 'react'
import * as bs from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import HeaderContainer from "./header-container.js"
import LeftContainer from "./left-container"
import RightContainer from "./right-container"
import FooterContainer from "./footer-container"
import Home from "./home"
import About from "./about"
import Help from "./help"
import Cart from "./cart"
import Checkout from "./checkout"
import Receipt from "./receipt"
import './App.css';
import Detail from './detail.js';

function App() {
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#121C1C"}}>
            <HeaderContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-1">
          <bs.Col md="2" className="px-3 py-4 shadow" style={{ backgroundColor: "#99CCCC"}}>
            <LeftContainer />
          </bs.Col>
          <bs.Col md="8">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/receipt">
                <Receipt />
              </Route>
              <Route path="/product/:id">
                <Detail />
              </Route>
              <Route path="/">
                <Home />
              </Route>              
            </Switch>
          </bs.Col>
          <bs.Col md="2" className="px-3 py-4 shadow" style={{ backgroundColor: "#CCCC99"}}>
            <RightContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#CC99CC"}}>
            <FooterContainer />
          </bs.Col>
        </bs.Row>
      </bs.Container>
    </Router>    
  )
}

export default App;
