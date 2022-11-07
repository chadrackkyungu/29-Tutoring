import React from "react"
import { Row } from "reactstrap"
import { Link } from "react-router-dom";
import MetaTagComp from "components/MetaTag";
import { LogoutPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import { StudentRegRoute, TutorRegRoute } from "components/RouteName";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";

const RegisterAs = () => {
    return (
        <React.Fragment>
            <MetaTagComp title_sco={LogoutPage} />
            <Row>
                <LoginRightLabel text="Register As" />
                <FromWraper>
                    <div className="d-flex justify-content-around">
                        <div className="text-center">
                            {/* <h4 className="mb-4">REGISTER AS A </h4> */}
                            <Link to={StudentRegRoute} className="h1"> <FaUserGraduate /> Student </Link>
                        </div>
                        <div className="text-center">
                            {/* <h4 className="mb-4">REGISTER AS A </h4> */}
                            <Link to={TutorRegRoute} className="h1">  <FaUserTie />  Tutor  </Link>
                        </div>
                    </div>
                </FromWraper>
            </Row>
        </React.Fragment >
    )
}

export default RegisterAs
