import React from 'react'
import MetaTagComp from 'components/MetaTag'
import { Tutor } from 'components/SCO_Name'
import Layout from 'pages/Layout'
import { Container } from 'reactstrap'
import TutorTable from './components/TutorTable'

function Tutors() {
    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTagComp title_sco={Tutor} />

                    <Container fluid>
                        <TutorTable />
                    </Container>

                </div>
            </React.Fragment>
        </Layout>
    )
}

export default Tutors