import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logo from '../assets/img/logo-white.png'
import { Avatar } from '@mui/material';

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const pages = ["Home", "About", "Projects", "Blog", "Get in touch"]

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            aria-label="home-button"
            aria-controls="home-button"
            aria-haspopup="true"
            onClick='' //TODO: GO Home
            color="inherit"
          >
            <Avatar 
              alt='MB' 
              src="MB" 
            />
          </IconButton>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {
                pages.map(( item ) => {
                  return <MenuItem onClick={handleClose}>{item}</MenuItem>
                })
              }
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}