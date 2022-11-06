import React from "react"
import { Card, CardBody } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import UpdatePasswordProfile from './components/UpdatePasswordProfile';
import Layout from '../Layout';
import { userDetails, Login } from '../../Redux/Slices/userSlice'
import { useStore1Selector, useStore1Dispatch } from '../../index';
import { useHistory } from 'react-router-dom';
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { UpdatePasswordMsg } from "components/NotifyMessage";
import { LoginRoute } from "components/RouteName";

const AdminProfile = () => {

    const history = useHistory();
    const dispatch = useStore1Dispatch();
    const userDet = useStore1Selector(userDetails);
    const token = userDet?.token;
    const { execute, pending, data } = usePost()

    function handleValidSubmit2(e, values) {
        e.preventDefault()
        const Method = 'PATCH', endPoint = 'users/updateMyPassword';
        const raw = JSON.stringify({
            "passwordCurrent": values.passwordCurrent,
            "password": values.password,
            "passwordConfirm": values.passwordConfirm
        });
        execute(endPoint, raw, Method, UpdatePasswordMsg, token)
    }

    if (data?.status === "success") {
        dispatch(Login(""));
        history.push(LoginRoute)
    }

    return (
        <Layout>
            <AvForm onValidSubmit={(e, v) => { handleValidSubmit2(e, v) }}>
                <Card>
                    <CardBody>
                        <UpdatePasswordProfile />
                    </CardBody>
                </Card>
                <div className="w-25 ">
                    <CustomBtn Pending={pending} btnName="Update my password" />
                </div>
            </AvForm>
        </Layout>
    )
}

export default AdminProfile