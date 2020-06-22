import React, { useEffect, useRef } from "react";
import Particles from "react-particles-js";
import { animated, useSpring } from "react-spring";
//<div className="bg-struct bg-img"></div>;

const calc = (o) => `translateY(${o * 0.15}px)`;

const TopBackground = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
    //console.log(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={ref} className="particle-wrapper" ref={ref}>
      <animated.div style={{ transform: offset.interpolate(calc) }}>
        <Particles />
      </animated.div>
    </div>
  );
};

export default TopBackground;
