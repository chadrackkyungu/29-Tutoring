import React from 'react';
import { CardBody } from 'reactstrap';
import UpdatePassword from './UpdatePassword';
import ProfileUpdate from './ProfileUpdate';


function MyBookings() {
    return (
        <div>
            <ProfileUpdate />
            <UpdatePassword />
        </div>
    )
}

export default MyBookings