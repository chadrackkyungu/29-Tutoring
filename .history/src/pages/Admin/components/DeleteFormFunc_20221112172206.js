import React from 'react'
import { userDetails } from './../../../Redux/Slices/userSlice';
import { useStore1Selector } from 'index';
import usePost from './../../../hooks/usePost';
import { DeleteCourseMsg } from 'components/NotifyMessage';

function DeleteFormFunc({ reFetch, UserID, onClose }) {

    const userDet = useStore1Selector(userDetails);
    const { execute, data } = usePost()
    const token = userDet?.token

    function deleteUser() {
        const Method = 'DELETE', endPoint = `users/${UserID}`;
        const raw = ""
        execute(endPoint, raw, Method, DeleteCourseMsg, token)
    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 1000)
    }

    return (
        <button className='btn btn-primary w-100' onClick={deleteUser} >Yes </button>
    )
}

export default DeleteFormFunc