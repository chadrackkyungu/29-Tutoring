import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import { Row, Col, Card, CardBody, Spinner } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import forgotPass from "../../assets/images/Register/forgot-password.svg";
import { successMessage, warningMessage } from "../../components/Toast"

const ForgetPasswordPage = () => {

  const [loadBtn, setloadBtn] = useState();
  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    setloadBtn(true)

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer null");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": values.email
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://security-check-in.herokuapp.com/api/v1/users/forgotPassword", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          successMessage("Check your email to reset your password");
          setloadBtn(false);
        }
        if (result.status === 'fail') {
          warningMessage("Try again something went wrong");
          setloadBtn(false);
        }
      })
      .catch(error => {
        warningMessage(`Something went wrong try again ${error.message}`);
        setloadBtn(false);
      });
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Forget Password | Security </title>
      </MetaTags>

      <Row>
        <Col md={3} className="registration-img">

        </Col>

        <Col md={9} className="d-flex justify-content-center align-items-center">
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
                      <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                        {!loadBtn ? <span className="me-2">Forgot Password</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                      </button>
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

