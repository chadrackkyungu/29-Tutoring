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

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer null");
    const formdata = new FormData();

    formdata.append("firstName", values.firstName);
    formdata.append("lastName", values.lastName);
    formdata.append("IdNumber", values.IdNumber);
    formdata.append("phoneNumber", values.phoneNumber);
    formdata.append("gender", values.gender);
    formdata.append("streetAddress", values.address);
    formdata.append("houseNumber", values.houseNumber);
    formdata.append("agreed", values.checkboxCustomInputExample2[0]);
    formdata.append("email", values.email);
    formdata.append("photo", !profileServer ? " " : profileServer);
    formdata.append("password", values.password);
    formdata.append("passwordConfirm", values.passwordConfirm);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://security-check-in.herokuapp.com/api/v1/users/signup", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "success") {
          setloadBtn(false)
          setModal(true)
        }
        if (result.status === "fail") {
          warningMessage("Sorry something went wrong please try again")
          setloadBtn(false)
        }
      })
      .catch(error => {
        warningMessage(`Sorry something went wrong please try again`)
        setloadBtn(false)
      });

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