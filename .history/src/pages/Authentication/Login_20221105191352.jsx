import React, { useState } from "react"
import { Row, Col, CardBody, Card, Spinner } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { useHistory, Link } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import { successMessage, warningMessage } from "../../components/Toast"
import { useStore1Dispatch } from "../../index";
import { Login } from "../../Redux/Slices/userSlice";
import MetaTagComp from 'components/MetaTag';
import useLocalStorage from "hooks/uselocalStorage";
import useUpdateLogger from "hooks/useUpdateLogger";
import usePost from "hooks/usePost"

const LoginComp = () => {

  const history = useHistory()
  // const dispatch = useStore1Dispatch();
  // const [loadBtn, setloadBtn] = useState();

  // const [name, setName] = useLocalStorage('name', 'jed kazadi');
  // useUpdateLogger("jedkazadii")

  const { execute, pending, data, error } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();

    const endPoint = 'users/login';
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
    execute(endPoint, requestOptions)
  }

  console.log(data)

  return (
    <React.Fragment>
      <MetaTagComp title_sco="Tutoring | Login" />

      <Row>
        <Col md={6} className="registration-img">
          <div> <h1 className="text-dark mt-4 mb-4">Login</h1> </div>
        </Col>


        <Col md={6} className="d-flex justify-content-center align-items-center">

          <p>{error && <span> The was an Error...</span>}</p>
          {/* <p>{data && <span> Success!... {JSON.stringify(data)} </span>}</p> */}

          <div className='w-75'>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <div className="p-3">
                  <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <LoginForm />

                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                      {!pending ? <span className="me-2">Submit</span> : null}
                      {!pending ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
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
