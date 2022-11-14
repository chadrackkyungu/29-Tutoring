import React from 'react'
import "../Styles.scss"
import { Card, CardBody, Col, Row } from "reactstrap";
import Empty from 'components/Empty';
import { useStore1Selector } from 'index';
import { userDetails } from 'Redux/Slices/userSlice';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFecth';
import Loading from 'components/Loading';
import Layout from 'pages/Layout';


function TutorCourses() {
    const { id } = useParams()
    const user = useStore1Selector(userDetails);
    const token = user?.token;
    const API_img = `${process.env.REACT_APP_IMG_API}img/courses/`;
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/courses/${id}/tutor`, token);
    if (loading) return <Layout> <Loading /> </Layout>

    return (
        <Layout>
            <CardBody>
                {
                    data.length <= 0 ? <Empty empty="He does not have a course yet" /> :
                        <Row>
                            {
                                data?.map((course, i) => {
                                    return (
                                        <Col md={4} key={i}>
                                            <Card className='tour-card'>
                                                <CardBody>
                                                    <div className='pb-4 image-cover'>
                                                        <img src={`${API_img}${course?.imageCover}`} alt="" />
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
        </Layout>
    )
}

export default TutorCourses