import React from "react"
import { Card, Row } from "reactstrap"
import { Link, useHistory } from "react-router-dom";
import { LogoutMsg } from "components/NotifyMessage";
import MetaTagComp from "components/MetaTag";
import { LogoutPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";

const RegisterAs = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <MetaTagComp title_sco={LogoutPage} />
            <Row>
                <LoginRightLabel text="Register As" />
                <Col md={6}>
                    <h2>REGISTER AS </h2>
                    <div className="d-flex justify-content-around">
                        <div className="text-center">
                            <Link to="">Student</Link>
                        </div>
                        <div className="text-center">
                            <p>REGISTER AS </p>
                            <Link to="">Tutor</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment >
    )
}

export default RegisterAs
