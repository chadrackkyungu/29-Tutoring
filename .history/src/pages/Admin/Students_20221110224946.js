import React from 'react'
import MetaTagComp from 'components/MetaTag';
import Layout from 'pages/Layout';
import { Container } from 'reactstrap';
import { Student } from 'components/SCO_Name';

function Students() {
    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={Student} />

                    <Container fluid>
                        <h3>Student</h3>
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Students