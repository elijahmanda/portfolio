import { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // Function to close the navbar if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${scrolled ? "scrolled" : "transparent"}`} // Toggle class based on scroll position
      data-bs-theme="dark"
      fixed="top"
      expanded={expanded}
      ref={navbarRef}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="brand">
          JCEM
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link href="#skills" onClick={() => setExpanded(false)}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link href="#footer" onClick={() => setExpanded(false)}>
              Links
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
