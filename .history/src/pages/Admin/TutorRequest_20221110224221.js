import React from 'react'
import Layout from 'pages/Layout'
import MetaTagComp from './../../components/MetaTag';
import { Request } from 'components/SCO_Name';
import { Container } from 'reactstrap';

function TutorRequest() {
    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={Request} />

                    <Container fluid>
                        <h3>hello</h3>
                    </Container>
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default TutorRequest