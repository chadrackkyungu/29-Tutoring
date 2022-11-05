import React from 'react'
import { Col } from "reactstrap"

function LoginRightLabel({ text }) {
    return (
        <Col md={6} className="registration-img">
            <div> <h1 className="mt-4 mb-4 login-title"> {text} </h1> </div>
        </Col>
    )
}

export default LoginRightLabel