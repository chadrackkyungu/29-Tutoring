import React, { useState, useEffect, useRef } from "react"
import { Col, Row, CardBody, Spinner, Form, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { FcAddImage } from "react-icons/fc";

function AddCourse() {

    const refFileUpload = useRef(null);
    const [profileServer, setProfileServer] = useState();
    const [profile, setProfile] = useState();


    const onThumbChangeClick = () => {
        if (refFileUpload) {
            refFileUpload.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const changeThumb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <div>
            <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Row>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={profile === undefined ? Image : profile} alt="user" width={900} height={250} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClick}
                        > <FcAddImage size={60} />
                        </Button>
                        <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                    </div>

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
                                        <option> Select... </option>
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