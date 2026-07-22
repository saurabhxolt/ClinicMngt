/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
        return localStorage.getItem('clinic_admin_auth') === 'true';
    });

    const loginAdmin = (username, password) => {
        if (username === 'admin' && password === 'admin123') {
            setIsAdminLoggedIn(true);
            localStorage.setItem('clinic_admin_auth', 'true');
            return { success: true };
        }
        return { success: false, message: 'Invalid credentials. Use admin / admin123' };
    };

    const logoutAdmin = () => {
        setIsAdminLoggedIn(false);
        localStorage.removeItem('clinic_admin_auth');
    };

    return (
        <AuthContext.Provider value={{ isAdminLoggedIn, loginAdmin, logoutAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
