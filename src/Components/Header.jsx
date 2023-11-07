import * as React from "react";
import Logo from "./Logo";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 100;
const navItems = ["Home", "About Us", "Contact Us"];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", padding: "1rem" }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                <Logo />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;
    const IconButtonStyling = {
        mr: 2,
        display: { sm: "none" },
        margin: 0,
        padding: 0,
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                margin: "3.813rem 0 -8rem",
                "@media (max-width:600px)": {
                    margin: " 1.5rem 0 -6.5rem ",
                },
            }}
        >
            <CssBaseline />
            <AppBar component="nav" position="relative">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: "space-between" }}
                >
                    <IconButton sx={IconButtonStyling}>
                        <Logo />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={IconButtonStyling}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Logo />
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button sx={{ color: "#000" }} key={item}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        Download Now!
                    </Button>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth + "%",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
