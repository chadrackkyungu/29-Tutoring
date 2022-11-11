import React from 'react'
import { userDetails } from './../../../Redux/Slices/userSlice';
import { useStore1Selector } from 'index';
import usePost from './../../../hooks/usePost';

function DeleteFormFunc({ reFetch, UserID, onClose }) {
    console.log(UserID);

    const userDet = useStore1Selector(userDetails);
    const { execute, data } = usePost()
    const token = userDet?.token

    function removeBookmark(id) {
        const Method = 'DELETE', endPoint = `bookmarks/${id}`;
        const raw = ""
        execute(endPoint, raw, Method, RemoveBookMarkMsg, token)
    }
    if (data?.status === 'success') {
        onClose
        setTimeout(() => {
            reFetch()

        }, 2500)
    }

    return (
        <div>DeleteFormFunc</div>
    )
}

export default DeleteFormFunc