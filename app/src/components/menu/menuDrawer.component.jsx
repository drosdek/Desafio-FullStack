import React, { Fragment, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  useTheme,
  styled,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Person as PersonIcon,
  BarChart as BarChartIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { drawerStyleSx } from "./menu.style";

function MenuDrawer({ handleDrawerClose, isMenuOpen, endpoint }) {
  const theme = useTheme();

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }));

  const menus = [
    {
      route: "/desenvolvedores",
      title: "Desenvolvedores",
      icon: <PersonIcon />
    },
    {
      route: "/niveis",
      title: "Niveis",
      icon: <BarChartIcon />
    }
  ];

  const renderMenus = useMemo(() =>
    menus.map((item) => (
      <Fragment key={item.route}>
        <Divider />
        <ListItem
          button
          component={Link}
          key={item.route}
          selected={item.route === endpoint}
          to={item.route}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      </Fragment>
    ))
  );

  return (
    <Drawer sx={drawerStyleSx} variant="persistent" anchor="left" open={isMenuOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>{renderMenus}</List>
    </Drawer>
  );
}

MenuDrawer.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  endpoint: PropTypes.string.isRequired
};

export default MenuDrawer;
