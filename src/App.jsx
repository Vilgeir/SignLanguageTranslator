import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Profile from "./pages/Profile";
import Startup from "./pages/Startup";
import Translation from "./pages/Translation";

const App = () => {
    return (
        <BrowserRouter>
            <div id="main-container">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Startup />} />
                    <Route path="/translation" element={<Translation />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
