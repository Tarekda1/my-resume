import React, { useEffect, useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { GoArrowUp } from "react-icons/go";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import { animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles({
  fabIcon: {
    right: "3rem",
    bottom: "3rem",
    position: "fixed",
    fontSize: "1.7rem",
    color: "#fff",
  },
});

const CustomFab = () => {
  const classes = useStyles();
  const transitionDuration = {
    enter: 300,
    exit: 300,
  };
  const maxOffset = 500;
  const [isFABHidden, setIsFABHidden] = useState(true);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
      <Fab
        color="primary"
        size="medium"
        onClick={() => scrollToTop()}
        className={classes.fabIcon}
      >
        <GoArrowUp className="fab-icon" />
      </Fab>
    </Zoom>
  );
};

export default CustomFab;
