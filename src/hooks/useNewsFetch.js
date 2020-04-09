import { useState, useEffect, useCallback } from 'react'
import { API_URL, API_KEY } from '../../config'

export const useNewsFetch = newsId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)

        try {
            const endpoint = `${API_URL}`
        } catch (error) {

        }
        setLoading(false)
    }, [newsId])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return [state, loading, error]

}