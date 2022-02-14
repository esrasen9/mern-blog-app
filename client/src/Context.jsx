import React, {useContext, useEffect, useMemo, useState} from 'react';

export const Context = React.createContext(null);

const Provider = ({ children })=> {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [profilePic, setProfilePic] = useState(null);
    const store = useMemo(() => ({
        posts,
        setPosts,
        user,
        setUser,
        profilePic,
        setProfilePic
    }),[posts, user, profilePic]);

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
        setProfilePic(user?.profilePic);
    },[user]);

    return (
        <Context.Provider value={store}>
            { children }
        </Context.Provider>
    );
}

export default Provider;
export const useStateValue = () => useContext(Context);