import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CategoryIcon from '@mui/icons-material/Category';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Sidebar = ({ open }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const SideMenuList = [
        {
            name: 'Home',
            icon: <HomeRoundedIcon />,
            path: '/'
        },
        {
            name: 'User',
            icon: <SupervisedUserCircleIcon />,
            path: '/user'
        },
        {
            name: 'Products',
            icon: <CategoryIcon />,
            path: '/Products'
        }
    ]

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box height={30} />
                <Drawer variant="permanent" open={open}>
                    {/* Optional Header part */}
                    <DrawerHeader>
                        <IconButton>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>

                    <Divider />

                    {/* Sidebar menu list */}
                    <List>
                        {
                            SideMenuList.map((item, index) => (
                                <>
                                    <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => navigate(item.path)}>
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                                fontWeight: 'bolder',
                                                '&:hover': {
                                                    color: '#3f51b5',
                                                    fontWeight: 'bold',
                                                },
                                                '&:hover svg': {
                                                    color: '#3f51b5',
                                                },
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                    '& svg': {
                                                        fontSize: 25,
                                                    },
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} style={{ fontWeight: 'bolder' }} sx={{ opacity: open ? 1 : 0, }} />
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            ))
                        }
                    </List>

                </Drawer>
            </Box>
        </>
    );
}

export default Sidebar;