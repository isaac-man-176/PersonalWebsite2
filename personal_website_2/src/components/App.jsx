import { useState } from "react";
import Gallery from "./Gallery.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx"
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
            <a href="#gallery" className = "headerButton" onClick={(e) => handleNavClick(e, "gallery")}>Gallery</a>
            <a href="#contact" className = "headerButton" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </nav>
      </header>

      <main>
        {page === "about" && <About />}
        {page === "gallery" && <Gallery />}
        {page === "contact" && <Contact />}
        <Footer />
      </main>
    </>
  );
}
