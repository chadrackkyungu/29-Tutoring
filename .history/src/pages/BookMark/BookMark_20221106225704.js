import React from "react"
import { Container } from "reactstrap"
import MyCourse from "./components/MyCourses";
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { MyCourses } from "components/SCO_Name";
import useFetch from "../../hooks/useFecth";
import Loading from "components/Loading";

const BookMark = () => {
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/bookmarks`, null);
    {
        const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/me`, null);
        const res = data
        console.log(res);
    }

    console.log(data)

    if (loading) return <Layout> <Loading /> </Layout>

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={MyCourses} />

                    <Container fluid>
                        <MyCourse data={data} loading={loading} />
                    </Container>
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default BookMark