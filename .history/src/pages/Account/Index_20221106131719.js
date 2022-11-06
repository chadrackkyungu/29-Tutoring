import React, { useState, useRef } from "react"
import { Container, Card, CardBody, Button, Spinner, Row, Col } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import UpdatePasswordProfile from './components/UpdatePasswordProfile';
import Image from "../../assets/images/users/user-9.jpg";
import Layout from '../Layout';
import UpdateAdminProfile from './components/UpdateAdminProfile';
import { userDetails, Login } from '../../Redux/Slices/userSlice'
import { useStore1Selector, useStore1Dispatch } from '../../index';
import { successMessage, warningMessage } from "../../components/Toast"
import { useHistory } from 'react-router-dom';
import { AiFillPicture } from "react-icons/ai";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";

const AdminProfile = () => {

    const dispatch = useStore1Dispatch();
    const history = useHistory()
    const userImg = `${process.env.REACT_APP_IMG_API}img/users/`;

    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();
    const userDet = useStore1Selector(userDetails);
    const details = userDet?.data?.data;
    const photo = details?.photo
    const token = userDet?.token
    const { execute, pending, data } = usePost()

    function handleValidSubmit(e, values) {
        setloadBtn(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const formdata = new FormData();

        formdata.append("photo", profileServer);
        formdata.append("phoneNumber", values.phoneNumber);
        formdata.append("IdNumber", values.IdNumber);
        formdata.append("streetAddress", values.streetAddress);

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://security-check-in.herokuapp.com/api/v1/users/updateMe", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    dispatch(Login(""));
                    successMessage("You have successful update");
                    setloadBtn(false);
                    window.setTimeout(() => {
                        history.push("/login");
                    }, 2000)
                }
                if (result.status === 'fail') {
                    warningMessage(`${error.message}`);
                    setloadBtn(false);
                }
                if (result.status === 'error') {
                    warningMessage(`${error.message}`);
                    setloadBtn(false);
                }
            })
            .catch(error => {
                warningMessage(`Something went wrong try again ${error.message}`);
                setloadBtn(false);
            });
    }


    //* UPDATE MY PASSWORD
    function handleValidSubmit2(e, values) {
        setloadBtn2(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "passwordCurrent": values.passwordCurrent,
            "password": values.password,
            "passwordConfirm": values.passwordConfirm
        });

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://security-check-in.herokuapp.com/api/v1/users/updateMyPassword", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    dispatch(Login(""));
                    successMessage("You have successfully updated your password");
                    setloadBtn2(false);
                    window.setTimeout(() => {
                        history.push("/login");
                    }, 1000)
                }
                if (result.status === 'fail') {
                    warningMessage(result.message);
                    setloadBtn2(false);
                }
            })
            .catch(error => {
                warningMessage(`Something went wrong try again ${error.message}`);
                setloadBtn2(false);
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
        <Layout>
            <Container fluid>
                <CardBody>



                    <AvForm className="m-3" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                        <Card>
                            <Row>
                                <Col md={4}>
                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        <img src={!profile ? `${userImg}${photo}` : profile} alt="user" width={100} height={100} className="rounded" />
                                        <div size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5" onClick={onThumbChangeClick}
                                        >
                                            <AiFillPicture size={46} />
                                        </div>
                                        <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <CardBody>
                                        <UpdateAdminProfile details={details} />
                                    </CardBody>
                                </Col>
                                <CustomBtn Pending={pending} btnName="Update your profile details" />
                            </Row>
                        </Card>
                    </AvForm>

                    <AvForm className="m-3" onValidSubmit={(e, v) => { handleValidSubmit2(e, v) }}>
                        <Card>
                            <CardBody>
                                <UpdatePasswordProfile />
                            </CardBody>
                        </Card>
                        <CustomBtn Pending={pending} btnName="Update your credential" />
                    </AvForm>

                </CardBody>
            </Container>
        </Layout>
    )
}

export default AdminProfile