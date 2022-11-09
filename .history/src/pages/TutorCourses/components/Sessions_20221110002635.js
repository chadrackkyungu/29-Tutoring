import React, { useState } from 'react'
import "../../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'
import Empty from 'components/Empty';
import { GrView } from 'react-icons/gr';
import { BsArrowRight, BsArrowRightCircle } from 'react-icons/bs';
import { DeleteCourseMsg } from 'components/NotifyMessage';
import { useStore1Selector } from 'index';
import { userDetails } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import ModalComp from "../../../Modal"
import AddSession from "../AddSession"
import { MdDeleteForever } from 'react-icons/md';

function Sessions({ SessionsData, reFetch }) {
    const userDet = useStore1Selector(userDetails);
    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;
    const { execute, data } = usePost()
    const token = userDet?.token

    const [openModal, setOpenModal] = useState(false);

    function deleteSession(id) {
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
                    SessionsData.length <= 0 ? <Empty empty="No sessions yet" /> :
                        <Row>
                            {
                                SessionsData?.map((session, i) => {
                                    return (
                                        <Col md={4} key={i}>
                                            <Card className='tour-card'>
                                                <CardBody>
                                                    <div className='pb-4 image-cover'>
                                                        <img src="https://t4.ftcdn.net/jpg/01/59/30/77/360_F_159307738_9cB7FxfuDSdfJOoh4Dl02ueYGt1OELqE.jpg" alt="" />
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h5>{session?.sessionTitle}</h5>
                                                            <p>{session?.startDate?.split('T')[0]} || {session?.startTime}</p>
                                                            <p>{session?.endDate?.split('T')[0]} || {session?.endTime}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <Link to={`/session/${session?._id}`} className="btn btn-red text-danger"> Go Live <BsArrowRightCircle size={18} />
                                                        </Link>
                                                        <div className='text-danger'
                                                            onClick={() => deleteSession(session?._id)}>
                                                            <MdDeleteForever size={22} />Delete
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
                ModalTitle="Add a new session"
                cancel="cancel"
                CourseForm={<AddSession reFetch={reFetch} onClose={() => setOpenModal(false)} />}
            />

        </div>
    )
}

export default Sessions