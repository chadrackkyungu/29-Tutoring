import { useState } from 'react';
import { successMessage, warningMessage } from "../components/Toast"

const usePost = () => {
    const [postData, updatePostData] = useState({ pending: false, data: undefined, error: undefined });

    const execute = async (endPoint, raw, Method, displayMessage, token, isJSON) => {

        updatePostData({
            pending: true,
            data: undefined,
            error: undefined,
        });

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        isJSON ? null : myHeaders.append("Content-Type", "application/json")

        const requestOptions = {
            method: Method,
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${process.env.REACT_APP_BACKEND_URL}/${endPoint}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res?.status === 'success') {
                    updatePostData({
                        pending: false,
                        data: res,
                        error: undefined
                    });
                    successMessage(`${displayMessage}`);
                }
                if (res?.status === 'fail') {
                    updatePostData({
                        pending: false,
                        data: undefined,
                        error: res?.message
                    });
                    warningMessage(`${res?.message}`);
                }
            })
            .catch(error => {
                updatePostData({
                    pending: false,
                    data: undefined,
                    error: error.message
                });
                warningMessage(`${error.message}`);
            });
    };

    return {
        execute,
        pending: postData.pending,
        data: postData.data,
        error: postData.error,
    };
};

export default usePost;