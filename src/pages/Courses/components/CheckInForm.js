import React, { useState } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col, CardBody, Spinner } from "reactstrap"
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import { successMessage, warningMessage } from 'components/Toast';

function CheckInForm({ token, visitorId, propId, setCheckIn, reFetch }) {

    const user = useStore1Selector(userDetails);
    const secId = user?.data?.data?._id

    const [loadBtn, setloadBtn] = useState();
    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "unitName": values.unitName,
            "tenantName": values.tenantName,
            "visitorId": visitorId,
            "securityId": secId,
            "propertyId": propId
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://security-check-in.herokuapp.com/api/v1/checkInOut", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    successMessage("Successful Check In")
                    setloadBtn(false)
                    setCheckIn(false)
                    reFetch()
                }
                if (result.status === "fail") {
                    warningMessage(`${result.message}`)
                    setloadBtn(false)
                    setCheckIn(false)
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
                setCheckIn(false)
                reFetch()
            });

    }

    return (
        <CardBody>
            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                <div className="mb-3">
                    <AvField
                        name="unitName"
                        label="Unit Name / Number"
                        className="form-control"
                        placeholder="Enter unit name"
                        type="text"
                        required
                    />
                </div>
                <div className="mb-3">
                    <AvField
                        name="tenantName"
                        label="Tenant Name"
                        className="form-control"
                        placeholder="Enter tenant name"
                        type="text"
                        required
                    />
                </div>

                <div className="col-12 text-center">
                    <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                        {!loadBtn ? <span className="me-2">Check In</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                </div>
            </AvForm>
        </CardBody>
    )
}

export default CheckInForm
