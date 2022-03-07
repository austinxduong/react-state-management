import { useState, useEffect } from 'react';
import { fetchApi } from '../fetch/Fetch';

export const useFetch = () => {
    const [api, setApi] = useState([]);

    useEffect(() => {
        fetchApi()
            .then(setApi)
    }, [])

    return { api }


}
