import React from 'react';
import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = ['New group', 'Profile', 'Starred messages', 'Settings', 'Log Out'];

const Contacts = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Header */}
      <Box p={2} display="flex" alignItems="center">
        <Avatar alt="Your Name" src="/path-to-your-avatar-image" />
        <Box ml={2}>
          <Typography variant="subtitle1">Your Name</Typography>
          <Typography variant="body2">Status</Typography>
        </Box>
        <Box ml="auto">
          <IconButton onClick={handleClick}>
            {/* <MoreVertIcon /> */}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem key={option} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      {/* Search Bar */}
      <Box p={2}>
        <TextField
          label="Search"
          fullWidth
          variant="outlined"
        //   InputProps={{ endAdornment: <IconButton><SearchIcon /></IconButton> }}
        />
      </Box>

      {/* Contacts List */}
      <List>
        {/* Contact 1 */}
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt="Contact Name" src="/path-to-avatar-image" />
          </ListItemAvatar>
          <ListItemText primary="Contact Name" secondary="Status" />
        </ListItem>
        {/* Add more contacts as needed */}
      </List>
    </Box>
  );
};

export default Contacts;
