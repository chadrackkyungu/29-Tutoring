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
import { AddBookMarkMsg } from 'components/NotifyMessage';
import { useStore1Selector } from 'index';
import { userDetails } from 'Redux/Slices/userSlice';

function MyProperties({ data }) {
    const userDet = useStore1Selector(userDetails);
    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;
    const { execute } = usePost()
    const userId = userDet?.data?.data?._id

    function booMark(id) {
        const Method = 'POST', endPoint = 'bookmarks';
        const raw = JSON.stringify({
            "userId": userId,
            "courseId": id
        });
        execute(endPoint, raw, Method, AddBookMarkMsg)
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
                                                        true ? <p className="cursor-zoom-in"> <BsBookmarks size={24} onClick={() => booMark(course?._id)} /> </p>
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