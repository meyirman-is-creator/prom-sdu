'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types'
import { auth } from '@/lib/auth'

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('access_token')
                if (token) {
                    const userData = await auth.getCurrentUser()
                    setUser(userData)
                }
            } catch (error) {
                console.error('Failed to fetch user:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    return { user, loading }
}