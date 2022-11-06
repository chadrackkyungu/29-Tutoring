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
import usePost from "hooks/usePost";

const BookMark = () => {
    const user = useStore1Selector(userDetails);
    const user_Id = user?.data?.data?._id;
    const { execute, pending, data } = usePost()
    const Method = 'GET', endPoint = 'bookmarks';

    useEffect(() => {

    }, []);

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