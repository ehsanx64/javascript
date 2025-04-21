import { useState, forwardRef } from 'react';
import { Link, NavLink } from 'react-router';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

import { GetAppName } from '../libs/tools';
import DarkModeToggler from './DarkModeToggler';

// Constants
const appName = GetAppName();
const drawerWidth = 240;
const pages = [
    {
        title: 'Home',
        route: '/'
    },
    {
        title: 'About',
        route: '/about'
    },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// For mui button
const LinkBehavior = forwardRef((props, ref) => (
    <Link ref={ref} to="/" {...props} role={undefined} />
));


// For using mui lists with react router
function ListItemLink(props) {
    const { icon, primary, to } = props;

    return (
        <ListItemButton component={Link} to={to}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
        </ListItemButton>
    );
}

function Navigation(props) {
    const { window } = props;
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {appName}
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item.route + item.title} disablePadding>
                        {/* <NavLink to={item.route} end> */}
                        {/* <ListItemButton sx={{ textAlign: 'center' }}
                        to={ }>
                        <ListItemText primary={item.title} />
                    </ListItemButton> */}
                        <ListItemLink to={item.route} primary={item.title} />
                        {/* </NavLink> */}
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        console.log("nav menu closed")
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {appName}
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="inherit"
                                sx={{
                                    paddingLeft: 0,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((item) => (
                                    <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                                        <NavLink to={item.route} end>
                                            <Typography sx={{ textAlign: 'center' }}>
                                                {item.title}
                                            </Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: { xs: 1, sm: 'initial' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {appName}
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                            {pages.map((item) => (
                                <Button
                                    component={Link}
                                    to={item.route}
                                    key={item.route + item.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, margin: '0 1em' }}>
                            <Tooltip title="Toggle Dark Mode">
                                <DarkModeToggler />
                            </Tooltip>
                        </Box>
        
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default Navigation