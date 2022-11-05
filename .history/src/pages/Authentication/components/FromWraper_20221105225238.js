import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

function FromWraper() {
    return (
        <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className='w-75'>
                <Card className="overflow-hidden">
                    <CardBody className="p-4">
                        {props.children}
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}

export default FromWraper