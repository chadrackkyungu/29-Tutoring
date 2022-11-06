
import React from "react"
import "../Styles.scss";
import { Card, CardBody, Col, Container } from "reactstrap"
import Layout from "../Layout"
import { Link, useParams } from "react-router-dom";
import { useStore1Selector } from "../../index";
import { userDetails } from "../../Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { BsArrowLeft } from "react-icons/bs";
import MetaTagComp from "components/MetaTag";
import { MyCourses } from "components/SCO_Name";

const Properties = () => {
    const { id } = useParams()
    const user = useStore1Selector(userDetails);
    const token = user?.token;
    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/courses/${id}`, token);
    const API_user_Img = `${process.env.REACT_APP_IMG_API}img/users/`;

    return (
        <Layout>
            <React.Fragment>
                <MetaTagComp title_sco={MyCourses} />

                <Container fluid className="py-4">
                    <Link to="/dashboard" > <BsArrowLeft /> Back </Link>
                    <Card>
                        <div className="d-flex p-3 px-5">
                            <img src={`${API_user_Img}${data?.Tutor?.photo}`} alt="" width="100" height="100" className="me-5" />
                            <div>
                                <p><b> Tutor  </b>: {data?.Tutor?.firstName} {data?.Tutor?.lastName}</p>
                                <p><b>  Email </b> : {data?.Tutor?.email}</p>
                                <p><b>  Phone Number </b> : {data?.Tutor?.phoneNumber}</p>
                            </div>
                        </div>

                    </Card>

                    <Card className="mt-2 container">
                        <h1>{data?.title} </h1>
                        <div>
                            <iframe
                                className='pb-4 video-style'
                                id="ytplayer" type="text/html"
                                src={`${data?.urlLink}`}
                                frameborder="0">
                            </iframe>
                        </div>
                    </Card>

                    <Card>
                        <CardBody className="container-details">
                            <Col className="mt-2">
                                <h5>Number of topics : {data?.numberOfTopics} </h5>
                                <h5>Course Code : {data?.courseCode} </h5>
                                <h5>Level : {data?.level} </h5>
                                <h5> Course Category   : {data?.category}</h5>
                                <h5> Description   : </h5>
                                <p className="mt-4">{data?.description}</p>
                            </Col>
                        </CardBody>
                    </Card>
                </Container>
            </React.Fragment>
        </Layout>
    )
}

export default Properties