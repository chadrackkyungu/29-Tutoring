import React from "react"
import { Container } from "reactstrap"
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { Courses } from "components/SCO_Name";
import useFetch from "../../hooks/useFecth";
import Loading from "components/Loading";
import { useStore1Selector } from "index";
import { userDetails } from "Redux/Slices/userSlice";
import AllSessions from "./components/Allsessions";

const Properties = () => {
    const userDet = useStore1Selector(userDetails);
    const token = userDet?.token
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/sessions`, token);
    if (loading) return <Layout> <Loading /> </Layout>

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={Courses} />

                    <Container fluid>
                        <AllSessions data={data} loading={loading} />
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties