import { Box, Button, Stack,TextField } from '@mui/material'
import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CollectionsIcon from '@mui/icons-material/Collections';
function Messageinput() {
  return (
    <Box
    position={"fixed"}
    paddingTop={"1rem"}
    width={"69rem"}
    height={"10rem"}
    justifyContent={"center"}
    >
      <TextField id="outlined-basic" style={{width:"65rem"}} label="Type a message here....." variant="outlined" />
   
     <Box sx={{
      
      display:"flex",
      justifyContent:"space-between",
      padding:"2rem"
    
     }}>
      <Stack 
      direction={"row"}
      spacing={3}
      >
        <AttachFileIcon/>
        <CameraAltIcon/>
        <KeyboardVoiceIcon/>
        <CollectionsIcon/>
      </Stack>
      <Button variant="contained" >Reply</Button>
     </Box>
    </Box>
  )
}

export default Messageinput
