import React from 'react'
import "../../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import Empty from 'components/Empty';
import { FcBookmark } from 'react-icons/fc';
import { BsBookmarks } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import usePost from 'hooks/usePost';

function MyProperties({ data }) {
    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;
    const { execute, pending, data } = usePost()

    const booMark = () => {
        const Method = 'POST', endPoint = 'bookmarks';
        const raw = JSON.stringify({
            "email": values.email,
            "password": values.password
        });
        execute(endPoint, raw, Method, LoginMsg)
    }
}
return (
    <div>
        {
            data?.length <= 0 ? <Empty /> :
                <Row>
                    <h3 className='mb-4'>All Courses</h3>
                    {
                        data?.map((course, i) => {
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
                                                    <h5>{course?.language}</h5>
                                                    <p>Level : {course?.level}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ">
                                                <Link to={`/course-details/${course?._id}`}><GrView /> View details <BsArrowRight /> </Link>
                                                {
                                                    true ? <p className="cursor-zoom-in"> <BsBookmarks size={24} onClick={booMark} /> </p>
                                                        : <p className="cursor-zoom-in"> <FcBookmark size={28} /> </p>
                                                }
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
        }
    </div>
)
}

export default MyProperties