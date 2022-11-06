
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
                        <Link to="/dashboard" > <BsArrowLeft />  Back </Link>
                        <Card className="mt-2">
                            <CardBody>
                                <h1>{data?.title} </h1>
                                <iframe
                                    className='pb-4 image-cover '
                                    id="ytplayer" type="text/html"
                                    src={`${data?.urlLink}`}
                                    frameborder="0"></iframe>

                                <CardBody>
                                    <Row className="container-details">
                                        <Col className="mt-2">
                                            <h5>Number of topics : {data?.numberOfTopics} </h5>
                                            <h5>Course Code : {data?.courseCode} </h5>
                                            <h5>Level : {data?.level} </h5>
                                            <h5> Course Category   : {data?.category}</h5>
                                            <h5> Description   : </h5>
                                            <p>{data?.description}</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties