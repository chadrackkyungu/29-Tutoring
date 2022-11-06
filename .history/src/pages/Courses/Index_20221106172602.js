import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import MyProperties from "./components/MyProperties";
import Layout from "../Layout"
import MetaTagComp from "components/MetaTag";
import { Courses } from "components/SCO_Name";

const Properties = () => {

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={Courses} />

                    <Container fluid>
                        <MyProperties />
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties