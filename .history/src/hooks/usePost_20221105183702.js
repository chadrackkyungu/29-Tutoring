import { useState } from 'react';
// import axios from 'axios';

const usePost = () => {
    const [postData, updatePostData] = useState({ pending: false, data: undefined, error: undefined });

    const execute = async ({ endPoint, method, formdata }) => {

        updatePostData({
            pending: true,
            data: undefined,
            error: undefined
        });

        const myHeaders = new Headers();
        const requestOptions = {
            method: method,
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        return fetch(`${process.env.REACT_APP_BACKEND_URL}/${endPoint}`, requestOptions)
            .then(response => {

                console.log("result : ", response)

                updatePostData({
                    pending: false,
                    data: response.data,
                    error: undefined
                });
            })
            .catch(error => {
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