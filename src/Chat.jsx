import React from 'react';
import { Box, Avatar, Typography, TextField, Button, IconButton } from '@mui/material';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import AttachFileIcon from '@mui/icons-material/AttachFile';

const Chat = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      {/* Header with contact details */}
      <Box p={2} display="flex" alignItems="center">
        <Avatar alt="Contact Name" src="/path-to-avatar-image" />
        <Box ml={2}>
          <Typography variant="subtitle1">Contact Name</Typography>
          <Typography variant="body2">Status</Typography>
        </Box>
      </Box>

      {/* Messages */}
      <Box p={2} maxHeight="70vh" overflowY="scroll">
        {/* Example messages */}
        <div>
          <div>Your message</div>
          <div>Their message</div>
          {/* Add more messages */}
        </div>
      </Box>

      {/* Input field */}
      <Box p={2} position="fixed" bottom={0} width="100%" bgcolor="white">
        <TextField label="Type a message" fullWidth variant="outlined" />
        <Button variant="contained" color="primary" size="small">
          Send
        </Button>
        {/* Add emoji and attachment buttons */}
        <IconButton>
          {/* <EmojiEmotionsIcon /> */}
        </IconButton>
        <IconButton>
          {/* <AttachFileIcon /> */}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chat;
