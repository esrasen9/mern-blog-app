import React, {useContext, useEffect, useMemo, useState} from 'react';
import axios from "axios";

export const Context = React.createContext(null);

const Provider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);

    const createUpdatedUser = (e, file) => {
        const updatedUser = {
            userId: user._id
        }
        const name = e.target.username.value;
        if (name) updatedUser.username = name;

        const email = e.target.email.value;
        if (email) updatedUser.email = email;

        const password = e.target.password.value;
        if (password) updatedUser.password = password;

        if (file) {
            const data = new FormData();
            const name = Date.now() + file.name;
            data.append("name", name);
            data.append("file", file);
            updatedUser.profilePicture = name
            axios.post("/upload", data)
                .catch((err) => console.error(err));
        }
        return updatedUser;
    }

    const store = useMemo(() => ({
        posts,
        setPosts,
        user,
        setUser,
        dialogIsOpen,
        setDialogIsOpen,
        updateModalOpen,
        setUpdateModalOpen,
        createUpdatedUser
    }), [posts, user, dialogIsOpen, updateModalOpen]);


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
export const useStateValue = () => useContext(Context);