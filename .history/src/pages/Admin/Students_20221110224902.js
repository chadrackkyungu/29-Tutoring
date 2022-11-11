import React from 'react'
import MetaTagComp from 'components/MetaTag';
import Layout from 'pages/Layout';
import { Container } from 'reactstrap';

function Students() {
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

export default Students