import React from 'react'
import { AvField, } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput3() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="gender"
                            label="Gender"
                            type="select"
                            placeholder="Id or passport number"
                            required
                        >
                            <option> Select... </option>
                            <option> Male </option>
                            <option> Female </option>
                            <option> Others </option>
                        </AvField>
                    </div>
                </Col>
                <Col md={4}>
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
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="address"
                            label="Address"
                            type="text"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default FormInput3