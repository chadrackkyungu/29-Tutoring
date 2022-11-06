import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function UpdateAdminProfile({ details }) {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="IdNumber"
                            label="ID Number"
                            className="form-control"
                            placeholder="Enter your id number"
                            type="text"
                            required
                            value={details?.IdNumber}
                        />
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
                            value={details?.phoneNumber}
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="streetAddress"
                            label="Adress"
                            className="form-control"
                            placeholder="Enter your address"
                            type="text"
                            required
                            value={details?.streetAddress}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UpdateAdminProfile