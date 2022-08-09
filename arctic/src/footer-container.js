import React from 'react'
import * as bs from 'react-bootstrap'

function FooterContainer (props) {
    return (
        <bs.Container>
            <footer className="text-center">Arctic.com &copy; {new Date().getFullYear()}</footer>            
        </bs.Container>
    )
}
export default FooterContainer