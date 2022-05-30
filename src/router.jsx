import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./App2";
import SHome from "./App";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>

                    <Route exact path="/react-redux-toolkit" element={<SHome />} />
                    <Route path="/react-redux-toolkit/post" element={<Home />} />

                </Routes>
            </Router>

        </div>
    )

}


export default App

