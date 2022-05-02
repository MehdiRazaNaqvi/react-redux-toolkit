import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

import Home from "./App2";
import SHome from "./App";

const App = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/feed" element={<SHome/>} />
                </Routes>
            </Router>

        </div>
    )

}


export default App

