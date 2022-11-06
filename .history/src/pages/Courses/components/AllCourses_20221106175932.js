import React from 'react'
import "../../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

function MyProperties({ data }) {

    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;

    console.log(data)

    return (
        <div>
            <CardBody>
                {
                    data.length <= 0 ? <Loading /> :
                        <Row>
                            {
                                data?.map((course, i) => {
                                    console.log(course)
                                    return (
                                        <Col md={4} key={i}>
                                            <Card className='tour-card'>
                                                <CardBody>
                                                    <div className='pb-4 image-cover'>
                                                        <img src={`${API_img}${course?.imageCover}`} alt="" />
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h5>{course?.title}</h5>
                                                            <p>Code : {course?.courseCode} </p>
                                                        </div>
                                                        <div>
                                                            <p>Level : {course?.level}</p>
                                                            <h5>{course?.title}</h5>
                                                        </div>
                                                    </div>
                                                    <Link to={`/course-details/${course?._id}`}>View details <BsArrowRight /> </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                }
                                )
                            }
                        </Row>
                }
            </CardBody>
        </div>
    )
}

export default MyProperties