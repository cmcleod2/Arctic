import React from 'react'
import * as bs from 'react-bootstrap'



function Help(props) {
    return (
        <bs.Container fluid className="p-0">
            <bs.Row noGutters style={{ padding: "6rem 0"}}>
                <bs.Col>                   
                    <h1 className="text-center mt-5">Arctic Help Page</h1>
                </bs.Col>
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
export default Help