import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Video from "./pages/videos/Video"
const App = () => {
  const [sidebar,setSidebar]= useState(false);
  return (
    <div> 
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
