import React, { useState } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col, CardBody, Spinner } from "reactstrap"
import { successMessage, warningMessage } from 'components/Toast';

function CheckOutForm({ token, reFetch, visitorId, setCheckOut }) {
    const [loadBtn, setloadBtn] = useState(false);
    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "status": false,
            "checkOutDate": new Date()
        });

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://security-check-in.herokuapp.com/api/v1/checkInOut/${visitorId}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    successMessage("Successful Check In")
                    setloadBtn(false)
                    setCheckOut(false)
                    reFetch()
                }
                if (result.status === "fail") {
                    warningMessage(`${result.message}`)
                    setloadBtn(false)
                    setCheckOut(false)
                    reFetch()
                }
                if (result.status === "error") {
                    warningMessage(`${result.message}`)
                    setloadBtn(false)
                    setCheckIn(false)
                    reFetch()
                }
            })
            .catch(error => {
                warningMessage(`Sorry something went wrong please try again`)
                setloadBtn(false)
                setCheckOut(false)
                reFetch()
            });

    }

    return (
        <CardBody>
            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <div className="col-12 text-center">
                    <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                        {!loadBtn ? <span className="me-2">Check out</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                </div>
            </AvForm>
        </CardBody>
    )
}

export default CheckOutForm
