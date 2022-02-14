import React, {useContext, useMemo, useState} from 'react';

export const Context = React.createContext(null);

const Provider = ({ children })=> {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});

    const store = useMemo(() => ({
        posts,
        setPosts,
        user,
        setUser
    }),[posts, user]);

    return (
        <Context.Provider value={store}>
            { children }
        </Context.Provider>
    );
}

export default Provider;
export const useStateValue = () => useContext(Context);