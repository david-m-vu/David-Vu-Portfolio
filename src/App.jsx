import './App.css'

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./scenes/About/About.jsx";
import Projects from "./scenes/Projects/Projects.jsx";
import Work from "./scenes/Work/Work.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

import { AnimatePresence } from "framer-motion"

let accessedMap = new Map();
accessedMap.set("/", false);
accessedMap.set("/projects", false);
accessedMap.set("/work", false);

function App() {
  const [linksAccessed, setLinksAccessed] = useState(accessedMap)

  return (
    <div id="App" className="w-full h-full pb-8">
      <NavBar linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<About linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />} />
          <Route path="/projects" element={<Projects linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />} />
          <Route path="/work" element={<Work linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />} />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App
