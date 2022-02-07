import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
