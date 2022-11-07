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
                <FromWraper>
                    <div className="d-flex justify-content-around">
                        <div>
                            <p>REGISTER AS </p>
                        </div>
                    </div>
                </FromWraper>
            </Row>
        </React.Fragment>
    )
}

export default RegisterAs
