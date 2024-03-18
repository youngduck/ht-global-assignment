import { useRecoilState } from "recoil";
import { linkState } from "@/store/atom";
import { NavLink, useNavigate } from "react-router-dom";
import { useGesture } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import "./navbar.scss";
import { links } from "@/constants/links";

const Navbar = () => {
  const [rstate, setRstate] = useRecoilState(linkState);
  const navigate = useNavigate();

  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  console.log(x);

  const bind = useGesture({
    onDrag: ({ down, movement: [mx] }) => {
      if (!down) {
        if (mx > 5) {
          const prevIndex = (rstate - 1 + links.length) % links.length;
          setRstate(prevIndex);
          navigate(links[prevIndex]);
        } else if (mx < -5) {
          const nextIndex = (rstate + 1) % links.length;
          setRstate(nextIndex);
          navigate(links[nextIndex]);
        }
      } else {
        set({ x: mx });
      }
    },
  });

  return (
    <animated.nav {...bind()} className="header-navbar">
      <ul>
        {links.map((link: string, index: number) => (
          <li key={link}>
            <NavLink to={link} onClick={() => setRstate(index)}>
              {link === "/" ? "차트" : link.substring(1).toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </animated.nav>
  );
};

export default Navbar;
