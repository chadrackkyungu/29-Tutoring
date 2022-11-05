import React from 'react'
import { AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput2() {
    return (
        <div>
            <Row>
                <Col md={4}>
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
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="password"
                            label="Password"
                            className="form-control"
                            placeholder="Enter your password"
                            type="password"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="passwordConfirm"
                            label="Confirm Password"
                            className="form-control"
                            placeholder="Re enter your password"
                            type="password"
                            required
                        />
                    </div>
                </Col>
            </Row>

            <AvCheckboxGroup inline name="checkboxCustomInputExample2" required className="mt-5">
                <AvCheckbox customInput label="Do you agree to the terms & conditions ? " className="me-3 bg-white" value={true} />
            </AvCheckboxGroup>
        </div>
    )
}

export default FormInput2