import React from "react"
import { Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import ResetForm from "./components/ResetForm";
import { Link, useHistory, useParams } from "react-router-dom";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { ResetPasswordMsg } from "components/NotifyMessage";
import MetaTagComp from "components/MetaTag";
import { ResetPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import { LoginRoute } from "components/RouteName";

const ResetPassword = () => {
  const { token } = useParams()
  const history = useHistory()

  const { execute, pending, data } = usePost()

  function handleValidSubmit(e, values) {
    e.preventDefault();
    const Method = 'PATCH', endPoint = `users/resetPassword/${token}`;
    const raw = JSON.stringify({
      "password": values.password,
      "passwordConfirm": values.password
    });
    execute(endPoint, raw, Method, ResetPasswordMsg)
  }

  if (data) {
    window.setTimeout(() => {
      history.push(LoginRoute);
    }, 2000);
  }

  return (
    <React.Fragment>
      <MetaTagComp title_sco={ResetPage} />

      <Row>
        <LoginRightLabel text="Reset your password" />

        <FromWraper>
          <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }} >
            <ResetForm />
            <CustomBtn Pending={pending} btnName="Reset Password" />
            <div className="col-12 mt-5">
              You Remember your password ? <Link to="/login" className='text-success'> Login </Link>
            </div>
          </AvForm>
        </FromWraper>
      </Row>

    </React.Fragment>
  )
}

export default ResetPassword
