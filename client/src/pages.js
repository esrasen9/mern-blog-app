import Home from "./pages/Home";
import Write from "./pages/Write";
import ProfileSettings from "./pages/ProfileSettings";
import Sign from "./pages/Sign";
import About from "./components/about/About";
import MyPosts from "./pages/MyPosts";

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
    },
    {
        path: "/sign",
        element: <Sign/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/myposts",
        element: <MyPosts/>
    }
]