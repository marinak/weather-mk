import { useState } from 'react'

export default (apiFunc) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);

        await apiFunc(...args).then((response) => response.json())
            .then((actualData) => setData(actualData))
            .catch((err) => {
                setError(err.message);
            }).finally(() => setLoading(false));
    }

    return {
        data,
        error,
        loading,
        request
    };
}
