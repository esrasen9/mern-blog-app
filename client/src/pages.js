import Home from "./pages/Home";
import Write from "./pages/Write";
import ProfileSettings from "./pages/ProfileSettings";

export const pages = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/write",
        element: <Write/>
    },
    {
        path: "/settings",
        element: <ProfileSettings/>
    }
]