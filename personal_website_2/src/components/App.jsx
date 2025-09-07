import { useState } from "react";
import Hobbies from "./Hobbies.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import "/src/index.css"

export default function App() {
  const [page, setPage] = useState("about");

  const handleNavClick = (e, targetPage) => {
    e.preventDefault();
    setPage(targetPage);
  };

  return (
    <>
      <header className="navBar">
        <nav className="navBarContainer">
            <a href="#about" className = "headerButton" onClick={(e) => handleNavClick(e, "about")}>About</a>
            <a href="#home" className = "headerButton" onClick={(e) => handleNavClick(e, "hobbies")}>Hobbies</a>
            <a href="#contact" className = "headerButton" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </nav>
      </header>

      <main>
        {page === "about" && <About />}
        {page === "hobbies" && <Hobbies />}
        {page === "contact" && <Contact />}
      </main>
    </>
  );
}
