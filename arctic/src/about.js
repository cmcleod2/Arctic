import React from 'react'
import * as bs from 'react-bootstrap'



function About(props) {
    return (
        <bs.Container fluid className="p-0">
            <bs.Row noGutters style={{ padding: "6rem 0"}}>
                <bs.Col>
                    <h1 className="text-center mt-5">About Arctic</h1>
                </bs.Col>
            </bs.Row>

            <bs.Row noGutters style={{ padding: "4rem 0" }} className="bg-info shadow">
                <bs.Col>
                    <div className="px-5 text-center text-white" sytle={{ fontSize: "1.5rem" }}>
                        Culpa commodo irure nulla est qui aute. Sint nisi ex in proident adipisicing aliqua incididunt irure veniam eu commodo. Tempor fugiat Lorem non sint voluptate ullamco ut occaecat eu qui irure laboris do aliquip. Do ex consectetur nulla consequat ut incididunt ipsum incididunt amet occaecat. Sint eu consectetur nostrud ea cillum pariatur sint anim laboris pariatur magna amet aute. Mollit aliqua sint in aliquip adipisicing laboris consectetur velit. Quis ea eiusmod Lorem dolor.
                    </div>
                </bs.Col>
            </bs.Row>
        </bs.Container>
        
    )
}
export default About