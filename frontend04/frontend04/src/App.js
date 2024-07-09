import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoute from "./routers/AppRouter";
import Layouts from "./layouts";
import "./assets/sass/app.scss";
import './App.css';
import './style.css';




// import LayoutAdmin from "./layouts/LayoutAdmin";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layouts />} />
                {AppRoute.RouterSite.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={<Page />}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;