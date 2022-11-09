import React from "react";
import "./Style.scss";
import { Container } from "reactstrap"
import Sessions from "./components/Sessions";
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { MySessions } from "components/SCO_Name";
import useFetch from "../../hooks/useFecth";
import Loading from "components/Loading";
import { userDetails } from "Redux/Slices/userSlice";
import { useStore1Selector } from "index";

const TutorSessions = () => {
    const user = useStore1Selector(userDetails);
    const user_Id = user?.data?.data?._id;
    const token = user?.token;
    const { data, loading, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/sessions/${user_Id}/userId`, token);

    if (loading) return <Layout> <Loading /> </Layout>

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={MySessions} />

                    <Container fluid>
                        <Sessions myBookMarkCourses={data} loading={loading} reFetch={reFetch} />
                    </Container>
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default TutorSessions