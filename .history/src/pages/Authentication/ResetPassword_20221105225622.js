import React from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import ResetForm from "./components/ResetForm";
import { Link, useHistory, useParams } from "react-router-dom";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { ResetPasswordMsg } from "components/NotifyMessage";
import MetaTagComp from "components/MetaTag";
import { ResetPage } from "components/SCO_Name";

const ResetPassword = () => {
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
      <MetaTagComp title_sco={ResetPage} />

      <Row>
        <Col md={6} className="registration-img">
          <div> <h1 className="mt-4 mb-4 login-title">Reset your password</h1> </div>
        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className='w-75'>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <div className="p-3">
                  <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }} >
                    <ResetForm />
                    <CustomBtn Pending={pending} btnName="Reset Password" />
                    <div className="col-12 mt-5">
                      You Remember your password ? <Link to="/login" className='text-success'> Login </Link>
                    </div>
                  </AvForm>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default ResetPassword
