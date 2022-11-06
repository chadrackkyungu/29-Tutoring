import React, { useState, useRef } from "react"
import MetaTags from 'react-meta-tags';
import "./Style.scss";
import { Row, Col, CardBody, Card, Spinner, Button } from "reactstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AvForm } from "availity-reactstrap-validation"
import Image from "../../assets/images/users/user-4.jpg";
import SignUp from "../../assets/images/Register/Sign up.svg";
import { warningMessage } from "../../components/Toast"
import FormInput1 from "./components/FormInput1";
import FormInput2 from "./components/FormInput2";
import FormInput3 from "./components/FormInput3";
import { ImFilePicture } from "react-icons/im";
import MetaTagComp from "components/MetaTag";
import { RegisterPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import usePost from "hooks/usePost";

const Register = () => {
  const [modal, setModal] = useState(false)
  const { execute, pending, data } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'users/signUp';

    const raw = JSON.stringify({
      "firstName": "THWALA",
      "lastName": "SIBAPHILWE",
      "phoneNumber": "0827000150",
      "agreed": "yes",
      "email": "thwalasibaphiwe@gmail.com",
      "password": "4019144246",
      "passwordConfirm": "4019144246",
      "role": "student"
    });
    execute(endPoint, raw, Method)
  }

  return (
    <React.Fragment>
      <MetaTagComp title_sco={RegisterPage} />

      <Row>
        <LoginRightLabel text="Register" />

        <FromWraper>
          <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
            <FormInput1 />
            <FormInput3 />
            <FormInput2 />

            <CustomBtn Pending={pending} btnName="Submit" />
          </AvForm>

          <div className="col-12 mt-5">
            Already have an account ? <Link to="/login" className='text-primary'> Login </Link>
          </div>
        </FromWraper>
      </Row>

      <Modal show={modal} onHide={() => setModal(false)} size="sm">
        <Modal.Body >
          <h5 className="text-success"> Thank you for registering with us, Verified your email to confirm the registration </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-danger text-white" onClick={() => setModal(false)}>Yes</Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  )
}

export default Register