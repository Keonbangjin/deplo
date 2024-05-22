import { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../constantas/backendUrl';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(`${backendUrl}/products`);
                setCategories(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    return { categories, loading, error, setCategories };
};

export default useCategories;
