import React from 'react'
import "../../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'
import Empty from 'components/Empty';
import { useStore1Selector } from 'index';
import { userDetails } from 'Redux/Slices/userSlice';
import { BsArrowRightCircle } from 'react-icons/bs';

function AllSessions({ data }) {
    return (
        <div>
            {
                data?.length <= 0 ? <Empty /> :
                    <Row>
                        <h3 className='mb-4'>All Courses</h3>
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