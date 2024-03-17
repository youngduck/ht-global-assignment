import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header-navbar">
      <ul>
        <li>
          <NavLink to="/">차트</NavLink>
        </li>
        <li>
          <NavLink to="/whook">Whook</NavLink>
        </li>
        <li>
          <NavLink to="/event">이벤트</NavLink>
        </li>
        <li>
          <NavLink to="/news">뉴스</NavLink>
        </li>
        <li>
          <NavLink to="/store">스토어</NavLink>
        </li>
        <li>
          <NavLink to="/charge">충전소</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
