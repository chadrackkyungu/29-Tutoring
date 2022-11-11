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
                        {/* <AllSessions data={data} loading={loading} /> */}
                    </Container>
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default TutorRequest