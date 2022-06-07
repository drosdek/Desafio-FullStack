import * as React from "react";
import { styled, AppBar, Box, CssBaseline, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./menuDrawer.component";

import PropTypes from "prop-types";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "red",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

function Menu({ toggleMenu, children, isOpen }) {
  const handleDrawerToggle = (e) => {
    e.preventDefault();
    toggleMenu();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar position="fixed" open={isOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </MuiAppBar>
      <MenuDrawer isMenuOpen={isOpen} handleDrawerClose={handleDrawerToggle} />
      <Main open={isOpen}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

Menu.defaultProps = {
  toggleMenu: () => {},
  children: <div />
};

Menu.propTypes = {
  children: PropTypes.node,
  toggleMenu: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Menu;
