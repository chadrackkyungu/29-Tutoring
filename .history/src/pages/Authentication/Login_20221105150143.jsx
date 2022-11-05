import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import { Row, Col, CardBody, Card, Spinner } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { useHistory, Link } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import loginImg from "../../assets/images/Register/login.svg";
import { successMessage, warningMessage } from "../../components/Toast"
import { useStore1Dispatch } from "../../index";
import { Login } from "../../Redux/Slices/userSlice";

const LoginComp = () => {

  const history = useHistory()
  const dispatch = useStore1Dispatch();
  const [loadBtn, setloadBtn] = useState();

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    setloadBtn(true)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": values.email,
      "password": values.password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          dispatch(Login(result));
          successMessage("Successful logged in");
          setloadBtn(false);
          window.setTimeout(() => {
            history.push("/dashboard");
          }, 3000);
        }
        if (result.status === 'fail') {
          warningMessage(result.message);
          setloadBtn(false);
        }
      })
      .catch(error => {
        warningMessage(`${error.message}`);
        setloadBtn(false);
      });
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Tutoring | Login page </title>
      </MetaTags>

      <Row>
        <Col md={6} className="registration-img">
          <div> <h1 className="text-dark mt-4 mb-4">Login</h1> </div>
        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className='w-75'>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <div className="p-3">
                  <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <LoginForm />

                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                      {!loadBtn ? <span className="me-2">Submit</span> : null}
                      {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>

                    <div className="col-12 mt-5">
                      You don't have an account ? <Link to="/register" className='text-success'> Register </Link>
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

export default LoginComp
