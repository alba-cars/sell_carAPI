import { createContext, useState, useEffect } from "react";
import axios from 'axios'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    async function getLoggedIn() {
        // const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
        const loggedInRes = await axios.get(
          "http://localhost:8080/api/users/loggedIn"
        );
        setAuth(loggedInRes.data);
      }

      useEffect(() => {
        getLoggedIn();
      }, []);

    return (
        <AuthContext.Provider value={{ auth, getLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;