import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput1() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="firstName"
                            label="First Name"
                            className="form-control"
                            placeholder="Enter your first name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="lastName"
                            label="Last Name"
                            className="form-control"
                            placeholder="Enter your last name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="id_number"
                            label="ID Number"
                            className="form-control"
                            placeholder="Enter your your number"
                            type="text"
                            required
                        />
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default FormInput1
