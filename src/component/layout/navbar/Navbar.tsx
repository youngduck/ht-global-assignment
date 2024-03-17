import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icons from "../../../assets/icons";
import "./navbar.scss";

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const links = ["/", "/whook", "/event", "/news", "/store", "/charge"];
  const navigate = useNavigate();

  const handleNextClick = async () => {
    const nextIndex = (currentIndex + 1) % links.length;
    setCurrentIndex(nextIndex);
    navigate(links[nextIndex]);
  };

  const handlePrevClick = async () => {
    const prevIndex = (currentIndex - 1 + links.length) % links.length;
    setCurrentIndex(prevIndex);
    navigate(links[prevIndex]);
  };

  const handleNavLinkClick = async (index: number) => {
    setCurrentIndex(index);
    navigate(links[index]);
  };

  return (
    <nav className="header-navbar">
      <ul>
        {links.map((link, index) => (
          <li key={link}>
            <NavLink to={link} onClick={() => handleNavLinkClick(index)}>
              {link === "/" ? "차트" : link.substring(1).toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="scroll-button header-left" onClick={handlePrevClick}>
        {icons.leftArrow}
      </button>
      <button className="scroll-button header-right" onClick={handleNextClick}>
        {icons.rightArrow}
      </button>
    </nav>
  );
};

export default Navbar;
