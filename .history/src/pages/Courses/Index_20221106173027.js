import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import AllCourses from "./components/AllCourses";
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { Courses } from "components/SCO_Name";
import useFetch from "../../hooks/useFecth";
import { useStore1Selector } from "../../index";
import { userDetails } from "../../Redux/Slices/userSlice";

const Properties = () => {

    const user = useStore1Selector(userDetails);
    const token = user?.token;
    const useId = user?.data?.data?._id;
    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/courses`, null);
    const propImg = "https://security-check-in.herokuapp.com/img/properties/";

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={Courses} />

                    <Container fluid>
                        <AllCourses data={data} />
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties