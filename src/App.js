import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Image from "./components/Image";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Image />} />
                    <Route path="/mountains"  element={<Image />} />
                    <Route path="/birds" element={<Image />} />
                    <Route path="/foods"  element={<Image />}/>

                </Routes>

            </BrowserRouter>
        </div>
    )
}
export default App;