import { AvForm } from 'availity-reactstrap-validation';
import { successMessage, warningMessage } from 'components/Toast';
import React from 'react'
import { Spinner } from 'reactstrap';
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";

function DeleteForm({ setDeleteUser, secId, reFetch }) {

    const user = useStore1Selector(userDetails);
    const token = user.token;
    const [loadBtn, setloadBtn] = React.useState();


    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = "";
        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://security-check-in.herokuapp.com/api/v1/users/${secId}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    successMessage("Successful deleted")
                    setloadBtn(false)
                    setDeleteUser(false)
                    reFetch();
                }
                if (result.status === "fail") {
                    warningMessage(`${result.message}`)
                    setloadBtn(false)
                    setDeleteUser(false)
                    reFetch();
                }
                if (result.status === "error") {
                    warningMessage("Sorry something went wrong please try again")
                    setloadBtn(false)
                    setDeleteUser(false)
                    reFetch();
                }
            })
            .catch(error => {
                warningMessage(`Sorry something went wrong please try again`)
                setloadBtn(false)
                setDeleteUser(false)
                reFetch();
            });

    }

    return (
        <div>
            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <button className="btn btn-registration-clr w-md waves-effect waves-light w-100" type="submit">
                    {!loadBtn ? <span className="me-2">Delete this account</span> : null}
                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                </button>
            </AvForm>
        </div>
    )
}

export default DeleteForm