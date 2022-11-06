import React from "react"
import { Container } from "reactstrap"
import MyCourse from "./components/MyCourses";
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { MyCourses } from "components/SCO_Name";
import useFetch from "../../hooks/useFecth";
import Loading from "components/Loading";
import { userDetails } from "Redux/Slices/userSlice";
import { useStore1Selector } from "index";

const BookMark = () => {
    const user = useStore1Selector(userDetails);
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/bookmarks`, null);
    const user_Id = user?.data?.data?._id;

    const res = data?.filter((bookmark, i) => {
        console.log(bookmark?.userId);
        return bookmark?.userId === user_Id;
    });

    console.log('====================================');
    console.log(res);
    console.log('====================================');

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