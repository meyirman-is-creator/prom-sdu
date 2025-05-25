'use client'

import { useState } from 'react'
import { AxiosError } from 'axios'
import { ApiError } from '@/types'

export function useApi<T = any>() {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const execute = async (apiCall: () => Promise<T>) => {
        setLoading(true)
        setError(null)
        try {
            const result = await apiCall()
            setData(result)
            return result
        } catch (err) {
            const error = err as AxiosError<ApiError>
            const message = error.response?.data?.detail || 'Произошла ошибка'
            setError(message)
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { data, error, loading, execute }

}