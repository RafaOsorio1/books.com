import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import {useState} from "react";

type propsAppBar = {
  window?: () => Window;
};

export const Header = ({window}: propsAppBar) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerWidth = 240;
  const navItems = ["Home", "About"];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <Typography variant="h6" sx={{my: 2}}>
        Books.com
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{textAlign: "center"}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav" classes={{root: "justify-center"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}
          >
            {mobileOpen ? "Books.com" : "Books.com"}
          </Typography>
          <Box sx={{display: {xs: "none", sm: "block"}}}>
            {navItems.map((item) => (
              <Button key={item} sx={{color: "#fff"}}>
                {item}
              </Button>
            ))}
          </Box>
          <Typography variant="h6">Books.com</Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: "block", sm: "none"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
