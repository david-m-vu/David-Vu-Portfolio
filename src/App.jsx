import './App.css'

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./scenes/About/About.jsx";
import Projects from "./scenes/Projects/Projects.jsx";
import Work from "./scenes/Work/Work.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  const [linksAccessed, setLinksAccessed] = useState(["about", "projects", "work"])

  return (
      <div id="App" className="w-full h-full p-4 pb-8">
        <NavBar/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/work" element={<Work/>}/>
        </Routes>
      </div>
  )
}

export default App
