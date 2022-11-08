import React, { useState, useEffect } from "react"
import { Col, Row, CardBody, Spinner, Form, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

function AddCourse() {
    return (
        <div>
            <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Row>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="subject" label="Subject" type="text" required placeholder="Subject" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <AvField name="category" label="Category" type="select" required className="form-control">
                                <option> one</option>
                            </AvField>
                        </div>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="lateFee4" label="Late fee percentage" type="select" className="form-control">
                                <option> one </option>
                            </AvField>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="gracePeriod4" label="Grace period" type="text" className="form-control" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="leaseStartDate" label="Lease Start Date" type="date" required className="form-control" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="leaseEndDate" label="Lease End Date" type="date" required className="form-control" />
                        </div>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}

export default AddCourse