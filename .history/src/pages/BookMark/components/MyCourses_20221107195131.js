import React from 'react'
import "../../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'
import Empty from 'components/Empty';
import { GrView } from 'react-icons/gr';
import { BsArrowRight, BsBookmarkX } from 'react-icons/bs';
import { RemoveBookMarkMsg } from 'components/NotifyMessage';
import { useStore1Selector } from 'index';
import { userDetails } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';

function MyCourses({ data }) {
    const userDet = useStore1Selector(userDetails);
    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;
    const { execute } = usePost()
    const token = userDet?.token

    function removeBookmark(id) {
        const Method = 'DELETE', endPoint = `bookmarks/${id}`;
        const raw = ""
        execute(endPoint, raw, Method, RemoveBookMarkMsg, token)
    }

    return (
        <div>
            <CardBody>
                {
                    data.length <= 0 ? <Empty empty="Your book  mark is empty" /> :
                        <Row>
                            {
                                data?.map((course, i) => {
                                    console.log(course);
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
                                                        <Link to={`/course-details/${course?._id}`}><GrView />View details <BsArrowRight /> </Link>
                                                        <div className='remove-bookmark' onClick={() => removeBookmark(course?._id)}>
                                                            <BsBookmarkX size={18} />Remove
                                                        </div>
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
            </CardBody>
        </div>
    )
}

export default MyCourses