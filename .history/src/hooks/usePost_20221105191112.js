import { useState } from 'react';
import { successMessage, warningMessage } from "../../components/Toast"
import { useStore1Dispatch } from "../../index";
import { Login } from "../../Redux/Slices/userSlice";

const usePost = () => {
    const [postData, updatePostData] = useState({ pending: false, data: undefined, error: undefined });

    const execute = async (endPoint, requestOptions) => {

        updatePostData({
            pending: true,
            data: undefined,
            error: undefined
        });

        return fetch(`${process.env.REACT_APP_BACKEND_URL}/${endPoint}`, requestOptions)
            .then(response => response.json())
            .then(response => {
                if (response.status === 'success') {
                    updatePostData({
                        pending: false,
                        data: response.data.data,
                        error: undefined
                    });
                }
            })
            .catch(error => {
                console.log("Error : ", error.message)
                updatePostData({
                    pending: false,
                    data: undefined,
                    error: error.message
                });
            });
    };

    return {
        execute,
        pending: postData.pending,
        data: postData.data,
        error: postData.error
    };
};

export default usePost;