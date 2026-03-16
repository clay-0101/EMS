import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../UTILS/LocalStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

useEffect(() => {
    // Check karo ki kya pehle se data hai?
    const existingData = localStorage.getItem('Employees')
    
    if (!existingData) {
        // Agar data NAHI hai, tabhi default data set karo
        setLocalStorage()
    }

    const { employeesData, adminData } = getLocalStorage()
    setUserData({ employeesData, adminData })
}, [])
    const updateUserData = (updatedEmployees) => {
        setUserData({ ...userData, employeesData: updatedEmployees })
    }

    return (
        <div>
            <AuthContext.Provider value={{userData , updateUserData}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider