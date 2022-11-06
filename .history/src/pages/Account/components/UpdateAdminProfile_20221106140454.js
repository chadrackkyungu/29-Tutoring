import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function UpdateAdminProfile({ details }) {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="firstName"
                            label="First Name"
                            className="form-control"
                            type="text"
                            required
                            value={details?.firstName}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="lastName"
                            label="Last Name"
                            type="text"
                            required
                            value={details?.lastName}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            type="email"
                            required
                            value={details?.email}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            className="form-control"
                            type="number"
                            required
                            value={details?.phoneNumber}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UpdateAdminProfile