import { useState } from 'react';
// import axios from 'axios';

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
                console.log("result : ", response.data.data)

                updatePostData({
                    pending: false,
                    data: response.data.data,
                    error: undefined
                });
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