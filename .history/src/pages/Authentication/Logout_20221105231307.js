import React from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import ResetForm from "./components/ResetForm";
import { Link, useHistory, useParams } from "react-router-dom";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { ResetPasswordMsg } from "components/NotifyMessage";
import MetaTagComp from "components/MetaTag";
import { LogoutPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import { useStore1Selector } from "index";
import { userDetails } from "Redux/Slices/userSlice";

const Logout = () => {
    const userDet = useStore1Selector(userDetails);
    const token = userDet?.token;
    const userImg = "https://security-check-in.herokuapp.com/img/users/";
    const { token } = useParams()
    const history = useHistory()
    const { execute, pending, data, error } = usePost()

    function handleValidSubmit(e, values) {
        e.preventDefault();
        const Method = 'PATCH', endPoint = `users/resetPassword/${token}`;
        const raw = JSON.stringify({
            "password": values.password,
            "passwordConfirm": values.password
        });
        execute(endPoint, raw, Method, ResetPasswordMsg)
        if (data) {
            window.setTimeout(() => {
                history.push("/login");
            }, 3000);
        }
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={LogoutPage} />
            <Row>
                <LoginRightLabel text="Logout" />
                <FromWraper>
                    <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }} >
                        <ResetForm />
                        <CustomBtn Pending={pending} btnName="Logout" />
                        <div className="col-12 mt-5">
                            You Remember your password ? <Link to="/login" className='text-success'> Login </Link>
                        </div>
                    </AvForm>
                </FromWraper>
            </Row>
        </React.Fragment>
    )
}

export default Logout
