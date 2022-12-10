import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/style.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        {/* <Routes>
            <Route path="/user">
                <User />
            </Route>
        </Routes> */}

        <App />
    </BrowserRouter>,
    document.getElementById("root")
);