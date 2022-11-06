import React, { useEffect } from "react"
import { Container } from "reactstrap"
import MyCourse from "./components/MyCourses";
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { MyCourses } from "components/SCO_Name";
import useFetch from "../../hooks/useFecth";
// import Loading from "components/Loading";
import { userDetails } from "Redux/Slices/userSlice";
import { useStore1Selector } from "index";
import usePost from "hooks/usePost";

const BookMark = () => {
    const user = useStore1Selector(userDetails);
    const user_Id = user?.data?.data?._id;
    const token = user?.token;
    const { execute, data } = usePost()
    const Method = 'GET', endPoint = 'bookmarks';

    useEffect(() => {
        const raw = JSON.stringify({ "userId": user_Id });
        execute(endPoint, raw, Method, LoginMsg, token)
    }, []);

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={MyCourses} />

                    <Container fluid>
                        {/* <MyCourse data={data} loading={loading} /> */}
                        <MyCourse data={data} loading={"loading"} />
                    </Container>
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default BookMark