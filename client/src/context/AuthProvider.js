import { createContext, useState, useEffect } from "react";
import axios from 'axios'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    // async function loginUser(id) {
    //   try {
    //     const res = await axios.get(
    //       `http://localhost:8080/api/users/${id}`,
    //       {
    //         withCredentials: true,
    //       }
    //     )
    //     console.log(res.data)
    //     setAuth(res.data)
    //     return res
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    useEffect(() => {
      const logUserId = localStorage.getItem('logUser')
      // loginUser(logUserId);
    }, [])

    return (
        <AuthContext.Provider value={{ auth,  setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;