import { useState, useEffect } from "react";
import axios from "./axios";

const useFetch = (props) =>  {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    
    async function fetchData() {
        try{
            const response = await axios.get('/random')
            // console.log("Checking the Aether for response... ", response);
            // console.log("Checking the Aether for response data... ", response.data);
            setData(response.data);
        } catch(error) {
            setError(error.message)
        } 
    }

    useEffect(() => {
        fetchData();
    }, []);

    return [data, setData, error, setError];
};

export default useFetch;