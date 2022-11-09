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
    const token = userDet?.token
    const userRole = userDet?.data?.data?.role

    function booMark(id) {
        const Method = 'POST', endPoint = 'bookmarks';
        const raw = JSON.stringify({
            "userId": userId,
            "courseId": id
        });
        execute(endPoint, raw, Method, AddBookMarkMsg, token)
    }

    return (
        <div>
            {
                data?.length <= 0 ? <Empty /> :
                    <Row>
                        <h3 className='mb-4'>All live sessions</h3>
                        {
                            data?.map((session, i) => {
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
        </div>
    )
}

export default MyProperties