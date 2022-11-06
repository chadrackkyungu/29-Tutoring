import React from "react"
import { Row } from "reactstrap"
import { Link, useHistory } from "react-router-dom";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { LogoutMsg } from "components/NotifyMessage";
import MetaTagComp from "components/MetaTag";
import { LogoutPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import { useStore1Dispatch, useStore1Selector } from "index";
import { Login, userDetails } from "Redux/Slices/userSlice";
import { LoginRoute } from "components/RouteName";

const Logout = () => {
    const history = useHistory()
    const userDet = useStore1Selector(userDetails);
    const dispatch = useStore1Dispatch();
    const token = userDet?.token;
    const { execute, pending, data } = usePost()

    const logoutFunc = () => {
        const Method = 'POST', endPoint = `users/logout`;
        const raw = "";
        execute(endPoint, raw, Method, LogoutMsg, token)
        if (data) {
            dispatch(Login(""));
            window.setTimeout(() => {
                history.push(LoginRoute);
            }, 2000)
        }
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={LogoutPage} />
            <Row>
                <LoginRightLabel text="Logout" />
                <FromWraper>
                    <p className="text-danger">Are you sure you want to logout ?</p>
                    <CustomBtn Pending={pending} btnName="Yes" onClick={logoutFunc} />
                    <div className="col-12 mt-5">
                        Do you wanna go back ? <Link to="/" className='text-primary'> Yes </Link>
                    </div>
                </FromWraper>
            </Row>
        </React.Fragment>
    )
}

export default Logout
