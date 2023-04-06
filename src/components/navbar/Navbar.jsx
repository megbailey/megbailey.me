import React from 'react';
import { /* useNavigate, */ Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//import logo from '../assets/img/logo-white.png'
import { Avatar } from '@mui/material';

const Navbar = () => {
  //const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const pages = [
      {
        title: "Home",
        path: '/'
      }, 
      {
        title: "Projects",
        path: '/projects'
      },
      {
        title: "Blog",
        path: '/knowledge'
      },
      {
        title: "Contact Me",
        path: '/hello'
      }
    ]

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {/* <Toolbar>
          <IconButton
            size="large"
            aria-label="home-button"
            aria-controls="home-button"
            aria-haspopup="true"
            //onClick={() => navigate('/')} //TODO: GO Home
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
                horizontal: 1,
                vertical: 'bottom',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {
                pages.map(( item, index ) => {
                  return (
                    <MenuItem
                      component={Link}
                      to={item['path']}
                      key={`menuItem-${index}`}>{item['title']}</MenuItem>
                  )
                })
              }
            </Menu>
          </div>
        </Toolbar> */}
      </AppBar>
    </Box>
  );
}

export default Navbar;