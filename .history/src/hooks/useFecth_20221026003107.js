import { useEffect, useState } from "react";

const useFetch = (url, token) => {

    const [data, setData] = useState([]);
    const [length, setLength] = useState();
    const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    setData(result.data.data)
                    setLength(result.results)
                }
            })
            .catch(error => {
                setError("Something went wrong", error.message)
            });
    }, [url]);


    const reFetch = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    setData(result.data.data)
                    setLength(result.results)
                }
            })
            .catch(error => {
                setError("Something went wrong", error.message)
            });
    };

    return { data, length, error, reFetch };
};

export default useFetch;
