import { Box } from '@mui/material'
import React from 'react'
import SendMessage from './SendMessage'
import ReceiveMessage from './ReceiveMessage'
import Messageinput from './Messageinput'
function Chat() {
  return (
    <Box
    zIndex={-1}
    width={"65rem"}
    sx={{backgroundColor:"#F9F9F9",padding:"2rem"}}
    >
    <Box>
      <SendMessage/>
      <ReceiveMessage/>
      <SendMessage/>
      <ReceiveMessage/>
      <SendMessage/>
      <SendMessage/>
    </Box>
    <Messageinput/>
    </Box>
  )
}

export default Chat
