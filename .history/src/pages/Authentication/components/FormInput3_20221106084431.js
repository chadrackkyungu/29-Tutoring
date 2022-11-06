import React from 'react'
import { AvField, } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput3() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter your email address"
                            type="email"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            type="number"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FormInput3