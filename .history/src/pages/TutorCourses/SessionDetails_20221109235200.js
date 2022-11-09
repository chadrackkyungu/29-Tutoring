
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

const SessionDetails = () => {
    const { id } = useParams()
    const user = useStore1Selector(userDetails);
    const token = user?.token;
    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/sessions/${id}`, token);
    const API_user_Img = `${process.env.REACT_APP_IMG_API}img/users/`;

    console.log(data);

    return (
        <Layout>
            <React.Fragment>
                <MetaTagComp title_sco={MyCourses} />

                <Container fluid className="py-4">
                    <Link to='/my-sessions'> <BsArrowLeft /> Back </Link>
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
                        <CardBody className="d-flex align-items-center ">
                            <div>
                                <div>
                                    <img className="rounded-1" width="300" src="https://t4.ftcdn.net/jpg/01/59/30/77/360_F_159307738_9cB7FxfuDSdfJOoh4Dl02ueYGt1OELqE.jpg" alt="" />
                                </div>
                            </div>
                            <div className="mx-5">
                                <h5>Session title time : {data.sessionTitle} </h5>
                                <h5>Start time : {data.startTime} </h5>
                                <h5>End time : {data.endTime} </h5>
                                <h5>Start date : {data.startDate.split('T')[0]} </h5>
                                <h5>End date : {data.endDate.split('T')[0]} </h5>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </React.Fragment>
        </Layout>
    )
}

export default SessionDetails