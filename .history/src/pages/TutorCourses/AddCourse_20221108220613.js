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
                            <AvField name="rentDeposit" label="Rent Deposit" type="number" required className="form-control" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="rent" label="Rent Amount" type="number" required className="form-control" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="lateFee4" label="Late fee percentage" type="select" className="form-control">
                                {var_num_100.map(percentage => (<option> {percentage}</option>))}
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