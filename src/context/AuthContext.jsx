import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for login cookie
        const getCookie = (name) => {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.indexOf(name + '=') === 0) {
                    return decodeURIComponent(cookie.substring(name.length + 1));
                }
            }
            return null;
        };

        const email = getCookie("userEmail");
        if (email) {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const foundUser = users.find(u => u.email === email);
            if (foundUser) {
                setUser(foundUser);
            }
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const foundUser = users.find(u => u.email === email);

        if (!foundUser) {
            throw new Error("User not found. Please register.");
        }

        if (atob(foundUser.password) !== password) {
            throw new Error("Incorrect password");
        }

        // Login success
        document.cookie = `userEmail=${encodeURIComponent(email)}; path=/; max-age=${60 * 60 * 24 * 7}`; // 1 week
        setUser(foundUser);
        return foundUser;
    };

    const register = (userData) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        
        if (users.some(u => u.email === userData.email)) {
            throw new Error("Email already registered. Please login.");
        }

        const newUser = {
            ...userData,
            password: btoa(userData.password), // Simple encoding as in original
            registeredAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        return newUser;
    };

    const logout = () => {
        document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
