import React, { useState } from "react";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const sidebarContent = (
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <>
      {isSmallScreen && (
        <Box position="fixed" top={50} zIndex={1000}>
          <IconButton onClick={() => setOpen(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      )}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box p={2} width={250} role="presentation">
          {sidebarContent}
        </Box>
      </Drawer>
      {!isSmallScreen && (
        <Box p={2} flex={1}>
          <Box position="fixed">{sidebarContent}</Box>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
