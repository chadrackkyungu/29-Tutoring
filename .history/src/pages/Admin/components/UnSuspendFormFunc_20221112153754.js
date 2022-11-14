import React from 'react'
import { userDetails } from './../../../Redux/Slices/userSlice';
import { useStore1Selector } from 'index';
import usePost from './../../../hooks/usePost';
import { UnSuspendedMsg } from 'components/NotifyMessage';

function UnSuspendFormFunc({ reFetch, UserID, onClose }) {

    const userDet = useStore1Selector(userDetails);
    const { execute, data } = usePost()
    const token = userDet?.token

    function deleteUser() {
        const Method = 'POST', endPoint = `users/${UserID}/un-suspended`;
        const raw = ""
        execute(endPoint, raw, Method, DeleteCourseMsg, token)
    }

    if (data?.status === 'success') {
        setTimeout(() => {
            reFetch()
            onClose
        }, 2500)
    }

    return (
        <button className='btn btn-primary w-100' onClick={deleteUser} >Yes </button>
    )
}

export default UnSuspendFormFunc