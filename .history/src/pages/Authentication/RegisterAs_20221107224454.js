import React from "react"
import { Card, Row } from "reactstrap"
import { Link, useHistory } from "react-router-dom";
import { LogoutMsg } from "components/NotifyMessage";
import MetaTagComp from "components/MetaTag";
import { LogoutPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import { StudentRegRoute, TutorRegRoute } from "components/RouteName";

const RegisterAs = () => {
    return (
        <React.Fragment>
            <MetaTagComp title_sco={LogoutPage} />
            <Row>
                <LoginRightLabel text="Register As" />
                <FromWraper>
                    <div className="d-flex justify-content-around">
                        <div className="text-center">
                            <h4 className="mb-4">REGISTER AS A </h4>
                            <Link to={StudentRegRoute} className="h1">Student</Link>
                        </div>
                        <div className="text-center">
                            <h4 className="mb-4">REGISTER AS A </h4>
                            <Link to={TutorRegRoute} className="h5">Tutor</Link>
                        </div>
                    </div>
                </FromWraper>
            </Row>
        </React.Fragment >
    )
}

export default RegisterAs
