import { api } from './api'
import { AuthResponse, User } from '@/types'

export const auth = {
    async login(email: string, password: string): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/auth/login', {
            username: email,
            password,
        })
        const { access_token, user } = response.data
        localStorage.setItem('access_token', access_token)
        return response.data
    },

    async createPassword(userId: string, token: string, password: string): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/auth/create-password', {
            user_id: userId,
            token,
            password,
        })
        const { access_token } = response.data
        localStorage.setItem('access_token', access_token)
        return response.data
    },

    async requestPasswordReset(email: string): Promise<void> {
        await api.post('/auth/forgot-password', { email })
    },

    async getCurrentUser(): Promise<User> {
        const response = await api.get<User>('/users/profile')
        return response.data
    },

    logout() {
        localStorage.removeItem('access_token')
        window.location.href = '/'
    },
}