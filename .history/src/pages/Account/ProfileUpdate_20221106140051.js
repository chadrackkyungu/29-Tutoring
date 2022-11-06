import React, { useState, useRef } from "react"
import { Container, Card, CardBody, Button, Spinner, Row, Col } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import UpdatePasswordProfile from './components/UpdatePasswordProfile';
import Image from "../../assets/images/users/user-9.jpg";
import Layout from '../Layout';
import UpdateAdminProfile from './components/UpdateAdminProfile';
import { userDetails, Login } from '../../Redux/Slices/userSlice'
import { useStore1Selector, useStore1Dispatch } from '../../index';
import { useHistory } from 'react-router-dom';
import { AiFillPicture } from "react-icons/ai";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { UpdatePasswordMsg } from "components/NotifyMessage";
import { LoginRoute } from "components/RouteName";

const UpdateProfile = () => {

    const dispatch = useStore1Dispatch();
    const userDet = useStore1Selector(userDetails);
    const history = useHistory()
    const userImg = `${process.env.REACT_APP_IMG_API}img/users/`;

    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();
    const details = userDet?.data?.data;
    const photo = details?.photo
    const token = userDet?.token
    const { execute, pending, data } = usePost()

    function handleValidSubmit(e, values) {
        e.preventDefault()
        const Method = 'PATCH', endPoint = 'users/updateMe';
        const raw = new FormData();
        raw.append("photo", profileServer);
        raw.append("phoneNumber", values.phoneNumber);
        raw.append("IdNumber", values.IdNumber);
        raw.append("streetAddress", values.streetAddress);

        execute(endPoint, raw, Method, UpdatePasswordMsg, token)
    }

    if (data?.status === "success") {
        dispatch(Login(""));
        history.push(LoginRoute)
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
            <AvForm onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={4}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={!profile ? `${userImg}${photo}` : profile} alt="user" width={100} height={100} className="rounded" />
                                    <div size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5" onClick={onThumbChangeClick}
                                    >
                                        <AiFillPicture size={46} />
                                    </div>
                                    <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                                </div>
                            </Col>
                            <Col md={8}>
                                <UpdateAdminProfile details={details} />
                            </Col>
                        </Row>
                        <div className="w-25">
                            <CustomBtn Pending={pending} btnName="Update" />
                        </div>
                    </CardBody>
                </Card>
            </AvForm>
        </Layout>
    )
}

export default UpdateProfile