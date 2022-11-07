import React from "react"
import "./Style.scss";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm } from "availity-reactstrap-validation"
import FormInput1 from "./components/FormInput1";
import FormInput2 from "./components/FormInput2";
import FormInput3 from "./components/FormInput3";
import MetaTagComp from "components/MetaTag";
import { RegisterPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import usePost from "hooks/usePost";
import CustomBtn from "components/CustomBtn";
import { RegisterMsg } from "components/NotifyMessage";

const Register = () => {
    const { execute, pending, data } = usePost()

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        const Method = 'POST', endPoint = 'users/signUp';

        const raw = JSON.stringify({
            "firstName": values.firstName,
            "lastName": values.lastName,
            "phoneNumber": values.phoneNumber,
            "agreed": values.agreed[0],
            "email": values.email,
            "password": values.password,
            "passwordConfirm": values.passwordConfirm,
            "role": values.role,
        });
        execute(endPoint, raw, Method, RegisterMsg)
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={RegisterPage} />

            <Row>
                <LoginRightLabel text="Register" />
                {
                    data?.status === 'success' ?
                        (<FromWraper>
                            <p className="text-primary">  We sent you a link to your mailbox, verify your email to continue </p>
                            You did not received it ? <Link onClick={() => location.reload()} className='text-primary'> Try again </Link>
                        </FromWraper>)
                        :
                        (<FromWraper>
                            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                                <FormInput1 />
                                <FormInput3 />
                                <FormInput2 />

                                <CustomBtn Pending={pending} btnName="Submit" />
                            </AvForm>

                            <div className="col-12 mt-5">
                                Already have an account ? <Link to="/login" className='text-primary'> Login </Link>
                            </div>
                        </FromWraper>)
                }
            </Row>

        </React.Fragment>
    )
}

export default Register