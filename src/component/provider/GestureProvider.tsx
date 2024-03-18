import { ReactNode } from "react";
import { useGesture } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import { useRecoilState } from "recoil";
import { linkState } from "@/store/atom";
import { links } from "@/constants/links";
import { useNavigate } from "react-router-dom";

interface IgestureProvider {
  children: ReactNode;
}

const GestureProvider = ({ children }: IgestureProvider) => {
  const [rstate, setRstate] = useRecoilState(linkState);
  const navigate = useNavigate();

  const [{ x }, set] = useSpring(() => ({ x: 0 }));

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

  return <animated.nav {...bind()}>{children}</animated.nav>;
};
export default GestureProvider;
