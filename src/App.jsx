import './App.css'

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./scenes/About/About.jsx";
import Projects from "./scenes/Projects/Projects.jsx";
import Work from "./scenes/Work/Work.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

import { useLayoutEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion"

let accessedMap = new Map();
accessedMap.set("/about", false);
accessedMap.set("/projects", false);
accessedMap.set("/work", false);

function App() {
  const [linksAccessed, setLinksAccessed] = useState(accessedMap)

  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div id="App" className="w-full h-full p-4 pb-8">
      <NavBar linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<About linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />} />
          {/* <Route path="/projects" element={<Projects linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />} /> */}
          <Route path="/work" element={<Work linksAccessed={linksAccessed} setLinksAccessed={setLinksAccessed} />} />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App
