import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Spinner, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import ResetForm from "./components/ResetForm";
import resetPassword from "../../assets/images/Register/reset-password.svg";
import { Link, useHistory, useParams } from "react-router-dom";
import { successMessage, warningMessage } from "../../components/Toast"
import CustomBtn from "components/CustomBtn";

const ResetPassword = () => {
  const { token } = useParams()
  const history = useHistory()

  function handleValidSubmit(e, values) {
    e.preventDefault();

    const raw = JSON.stringify({
      "password": values.password,
      "passwordConfirm": values.password
    });

    const requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://security-check-in.herokuapp.com/api/v1/users/resetPassword/${token}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          successMessage('Successful update your password')
          setloadBtn(false)
          window.setTimeout(() => {
            history.push("/login");
          }, 3000);
        }
      })
      .catch(error => {
        warningMessage(`Fail to verified ${error.message}`)
        setloadBtn(false)
      });
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title> Reset Password | reset password page </title>
      </MetaTags>

      <Row>
        <Col md={6} className="registration-img">
          <div> <h3 className="text-white mt-4 mb-4">Reset Password </h3> </div>
          <div className="img-container mt-5 mb-3">
            <img src={resetPassword} alt="" />
          </div>
        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className='w-50'>
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

            {/* <p className="mb-0 text-center">
              Cpoy right © {new Date().getFullYear()} Visit-help.com
              <i className="mdi mdi-heart text-danger" />
              By visit - help
            </p> */}

          </div>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default ResetPassword
