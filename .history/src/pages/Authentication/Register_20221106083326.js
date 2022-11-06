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

const Register = () => {

  const [loadBtn, setloadBtn] = useState();
  const [profile, setProfile] = useState();
  const [profileServer, setProfileServer] = useState();
  const [modal, setModal] = useState(false)

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    // setShowDetails(values)
    setloadBtn(true)

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

  const refFileUpload = useRef(null);
  const onThumbChangeClick = () => {
    if (refFileUpload) {
      refFileUpload.current.dispatchEvent(new MouseEvent('click'));
    }
  };

  const changeThumb = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileServer(event.target.files[0]);

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setProfile(loadEvent.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      <MetaTagComp title_sco={RegisterPage} />

      <Row>
        <LoginRightLabel text="Register" />

        <Col md={6}>
          <CardBody>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <img src={profile === undefined ? Image : profile} alt="user" width={180} height={180} className="rounded-circle" />
              <div size="sm" className="btn-icon btn-icon-only position-absolute  mt-5 text-white">
                <ImFilePicture size={52} onClick={onThumbChangeClick} />
              </div>
              <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
            </div>

            <FromWraper>
              <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <FormInput1 />
                <FormInput3 />
                <FormInput2 />

                <div className="col-12 text-center">
                  <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                    {!loadBtn ? <span className="me-2">Submit</span> : null}
                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                  </button>
                </div>
              </AvForm>

              <div className="col-12 mt-5">
                Already have an account ? <Link to="/login" className='text-success'> Login </Link>
              </div>

            </FromWraper>

            <div className="text-center">
              <p>
                © {new Date().getFullYear()} Crafted with
                <i className="mdi mdi-heart text-danger" /> Security check in and out
              </p>
            </div>

          </CardBody>
        </Col>
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