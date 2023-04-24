import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import styled from '@emotion/styled';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useNavigate } from 'react-router-dom';

const AppBar = styled(MuiAppBar)(() => ({ zIndex: 10000 }));

const Header = ({ open, setOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const nevigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    nevigate('/profile');
  };

  const handleLogout = () => {
    setAnchorEl(null);
    nevigate('/login');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation sx={{ backgroundColor: '#fff' }}>
        <Toolbar>

          {/* Humberger menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* For Logo or Our Website name */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          {/* For Profile and Logout */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
              Malay Patoliya
            </Typography>
            <IconButton
              size="extra-large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              style={{ zIndex: 10000, textAlign: 'right' }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}><Person2OutlinedIcon />&nbsp;&nbsp;Profile &nbsp;</MenuItem>
              <MenuItem onClick={handleLogout}><LogoutOutlinedIcon />&nbsp;&nbsp;Logout</MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;