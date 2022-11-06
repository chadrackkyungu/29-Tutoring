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
import CustomBtn from "components/CustomBtn";

const Register = () => {
  const [modal, setModal] = useState(false)
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

    </React.Fragment>
  )
}

export default Register