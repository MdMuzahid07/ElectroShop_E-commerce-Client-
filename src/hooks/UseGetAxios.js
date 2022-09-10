import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const UseGetAxios = (url) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        (async () => {
            try {
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoaded(true);
            }
        })();

    }, [url]);


    return { products, error, loaded };
};

export default UseGetAxios;