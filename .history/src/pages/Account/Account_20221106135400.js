import React from 'react';
import UpdatePassword from './UpdatePassword';
import ProfileUpdate from './ProfileUpdate';
import { CardBody, Container } from 'reactstrap';


function Account() {
    return (
        <Container fluid>
            <CardBody>
                <ProfileUpdate />
                {/* <UpdatePassword /> */}
            </CardBody>
        </Container>
    )
}

export default Account