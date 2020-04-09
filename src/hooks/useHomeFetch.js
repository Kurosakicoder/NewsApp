import { useState, useEffect } from 'react';
import { TOP_NEWS } from '../config';

export const useHomeFetch = () => {
    const [state, setState] = useState({ news: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchNews = async endpoint => {
        setError(false);
        setLoading(true);

        try {
            const result = await (await fetch(endpoint)).json();
            console.log(result)
            setState(prev => ({
                ...prev,
                news: [...result.articles],
                totalResults: result.totalResults,
            }))

        } catch (error) {
            setError(true);
        }
        setLoading(false);

    }

    useEffect(() => {
        fetchNews(TOP_NEWS)
    }, [])
    return [{ state, loading, error }, fetchNews]
}