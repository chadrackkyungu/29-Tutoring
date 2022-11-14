import React from 'react'
import { userDetails } from './../../../Redux/Slices/userSlice';
import { useStore1Selector } from 'index';
import usePost from './../../../hooks/usePost';
import { SuspendedMsg } from 'components/NotifyMessage';

function ApproveFormFunc({ reFetch, UserID, onClose }) {

    const userDet = useStore1Selector(userDetails);
    const { execute, data } = usePost()
    const token = userDet?.token

    function ApproveTutor() {
        const Method = 'POST', endPoint = `users/${UserID}/approved`;
        const raw = ""
        execute(endPoint, raw, Method, SuspendedMsg, token)
    }

    if (data?.status === 'success') {
        onClose()
        setTimeout(() => {
            reFetch()
        }, 1000)
    }

    return (
        <button className='btn btn-primary w-100' onClick={ApproveTutor} >Yes </button>
    )
}

export default ApproveFormFunc