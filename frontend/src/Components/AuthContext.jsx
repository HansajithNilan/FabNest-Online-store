import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://localhost:5000/me", { 
                headers: { Authorization: `Bearer ${token}` } 
            })
            .then((res) => {
                setUser(res.data); // Set the user object if the token is valid
            })
            .catch(() => {
                localStorage.removeItem("token"); // Remove invalid token
                setUser(null);
            });
        }
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user); // Store user details
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
