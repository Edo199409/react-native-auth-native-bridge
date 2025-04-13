import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'



export const AuthContext = React.createContext({
    isAuthenticated: false,
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




    return <AuthContext.Provider value={isAuthenticated}>{children}</AuthContext.Provider>
}

export const useAuth = () => React.useContext(AuthContext)
