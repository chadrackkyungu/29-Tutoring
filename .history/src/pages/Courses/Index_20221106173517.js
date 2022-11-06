import React from "react"
import { Container } from "reactstrap"
import AllCourses from "./components/AllCourses";
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { Courses } from "components/SCO_Name";
import useFetch from "../../hooks/useFecth";
import Loading from "components/Loading";

const Properties = () => {
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/courses`, null);

    if (loading) return <Loading />

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={Courses} />

                    <Container fluid>
                        <AllCourses data={data} loading={loading} />
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties