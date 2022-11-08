import React, { useState } from 'react'
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
import ModalComp from "../../../Modal"
import CourseForm from "../AddCourse"

function MyCourses({ myBookMarkCourses, reFetch }) {
    const userDet = useStore1Selector(userDetails);
    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;
    const { execute, data } = usePost()
    const token = userDet?.token

    const [openModal, setOpenModal] = useState(false);

    function removeBookmark(id) {
        const Method = 'DELETE', endPoint = `bookmarks/${id}`;
        const raw = ""
        execute(endPoint, raw, Method, RemoveBookMarkMsg, token)
    }
    if (data?.status === 'success') {
        setTimeout(() => {
            reFetch()
        }, 2500)
    }

    return (
        <div>
            <CardBody>
                <button className='btn btn-success' onClick={() => setOpenModal(true)} >+Add new course</button>
                {
                    myBookMarkCourses.length <= 0 ? <Empty empty="Your book  mark is empty" /> :
                        <Row>
                            {
                                myBookMarkCourses?.map((course, i) => {
                                    return (
                                        <Col md={4} key={i}>
                                            <Card className='tour-card'>
                                                <CardBody>
                                                    <div className='pb-4 image-cover'>
                                                        <img src={`${API_img}${course?.courses?.imageCover}`} alt="" />
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h5>{course?.courses?.title}</h5>
                                                            <p>Code : {course?.courses?.courseCode} </p>
                                                        </div>
                                                        <div>
                                                            <h5>{course?.courses?.language}</h5>
                                                            <p>Level : {course?.courses?.level}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between ">
                                                        <Link to={`/course-details/${course?.courses?._id}`}><GrView />View details <BsArrowRight /> </Link>
                                                        <div className='remove-bookmark' onClick={() => removeBookmark(course?.ids)}>
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

            <ModalComp
                open={openModal}
                onClose={() => setOpenModal(false)}
                ModalTitle="Add a new course"
                cancel="cancel"
                // This is the component name
                CourseForm={CourseForm}
            />

        </div>
    )
}

export default MyCourses