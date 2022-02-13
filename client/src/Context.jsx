import React, {useContext, useMemo, useState} from 'react';

export const Context = React.createContext(null);

const Provider = ({ children })=> {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const store = useMemo(() => ({
        posts,
        setPosts,
        user,
        setUser,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword
    }),[posts, user, username, email, password]);

    return (
        <Context.Provider value={store}>
            { children }
        </Context.Provider>
    );
}

export default Provider;
export const useStateValue = () => useContext(Context);