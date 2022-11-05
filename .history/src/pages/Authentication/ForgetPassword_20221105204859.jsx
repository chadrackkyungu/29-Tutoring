import React from "react"
import { Row, Col, Card, CardBody, } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import forgotPass from "../../assets/images/Register/forgot-password.svg";
import usePost from 'hooks/usePost';
import { ForgotPasswordMsg } from 'components/NotifyMessage';
import MetaTagComp from "components/MetaTag";
import CustomBtn from "components/CustomBtn";

const ForgetPasswordPage = () => {

  const { execute, pending, data, error } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'users/forgotPassword';

    const raw = JSON.stringify({
      "email": values.email
    });
    execute(endPoint, raw, Method, ForgotPasswordMsg)
  }

  return (
    <React.Fragment>
      <MetaTagComp title_sco="Tutoring | Forgot password" />

      <Row>
        <Col md={6} className="registration-img"> </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className='w-75'>
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
                      <CustomBtn Pending={pending} btnName="Submit" />
                    </Col>
                  </Row>
                </AvForm>
              </CardBody>
            </Card>
          </div>

        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ForgetPasswordPage

