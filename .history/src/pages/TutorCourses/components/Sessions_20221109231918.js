import React, { useState } from 'react'
import "../../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'
import Empty from 'components/Empty';
import { GrView } from 'react-icons/gr';
import { BsArrowRight } from 'react-icons/bs';
import { DeleteCourseMsg } from 'components/NotifyMessage';
import { useStore1Selector } from 'index';
import { userDetails } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import ModalComp from "../../../Modal"
import AddSession from "../AddSession"

function Sessions({ Sessions, reFetch }) {
    const userDet = useStore1Selector(userDetails);
    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;
    const { execute, data } = usePost()
    const token = userDet?.token

    const [openModal, setOpenModal] = useState(false);

    function removeBookmark(id) {
        const Method = 'DELETE', endPoint = `sessions/${id}`;
        const raw = ""
        execute(endPoint, raw, Method, DeleteCourseMsg, token)
    }
    if (data?.status === 'success') {
        setTimeout(() => {
            reFetch()
        }, 2500)
    }

    return (
        <div>
            <CardBody>
                <button className='btn btn-success mb-3' onClick={() => setOpenModal(true)} >+Add a new session</button>
                {
                    Sessions.length <= 0 ? <Empty empty="Your sessions is empty" /> :
                        <Row>
                            {
                                Sessions?.map((course, i) => {
                                    return (
                                        <Col md={4} key={i}>
                                            <Card className='tour-card'>
                                                <CardBody>
                                                    <div className='pb-4 image-cover'>
                                                        <img src="https://t4.ftcdn.net/jpg/01/59/30/77/360_F_159307738_9cB7FxfuDSdfJOoh4Dl02ueYGt1OELqE.jpg" alt="" />
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
                                                    <div className="d-flex justify-content-between">
                                                        <Link to={`/course-details/${course?._id}`} className="btn btn-red text-danger"> Go Live </Link>
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
                ModalTitle="Add a new session"
                cancel="cancel"
                CourseForm={<AddSession reFetch={reFetch} onClose={() => setOpenModal(false)} />}
            />

        </div>
    )
}

export default Sessions