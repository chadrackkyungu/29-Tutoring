import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import MyProperties from "./components/MyProperties";
import Layout from "../Layout"

const Properties = () => {

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Security Check in and out</title>
                    </MetaTags>

                    <Container fluid>
                        <MyProperties />
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Properties