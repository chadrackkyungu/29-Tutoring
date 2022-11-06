import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import "../Styles.scss";
import { Col, Card, Spinner, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { useHistory, useParams } from "react-router-dom"
import { successMessage, warningMessageCenter } from "../../components/Toast"
import MetaTagComp from 'components/MetaTag';
import { VerifyEmailPage } from 'components/SCO_Name';
import CustomBtn from 'components/CustomBtn';
import usePost from 'hooks/usePost';
import LoginRightLabel from './components/LoginRightLabel';
import FromWraper from './components/FromWraper';

const VerifiedEmail = () => {

    const { userId, token } = useParams()
    const history = useHistory()
    const { execute, pending, data, error } = usePost()

    const verifyFunc = () => {
        const Method = 'GET', endPoint = `users/verify/${userId}/${token}`;
        const raw = ""
        execute(endPoint, raw, Method, ResetPasswordMsg)
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={VerifyEmailPage} />
            <Row>
                <LoginRightLabel text="Verify your email" />
                <FromWraper>
                    <p className="text-dark mt-5 mb-4 m-5 text-center"> Click on the button below to verify your email </p>
                    <div className=" text-center p-3">
                        <CustomBtn Pending={pending} btnName="Verify your email" onClick={verifyFunc} />
                    </div>
                </FromWraper>
            </Row>
        </React.Fragment>
    )
}

export default VerifiedEmail
