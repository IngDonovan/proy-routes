import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// const adminList = ['Itisval', 'RetaxMaster', 'freddier', 'donoDev'];
const roles = {
    admin: {
      write: true,
      read: true,
      delete: true,
    },
    editor: {
      write: true,
      read: true,
      delete: false,
    },
    visitor: {
      write: false,
      read: true,
      delete: false,
    },
  };

const personalUsers = [
    {
        name:'donoDev',
        rol:roles.admin,
    },
    {
        name:'RetaxMaster',
        rol:roles.admin,
    },
    {
        name:'freddier',
        rol:roles.editor,
    },
    {
        name:'Willy',
        rol:roles.editor,
    },
    {
        name:'anony',
        rol:roles.visitor,
    },

];

const AuthContext = createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);


    const login = ({ username }) => {
        const rol = personalUsers.find((person) => person.name === username);
        const isPersonalUser = (rol !== undefined);
        isPersonalUser 
            ? (setUser(rol))
            : setUser({ name: username, role: roles.visitor});
        navigate('/profile');
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };
    const auth = {
        user,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>  

    );
};

function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
}

function AuthRoute(props) {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login"/>;
    }
    return props.children;
}

export { AuthProvider, useAuth, AuthRoute,};