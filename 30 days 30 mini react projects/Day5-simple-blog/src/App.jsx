// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <nav className="flex bg-gray-200 justify-between p-4">
          <h1 className="font-bold">BlogSite</h1>
          <ul className="flex gap-4">
            <li>
              <a className="hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
