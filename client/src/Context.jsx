import React, {useContext, useEffect, useMemo, useState} from 'react';

export const Context = React.createContext(null);

const Provider = ({ children })=> {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const store = useMemo(() => ({
        posts,
        setPosts,
        user,
        setUser
    }),[posts, user]);

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
    },[user]);

    return (
        <Context.Provider value={store}>
            { children }
        </Context.Provider>
    );
}

export default Provider;
export const useStateValue = () => useContext(Context);