import React, { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

const CustomFab = () => {
  const transitionDuration = {
    enter: 300,
    exit: 300,
  };
  const maxOffset = 500;
  const [isFABHidden, setIsFABHidden] = useState(true);

  const onScroll = (ev) => {
    const offset = window.pageYOffset;
    if (offset > maxOffset) {
      setIsFABHidden(false);
    } else {
      setIsFABHidden(true);
    }

    console.log(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <Zoom
      key={"323"}
      in={!isFABHidden}
      timeout={500}
      style={{
        transitionDelay: `${transitionDuration.enter}ms`,
      }}
      unmountOnExit
    >
      <Fab color="primary" className="custom-fab">
        <GoArrowUp className="fab-icon" />
      </Fab>
    </Zoom>
  );
};

export default CustomFab;
