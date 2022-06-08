import * as React from "react";
import { styled, AppBar, Box, CssBaseline, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./menuDrawer.component";

import PropTypes from "prop-types";

import { menuStyle, appBarStyle, drawerStyle } from "./menu.style";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(menuStyle);

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(appBarStyle);

const DrawerHeader = styled("div")(drawerStyle);

function Menu({ toggleMenu, children, isOpen, endpoint, title }) {
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
            {title}
          </Typography>
        </Toolbar>
      </MuiAppBar>
      <MenuDrawer isMenuOpen={isOpen} handleDrawerClose={handleDrawerToggle} endpoint={endpoint} />
      <Main open={isOpen}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

Menu.defaultProps = {
  toggleMenu: () => {},
  children: <div />,
  title: "Sem Titulo",
  endpoint: ""
};

Menu.propTypes = {
  children: PropTypes.node,
  toggleMenu: PropTypes.func,
  isOpen: PropTypes.bool,
  endpoint: PropTypes.string,
  title: PropTypes.string
};

export default Menu;
