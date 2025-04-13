import React, { useEffect, useMemo } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'



export const AuthContext = React.createContext({
    isAuthenticated: false,
    setAuthenticated: () => undefined
})

export const AuthProvider = ({ children, setIsVisible }) => {
    const [isAuthenticated, setAuthenticated] = React.useState(false)

    const checkAuthentication = async () => {
        const token = await AsyncStorage.getItem('token')
        setTimeout(() => {
            !!token && setAuthenticated(true)
            setIsVisible(true)
        }, 2000)
    }

    useEffect(() => {
        checkAuthentication()
    }, [])


    const value = useMemo(() => {
        return {
            isAuthenticated,
            setAuthenticated
        }
    }, [isAuthenticated, setAuthenticated])




    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => React.useContext(AuthContext)
