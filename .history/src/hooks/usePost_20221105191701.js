import { useState } from 'react';

const usePost = () => {
    const [postData, updatePostData] = useState({ pending: false, data: undefined, error: undefined });

    const execute = async (endPoint, requestOptions) => {

        updatePostData({
            pending: true,
            data: undefined,
            error: undefined
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${process.env.REACT_APP_BACKEND_URL}/${endPoint}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res.status === 'success') {
                    updatePostData({
                        pending: false,
                        data: res,
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