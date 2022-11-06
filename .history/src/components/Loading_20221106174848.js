import React from 'react'
// import { Spinner } from "reactstrap";
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="d-flex justify-content-center align-item-center mt-5">
                    <Spinner animation="border" variant="success" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Loading