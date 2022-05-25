import './App.css';
import Header from './components/Header';
import Maintext from './components/Maintext';
import Biotext from './components/Biotext';
import Works from './components/Works';
import Blog from './components/Blog';
import Pop from './components/Pop';
import React from "@types/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <Routes>
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Route path="hi" element={<h1>Selam</h1>} />
                    <p>ANASAYFA</p>
                    <p>HAKKIMDA</p>
                    <p>BLOG</p>
                    <Header />


                    <Maintext />
                    <Biotext />
                    <Works />
                    <Blog />
                    <Pop />
                </div>
            </div>
        </div>
    </div>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
