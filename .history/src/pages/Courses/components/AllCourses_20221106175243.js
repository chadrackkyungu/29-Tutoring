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
                                data?.map((property, i) => {
                                    return (
                                        <Col md={4} key={i}>
                                            <Card className='tour-card'>
                                                <CardBody>
                                                    <div className='pb-4 image-cover'>
                                                        <img src={`${API_img}${property?.property?.propertyImage}`} alt="" />
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h5>{property?.property?.buildingName}</h5>
                                                        <Link to={`/house-details/${property?.property?._id}`} className=''>View details <BsArrowRight /> </Link>
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

export default MyProperties