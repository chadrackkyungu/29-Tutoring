
import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import "../Styles.scss";
import { Badge, Card, CardBody, Col, Container, Row } from "reactstrap"
import Layout from "../Layout"
import { Link, useParams } from "react-router-dom";
import { useStore1Selector } from "../../index";
import { userDetails } from "../../Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { BsArrowLeft } from "react-icons/bs";
import Visitors from "./components/Visitors";
import MetaTagComp from "components/MetaTag";
import { MyCourses } from "components/SCO_Name";

const Properties = () => {
    const { id } = useParams()
    const user = useStore1Selector(userDetails);
    const token = user?.token;

    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/courses/${id}`, token);
    const API_course_Img = `${process.env.REACT_APP_BACKEND_URL}img/courses/`;
    const API_user_Img = `${process.env.REACT_APP_BACKEND_URL}img/users/`;

    console.log("Details : ", data)

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={MyCourses} />

                    <Container fluid>
                        <Link to="/properties" > <BsArrowLeft />  Back </Link>
                        <Card className="mt-2">

                            <CardBody>
                                <div className="container-details mb-3">
                                    <h3>{data?.buildingName} </h3>
                                    <h4>House Number :  {data?.houseNumber} </h4>
                                </div>
                                <div className='pb-4 image-cover house-img'>
                                    <CardBody>
                                        <img src={`${propImg}${data?.propertyImage}`} alt="" />
                                    </CardBody>
                                </div>

                                <CardBody>
                                    <Row className="container-details">
                                        <Col md={4} className="mt-2">
                                            <h4>Property details : </h4>

                                            <h5> <b>Address </b>  : {data?.address}</h5>
                                            <h5> <b>City </b>  : {data?.city}</h5>
                                            <h5> <b>Province </b>  : {data?.province}</h5>
                                        </Col>

                                        <Col md={8} className="securities">
                                            {
                                                secData?.map((secDet, i) => {
                                                    return (
                                                        <div className="img-security" key={i}>
                                                            <h4 className="text-center">{secDet?.security?.lastName}</h4>
                                                            <div className="security-img-container">
                                                                <img src={`${userImg}${secDet?.security?.photo}`} alt="" />
                                                            </div>
                                                            <p className="text-center">{!secDet?.security?.status ? "Suspended" : "Active"}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Col>
                                    </Row>
                                </CardBody>
                            </CardBody>

                        </Card>

                        <Visitors id={id} />

                    </Container>


                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties