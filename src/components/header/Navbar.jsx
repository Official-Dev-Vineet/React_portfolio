import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const navBarHandler = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", navBarHandler);
    return () => window.removeEventListener("scroll", navBarHandler);
  }, []);
  return (
    <nav className={`${active && "active"}`}>
      <ul className={`common-link left ${open && "active"}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/connect">Connect</NavLink>
        </li>
      </ul>
      <div className="logo" title="Official Dev Vineet">
        <span>Official</span>
        <span>Dev</span>
        <span>Vineet</span>
      </div>
      <ul className={`common-link right ${open && "active"}`}>
        <li onClick={() => setOpen(!open)}>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li onClick={() => setOpen(!open)}>
          <NavLink to="/portfolio">PortFolio</NavLink>
        </li>
        <li onClick={() => setOpen(!open)}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li onClick={() => setOpen(!open)}>
          <NavLink to="/to-do">To-do</NavLink>
        </li>
        <li onClick={() => setOpen(!open)}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
      <div className={`bar ${open && "active"}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
export default Navbar;
