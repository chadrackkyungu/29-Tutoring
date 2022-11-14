import React from 'react'
import { userDetails } from './../../../Redux/Slices/userSlice';
import { useStore1Selector } from 'index';
import usePost from './../../../hooks/usePost';
import { DeclineMsg } from 'components/NotifyMessage';

function DeclineFormFunc({ reFetch, UserID, onClose }) {

    const userDet = useStore1Selector(userDetails);
    const { execute, data } = usePost()
    const token = userDet?.token

    function DeclineTutor() {
        const Method = 'POST', endPoint = `users/${UserID}/decline`;
        const raw = ""
        execute(endPoint, raw, Method, DeclineMsg, token)
    }

    if (data?.status === 'success') {
        onClose()
        setTimeout(() => {
            reFetch()
        }, 1000)
    }

    return (
        <button className='btn btn-primary w-100' onClick={DeclineTutor} >Yes </button>
    )
}

export default DeclineFormFunc