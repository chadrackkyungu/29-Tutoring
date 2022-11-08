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
                                <option> Development </option>
                                <option> Business </option>
                                <option> Finance & Accounting </option>
                                <option> IT & Software </option>
                                <option> Office Productivity </option>
                                <option> Personal Development </option>
                                <option> Design </option>
                                <option> Marketing </option>
                                <option> Lifestyle </option>
                                <option> Photography & Video </option>
                                <option> Healthy Fitness </option>
                                <option> Data Science </option>
                                <option> Mobile Development </option>
                                <option> Game Developer </option>
                                <option> Programming Languages </option>
                                <option> Software Testing </option>
                            </AvField>
                        </div>
                        <div className="mb-3">
                            <AvField name="urlLink" label="URL Link" type="text" className="form-control" placeholder="example.com" required />
                        </div>
                    </Col>

                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="courseCode" label="Course Code" type="number" required placeholder="course code" className="form-control" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="numberOfTopic" label="Number of Topic" type="number" required placeholder="Number of Topic" className="form-control" />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="level" label="Level" type="number" className="form-control" placeholder="Level" required />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="language" label="Language" type="select" className="form-control" required>
                                        <option> English </option>
                                        <option> French </option>
                                        <option> Spanish </option>
                                    </AvField>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <div className="mb-3">
                    <AvField name="description" label="Course Description" type="textarea" rows={8} className="form-control" required />
                </div>

            </AvForm>
        </div>
    )
}

export default AddCourse

{/* <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="courseCode" label="Course Code" type="number" required placeholder="course code" className="form-control" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="numberOfTopic" label="Number of Topic" type="number" required placeholder="Number of Topic" className="form-control" />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="level" label="Level" type="text" className="form-control" placeholder="Level" required />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField name="language" label="Language" type="select" className="form-control" required>
                                        <option> English </option>
                                        <option> French </option>
                                        <option> Spanish </option>
                                    </AvField>
                                </div>
                            </Col>
                        </Row> */}