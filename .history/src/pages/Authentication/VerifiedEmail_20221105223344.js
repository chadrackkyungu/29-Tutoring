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

const VerifiedEmail = () => {

    const { userId, token } = useParams()
    const history = useHistory()
    const [loadBtn, setloadBtn] = useState();
    const { execute, pending, data, error } = usePost()

    const handleValidSubmit = () => {
        setloadBtn(true)

        const myHeaders = new Headers();
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://security-check-in.herokuapp.com/api/v1/users/verify/${userId}/${token}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    successMessage('Successful verified')
                    setloadBtn(false)
                    window.setTimeout(() => {
                        history.push("/login");
                    }, 2000);
                }
            })
            .catch(error => {
                warningMessageCenter(`Fail to verified ${error.message}`)
                setloadBtn(false)
            });
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={VerifyEmailPage} />

            <Row>
                <Col md={6} className="registration-img">
                    <div> <h1 className="mt-4 mb-4 login-title">Verify your email</h1> </div>
                </Col>

                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                        <Card className="overflow-hidden p-2">
                            <p className="text-dark mt-5 mb-4 m-5 text-center"> Click on the button below to verify your email </p>
                            <div className=" text-center py-2">
                                <CustomBtn Pending={pending} btnName="Verify your email" />
                            </div>
                        </Card>
                    </AvForm>
                </Col>

            </Row>
        </React.Fragment>
    )
}

export default VerifiedEmail
