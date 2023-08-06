import React from 'react'
import Chatbodynav from './Chatbodynav'
import Chat from './Chat'

import { Box } from '@mui/material'

function Chatbody() {
  return (
    <Box>
      <Chatbodynav/>
      <Chat/>
    </Box>
  )
}

export default Chatbody
