import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import { Row, Col, Card, CardBody, Spinner } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import forgotPass from "../../assets/images/Register/forgot-password.svg";
import { successMessage, warningMessage } from "../../components/Toast"
import usePost from 'hooks/usePost';
import { LoginMsg } from 'components/NotifyMessage';

const ForgetPasswordPage = () => {

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'users/forgotPassword';
    const { execute, pending } = usePost()

    const raw = JSON.stringify({
      "email": values.email
    });
    execute(endPoint, raw, Method, LoginMsg)
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Forget Password | Security </title>
      </MetaTags>

      <Row>
        <Col md={6} className="registration-img">

        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className='w-50'>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                  <div className="mb-3">
                    <AvField name="email" label="Email" className="form-control" placeholder="Enter email"
                      type="email"
                      required
                    />
                  </div>
                  <Row className="mb-3">
                    <Col className="text-end">
                      <CustomBtn pending={pending} btnName="Submit" />
                    </Col>
                  </Row>
                </AvForm>
              </CardBody>
            </Card>
            {/* <p className="p-1 text-center">
              © {new Date().getFullYear()} Online Learning. Crafted with
              <i className="mdi mdi-heart text-danger" /> by visit-help.com
            </p> */}
          </div>

        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ForgetPasswordPage

