import { ref } from 'vue'
import { api, ensureCsrfCookie } from '../lib/api'
import type { User } from '../types/user'

interface RegisterPayload {
  name: string
  email: string
  password: string
  password_confirmation: string
}

interface LoginPayload {
  email: string
  password: string
}

/*
 * Module-level state so every component calling `useAuth()` shares the same
 * reactive `user` ref, instead of each getting its own isolated instance.
 */
const user = ref<User | null>(null)

/**
 * Sanctum SPA (cookie-based) authentication.
 */
export function useAuth() {
  const register = async (payload: RegisterPayload) => {
    await ensureCsrfCookie()

    const response = await api.post<{ user: User }>('/register', payload)
    user.value = response.data.user

    return user.value
  }

  const login = async (payload: LoginPayload) => {
    await ensureCsrfCookie()

    const response = await api.post<{ user: User }>('/login', payload)
    user.value = response.data.user

    return user.value
  }

  const logout = async () => {
    await ensureCsrfCookie()
    await api.post('/logout')
    user.value = null
  }

  const fetchUser = async () => {
    try {
      const response = await api.get<User>('/user')
      user.value = response.data
    } catch {
      user.value = null
    }

    return user.value
  }

  return {
    user,
    register,
    login,
    logout,
    fetchUser,
  }
}
