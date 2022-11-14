import React from 'react'
import "../../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'
import Empty from 'components/Empty';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useStore1Selector } from './../../../index';
import { userDetails } from 'Redux/Slices/userSlice';

function AllSessions({ data }) {
    const userDet = useStore1Selector(userDetails);
    const role = userDet.data?.data?.role
    return (
        <div>
            {
                data?.length <= 0 ? <Empty /> :
                    <Row>
                        <h3 className='mb-4'>Live sessions</h3>
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
                                                    <Link to={`/live-session/${session?._id}`} className="btn btn-red text-danger"> {role === 'student' ? 'Join session' : 'Go Live'}  <BsArrowRightCircle size={18} />
                                                    </Link>
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

export default AllSessions